import { eq } from "drizzle-orm";
import { sessions } from "$lib/schemas/drizzle";

import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals, cookies }) => {
	const token = cookies.get("token");

	if (!token) return new Response(undefined, { status: 301, headers: { location: "/login" } });

	cookies.delete("token");

	await locals.db.delete(sessions).where(eq(sessions.token, token));

	return new Response(undefined, { status: 301, headers: { location: "/login" } });
};
