import { eq } from "drizzle-orm";
import { redirect } from "@sveltejs/kit";
import { authenticate } from "$lib/utils/auth";
import { services } from "$lib/schemas/drizzle";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, params, cookies }) => {
	const user = await authenticate(locals.session, locals.db, cookies);

	if (!user) throw redirect(301, "/login");

	return locals.db.query.services.findFirst({
		where: eq(services.id, params.id),
		with: {
			applicationSchemas: {
				columns: {
					field: true,
					type: true,
					regex: true,
					min: true,
					max: true,
					required: true
				}
			}
		},
		columns: {
			name: true,
			description: true,
			waitlist: true,
			images: true
		}
	});
};
