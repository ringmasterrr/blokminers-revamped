import Heading from '@/components/shared/Heading/Heading'
import React from 'react'
import { ProcessCards } from './ProcessCards'

export const OurProcess = () => {
  return (
    <div className='relative mx-6 my-20 space-y-20'>
      <Heading
        heading='Our Process'
        message='Our processes are tailored to hit it right with your idea from the start and also support optimum coordination, excellent and speedy execution of your Blockchain solution through its entirety.'
      />
      <ProcessCards />
      <div className='bg-blur absolute inset-0 bg-[#D8F6FF] bg-opacity-60'></div>
    </div>
  )
}
