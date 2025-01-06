"use client"

import React from 'react'
import { Button } from './ui/button'
import { FaGoogle } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import useCallbackUrl from '@/hooks/useCallBackUrl'
import Link from 'next/link'

const GoogleSignInButton = () => {
    const callbackUrl = useCallbackUrl();

    return (
        <Button variant="outline" className="w-full" onClick={() => signIn('google', { callbackUrl: '/'})}>
            <FaGoogle style={{ marginRight: '8px' }} />
            Login with Google
        </Button>
        // <Link
    //     href={`/signin?callbackUrl=${callbackUrl}`}
    //     className='bg-sky-400 rounded-md px-4 py-2'
    //   >
    //     signIn
    //   </Link>
    )
}

export default GoogleSignInButton