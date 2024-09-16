CREATE TABLE `applications` (
	`id` text PRIMARY KEY NOT NULL,
	`service_id` text NOT NULL,
	`user_id` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`data` text NOT NULL,
	FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `login_codes` (
	`code` text(8) PRIMARY KEY NOT NULL,
	`expires` integer NOT NULL,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `saved_services` (
	`user_id` text NOT NULL,
	`service_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `service_application_schemas` (
	`service_id` text PRIMARY KEY NOT NULL,
	`field` text,
	`type` text NOT NULL,
	`regex` text,
	`min` integer,
	`max` integer,
	`required` integer DEFAULT false NOT NULL,
	FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`about` text NOT NULL,
	`email` text,
	`phone` text(13),
	`website` text,
	`address` text,
	`tags` text NOT NULL,
	`requirements` text NOT NULL,
	`waitlist` integer DEFAULT false NOT NULL,
	`images` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`token` text(16) PRIMARY KEY NOT NULL,
	`expires` integer NOT NULL,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text(13),
	`email_notifications` integer DEFAULT true NOT NULL,
	`createdAt` integer NOT NULL,
	`verified_email` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE `verification_tokens` (
	`token` text(16) PRIMARY KEY NOT NULL,
	`expires` integer NOT NULL,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `login_codes_user_id_unique` ON `login_codes` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `verification_tokens_user_id_unique` ON `verification_tokens` (`user_id`);