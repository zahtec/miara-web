import { Tag } from "../types/enums";
import { relations } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";
import { sqliteTable, text, customType, integer } from "drizzle-orm/sqlite-core";

const enumArray = <T extends Tag>(dbName: string, fieldConfig: T[]) =>
	customType<{ data: T[]; driverData: string; config: T[] }>({
		dataType: () => "text",
		fromDriver: (value) => (value.length ? (value.split(",") as T[]) : []),
		toDriver: (value) => {
			if (value.some((t) => !fieldConfig.includes(t)))
				throw new Error(`Invalid enum value "${value}" for column "${dbName}"!`);

			return value.join(",");
		}
	})(dbName, fieldConfig);

const enumValue = (dbName: string, fieldConfig: string[]) =>
	customType<{ data: string; config: string[] }>({
		dataType: () => "text",
		toDriver: (value) => {
			if (!fieldConfig.includes(value))
				throw new Error(`Invalid enum value "${value}" for column "${dbName}"!`);

			return value;
		}
	})(dbName, fieldConfig);

const array = customType<{ data: string[]; driverData: string }>({
	dataType: () => "text",
	fromDriver: (value) => (value.length ? value.split(",") : []),
	toDriver: (value) => value.join(",")
});

export const users = sqliteTable("users", {
	id: text("id").primaryKey().$defaultFn(createId),
	name: text("name").notNull(),
	email: text("email").unique().notNull(),
	phone: text("phone", { length: 13 }),
	emailNotifications: integer("email_notifications", { mode: "boolean" }).notNull().default(true),
	salt: text("salt", { length: 16 }).notNull(),
	password: text("password").notNull(),
	createdAt: integer("createdAt", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
	verifiedEmail: integer("verified_email", { mode: "boolean" }).notNull().default(false)
});

export const usersRelations = relations(users, ({ many }) => ({
	applications: many(applications),
	savedServices: many(savedServices)
}));

export const services = sqliteTable("services", {
	id: text("id").primaryKey().$defaultFn(createId),
	name: text("name").notNull(),
	description: text("description").notNull(),
	about: text("about").notNull(),
	email: text("email"),
	phone: text("phone", { length: 13 }),
	website: text("website"),
	address: text("address"),
	tags: enumArray("tags", [Tag.Housing, Tag.Showers, Tag.Vouchers]).notNull(),
	requirements: array("requirements").notNull(),
	waitlist: integer("waitlist", { mode: "boolean" }).notNull().default(false),
	images: array("images").notNull()
});

export const servicesRelations = relations(services, ({ many, one }) => ({
	applications: many(applications),
	savedBy: many(savedServices),
	applicationSchemas: many(serviceApplicationSchemas)
}));

export const serviceApplicationSchemas = sqliteTable("service_application_schemas", {
	serviceId: text("service_id")
		.primaryKey()
		.references(() => services.id),
	field: text("field"),
	type: text("type").notNull(),
	regex: text("regex"),
	min: integer("min"),
	max: integer("max"),
	required: integer("required", { mode: "boolean" }).notNull().default(false)
});

export const serviceApplicationSchemasRelations = relations(
	serviceApplicationSchemas,
	({ one }) => ({
		service: one(services, {
			fields: [serviceApplicationSchemas.serviceId],
			references: [services.id]
		})
	})
);

export const savedServices = sqliteTable("saved_services", {
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	serviceId: text("service_id")
		.notNull()
		.references(() => services.id)
});

export const savedServicesRelations = relations(savedServices, ({ one }) => ({
	user: one(users, {
		fields: [savedServices.userId],
		references: [users.id]
	}),
	service: one(services, {
		fields: [savedServices.serviceId],
		references: [services.id]
	})
}));

export const applications = sqliteTable("applications", {
	id: text("id").primaryKey().$defaultFn(createId),
	serviceId: text("service_id")
		.notNull()
		.references(() => services.id),
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	status: enumValue("status", ["pending", "accepted", "rejected", "waitlisted"])
		.notNull()
		.default("pending"),
	data: text("data", { mode: "json" }).notNull()
});

export const applicationsRelations = relations(applications, ({ one }) => ({
	user: one(users, {
		fields: [applications.userId],
		references: [users.id]
	}),
	service: one(services, {
		fields: [applications.serviceId],
		references: [services.id]
	})
}));

export const sessions = sqliteTable("sessions", {
	token: text("token", { length: 16 }).primaryKey(),
	expires: integer("expires", { mode: "timestamp" })
		.notNull()
		.$default(() => new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)),
	userId: text("user_id")
		.notNull()
		.references(() => users.id)
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
	user: one(users, {
		fields: [sessions.userId],
		references: [users.id]
	})
}));

export const verificationTokens = sqliteTable("verification_tokens", {
	token: text("token", { length: 16 }).primaryKey(),
	expires: integer("expires", { mode: "timestamp" })
		.notNull()
		.$default(() => new Date(Date.now() + 1000 * 60 * 60 * 24)),
	userId: text("user_id")
		.unique()
		.notNull()
		.references(() => users.id)
});

export const resetTokens = sqliteTable("reset_tokens", {
	token: text("token", { length: 16 }).primaryKey(),
	expires: integer("expires", { mode: "timestamp" })
		.notNull()
		.$default(() => new Date(Date.now() + 1000 * 60 * 60 * 24)),
	userEmail: text("user_email")
		.unique()
		.notNull()
		.references(() => users.email)
});

export const pseudoResetEntries = sqliteTable("pseudo_reset_entries", {
	expires: integer("expires", { mode: "timestamp" })
		.notNull()
		.$default(() => new Date(Date.now() + 1000 * 60 * 30)),
	email: text("email").unique().notNull()
});
