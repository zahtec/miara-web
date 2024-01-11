import { eq } from "drizzle-orm";
import { sessions, users } from "$lib/schemas/drizzle";

import type { Cookies } from "@sveltejs/kit";
import type * as schema from "$lib/schemas/drizzle";
import type { LibSQLDatabase } from "drizzle-orm/libsql";

export const authenticate = async (
	session: string | null,
	db: LibSQLDatabase<typeof schema>,
	cookies: Cookies
) => {
	if (!session) return;

	const sessionSelect = await db
		.select({
			expires: sessions.expires,
			userId: sessions.userId
		})
		.from(sessions)
		.where(eq(sessions.token, session));

	if (sessionSelect.length < 1) return;

	if (sessionSelect[0].expires <= new Date()) {
		await db.delete(sessions).where(eq(sessions.token, session));

		cookies.delete("session");

		return;
	}

	return (await db.select().from(users).where(eq(users.id, sessionSelect[0].userId)))[0];
};
