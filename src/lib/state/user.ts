import { writable } from "svelte/store";

import type { Writable } from "svelte/store";
import type { users } from "$lib/schemas/drizzle";

export let user: Writable<
	| (Omit<typeof users.$inferSelect, "createdAt" | "verifiedEmail" | "googleSub"> & {
			createdAt: undefined;
			verifiedEmail: undefined;
			googleSub: undefined;
	  })
	| null
> = writable(null);
