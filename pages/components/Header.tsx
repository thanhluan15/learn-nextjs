import React from 'react'
import {} from "next-auth"

function Header() {
  return (
    <div className='w-full flex h-[600px] justify-center items-center gap-2'>
      <button className='bg-green-600 w-20 h-10 rounded-sm text-white'>Login</button>
      <button className='bg-green-600 w-20 h-10 rounded-sm text-white'>Sign up</button>
    </div>
  )
}

export default Header