import "unplugin-icons/types/svelte";

import * as schema from "$lib/schemas/drizzle";

import type { Equal } from "drizzle-orm";
import type { LibSQLDatabase } from "drizzle-orm/libsql";

// https://kit.svelte.dev/docs/types#app
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: LibSQLDatabase<typeof schema>;
			session: string | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}
