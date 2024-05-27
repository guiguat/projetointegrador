import {
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from 'drizzle-orm/pg-core';
import {InferInsertModel, InferSelectModel, sql} from "drizzle-orm";
export const sexEnum = pgEnum('sex', ['FEMALE', 'MALE']);
export const sizeEnum = pgEnum('size', ['SMALL', 'MEDIUM', 'BIG']);
export const ageEnum = pgEnum('age', ['BABY', 'ADULT']);

export const cats = pgTable(
    'cats',
    {
        id: serial('id').primaryKey(),
        img: text('img').notNull(),
        name: varchar('name', { length: 16 }).notNull(),
        age: ageEnum('age').notNull(),
        sex: sexEnum("sex").notNull(),
        size: sizeEnum('size').notNull(),
    },
);
export type Cat = InferSelectModel<typeof cats>
export type NewCat = InferInsertModel<typeof cats>
