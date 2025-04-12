"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconH1, IconLoader } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function getUser() {
    const { data: session } = await authClient.getSession();
    // // if (!session?.user) {
    // //   return router.push("/login");
    // // }
    // console.log(session);
    return session;
  }

  useEffect(() => {
    getUser().then((data) => {
      setFullname(data?.user?.name ?? ""); // Use empty string as fallback
      setEmail(data?.user?.email ?? "");
    });
  }, []);

  return !email ? (
    <div className="px-4 lg:px-6 lg:w-1/2 grid gap-4">
      <Skeleton className="w-1/2 h-[20px] rounded-full" />
      <Skeleton className="w-2/3 h-[20px] rounded-full" />
      <Separator className="mb-4" />
      <Skeleton className="w-full h-[20px] rounded-full" />
      <Skeleton className="w-full h-[30px] rounded-full" />
      <Skeleton className="w-full h-[20px] rounded-full" />
      <Skeleton className="w-full h-[30px] rounded-full" />
      <Skeleton className="w-full h-[30px] rounded-full" />
    </div>
  ) : (
    <>
      <div className="px-4 lg:px-6">
        <h1 className="text-lg font-medium">Account Setting</h1>
        <p className="text-sm text-muted-foreground mb-2">
          Edit your account information
        </p>
        <Separator className="mb-4" />
        <form className="lg:w-1/2">
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Full Name</Label>
              <Input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                id="name"
                type="text"
                placeholder="Achour Meguenni"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                type="email"
                placeholder="me@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button disabled={loading} type="submit" className="w-full">
                {loading ? (
                  <IconLoader className="animate-spin" stroke={2} />
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Forgot your password?{" "}
            <a href="/login" className="underline underline-offset-4">
              Reset password
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
