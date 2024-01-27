import { writable } from "svelte/store";

import type { Writable } from "svelte/store";
import type { users } from "$lib/schemas/drizzle";

export let user: Writable<
	| (Omit<typeof users.$inferSelect, "salt" | "password" | "createdAt" | "verifiedEmail"> & {
			salt: undefined;
			password: undefined;
			createdAt: undefined;
			verifiedEmail: undefined;
	  })
	| null
> = writable(null);
