import Heading from '@/components/shared/Heading/Heading'
import React from 'react'
import FAQAccordion from './FAQAccordion'
import Image from 'next/image'

const FAQs = () => {
  return (
    <div className='z-[100000] flex flex-col items-center justify-center gap-8 px-12'>
      <div className='rounded-3xl border border-theme-dark px-3 py-1 font-semibold'>
        FAQs
      </div>
      <Heading
        heading='Frequently asked questions'
        message='We know that you have questions, and we will try our best to leave no queries behind!'
      />
      <div className='my-12 flex w-full items-start justify-between'>
        <div className='w-1/2'>
          <FAQAccordion />
        </div>
        <div>
          {' '}
          <Image src={'/FAQs.svg'} alt='' height={500} width={500} />
        </div>
      </div>
    </div>
  )
}

export default FAQs
