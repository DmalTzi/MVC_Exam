CREATE TABLE `catagory` (
	`name` text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pledge` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`project_id` text NOT NULL,
	`time` integer NOT NULL,
	`amount` integer NOT NULL,
	`reward_tier` text,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`reward_tier`) REFERENCES `reward_tier`(`name`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`target` integer DEFAULT 0,
	`deadline` integer NOT NULL,
	`current_amount` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `project_to_catagory` (
	`project_id` text NOT NULL,
	`catagory_name` text NOT NULL,
	FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`catagory_name`) REFERENCES `catagory`(`name`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `reward_tier` (
	`name` text PRIMARY KEY NOT NULL,
	`sponsorship` integer,
	`quota` integer
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_username_unique` ON `user` (`username`);