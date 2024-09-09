/* eslint-disable react/no-unescaped-entities */
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
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAiModels'
import { Loader, LoaderCircle } from 'lucide-react'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment/moment'
import { db } from '@/utils/db'



const AddNewInterview = () => {
  const [openDialog, setDialog] = useState(false)
  const [jobPosition, setJobPosition] = useState();
  const [jobDescription, setjobDescription] = useState();
  const [jobexperience, setjobexperience] = useState();
  const [loading, setloading] = useState(false)
  const { user } = useUser();
  const [JsonResponse, setJsonResponse] = useState([])
  const onSubmit = async (e) => {
    setloading(true)
    e.preventDefault()
    console.log(jobPosition, jobDescription, jobexperience)


    const InputPromt = "Job Position: " + jobPosition + ",Job Description :" + jobDescription + ", Years of Experience: " + jobexperience + ",Depending onthe given information please give me " + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + " questions and their answers in JSON format. Give us question and answer field in JSON"
    const result = await chatSession.sendMessage(InputPromt);
    const MockJsonResponse = (result.response.text()).replace('```json', '').replace('```', '')

    console.log(JSON.parse(MockJsonResponse));
    setJsonResponse(MockJsonResponse);

    if (MockJsonResponse) {
      const resp = await db.insert(MockInterview)
        .values({
          mockId: uuidv4(),
          JsonResponse: MockJsonResponse,
          jobPosition: jobPosition,
          jobDescription: jobDescription,
          jobexperience: jobexperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-yyyy')
        }).returning({ mockId: MockInterview.mockId});
      console.log("Inserted ID : ", resp)
    } else {
      console.log("ERROR");
    }

    setloading(false)
  }

  return (
    <div>
      <div className='p-10 border rounded-lg bg-slate-100 hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={() => setDialog(true)}
      >
        <h3 className='text-bold p-2 text-3xl text-black'>+ Add new</h3>
      </div>

      <Dialog open={openDialog}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className='text-2xl'>
          <DialogHeader>
            <DialogTitle>Tell Us more about your job interviewing</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>

                <div>

                  <h1>Add description aout your job</h1>

                  <div className='m-3 my-3'>
                    <label aria-placeholder=''>
                      Job description/Tech Stack(In short)
                    </label>
                    <Input placeholder="Ex Full Stack developer" required
                      onChange={(e) => setJobPosition(e.target.value)}

                    />

                  </div>
                  <div className='m-3 my-3'>
                    <label aria-placeholder=''>
                      Job Role/Job Position
                    </label>
                    <Textarea placeholder="MERN stack developer" required
                      onChange={(e) => setjobDescription(e.target.value)}
                    />

                  </div>
                  <div className='m-3 my-3'>
                    <label aria-placeholder=''>
                      Years of experience
                    </label>
                    <Input type="number " placeholder="5" max='50' required

                      onChange={(e) => setjobexperience(e.target.value)}
                    />
                    <div>

                    </div>
                  </div>
                </div>
                <Button disabled={loading} type="submit">

                  {loading ?
                    <>
                      <LoaderCircle className='animate-spin' />
                      'Generating From AI'
                    </> : 'Start Interview'

                  }</Button>
                <Button onClick={() => setDialog(false)} className='bg-red-500 p-2 gap-3'>Cancel </Button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default AddNewInterview
