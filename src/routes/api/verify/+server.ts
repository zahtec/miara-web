import { randomBytes } from "node:crypto";
import { isRedirect } from "@sveltejs/kit";
import { and, eq, gte, lte } from "drizzle-orm";
import { failsafe, sendVerifyEmail } from "$lib/utils/brevo";
import { users, verificationTokens } from "$lib/schemas/drizzle";

import type { Verify } from "$lib/types/api";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals, request }) => {
	try {
		if (await failsafe()) return new Response("An internal email error occured.", { status: 500 });

		const { email }: Verify.Request = await request.json();

		if (!email) return new Response("Bad request.", { status: 400 });

		const user = (
			await locals.db
				.select({
					id: users.id,
					email: users.email,
					verifiedEmail: users.verifiedEmail
				})
				.from(users)
				.where(eq(users.email, email))
		)[0];

		if (!user || user.verifiedEmail) return new Response("Bad request.", { status: 400 });

		const verificationToken = (
			await locals.db
				.select({
					expires: verificationTokens.expires
				})
				.from(verificationTokens)
				.where(
					and(
						and(eq(verificationTokens.userId, user.id), gte(verificationTokens.expires, new Date()))
					)
				)
		)[0];

		if (verificationToken)
			return new Response("You can only send one verficiation email every 30 minutes.", {
				status: 400
			});

		await locals.db
			.delete(verificationTokens)
			.where(
				and(eq(verificationTokens.userId, user.id), lte(verificationTokens.expires, new Date()))
			);

		const token = randomBytes(16).toString("hex");

		await locals.db.insert(verificationTokens).values({
			token,
			userId: user.id
		});

		await sendVerifyEmail(user.email, token);

		return new Response(undefined, { status: 200 });
	} catch (e) {
		if (isRedirect(e)) throw e;

		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
