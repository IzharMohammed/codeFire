"use client"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

function Appbar() {
const session = useSession();
    return (
        <div>
            {JSON.stringify(session)}
            <button onClick={() => {
                signIn()
            }}>login</button>
            <button onClick={() => {
                signOut()
            }}>logout</button>
        </div>
    )
}

export default Appbar