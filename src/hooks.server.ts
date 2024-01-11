import { drizzle } from "drizzle-orm/d1";
import { binding } from "cf-bindings-proxy";
import * as schema from "$lib/schemas/drizzle";

import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.db = drizzle(event.platform?.env.DB ?? binding("DB"), { schema });
	event.locals.session = event.cookies.get("session") || null;

	return resolve(event);
};
