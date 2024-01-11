import { redirect } from "@sveltejs/kit";
import { authenticate } from "$lib/utils/auth";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, cookies }) => {
	const user = await authenticate(locals.session, locals.db, cookies);

	if (!user) redirect(301, "/login");

	return {
		...user,
		salt: undefined,
		password: undefined,
		createdAt: undefined,
		verifiedEmail: undefined
	};
};
