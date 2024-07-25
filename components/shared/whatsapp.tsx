'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { FaWhatsapp } from 'react-icons/fa6'

const Whatsapp = () => {
  const router = useRouter()

  const handleClick = async () => {
    // Check if WhatApp installed, if yes open whatsapp else open whatsapp web

    if (navigator.userAgent.includes('WhatsApp')) {
      // WhatsApp is installed
      window.open(`whatsapp://send?phone=+919340190699`)
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      window.open('https://web.whatsapp.com/send?phone=+919340190699', '_blank')
    }
  }

  return (
    <>
      <div
        className='fixed bottom-10 right-4 w-min cursor-pointer rounded-full bg-green-600 p-2 md:right-8'
        onClick={handleClick}
      >
        <FaWhatsapp color='white' className='h-7 w-7 md:h-10 md:w-10' />
      </div>
    </>
  )
}

export default Whatsapp
