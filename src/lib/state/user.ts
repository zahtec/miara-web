import type { users } from "$lib/schemas/drizzle";

export let user: Omit<
	typeof users.$inferSelect,
	"salt" | "password" | "createdAt" | "verifiedEmail"
> | null = null;

export const setUser = (u: typeof user | undefined) => (user = u ?? null);
