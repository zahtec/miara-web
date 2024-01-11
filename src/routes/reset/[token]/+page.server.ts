import { eq } from "drizzle-orm";
import { redirect } from "@sveltejs/kit";
import { resetTokens } from "$lib/schemas/drizzle";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, params }) => {
	const results = await locals.db
		.select({
			userEmail: resetTokens.userEmail,
			expires: resetTokens.expires
		})
		.from(resetTokens)
		.where(eq(resetTokens.token, params.token));

	if (!results.length) redirect(301, "/");

	if (results[0].expires <= new Date()) {
		await locals.db.delete(resetTokens).where(eq(resetTokens.token, params.token));
		return {
			expired: true
		};
	}

	return { token: params.token };
};
