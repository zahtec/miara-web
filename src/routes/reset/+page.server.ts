import { redirect } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";
import { checkIfAuthenticated } from "$lib/utils/auth";

export const load: PageServerLoad = async ({ locals }) => {
	if (await checkIfAuthenticated(locals.session, locals.db)) return redirect(303, "/account/reset");
};
