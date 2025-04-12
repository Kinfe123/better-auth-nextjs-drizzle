import { auth } from "./auth";
import { authClient } from "./auth-client";

export const githubSignin = async () => {
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
};

export const googleSignin = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard",
  });
};

export const twitterSignin = async () => {
  await authClient.signIn.social({
    provider: "twitter",
    callbackURL: "/dashboard",
  });
};
