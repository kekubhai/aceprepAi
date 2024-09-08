"use client"
/* eslint-disable jsx-a11y/alt-text */
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
  const path=usePathname();
  useEffect(()=>{
    console.log(path)
  })
  return (
    <div className='flex p-3 items-center justify-between bg-white text-black shadow-md'>
      <Image
      src={'logo.svg'}
      alt='logo'
      width={160}
      height={160}
      />
      <ul className=' hidden md:flex gap-6  '>
        <li className={`${path=='/dashboard' && 'text-red-500  text-3xl font-bold'}`}>Dashboard</li>
        <li className={`${path=='/dashboard/questions' && 'text-red-500  text-3xl font-bold'}`}>Questions</li>
        <li className={`${path=='/dashboard/upgrade' && 'text-red-500  text-3xl font-bold'}`}>Upgrade</li>
        <li className={`${path=='/dashboard/working' && 'text-red-500  text-3xl font-bold'}`}>How it works</li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header
