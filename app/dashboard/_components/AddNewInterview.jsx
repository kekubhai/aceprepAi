"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { CrossCircledIcon, EyeClosedIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
  

const AddNewInterview = () => {
    const[openDialog,setDialog]=useState(false)
    return (
        <div>
            <div className='p-10 border rounded-lg bg-slate-100 hover:scale-105 hover:shadow-md cursor-pointer transition-all' 
            onClick={()=>setDialog(true)}
            >
            


                <h3 className='text-bold p-2 text-3xl text-black'>+ Add new</h3>
            </div>

            <Dialog open={openDialog}>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent className='text-2xl'>
    <DialogHeader>
      <DialogTitle>Tell Us more about your job interviewing</DialogTitle>
      <DialogDescription>
<div>
    <h2></h2>
    <h2>Add description aout your job</h2>
</div>
              
            <Button>Start Interview</Button>
            <Button   onClick={()=>setDialog(false)} className='bg-red-500 p-2 gap-3'>Cancel </Button>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


        </div>
    )
}

export default AddNewInterview
