"use client"

import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'

const GithubSignInButton = () => {
    const router = useRouter();

    const handleGithubSignIn = async (e: any) => {
        e.preventDefault();
        try {
            const result = await signIn('github');
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
            onClick={(e) => handleGithubSignIn(e)} >
            <FaGithub style={{ marginRight: '8px' }} />
            Login with Github
        </Button>
    )
}

export default GithubSignInButton