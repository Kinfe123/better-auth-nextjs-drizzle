import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import { db } from "./db";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  advanced: {
    ipAddress: {
      ipAddressHeaders: ["x-client-ip", "x-forwarded-for"],
      disableIpTracking: false,
    },
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, token, url }, request) => {
      console.log({ user, token, url });
    },
  },
  plugins: [admin(), nextCookies()],
  databaseHooks: {
    session: {
      create: {
        before: async (session) => {
          console.log("session create", session);
        },
      },
    },
    user: {
      update: {
        before: async (session) => {
          console.log("session update before", session, session);
        },
        after: async (session) => {
          console.log("session update after", session);
        },
      },
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    twitter: {
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    },
  },
});
