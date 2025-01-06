"use client"

import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

const GithubSignInButton = () => {
    return (
        <Button variant="outline" className="w-full" onClick={() => signIn('github', {  redirectTo: '/' })} >
            <FaGithub style={{ marginRight: '8px' }} />
            Login with Github
        </Button>
    )
}

export default GithubSignInButton