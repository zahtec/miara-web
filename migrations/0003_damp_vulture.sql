ALTER TABLE `services` ADD `hours` text NOT NULL;--> statement-breakpoint
ALTER TABLE `services` ADD `longitude` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `services` ADD `latitude` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `services` ADD `fee` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `services` ADD `languages` text NOT NULL;--> statement-breakpoint
ALTER TABLE `services` ADD `accessibility` text NOT NULL;--> statement-breakpoint
ALTER TABLE `services` ADD `application_process` text;--> statement-breakpoint
ALTER TABLE `services` DROP COLUMN `waitlist`;