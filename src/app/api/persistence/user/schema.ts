import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
} from 'drizzle-orm/pg-core';

export const users = pgTable(
    'users',
    {
        id: serial('id').primaryKey(),
        username: text('username').notNull(),
        password: text('password').notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().notNull(),
    },
    (users) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(users.username),
        };
    },
);