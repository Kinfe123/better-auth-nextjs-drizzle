import { ProfileSection } from "@/components/dashboard/profile-section";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="px-4">
      <ProfileSection session={session!} />
    </div>
  );
}
