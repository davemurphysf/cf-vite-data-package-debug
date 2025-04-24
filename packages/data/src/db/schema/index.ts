import { sql } from "drizzle-orm";
import {
  boolean,
  foreignKey,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { authUsers } from "drizzle-orm/supabase";

export const testTable = pgTable(
  "test_table",
  {
    id: uuid().primaryKey().notNull(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    })
      .default(sql`(now() AT TIME ZONE 'utc'::text)`)
      .notNull(),
    updatedAt: timestamp("updated_at", {
      withTimezone: true,
      mode: "string",
    })
      .default(sql`(now() AT TIME ZONE 'utc'::text)`)
      .notNull(),
    onboarded: boolean().default(false).notNull(),
    acceptedTerms: boolean("accepted_terms").default(false).notNull(),
    imageUrl: text("image_url"),
    timeZone: text("time_zone"),
    language: text(),
    firstName: text("first_name"),
    lastName: text("last_name"),
  },
  (table) => [
    foreignKey({
      columns: [table.id],
      foreignColumns: [authUsers.id],
      name: "user_profiles_id_fkey",
    }).onDelete("cascade"),
  ]
);
