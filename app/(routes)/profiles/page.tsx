import { db } from "@/lib/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();
  console.log(session);

  if (!session?.user) {
    redirect("/login");
  }
  return <div>ProfilePage</div>;
}
