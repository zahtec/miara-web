import "unplugin-icons/types/svelte";

import * as schema from "$lib/schemas/drizzle";

import type { Equal } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";

// https://kit.svelte.dev/docs/types#app
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: DrizzleD1Database<typeof schema>;
			session: string | null;
		}
		// interface PageData {}
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
				DB: D1Database;
			};

			context: {
				waitUntil(promise: Promise<any>): void;
			};

			caches: CacheStorage & { default: Cache };
		}
	}
}
