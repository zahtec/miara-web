import { hash } from "argon2";
import { count, eq } from "drizzle-orm";
import { randomBytes } from "node:crypto";
import { isRedirect } from "@sveltejs/kit";
import { failsafe, sendVerifyEmail } from "$lib/utils/brevo";
import { users, verificationTokens } from "$lib/schemas/drizzle";
import { emailRegex, nameRegex, passwordRegex } from "$lib/utils/validation";

import type { Signup } from "$lib/types/api";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals, request }) => {
	try {
		if (await failsafe()) return new Response("An internal email error occured.", { status: 500 });

		const { email, name, password }: Signup.Request = await request.json();

		if (!email || !name || !password) return new Response("Bad request.", { status: 400 });

		if (!nameRegex.test(name) || name.length < 5 || name.length > 30)
			return new Response("Name can not include numbers or special characters.", { status: 400 });

		if (!emailRegex.test(email)) return new Response("Invalid email.", { status: 400 });

		if (!passwordRegex.test(password) || password.length < 8)
			return new Response("Password does not meet security requirements.", { status: 400 });

		const salt = randomBytes(16);

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
					name,
					salt,
					password: (await hash(password, { salt, raw: true })).toString("hex")
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

		return new Response(undefined satisfies Signup.Response, { status: 200 });
	} catch (e) {
		if (isRedirect(e)) throw e;

		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
