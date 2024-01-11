import { eq } from "drizzle-orm";
import { redirect } from "@sveltejs/kit";
import { services } from "$lib/schemas/drizzle";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, params }) => {
	const split = params.service.split("-");

	const serviceSelect = await locals.db
		.select()
		.from(services)
		.where(eq(services.id, split[split.length - 1]));

	if (!serviceSelect.length || serviceSelect[0].name.toLowerCase() !== split.slice(0, -1).join(" "))
		redirect(301, "/discover");

	return serviceSelect[0];
};
