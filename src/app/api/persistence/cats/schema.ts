import {
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from 'drizzle-orm/pg-core';
export const sexEnum = pgEnum('sex', ['female', 'male']);
export const sizeEnum = pgEnum('size', ['small', 'medium', 'big']);
export const ageEnum = pgEnum('age', ['baby', 'adult']);

const cats = pgTable(
    'cats',
    {
        id: serial('id').primaryKey(),
        img: text('img').notNull(),
        name: varchar('name', { length: 16 }),
        age: ageEnum('age').notNull(),
        sex: sexEnum("sex").notNull(),
        size: sizeEnum('size').notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().notNull(),
    },
);

export default cats