import { and, eq } from "drizzle-orm";
import { randomBytes } from "node:crypto";
import { isRedirect } from "@sveltejs/kit";
import { failsafe, sendVerifyEmail } from "$lib/utils/brevo";
import { users, verificationTokens } from "$lib/schemas/drizzle";

import type { Verify } from "$lib/types/api";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals, request }) => {
	try {
		if (await failsafe()) return new Response("An internal email error occured.", { status: 500 });

		const { email }: Verify.Request = await request.json();

		if (!email) return new Response("Bad request.", { status: 400 });

		const userSelect = await locals.db
			.select({
				id: users.id,
				email: users.email,
				verifiedEmail: users.verifiedEmail
			})
			.from(users)
			.where(eq(users.email, email));

		if (!userSelect.length || userSelect[0].verifiedEmail)
			return new Response("Bad request.", { status: 400 });

		const verificationTokensSelect = await locals.db
			.select({
				expires: verificationTokens.expires
			})
			.from(verificationTokens)
			.where(and(eq(verificationTokens.userId, userSelect[0].id)));

		if (verificationTokensSelect.length) {
			if (
				verificationTokensSelect[0].expires.getTime() - 1000 * 60 * 60 * 24 + 1000 * 60 * 30 >=
				Date.now()
			)
				return new Response("You can only send one verficiation email every 30 minutes.", {
					status: 400
				});

			await locals.db
				.delete(verificationTokens)
				.where(and(eq(verificationTokens.userId, userSelect[0].id)));
		}

		const token = randomBytes(16).toString("hex");

		await locals.db.insert(verificationTokens).values({
			token,
			userId: userSelect[0].id
		});

		await sendVerifyEmail(userSelect[0].email, token);

		return new Response(undefined satisfies Verify.Response, { status: 200 });
	} catch (e) {
		if (isRedirect(e)) throw e;

		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
