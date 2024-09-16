import { randomBytes } from "node:crypto";
import { isRedirect, redirect } from "@sveltejs/kit";
import { and, count, eq, gt, lte } from "drizzle-orm";
import { loginCodes, sessions, users } from "$lib/schemas/drizzle";

import type { Login } from "$lib/types/api";
import { LoginStage } from "$lib/types/enums";
import type { RequestHandler } from "./$types";
import { failsafe, sendCodeEmail } from "$lib/utils/brevo";

export const POST: RequestHandler = async ({ locals, request, cookies }) => {
	try {
		if (await failsafe()) return new Response("An internal email error occured.", { status: 500 });

		if (
			locals.session &&
			(
				await locals.db
					.select({
						count: count()
					})
					.from(sessions)
					.where(and(eq(sessions.token, locals.session), gt(sessions.expires, new Date())))
			)[0].count > 0
		)
			return redirect(303, "/account");

		const { email, stage, code } = (await request.json()) as Login.Request;

		if (!email) return new Response("Bad request.", { status: 400 });

		const user = (await locals.db.select().from(users).where(eq(users.email, email)))[0];

		if (!user) return new Response("Invalid email.", { status: 401 });

		if (!user.verifiedEmail) return new Response("Email not verified.", { status: 400 });

		if (stage !== LoginStage.CodeRequest && stage !== LoginStage.CodeVerify)
			return new Response("Bad request.", { status: 400 });

		if (user.googleSub) return redirect(303, "/login/google");

		if (stage === LoginStage.CodeRequest) {
			const code = randomBytes(4).toString("hex").toUpperCase();

			await locals.db.insert(loginCodes).values({
				code: code,
				userId: user.id
			});

			await sendCodeEmail(email, code);

			return new Response(undefined, { status: 200 });
		} else {
			if (!code) return new Response("Bad request.", { status: 400 });

			const codeEntry = (
				await locals.db
					.select()
					.from(loginCodes)
					.where(and(eq(loginCodes.userId, user.id), eq(loginCodes.code, code)))
			)[0];

			if (!codeEntry) return new Response("Invalid code.", { status: 400 });

			await locals.db.delete(loginCodes).where(eq(loginCodes.userId, user.id));

			if (codeEntry.expires < new Date()) return new Response("Expired code.", { status: 400 });

			await locals.db
				.delete(sessions)
				.where(and(eq(sessions.userId, user.id), lte(sessions.expires, new Date())));

			const token = randomBytes(16).toString("hex");

			await locals.db.insert(sessions).values({
				token,
				userId: user.id
			});

			cookies.set("session", token, {
				httpOnly: true,
				sameSite: "strict",
				path: "/",
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
			});

			return new Response(
				JSON.stringify({
					...user,
					createdAt: undefined,
					verifiedEmail: undefined,
					googleSub: undefined
				} satisfies Login.Response),
				{ status: 200 }
			);
		}
	} catch (e) {
		if (isRedirect(e)) throw e;

		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
