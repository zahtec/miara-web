import { applications, serviceApplicationSchemas } from "$lib/schemas/drizzle";
import type { Application } from "$lib/types/api";
import { authenticate } from "$lib/utils/auth";
import { eq } from "drizzle-orm";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals, request, cookies }) => {
	const user = await authenticate(locals.session, locals.db, cookies);

	if (!user) return new Response("Unauthorized.", { status: 401 });

	try {
		const { data, serviceId } = (await request.json()) as Application.Request;

		if (!data || !serviceId) return new Response("Bad request.", { status: 400 });

		const schemaSelect = await locals.db
			.select({
				field: serviceApplicationSchemas.field,
				type: serviceApplicationSchemas.type,
				regex: serviceApplicationSchemas.regex,
				min: serviceApplicationSchemas.min,
				max: serviceApplicationSchemas.max,
				required: serviceApplicationSchemas.required
			})
			.from(serviceApplicationSchemas)
			.where(eq(serviceApplicationSchemas.serviceId, serviceId));

		if (!schemaSelect.length) return new Response("Bad request.", { status: 400 });

		const schema = Object.fromEntries(
			schemaSelect.map((row) => [row.field, { ...row, field: undefined }])
		);

		const coveredFields: string[] = [];

		if (
			Object.entries(data).some(([key, value]) => {
				const field = schema[key];

				if (!field) return true;

				coveredFields.push(key);

				return (
					typeof value !== field.type ||
					(field.regex && !new RegExp(field.regex).test(String(value))) ||
					(field.min &&
						((typeof value === "string" && value.length < field.min) ||
							(typeof value === "number" && value < field.min))) ||
					(field.max &&
						((typeof value === "string" && value.length > field.max) ||
							(typeof value === "number" && value > field.max))) ||
					(field.required && !value)
				);
			}) ||
			Object.keys(schema).some((field) => !coveredFields.includes(field) && schema[field].required)
		)
			return new Response("Application data did not adhere to the provided service's schema.", {
				status: 400
			});

		return new Response(
			JSON.stringify(
				await locals.db
					.insert(applications)
					.values({
						serviceId,
						userId: user.id,
						data
					})
					.returning({
						id: applications.id
					})
			),
			{ status: 201 }
		);
	} catch (e) {
		console.error(e);

		return new Response("Bad request.", { status: 400 });
	}
};
