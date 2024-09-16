import { services } from "$lib/schemas/drizzle";
import type { RequestHandler } from "@sveltejs/kit";

// Create a sitemap for SEO indexing
export const GET: RequestHandler = async ({ locals }) => {
	const servicesList = await locals.db.select().from(services);

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<url>
				<loc>https://www.miara.app</loc>
				<changefreq>monthly</changefreq>
				<priority>1</priority>
			</url>
			<url>
				<loc>https://www.miara.app/discover</loc>
				<changefreq>daily</changefreq>
				<priority>1</priority>
			</url>
			<url>
				<loc>https://www.miara.app/saved</loc>
				<changefreq>monthly</changefreq>
				<priority>1</priority>
			</url>
			<url>
				<loc>https://www.miara.app/login</loc>
				<changefreq>monthly</changefreq>
				<priority>1</priority>
			</url>
			<url>
				<loc>https://miara.app/privacy</loc>
				<changefreq>monthly</changefreq>
				<priority>1</priority>
			</url>
			<url>
				<loc>https://miara.app/terms</loc>
				<changefreq>monthly</changefreq>
				<priority>1</priority>
			</url>
			${servicesList
				.map(
					({ id, name }) => `
			<url>
				<loc>https://www.miara.app/discover/${name.toLowerCase().split(" ").join("-")}-${id}</loc>
				<changefreq>daily</changefreq>
				<priority>1</priority>
			</url>`
				)
				.join("")}
		</urlset>`.trim(),
		{
			status: 200,
			headers: { "Content-Type": "application/xml" }
		}
	);
};
