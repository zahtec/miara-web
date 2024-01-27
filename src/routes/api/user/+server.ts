import { eq } from "drizzle-orm";
import { isRedirect } from "@sveltejs/kit";
import { users } from "$lib/schemas/drizzle";
import { authenticate } from "$lib/utils/auth";
import { nameRegex, phoneRegex } from "$lib/utils/validation";

import type { User } from "$lib/types/api";

export const GET = async ({ locals, cookies }) => {
	const user = await authenticate(locals.session, locals.db, cookies);

	if (!user) return new Response("Unauthorized.", { status: 401 });

	return new Response(
		JSON.stringify({
			...user,
			salt: undefined,
			password: undefined,
			createdAt: undefined,
			verifiedEmail: undefined
		}),
		{ status: 200 }
	);
};

export const PATCH = async ({ locals, request, cookies }) => {
	const user = await authenticate(locals.session, locals.db, cookies);

	if (!user) return new Response("Unauthorized.", { status: 401 });

	try {
		let { name, phone, emailNotifications } = (await request.json()) as User.Request;

		name = name?.trim();
		phone = phone?.trim();

		if (name && (!nameRegex.test(name) || name.length < 5 || name.length > 30))
			return new Response("Name can not include numbers or special characters.", { status: 400 });

		if (phone && !phoneRegex.test(phone))
			return new Response("Invalid phone number.", { status: 400 });

		await locals.db
			.update(users)
			.set({
				name: name ?? user.name,
				phone: phone ?? user.phone,
				emailNotifications: emailNotifications ?? user.emailNotifications
			})
			.where(eq(users.id, user.id));

		return new Response(undefined satisfies User.Response, { status: 200 });
	} catch (e) {
		if (isRedirect(e)) throw e;

		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
