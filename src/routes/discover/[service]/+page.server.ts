import { and, count, eq } from "drizzle-orm";
import { redirect } from "@sveltejs/kit";
import { savedServices, services, sessions } from "$lib/schemas/drizzle";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, params }) => {
	const split = params.service.split("-");

	const serviceSelect = await locals.db
		.select()
		.from(services)
		.where(eq(services.id, split[split.length - 1]));

	if (!serviceSelect.length || serviceSelect[0].name.toLowerCase() !== split.slice(0, -1).join(" "))
		redirect(301, "/discover");

	return {
		saved: locals.session
			? (
					await locals.db
						.select({ serviceId: savedServices.serviceId })
						.from(savedServices)
						.where(
							and(
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
								),
								eq(savedServices.serviceId, serviceSelect[0].id)
							)
						)
				).map(({ serviceId }) => serviceId)
			: [],
		...serviceSelect[0]
	};
};
