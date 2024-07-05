'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

const Cta = () => {
  return (
    <div className='z-[100] mt-10 max-w-8xl bg-theme-dark p-2 2md:p-20'>
      <div className='relative flex flex-col items-center justify-between gap-8 overflow-clip rounded-3xl border border-[#E0E0E0] bg-[#FFFFFF29] p-6 2md:flex-row 2md:p-20'>
        <div className='w-full space-y-8 2md:w-1/2'>
          <h2 className='text-lg font-bold text-white 2md:text-4xl'>
            Start your Blockchain Project with the help of our Team of Experts.
          </h2>
          <p className='text-center text-white 2md:text-left'>
            Meet our world famous support team. They are fast, they are smart,
            and they will help you out any time.
          </p>
          <div className='flex justify-center gap-4 2md:justify-start'>
            <button className='rounded-md bg-white px-4 py-2 text-xs font-bold text-[#00283C] 2md:px-6'>
              Talk To An Expert
            </button>
            <button className='rounded-md border bg-transparent px-4 py-2 text-xs font-bold text-white 2md:px-6'>
              Get Started
            </button>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Image
            src={'/logo.svg'}
            alt='logo'
            height={500}
            width={500}
            className='hidden w-96 md:block'
          />
        </motion.div>

        <Image
          src={'/Cta/python.svg'}
          alt='python'
          height={500}
          width={500}
          className='absolute -top-5 left-0 h-32 w-32'
        />

        <Image
          src={'/Cta/react.svg'}
          alt='react'
          height={500}
          width={500}
          className='absolute -top-8 left-72 h-32 w-32'
        />
        <Image
          src={'/Cta/polygon.svg'}
          alt='polygon'
          height={500}
          width={500}
          className='absolute -top-10 left-[36rem] h-48 w-48'
        />
        <Image
          src={'/Cta/solidity.svg'}
          alt='solidity'
          height={500}
          width={500}
          className='absolute -top-6 left-[60rem] h-32 w-32'
        />
        <Image
          src={'/Cta/eth.svg'}
          alt='eth'
          height={500}
          width={500}
          className='absolute -bottom-5 left-0 h-32 w-32'
        />
        <Image
          src={'/Cta/binance.svg'}
          alt='binance'
          height={500}
          width={500}
          className='absolute -bottom-12 left-72 h-48 w-48'
        />
        <Image
          src={'/Cta/bitcoin.svg'}
          alt='bitcoin'
          height={500}
          width={500}
          className='absolute -bottom-10 left-[36rem] h-40 w-40'
        />
        <Image
          src={'/Cta/solana.svg'}
          alt='solana'
          height={500}
          width={500}
          className='absolute -bottom-8 left-[60rem] h-32 w-32'
        />
        <Image
          src={'/Cta/polkadot.svg'}
          alt='polkadot'
          height={500}
          width={500}
          className='absolute bottom-14 right-0 h-28 w-28'
        />
      </div>
    </div>
  )
}

export default Cta
