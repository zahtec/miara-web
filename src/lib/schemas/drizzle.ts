import {
	Tag,
	Accessibility,
	Language,
	Accreditation,
	Provider,
	Day,
	Requirement,
	ApplicationProcess,
	Operator
} from "../types/enums";
import { relations } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";
import { sqliteTable, text, customType, integer } from "drizzle-orm/sqlite-core";

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
	googleSub: text("google_sub").unique(),
	emailNotifications: integer("email_notifications", { mode: "boolean" }).notNull().default(true),
	createdAt: integer("createdAt", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
	verifiedEmail: integer("verified_email", { mode: "boolean" }).notNull().default(false)
});

export const usersRelations = relations(users, ({ many }) => ({
	savedServices: many(savedServices)
}));

export const services = sqliteTable("services", {
	id: text("id").primaryKey().$defaultFn(createId),
	name: text("name").notNull(),
	previewDescription: text("previewDescription").notNull(),
	description: text("description").notNull(),
	provider: text("provider").notNull().$type<Provider>(),
	email: text("email"),
	website: text("website"),
	tags: text("tags", { mode: "json" }).notNull().$type<Tag[]>().default([]),
	fee: text("fee").notNull().default("Free"),
	displayRequirements: text("specificRequirements", { mode: "json" }).$type<string[]>().default([]),
	minAge: integer("minAge").notNull().default(-1),
	maxAge: integer("maxAge").notNull().default(-1),
	minIncome: integer("minIncome").notNull().default(-1),
	maxIncome: integer("maxIncome").notNull().default(-1),
	languages: text("languages", { mode: "json" })
		.notNull()
		.$type<Language[]>()
		.default([Language.English, Language.Spanish]),
	accessibility: text("accessibility").notNull().$type<Accessibility>().default(Accessibility.Full),
	applicationProcess: text("applicationProcess", { mode: "json" })
		.notNull()
		.$type<ApplicationProcess[]>()
		.default([]),
	applicationLink: text("application_link"),
	accreditations: text("accreditations", { mode: "json" })
		.notNull()
		.$type<Accreditation[]>()
		.default([]),
	possibleUnits: integer("possible_units").notNull().default(-1),
	images: array("images").notNull(),
	lastUpdated: integer("lastUpdated", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date())
		.$onUpdateFn(() => new Date())
});

export const servicesRelations = relations(services, ({ many }) => ({
	savedBy: many(savedServices),
	locations: many(locations),
	requirements: many(requirements)
}));

export const requirements = sqliteTable("requirements", {
	id: text("id").primaryKey().$defaultFn(createId),
	serviceId: text("service_id").references(() => services.id),
	operator: text("operator").notNull().$type<Operator>(),
	requirements: text("requirements", { mode: "json" }).notNull().$type<Requirement[]>()
});

export const requirementsRelations = relations(requirements, ({ one }) => ({
	service: one(services, {
		fields: [requirements.serviceId],
		references: [services.id]
	})
}));

export const locations = sqliteTable("locations", {
	id: text("id").primaryKey().$defaultFn(createId),
	serviceId: text("service_id")
		.notNull()
		.references(() => services.id),
	name: text("name").notNull(),
	phone: text("phone", { length: 13 }),
	address: text("address"),
	latitude: integer("latitude").notNull(),
	longitude: integer("longitude").notNull()
});

export const locationsRelations = relations(locations, ({ one, many }) => ({
	hours: many(hours),
	service: one(services, {
		fields: [locations.serviceId],
		references: [services.id]
	})
}));

export const hours = sqliteTable("locations", {
	id: text("id").primaryKey().$defaultFn(createId),
	locationId: text("location_id").references(() => locations.id),
	day: text("day", { mode: "json" }).notNull().$type<Day>(),
	open: integer("open").notNull(),
	close: integer("close").notNull()
});

export const hoursRelations = relations(hours, ({ one }) => ({
	location: one(locations, {
		fields: [hours.locationId],
		references: [locations.id]
	})
}));

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
		.$default(() => new Date(Date.now() + 1000 * 60 * 30)),
	userId: text("user_id")
		.unique()
		.notNull()
		.references(() => users.id)
});

export const loginCodes = sqliteTable("login_codes", {
	code: text("code", { length: 8 }).primaryKey(),
	expires: integer("expires", { mode: "timestamp" })
		.notNull()
		.$default(() => new Date(Date.now() + 1000 * 60 * 30)),
	userId: text("user_id")
		.notNull()
		.references(() => users.id)
});
