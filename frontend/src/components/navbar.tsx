import React from 'react'
import { ToggleTheme } from './theme-toggle'

function Navbar() {
  return (
    <div className='border border-gray-600 h-[3rem]'>
        code Fire
        <ToggleTheme />
    </div>
  )
}

export default Navbar