import { eq } from "drizzle-orm";
import { redirect } from "@sveltejs/kit";
import { users, verificationTokens } from "$lib/schemas/drizzle";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, params }) => {
	const results = await locals.db
		.select({
			userId: verificationTokens.userId,
			expires: verificationTokens.expires
		})
		.from(verificationTokens)
		.where(eq(verificationTokens.token, params.token));

	if (!results.length) redirect(301, "/");

	await locals.db.delete(verificationTokens).where(eq(verificationTokens.token, params.token));

	if (results[0].expires <= new Date())
		return {
			expired: true
		};

	return (
		await locals.db
			.update(users)
			.set({ verifiedEmail: true })
			.where(eq(users.id, results[0].userId))
			.returning({
				email: users.email
			})
	)[0];
};
