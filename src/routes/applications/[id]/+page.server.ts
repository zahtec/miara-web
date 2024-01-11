import { eq } from "drizzle-orm";
import { redirect } from "@sveltejs/kit";
import { authenticate } from "$lib/utils/auth";
import { applications } from "$lib/schemas/drizzle";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, params, cookies }) => {
	const user = await authenticate(locals.session, locals.db, cookies);

	if (!user) redirect(301, "/login");

	return locals.db.query.applications.findFirst({
		where: eq(applications.id, params.id),
		with: {
			service: {
				columns: {
					name: true,
					description: true,
					waitlist: true,
					images: true
				}
			}
		},
		columns: {
			status: true,
			data: true
		}
	});
};
