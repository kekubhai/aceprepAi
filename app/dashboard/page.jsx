import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'

const page = () => {
  return (
    <div className='p-10'>
      <h3 className='font-bold text-2xl'>Hello from dashboard</h3>
      <h1 className='text-slate-500'>Create and Start the Mock Interview</h1>
      <div className='text-opacity-25'>

        <AddNewInterview/>
      </div>
    </div>
  )
}

export default page
