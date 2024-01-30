import { isRedirect } from "@sveltejs/kit";
import { authenticate } from "$lib/utils/auth";
import { and, eq, like, or, inArray } from "drizzle-orm";
import { savedServices, services } from "$lib/schemas/drizzle";

import type { Save } from "$lib/types/api";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals, url }) => {
	const search = url.searchParams.get("search");
	const offset = url.searchParams.get("offset");
	const ids = url.searchParams.getAll("ids");

	url.searchParams.delete("search");
	url.searchParams.delete("offset");
	url.searchParams.delete("ids");

	try {
		if (search === null || offset === null) return new Response("Bad request.", { status: 400 });

		return new Response(
			JSON.stringify(
				await locals.db
					.select()
					.from(services)
					.where(
						and(
							or(like(services.name, `%${search}%`), like(services.description, `%${search}%`)),
							ids.length > 0 ? inArray(services.id, ids) : undefined
						)
					)
					.offset(parseInt(offset))
					.limit(10)
			),
			{ status: 200 }
		);
	} catch (e) {
		if (isRedirect(e)) throw e;

		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};

export const POST: RequestHandler = async ({ locals, request, cookies }) => {
	const user = await authenticate(locals.session, locals.db, cookies);

	if (!user) return new Response("Unauthorized.", { status: 401 });

	try {
		const { serviceId, saved } = (await request.json()) as Save.Request;

		if (!serviceId || typeof saved !== "boolean")
			return new Response("Bad request.", { status: 400 });

		if (saved)
			await locals.db.insert(savedServices).values({
				userId: user.id,
				serviceId
			});
		else
			await locals.db
				.delete(savedServices)
				.where(and(eq(savedServices.serviceId, serviceId), eq(savedServices.userId, user.id)));

		return new Response(undefined, { status: 201 });
	} catch (e) {
		if (isRedirect(e)) throw e;

		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
