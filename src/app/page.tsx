"use server"

import { auth } from "@/lib/auth/auth";
import Signinc from "./_components/signinc";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <div className="flex flex-col gap-2 p-10">
      <Signinc />
    </div>
  );
}