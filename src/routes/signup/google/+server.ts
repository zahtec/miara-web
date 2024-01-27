import { redirect } from "@sveltejs/kit";
import { randomBytes } from "node:crypto";
import { oauth, authLink } from "$lib/utils/oauth";
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

		return redirect(303, `${authLink}&state=${state}`);
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
					Authorization: `Bearer ${await oauth.getToken(code)}`
				}
			}).then((res) => res.json());

			if (!googleUser.email_verified)
				return redirect(
					307,
					"/login?google_error=Your Google account's email must be verified before you can use it with Miara."
				);

			const userId = (
				await locals.db
					.insert(users)
					.values({
						email: googleUser.email,
						name: googleUser.name,
						password: googleUser.sub,
						salt: randomBytes(16)
					})
					.returning({
						id: users.id
					})
			)[0].id;

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
