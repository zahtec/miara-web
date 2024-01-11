import { hash } from "argon2";
import { randomBytes } from "node:crypto";
import { and, count, eq, lte } from "drizzle-orm";
import { sessions, users } from "$lib/schemas/drizzle";

import type { Login } from "$lib/types/api";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals, request, cookies }) => {
	try {
		if (locals.session)
			return new Response(undefined, { status: 303, headers: { location: "/account" } });

		const { email, password } = (await request.json()) as { email: string; password: string };

		if (!email || !password) return new Response("Bad request.", { status: 400 });

		const userSelect = await locals.db
			.select({
				id: users.id,
				salt: users.salt,
				verifiedEmail: users.verifiedEmail
			})
			.from(users)
			.where(eq(users.email, email));

		if (
			!userSelect.length ||
			(
				await locals.db
					.select({
						count: count()
					})
					.from(users)
					.where(
						and(
							eq(users.id, userSelect[0].id),
							eq(
								users.password,
								(
									await hash(password, { salt: Buffer.from(userSelect[0].salt), raw: true })
								).toString("hex")
							)
						)
					)
			)[0].count < 1
		)
			return new Response("Invalid email or password.", { status: 401 });

		await locals.db
			.delete(sessions)
			.where(and(eq(users.id, userSelect[0].id), lte(sessions.expires, new Date())));

		if (!userSelect[0].verifiedEmail) return new Response("Email not verified.", { status: 400 });

		const token = randomBytes(16).toString("hex");

		await locals.db.insert(sessions).values({
			token,
			userId: userSelect[0].id
		});

		cookies.set("session", token, {
			httpOnly: true,
			sameSite: "strict",
			path: "/",
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
		});

		return new Response(undefined satisfies Login.Response, {
			status: 303,
			headers: { location: "/account" }
		});
	} catch (e) {
		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
