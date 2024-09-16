import { authenticate } from "$lib/utils/auth";

import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	const user = await authenticate(locals.session, locals.db, cookies);

	return {
		year: new Date().getFullYear(),
		user:
			(user && {
				...user,
				createdAt: undefined,
				verifiedEmail: undefined,
				googleSub: undefined
			}) ??
			null
	};
};
