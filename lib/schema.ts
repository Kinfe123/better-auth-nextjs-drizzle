import { postgresqlTable, text, timestamp, boolean, integer } from "drizzle-orm/postgresql-core";

export const user = postgresqlTable("user", {
					id: text('id').primaryKey(),
					name: undefined.notNull(),
 email: undefined.notNull().unique(),
 emailVerified: undefined.notNull(),
 image: undefined,
 createdAt: undefined.notNull(),
 updatedAt: undefined.notNull(),
 role: undefined,
 banned: undefined,
 banReason: undefined,
 banExpires: undefined
				});

export const session = postgresqlTable("session", {
					id: text('id').primaryKey(),
					expiresAt: undefined.notNull(),
 token: undefined.notNull().unique(),
 createdAt: undefined.notNull(),
 updatedAt: undefined.notNull(),
 ipAddress: undefined,
 userAgent: undefined,
 userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' }),
 impersonatedBy: undefined
				});

export const account = postgresqlTable("account", {
					id: text('id').primaryKey(),
					accountId: undefined.notNull(),
 providerId: undefined.notNull(),
 userId: text('user_id').notNull().references(()=> user.id, { onDelete: 'cascade' }),
 accessToken: undefined,
 refreshToken: undefined,
 idToken: undefined,
 accessTokenExpiresAt: undefined,
 refreshTokenExpiresAt: undefined,
 scope: undefined,
 password: undefined,
 createdAt: undefined.notNull(),
 updatedAt: undefined.notNull()
				});

export const verification = postgresqlTable("verification", {
					id: text('id').primaryKey(),
					identifier: undefined.notNull(),
 value: undefined.notNull(),
 expiresAt: undefined.notNull(),
 createdAt: undefined,
 updatedAt: undefined
				});
