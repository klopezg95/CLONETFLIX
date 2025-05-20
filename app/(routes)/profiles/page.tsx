import { db } from "@/lib/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();
  console.log(session);

  if (!session?.user) {
    redirect("/login");
  }

  const userNetflix = await db.userNetflix.findMany({
    where: {
      userId: session?.user?.id,
    },
  });
  console.log({ userNetflix });
  return (
    <div className="h-full flex flex-col justify-center items-center bg-zinc-900">
      <div>
        <h1 className="text-5xl mb-8">¿Quien eres? Elige tu perfil</h1>
      </div>
    </div>
  );
}
