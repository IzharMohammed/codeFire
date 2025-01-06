"use client"

import React from 'react'
import { Button } from './ui/button'
import { FaGoogle } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import useCallbackUrl from '@/hooks/useCallBackUrl'
import { useRouter } from 'next/navigation'

const GoogleSignInButton = () => {
    const callbackUrl = useCallbackUrl();
    const router = useRouter();

    const handleGoogleSignIn = async (e: any) => {
        e.preventDefault();
        try {
            const result = await signIn('google');
            console.log('result', result);
                router.push('/');
        } catch (error) {
            console.error('An error occurred during Google sign-in:', error);
        }
    }

    return (
        <Button
            variant="outline"
            className="w-full"
            onClick={(e)=>handleGoogleSignIn(e)}>
            <FaGoogle style={{ marginRight: '8px' }} />
            Login with Google
        </Button>
    )
}

export default GoogleSignInButton