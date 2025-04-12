import { type Config } from "drizzle-kit";

export default {
  schema: "./lib/schema.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
} satisfies Config;
