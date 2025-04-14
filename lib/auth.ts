import { APIError, betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin, createAuthMiddleware } from "better-auth/plugins";
import { db } from "./db";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  hooks: {
    before: createAuthMiddleware(async (ctx) => {}),
  },
  account: {},
  plugins: [admin(), nextCookies()],
  databaseHooks: {
    session: {
      create: {
        before: async (session) => {
          console.log("session create", session);
        },
      },
    },
    hooks: {
      before: [
        {
          matcher(ctx) {
            return ctx.path.startsWith("/api/auth/sign-in/social");
          },
          handler: async (ctx) => {
            console.log({ ctx });
            // Get the OAuth data from the context
            const { code, state } = ctx.query;

            // You can access the provider info
            const provider = ctx.context.provider;
            console.log({ provider });
            // You can access the user info before it's created
            const userInfo = await provider.getUserInfo(ctx.context.tokens);
            console.log({ userInfo });
            // Check for existing Discord ID
            if (provider.id === "discord") {
              const existingUser =
                await ctx.context.internalAdapter.findOAuthUser(
                  userInfo.email,
                  userInfo.id,
                  "discord",
                );

              if (existingUser) {
                // Handle existing user case
                // You can modify the response or redirect
                return ctx.json({
                  user: existingUser.user,
                  isExisting: true,
                });
              }
            }

            // Continue with normal flow
            return ctx.next();
          },
        },
      ],
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
