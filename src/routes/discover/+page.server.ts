import { eq } from "drizzle-orm";
import { savedServices, sessions } from "$lib/schemas/drizzle";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	return {
		saved: locals.session
			? (
					await locals.db
						.select({ serviceId: savedServices.serviceId })
						.from(savedServices)
						.where(
							eq(
								savedServices.userId,
								(
									await locals.db
										.select({
											userId: sessions.userId
										})
										.from(sessions)
										.where(eq(sessions.token, locals.session))
								)[0].userId
							)
						)
				).map(({ serviceId }) => serviceId)
			: []
	};
};
