import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData').notNull(),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('email').notNull(),
    createdAt: varchar('createdAt')
})

export const UserSubscription = pgTable('userSubscription', {
    id: serial('id').primaryKey(),
    email: varchar('email'),
    username: varchar('username'),
    active: boolean('active'),
    paymentId: varchar('paymentId'),
    join_date: varchar('joinData')
})