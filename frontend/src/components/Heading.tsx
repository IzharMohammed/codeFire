"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Heading = () => {
    const router = useRouter();
  return (
    <div 
    className='cursor-pointer'
    onClick={() => router.push('/') }
    >code Fire</div>
  )
}

export default Heading;