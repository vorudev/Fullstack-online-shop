
import { text, pgTable, timestamp, uuid, boolean, numeric, real, varchar, pgEnum} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum('role', ['admin', 'user']);

export const products = pgTable("products", {
id: uuid("id").primaryKey().defaultRandom(),
price: real("price").notNull(),
slug: varchar("slug", { length: 255 }).notNull().unique(),
title: text("title").notNull(),
description: text("description").notNull(),
image: text("image").notNull(),
bgImage: text("bg_image").notNull(),
createdAt: timestamp("created_at").defaultNow(),
updatedAt: timestamp("updated_at").defaultNow(),
});
export const user = pgTable("user", {
                    id: text('id').primaryKey(),
                    name: text('name').notNull(),
                     role: roleEnum('role').default('user').notNull(), // добавляем это поле
 email: text('email').notNull().unique(),
 emailVerified: boolean('email_verified').$defaultFn(() => false).notNull(),
 image: text('image'),
 createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull()
                });


export const session = pgTable("session", {
                    id: text('id').primaryKey(),
                    expiresAt: timestamp('expires_at').notNull(),
 token: text('token').notNull().unique(),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull(),
 ipAddress: text('ip_address'),
 userAgent: text('user_agent'),
 userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' })
                });

export const account = pgTable("account", {
                    id: text('id').primaryKey(),
                    accountId: text('account_id').notNull(),
 providerId: text('provider_id').notNull(),
 userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' }),
 accessToken: text('access_token'),
 refreshToken: text('refresh_token'),
 idToken: text('id_token'),
 accessTokenExpiresAt: timestamp('access_token_expires_at'),
 refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
 scope: text('scope'),
 password: text('password'),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull()
                });

export const verification = pgTable("verification", {
                    id: text('id').primaryKey(),
                    identifier: text('identifier').notNull(),
 value: text('value').notNull(),
 expiresAt: timestamp('expires_at').notNull(),
 createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date())
                });
                export const reviews = pgTable("reviews", {
  id: uuid("id").primaryKey().defaultRandom(),
  product_id: uuid("product_id").references(() => products.id, { onDelete: 'cascade' }).notNull(),
  user_id: text("user_id").references(() => user.id, { onDelete: 'cascade' }),
  rating: real("rating").notNull(), // или можешь использовать integer, если рейтинг только целые числа
  comment: text("comment"),
  author_name: varchar("author_name", { length: 255 }), // для анонимных отзывов
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

                export const schema = {
                    user,
                    session,
                    account,
                    verification, 
                    products, 
                    reviews
                }

export type Product = typeof products.$inferSelect 
export type Review = typeof reviews.$inferSelect 
export type User = typeof user.$inferSelect