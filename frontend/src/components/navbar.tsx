import React from 'react'
import { ToggleTheme } from './theme-toggle'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Appbar from './appbar'

function Navbar() {
  return (
    <div className='border border-gray-600 h-[3rem]'>
      <div className='flex justify-between'>
        <div>code Fire</div>
        <div>
          <div className='flex gap-4'>
            <div className='cursor-pointer'> <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/122259877?s=400&u=1f49953c4137555e4df73465fcc3ad5bc84375c4&v=4" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar></div>
            <div>
              <ToggleTheme />
            </div>
            <div>
              {/* <Appbar /> */}
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar