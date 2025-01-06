"use client"
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
    return (
        <div className='flex gap-4'>
            <div
                className='cursor-pointer'
                onClick={() =>
                    signOut({
                        callbackUrl: '/auth/signIn', // Redirect to your custom signIn page
                    })}
            > <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/122259877?s=400&u=1f49953c4137555e4df73465fcc3ad5bc84375c4&v=4" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default SignOutButton