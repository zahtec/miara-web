import { eq } from "drizzle-orm";
import { sessions } from "$lib/schemas/drizzle";

import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals, cookies }) => {
	const token = cookies.get("token");

	if (!token) return redirect(303, "/");

	cookies.delete("token", { path: "/" });

	await locals.db.delete(sessions).where(eq(sessions.token, token));

	return redirect(303, "/");
};
