import React from 'react'
import Header from './_components/Header'

const DashBoardLaoyout = ({children}) => {
  return (
    <div className='justify-center'>
      <Header/>
      <div className='mx-5 md:mx-20 lg:mx-32'>
      {children}
      </div>
     
    </div>
  )
}

export default DashBoardLaoyout
