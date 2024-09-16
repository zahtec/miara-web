import type { Config } from "drizzle-kit";

export default {
	schema: "./src/lib/schemas/drizzle.ts",
	out: "./migrations",
	dialect: "sqlite",
	driver: "turso",
	verbose: true,
	strict: true,
	dbCredentials: {
		url: process.env.TURSO_URL!,
		authToken: process.env.TURSO_DB_KEY!
	}
} satisfies Config;
