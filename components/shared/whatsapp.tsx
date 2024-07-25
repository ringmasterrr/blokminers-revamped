'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { FaWhatsapp } from 'react-icons/fa6'
import Link from 'next/link'

const Whatsapp = () => {
  return (
    <>
      <div className='fixed bottom-10 right-4 w-min cursor-pointer rounded-full bg-green-600 p-2 md:right-8'>
        <Link href={'https://wa.me/+919340190699'}>
          <FaWhatsapp color='white' className='h-7 w-7 md:h-10 md:w-10' />
        </Link>
      </div>
    </>
  )
}

export default Whatsapp
