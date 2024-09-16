import { redirect } from "@sveltejs/kit";
import { randomBytes } from "node:crypto";
import { and, eq, lte } from "drizzle-orm";
import { loginOauth, loginAuthLink } from "$lib/utils/oauth";
import { checkIfAuthenticated } from "$lib/utils/auth";
import { sessions, users } from "$lib/schemas/drizzle";

import type { RequestHandler } from "./$types";
import type { GoogleUser } from "$lib/types/oauth";

export const GET: RequestHandler = async ({ locals, url, cookies }) => {
	if (await checkIfAuthenticated(locals.session, locals.db)) return redirect(303, "/account");

	const code = url.searchParams.get("code");

	if (!code) {
		const state = randomBytes(16).toString("hex");

		cookies.set("state", state, {
			httpOnly: true,
			sameSite: "strict",
			path: "/",
			expires: new Date(Date.now() + 1000 * 60 * 10)
		});

		return redirect(303, `${loginAuthLink}&state=${state}`);
	} else {
		try {
			if (url.searchParams.get("state") !== cookies.get("state")) {
				cookies.delete("state", { path: "/" });

				return redirect(
					307,
					"/login?google_error=An error occurred while authenticating with Google."
				);
			}

			cookies.delete("state", { path: "/" });

			const googleUser: GoogleUser = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo`, {
				headers: {
					Authorization: `Bearer ${await loginOauth.getToken(code)}`
				}
			}).then((res) => res.json());

			const userId = (
				await locals.db
					.select({
						id: users.id
					})
					.from(users)
					.where(and(eq(users.googleSub, googleUser.sub)))
			)[0].id;

			if (!userId)
				return redirect(
					307,
					"/login?google_error=No Miara account is associated with this Google account."
				);

			await locals.db
				.delete(sessions)
				.where(and(eq(sessions.userId, userId), lte(sessions.expires, new Date())));

			const token = randomBytes(16).toString("hex");

			await locals.db.insert(sessions).values({
				token,
				userId
			});

			cookies.set("session", token, {
				httpOnly: true,
				sameSite: "strict",
				path: "/",
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
			});

			return redirect(303, "/account");
		} catch {
			return redirect(
				307,
				"/login?google_error=An error occurred while authenticating with Google."
			);
		}
	}
};
