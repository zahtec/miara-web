import { hash } from "argon2";
import { redirect } from "@sveltejs/kit";
import { randomBytes } from "node:crypto";
import { and, count, eq, gt, lte } from "drizzle-orm";
import { sessions, users } from "$lib/schemas/drizzle";

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
			.where(and(eq(sessions.userId, userSelect[0].id), lte(sessions.expires, new Date())));

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

		return redirect(303, "/account");
	} catch (e) {
		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
