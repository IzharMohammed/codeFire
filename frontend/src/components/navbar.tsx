import React from 'react'
import { ToggleTheme } from './theme-toggle'
import SignOutButton from './SignOutButton'
import Heading from './Heading'
import { getServerSession } from 'next-auth';
import { NEXT_AUTH } from '@/lib/auth';
import { signIn } from 'next-auth/react';

 function Navbar() {


  return (
    <div className='border border-gray-600 h-[3rem]'>
      <div className='flex justify-between'>
        <Heading />
        <div className='flex gap-4'>
          <SignOutButton />
          <div>
            <ToggleTheme />
          </div>
          <div>
            {/* <Appbar /> */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar