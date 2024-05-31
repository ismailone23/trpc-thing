'use client'

import { api } from "@/trpc/server";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateUser() {
    const [value, setValue] = useState<string>('')
    const router = useRouter()

    const createUser = api.post.update.useMutation({
        onSettled: () => {
            setValue("")
            router.refresh();
        }
    })

    return (
        <form onSubmit={async (e) => {
            e.preventDefault()
            createUser.mutate({ name: value, userId: "k2f-pw1" })

        }} className=" flex items-center flex-col gap-2">
            <input onChange={e => setValue(e.currentTarget.value)} value={value}
                className="outline-none border border-blue-300 p-1 w-40 h-7 rounded-sm" type="text" />
            <button type="submit" className="outline-none bg-purple-500 w-20 py-1 text-sm rounded text-white border-none">
                add user
            </button>
        </form>
    )
}
