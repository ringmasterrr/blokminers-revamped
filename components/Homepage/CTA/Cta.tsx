import Image from 'next/image'
import React from 'react'

const Cta = () => {
  return (
    <div className='bg-gradient-to-br from-[#0066FF] to-[#009DBF] p-20 mt-10'>
      <div className='relative flex items-center justify-between gap-8 overflow-clip rounded-3xl border border-[#E0E0E0] bg-[#FFFFFF29] p-20'>
        <div className='w-1/2 space-y-8'>
          <h2 className='text-4xl font-bold text-white'>
            Start your Blockchain Project with the help of our Team of Experts.
          </h2>
          <p className='text-white'>
            Meet our world famous support team. They are fast, they are smart,
            and they will help you out any time.
          </p>
          <div className='flex gap-4'>
            <button className='rounded-md bg-white px-6 py-2 font-bold text-[#00283C]'>
              Talk To An Expert
            </button>
            <button className='rounded-md bg-transparent border px-6 py-2 font-bold text-white'>
              Get Started
            </button>
          </div>
        </div>
        <div>
          <Image
            src={'/logo.svg'}
            alt='logo'
            height={500}
            width={500}
            className='w-96'
          />
        </div>
        <Image
          src={'/Cta/python.svg'}
          alt='logo'
          height={500}
          width={500}
          className='absolute -top-5 left-0 h-32 w-32'
        />
        <Image
          src={'/Cta/react.svg'}
          alt='logo'
          height={500}
          width={500}
          className='absolute -top-8 left-72 h-32 w-32'
        />
        <Image
          src={'/Cta/polygon.svg'}
          alt='logo'
          height={500}
          width={500}
          className='absolute -top-10 left-[36rem] h-48 w-48'
        />
        <Image
          src={'/Cta/solidity.svg'}
          alt='logo'
          height={500}
          width={500}
          className='absolute -top-6 left-[60rem] h-32 w-32'
        />
        <Image
          src={'/Cta/eth.svg'}
          alt='logo'
          height={500}
          width={500}
          className='absolute -bottom-5 left-0 h-32 w-32'
        />
        <Image
          src={'/Cta/binance.svg'}
          alt='logo'
          height={500}
          width={500}
          className='absolute -bottom-12 left-72 h-48 w-48'
        />
        <Image
          src={'/Cta/bitcoin.svg'}
          alt='logo'
          height={500}
          width={500}
          className='absolute -bottom-10 left-[36rem] h-40 w-40'
        />
        <Image
          src={'/Cta/solana.svg'}
          alt='logo'
          height={500}
          width={500}
          className='absolute -bottom-8 left-[60rem] h-32 w-32'
        />
        <Image
          src={'/Cta/polkadot.svg'}
          alt='logo'
          height={500}
          width={500}
          className='absolute bottom-14 right-0 h-28 w-28'
        />
      </div>
    </div>
  )
}

export default Cta
