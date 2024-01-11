import type { Config } from "drizzle-kit";

export default {
	schema: "./src/lib/schemas/drizzle.ts",
	out: "./migrations",
	driver: "d1",
	verbose: true,
	strict: true
} satisfies Config;
