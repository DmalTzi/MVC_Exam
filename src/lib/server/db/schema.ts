import { time } from 'console';
import { relations } from 'drizzle-orm';
import { sqliteTable, integer, text, primaryKey } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey({autoIncrement: true}),
	username: text('username').notNull().unique(),
	password: text('password').notNull(),
});

export const project = sqliteTable('project', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	target: integer('target').default(0),
	deadline: integer('deadline', {mode: "timestamp"}).notNull(),
	current_amount: integer('current_amount').default(0).notNull(),
});

export const reward_tier = sqliteTable('reward_tier', {
	name: text('name').primaryKey(),
	sponsorship: integer('sponsorship').notNull(),
	quota: integer('quota'),
});

export const pledge = sqliteTable('pledge', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	user_id: integer('user_id').notNull().references(() => user.id),
	project_id: text('project_id').notNull().references(() => project.id),
	time: integer('time', {mode: "timestamp"}).notNull(),
	amount: integer('amount').notNull(),
	reward_tier: text('reward_tier').references(() => reward_tier.name),
});

export const catagory = sqliteTable('catagory', {
	name: text('name').primaryKey(),
});

export const projectToCatagory = sqliteTable('project_to_catagory', {
  project_id: text('project_id').notNull().references(() => project.id),
  catagory_name: text('catagory_name').notNull().references(() => catagory.name),
});