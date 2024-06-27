'use client'
import Image from 'next/image'
import React from 'react'
import { WobbleCard } from '@/components/ui/wobble-card'

export default function CardContent() {
  return (
    <div className='mb-20 mt-20 w-full'>
      <div className='grid w-full grid-cols-3 gap-4'>
        <WobbleCard
          containerClassName='card relative col-span-2 rounded-xl'
          className='flex h-[350px] flex-col gap-4 px-6 py-8'
        >
          <h1 className='text-4xl font-extrabold text-theme-dark'>
            Blockchain Development
          </h1>
          <p className='text-lg font-semibold text-theme-dark'>
            Harness the power of decentralized solutions <br /> with our
            blockchain development expertise.
          </p>
          <div className='absolute bottom-0 right-0 w-[45%]'>
            <Image
              src={'/Images/Explore/image1.svg'}
              alt='image'
              width={3000}
              height={3000}
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card relative  rounded-xl'
          className='flex h-[350px] flex-col gap-4 px-6 py-8'
        >
          <h1 className='text-4xl font-extrabold text-theme-dark'>
            Web3 Development
          </h1>
          <p className='text-lg font-semibold text-theme-dark'>
            Dive into the decentralized web with <br /> our Web3 development
            services.
          </p>
          <div className='absolute bottom-0 right-0 w-[40%]'>
            <Image
              src={'/Images/Explore/image2.svg'}
              alt='image'
              width={3000}
              height={3000}
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card relative row-span-2 rounded-xl'
          className='flex h-full flex-col gap-4 px-6 py-8'
        >
          <div className='flex w-[80%] flex-col gap-4'>
            <h1 className='text-4xl font-extrabold text-theme-dark'>
              Blockchain Consulting
            </h1>
            <p className='text-lg font-semibold text-theme-dark'>
              Navigate the complexities of the digital landscape with our expert
              consulting services.
            </p>
          </div>
          <div className='absolute bottom-0 w-[full]'>
            <Image
              src={'/Images/Explore/image3.svg'}
              alt='image'
              width={3000}
              height={3000}
              className='mx-auto w-[90%]'
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card relative col-span-2 rounded-xl'
          className='flex h-[350px] justify-end gap-4 px-6 py-8'
        >
          <div className='flex w-[50%] flex-col gap-4 text-end'>
            <h1 className='text-4xl font-extrabold text-theme-dark'>
              AI/ML Development
            </h1>
            <p className='text-lg font-semibold text-theme-dark'>
              Transform your Business with Artificial Intelligence & Machine
              Learning Solutions.
            </p>
          </div>
          <div className='absolute bottom-0 left-10 h-[90%]'>
            <Image
              src={'/Images/Explore/image4.svg'}
              alt='image'
              width={3000}
              height={3000}
              className='h-full w-full'
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card relative  rounded-xl'
          className='flex h-[350px] flex-col gap-4 px-6 py-8'
        >
          <h1 className='text-4xl font-extrabold text-theme-dark'>
            Data & Analytics
          </h1>
          <p className='text-lg font-semibold text-theme-dark'>
            Our data and analytics services help you optimize processes and make
            informed data-driven decisions.
          </p>
          <div className='absolute bottom-0 right-0 w-[90%]'>
            <Image
              src={'/Images/Explore/image5.svg'}
              alt='image'
              width={3000}
              height={3000}
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card relative  rounded-xl'
          className='flex h-[350px] flex-col gap-4 px-6 py-8'
        >
          <h1 className='text-4xl font-extrabold text-theme-dark'>
            Cyber Security
          </h1>
          <p className='text-lg font-semibold text-theme-dark'>
            Proactive measures and solutions to protect your systems from cyber
            threats.
          </p>
          <div className='absolute bottom-0 right-0 w-[40%]'>
            <Image
              src={'/Images/Explore/image6.svg'}
              alt='image'
              width={3000}
              height={3000}
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card relative  col-span-3 rounded-xl'
          className='flex h-[350px] justify-end gap-4 px-6 py-8'
        >
          <div className='flex w-[50%] flex-col gap-4 text-end'>
            <h1 className='text-4xl font-extrabold text-theme-dark'>
              AI/ML Blockchain Development
            </h1>
            <p className='ml-auto w-[75%] text-lg font-semibold text-theme-dark'>
              Uniting the realms of AI/ML and blockchain, we pioneer solutions
              that marry the strengths of both technologies.
            </p>
          </div>
          <div className='absolute bottom-0 left-20 h-[100%]'>
            <Image
              src={'/Images/Explore/image7.svg'}
              alt='image'
              width={3000}
              height={3000}
              className='h-full w-full'
            />
          </div>
        </WobbleCard>
      </div>
    </div>
  )
}
