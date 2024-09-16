import { dev } from "$app/environment";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "$lib/schemas/drizzle";
import { TURSO_DB_KEY, TURSO_URL } from "$env/static/private";

import type { Handle } from "@sveltejs/kit";

const db = drizzle(
	createClient({
		url: dev ? "http://127.0.0.1:8080" : TURSO_URL,
		authToken: dev ? undefined : TURSO_DB_KEY
	}),
	{ schema }
);

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.db = db;
	event.locals.session = event.cookies.get("session") || null;

	return resolve(event);
};
