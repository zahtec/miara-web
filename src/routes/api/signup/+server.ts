import { count, eq } from "drizzle-orm";
import { randomBytes } from "node:crypto";
import { isRedirect } from "@sveltejs/kit";
import { failsafe, sendVerifyEmail } from "$lib/utils/brevo";
import { emailRegex, nameRegex } from "$lib/utils/validation";
import { users, verificationTokens } from "$lib/schemas/drizzle";

import type { Signup } from "$lib/types/api";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals, request }) => {
	try {
		if (await failsafe()) return new Response("An internal email error occured.", { status: 500 });

		const { email, name }: Signup.Request = await request.json();

		if (!email || !name) return new Response("Bad request.", { status: 400 });

		if (!nameRegex.test(name) || name.length < 5 || name.length > 30)
			return new Response("Name can not include numbers or special characters.", { status: 400 });

		if (!emailRegex.test(email)) return new Response("Invalid email.", { status: 400 });

		if (
			(
				await locals.db
					.select({
						count: count()
					})
					.from(users)
					.where(eq(users.email, email))
			)[0].count > 0
		)
			return new Response("Email already in use.", { status: 400 });

		const user = (
			await locals.db
				.insert(users)
				.values({
					email,
					name
				})
				.returning({
					id: users.id,
					email: users.email
				})
		)[0];

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
