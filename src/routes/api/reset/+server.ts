import { hash } from "argon2";
import { eq } from "drizzle-orm";
import { dev } from "$app/environment";
import { randomBytes } from "node:crypto";
import { failsafe } from "$lib/utils/brevo";
import { authenticate } from "$lib/utils/auth";
import { BREVO_API_KEY } from "$env/static/private";
import { resetTokens, sessions, users } from "$lib/schemas/drizzle";
import { emailRegex, passwordRegex } from "$lib/utils/validation";

import type { RequestHandler } from "./$types";
import type { SendSmtpEmail } from "sib-api-v3-typescript";
import type {
	AuthedPasswordResetRequest,
	PasswordReset,
	UnauthedPasswordResetRequest
} from "$lib/types/api";

export const PATCH: RequestHandler = async ({ locals, request }) => {
	try {
		const { token, password } = (await request.json()) as PasswordReset.Request;

		if (!token || !password) return new Response("Bad request.", { status: 400 });

		if (!passwordRegex.test(password) || password.length < 8)
			return new Response("Password does not meet security requirements.", { status: 400 });

		const resetTokenSelect = await locals.db
			.select({ expires: resetTokens.expires, userEmail: resetTokens.userEmail })
			.from(resetTokens)
			.where(eq(resetTokens.token, token));

		if (!resetTokenSelect.length) return new Response("Invalid token.", { status: 400 });

		if (resetTokenSelect[0].expires <= new Date()) {
			await locals.db.delete(resetTokens).where(eq(resetTokens.token, token));

			return new Response("Expired token.", { status: 400 });
		}

		const user = (
			await locals.db
				.select({
					id: users.id,
					salt: users.salt,
					password: users.password
				})
				.from(users)
				.where(eq(users.email, resetTokenSelect[0].userEmail))
		)[0];

		if (
			user.password ===
			(await hash(password, { salt: Buffer.from(user.salt), raw: true })).toString("hex")
		)
			return new Response("Password cannot be the same as the previous one.", { status: 400 });

		await locals.db.delete(resetTokens).where(eq(resetTokens.token, token));

		const salt = randomBytes(16);

		await locals.db.update(users).set({
			salt: salt.toString("hex"),
			password: (await hash(password, { salt, raw: true })).toString("hex")
		});

		await locals.db.delete(sessions).where(eq(sessions.userId, user.id));

		return new Response(undefined, { status: 200 });
	} catch (e) {
		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};

export const POST = async ({ locals, request, cookies }) => {
	const user = await authenticate(locals.session, locals.db, cookies);

	try {
		if (user) {
			const { password, newPassword } =
				(await request.json()) as AuthedPasswordResetRequest.Request;

			if (!password || !newPassword) return new Response("Bad request.", { status: 400 });

			if (!passwordRegex.test(newPassword) || newPassword.length < 8)
				return new Response("Password does not meet security requirements.", { status: 400 });

			if (
				password !==
				(await hash(user.password, { salt: Buffer.from(user.salt), raw: true })).toString("hex")
			)
				return new Response("Incorrect password.", { status: 401 });

			const salt = randomBytes(16);

			await locals.db.update(users).set({
				salt: salt.toString("hex"),
				password: (await hash(password, { salt, raw: true })).toString("hex")
			});

			await locals.db.delete(sessions).where(eq(sessions.userId, user.id));

			return new Response(undefined, { status: 303, headers: { location: "/login" } });
		} else {
			if (await failsafe())
				return new Response("An internal email error occured.", { status: 500 });

			const { email }: UnauthedPasswordResetRequest.Request = await request.json();

			if (!email) return new Response("Bad request.", { status: 400 });

			if (!emailRegex.test(email)) return new Response("Invalid email.", { status: 400 });

			const resetTokensSelect = await locals.db
				.select({ expires: resetTokens.expires })
				.from(resetTokens)
				.where(eq(resetTokens.userEmail, email));

			if (
				resetTokensSelect.length &&
				resetTokensSelect[0].expires.getTime() - 1000 * 60 * 60 * 24 + 1000 * 60 * 30 >= Date.now()
			)
				return new Response("You can only request one password reset every 30 minutes.", {
					status: 400
				});

			await locals.db.delete(resetTokens).where(eq(resetTokens.userEmail, email));

			const token = randomBytes(16).toString("hex");

			await locals.db.insert(resetTokens).values({
				token,
				userEmail: email
			});

			await fetch("https://api.brevo.com/v3/smtp/email", {
				method: "POST",
				headers: {
					"api-key": BREVO_API_KEY
				},
				body: JSON.stringify({
					to: [
						{
							email
						}
					],
					templateId: 2,
					params: {
						url: dev ? `http://localhost:5173/reset/${token}` : `https://miara.app/reset/${token}`
					}
				} satisfies SendSmtpEmail)
			});

			return new Response(undefined, { status: 200 });
		}
	} catch (e) {
		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
