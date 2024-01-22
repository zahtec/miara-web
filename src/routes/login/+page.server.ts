import { redirect } from "@sveltejs/kit";
import { sessions } from "$lib/schemas/drizzle";
import { and, count, eq, gt } from "drizzle-orm";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
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
};
