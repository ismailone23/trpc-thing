"use server"
import Link from "next/link";
import { getServerAuthSession } from "@/server/auth/auth";
import ShowPost from "./_components/show-post";

export default async function Home() {
  const session = await getServerAuthSession();
  return (
    <div className="flex flex-col gap-2 p-10">
      {
        session?.user ?
          <>
            <Link className="text-white w-24 text-center bg-blue-600 py-3 outline-none border-none rounded" href={'/api/auth/signout'}>Signout</Link>
            <p>{session.user.name}</p>
          </>
          :
          <Link className="text-white w-24 flex items-center justify-center bg-red-600 h-10 outline-none border-none rounded" href={'/api/auth/signin'}>Signin</Link>
      }
      <ShowPost />
    </div>
  );
}