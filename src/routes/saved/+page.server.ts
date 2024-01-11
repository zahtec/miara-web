import { inArray } from "drizzle-orm";
import { services } from "$lib/schemas/drizzle";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies, locals }) => {
	const saved = cookies.get("saved");

	return {
		saved: saved
			? await locals.db
					.select()
					.from(services)
					.where(inArray(services.id, saved.split(",")))
			: []
	};
};
