'use client'

import { api } from '@/trpc/server'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function ShowPost() {
    const get = api.post.get.useQuery()
    const router = useRouter()
    const updateuser = api.post.update.useMutation({
        onSettled: () => {
            router.refresh();
            get.refetch();
        }
    })

    return (
        <>
            <button className='w-24 h-10 bg-purple-600 text-white rounded-md ' onClick={() => updateuser.mutate({ userId: String(Math.random() * 1000), name: "ismail" })}>
                update
            </button>
        </>
    )
}
