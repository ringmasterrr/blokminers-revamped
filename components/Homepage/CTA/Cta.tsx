'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

const Cta = () => {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='z-[100] mt-8 w-full max-w-8xl bg-theme-dark px-2 py-8 sm:mt-10 sm:py-10 2md:p-20'>
        <div className='relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-[#E0E0E0] bg-[#FFFFFF29] p-5 py-10 sm:p-8 sm:py-14 2md:flex-row 2md:p-16'>
          <div className='w-full space-y-6 2md:w-1/2 2md:space-y-8'>
            <h2 className='text-center text-2xl font-bold text-white sm:text-3xl 2md:text-left 2md:text-5xl'>
              Start your Blockchain Project with the help of our Team of
              Experts.
            </h2>
            <p className='text-center text-sm text-[#d4d4d4] sm:text-base 2md:text-left'>
              Meet our world famous support team. They are fast, they are smart,
              and they will help you out any time.
            </p>
            <div className='flex flex-wrap justify-center gap-3 sm:gap-4 2md:justify-start'>
              <Link
                href={'/contact-us'}
                className='rounded-md bg-white px-4 py-2 text-xs font-bold text-[#00283C] sm:text-sm 2md:px-6'
              >
                Talk To An Expert
              </Link>
              <button className='rounded-md border bg-transparent px-4 py-2 text-xs font-bold text-white sm:text-sm 2md:px-6'>
                Get Started
              </button>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Image
              src={'/logowhite.svg'}
              alt='logo'
              height={500}
              width={500}
              className='hidden w-80 xl:block'
            />
          </motion.div>

          <Image
            src={'/Cta/python.svg'}
            alt='python'
            height={500}
            width={500}
            className='absolute -top-4 left-0 hidden h-20 w-20 opacity-70 xl:block'
          />

          <Image
            src={'/Cta/react.svg'}
            alt='react'
            height={500}
            width={500}
            className='absolute -top-6 left-[22%] hidden h-24 w-24 opacity-70 xl:block'
          />
          <Image
            src={'/Cta/polygon.svg'}
            alt='polygon'
            height={500}
            width={500}
            className='absolute -top-10 left-[45%] hidden h-32 w-32 opacity-80 xl:block'
          />
          <Image
            src={'/Cta/solidity.svg'}
            alt='solidity'
            height={500}
            width={500}
            className='absolute -top-5 right-8 hidden h-20 w-20 opacity-80 xl:block'
          />
          <Image
            src={'/Cta/eth.svg'}
            alt='eth'
            height={500}
            width={500}
            className='absolute -bottom-4 left-0 hidden h-20 w-20 opacity-70 xl:block'
          />
          <Image
            src={'/Cta/binance.svg'}
            alt='binance'
            height={500}
            width={500}
            className='absolute -bottom-8 left-[22%] hidden h-32 w-32 opacity-80 xl:block'
          />
          <Image
            src={'/Cta/bitcoin.svg'}
            alt='bitcoin'
            height={500}
            width={500}
            className='absolute -bottom-8 left-[45%] hidden h-28 w-28 opacity-80 xl:block'
          />
          <Image
            src={'/Cta/solana.svg'}
            alt='solana'
            height={500}
            width={500}
            className='absolute -bottom-6 right-10 hidden h-20 w-20 opacity-80 xl:block'
          />
          <Image
            src={'/Cta/polkadot.svg'}
            alt='polkadot'
            height={500}
            width={500}
            className='absolute bottom-10 right-0 hidden h-16 w-16 opacity-80 xl:block'
          />
        </div>
      </div>
    </div>
  )
}

export default Cta
