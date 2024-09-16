import { eq } from "drizzle-orm";
import { sessions } from "$lib/schemas/drizzle";

import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals, cookies }) => {
	if (!locals.session) return redirect(303, "/");

	cookies.delete("session", { path: "/" });

	await locals.db.delete(sessions).where(eq(sessions.token, locals.session));

	return redirect(303, "/");
};

// TODO: Create account page
// TODO: Update discover page to be useful
// TODO: Add more services
