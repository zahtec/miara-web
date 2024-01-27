import { hash } from "argon2";
import { randomBytes } from "node:crypto";
import { isRedirect, redirect } from "@sveltejs/kit";
import { and, count, eq, gt, lte } from "drizzle-orm";
import { sessions, users } from "$lib/schemas/drizzle";

import type { Login } from "$lib/types/api";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals, request, cookies }) => {
	try {
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

		const { email, password } = (await request.json()) as { email: string; password: string };

		if (!email || !password) return new Response("Bad request.", { status: 400 });

		const user = (await locals.db.select().from(users).where(eq(users.email, email)))[0];

		if (
			!user ||
			(
				await locals.db
					.select({
						count: count()
					})
					.from(users)
					.where(
						and(
							eq(users.id, user.id),
							eq(
								users.password,
								(await hash(password, { salt: user.salt, raw: true })).toString("hex")
							)
						)
					)
			)[0].count < 1
		)
			return new Response("Invalid email or password.", { status: 401 });

		await locals.db
			.delete(sessions)
			.where(and(eq(sessions.userId, user.id), lte(sessions.expires, new Date())));

		if (!user.verifiedEmail) return new Response("Email not verified.", { status: 400 });

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
				salt: undefined,
				password: undefined,
				createdAt: undefined,
				verifiedEmail: undefined
			} satisfies Login.Response),
			{ status: 200 }
		);
	} catch (e) {
		if (isRedirect(e)) throw e;

		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
