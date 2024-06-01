'use client'
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";

export default function Signinc() {
    const { data: session } = useSession();
    return (
        <>
            {
                session?.user ?
                    <>
                        <button className='w-28 h-8 bg-red-500 rounded text-white' onClick={() => signOut()}>signout</button>
                        <p>{session.user.name}</p>
                    </>
                    :
                    <button className='w-28 h-8 bg-purple-500 rounded text-white' onClick={() => signIn()}>signin</button>
            }
        </>
    )
}
