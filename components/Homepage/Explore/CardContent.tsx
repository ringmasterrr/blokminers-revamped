'use client'
import Image from 'next/image'
import React from 'react'
import { WobbleCard } from '@/components/ui/wobble-card'

export default function CardContent() {
  return (
    <div className='mb-20 mt-20 w-full'>
      <div className='grid w-full grid-cols-1 gap-4 2md:grid-cols-3'>
        <WobbleCard
          containerClassName='card relative 2md:col-span-2  rounded-xl'
          className='flex h-[350px] flex-col gap-4 px-4 py-4 sm:px-6 sm:py-8'
        >
          <h1 className='text-2xl font-extrabold text-theme-dark 2md:text-4xl'>
            Blockchain Development
          </h1>
          <p className='text-lg font-semibold text-theme-dark'>
            Harness the power of decentralized solutions{' '}
            <br className='hidden 2md:block' /> with our Blockchain development
            expertise.
          </p>
          <div className='absolute bottom-0 right-[50%] h-[50%] min-w-[300px] translate-x-1/2 2md:right-0 2md:aspect-auto 2md:h-auto 2md:w-[45%] 2md:translate-x-0'>
            <Image
              src={'/Images/Explore/image1.svg'}
              alt='image'
              width={3000}
              height={3000}
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card  relative col-span-1  rounded-xl'
          className='flex h-[350px] flex-col gap-4 p-4 sm:px-6 sm:py-8'
        >
          <h1 className='text-2xl font-extrabold text-theme-dark 2md:text-4xl'>
            Web3 Development
          </h1>
          <p className='text-lg font-semibold text-theme-dark'>
            Dive into the decentralized web with{' '}
            <br className='hidden 2md:block' /> our Web3 development services.
          </p>
          <div className='absolute bottom-0 right-0 max-h-[50%] max-w-[200px] 2md:w-[40%]'>
            <Image
              src={'/Images/Explore/image2.svg'}
              alt='image'
              width={3000}
              height={3000}
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card relative 2md:row-span-2  rounded-xl'
          className='flex h-[350px] flex-col gap-4 p-4 sm:px-6 sm:py-8 2md:h-full'
        >
          <div className='flex flex-col gap-4 2md:w-[80%]'>
            <h1 className='text-2xl font-extrabold text-theme-dark 2md:text-4xl'>
              Blockchain Consulting
            </h1>
            <p className='text-lg font-semibold text-theme-dark'>
              Navigate the complexities of the digital landscape with our expert
              consulting services.
            </p>
          </div>
          <div className='absolute bottom-[-20px] right-8 aspect-square max-h-[60%] 2md:bottom-0 2md:right-auto 2md:aspect-auto 2md:w-full'>
            <Image
              src={'/Images/Explore/image3.svg'}
              alt='image'
              width={3000}
              height={3000}
              className='mx-auto object-cover 2md:w-[90%]'
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card relative 2md:col-span-2 rounded-xl'
          className='flex h-[350px] gap-4 p-4 sm:px-6 sm:py-8 2md:justify-end'
        >
          <div className='flex flex-col gap-4 2md:w-[50%] 2md:text-end'>
            <h1 className='text-2xl font-extrabold text-theme-dark 2md:text-4xl'>
              AI/ML Development
            </h1>
            <p className='text-lg font-semibold text-theme-dark'>
              Transform your Business with Artificial Intelligence & Machine
              Learning Solutions.
            </p>
          </div>
          <div className='absolute bottom-0 right-0 aspect-square max-h-[60%] 2md:left-10 2md:right-auto 2md:aspect-auto 2md:h-[90%]'>
            <Image
              src={'/Images/Explore/image4.svg'}
              alt='image'
              width={3000}
              height={3000}
              className='h-full w-full object-cover'
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card relative  rounded-xl'
          className='flex h-[350px] flex-col gap-4 p-4 sm:px-6 sm:py-8'
        >
          <h1 className='text-2xl font-extrabold text-theme-dark 2md:text-4xl'>
            Data & Analytics
          </h1>
          <p className='text-lg font-semibold text-theme-dark'>
            Our data and analytics services help you optimize processes and make
            informed data-driven decisions.
          </p>
          <div className='absolute bottom-0 right-[-50px] h-[70%] 2md:right-0 2md:h-auto 2md:w-[90%]'>
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
          className='flex h-[350px] flex-col gap-4 p-4 sm:px-6 sm:py-8'
        >
          <h1 className='text-2xl font-extrabold text-theme-dark 2md:text-4xl'>
            Cyber Security
          </h1>
          <p className='text-lg font-semibold text-theme-dark'>
            Proactive measures and solutions to protect your systems from cyber
            threats.
          </p>
          <div className='absolute bottom-0 right-0 aspect-square max-h-[50%] max-w-[200px] 2md:aspect-auto 2md:h-auto 2md:w-[40%]'>
            <Image
              src={'/Images/Explore/image6.svg'}
              alt='image'
              width={3000}
              height={3000}
              className='object-contain'
            />
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName='card relative  2md:col-span-3 rounded-xl'
          className='flex h-[350px] gap-4 p-4 sm:px-6 sm:py-8 2md:justify-end'
        >
          <div className='flex flex-col gap-4 2md:w-[50%] 2md:text-end'>
            <h1 className='text-2xl font-extrabold text-theme-dark 2md:text-4xl'>
              AI/ML Blockchain Development
            </h1>
            <p className='ml-auto text-lg font-semibold text-theme-dark 2md:w-[75%]'>
              Uniting the realms of AI/ML and Blockchain, we pioneer solutions
              that marry the strengths of both technologies.
            </p>
          </div>
          <div className='absolute bottom-0 right-0 aspect-square h-[50%] w-[250px] 2md:left-20 2md:right-auto 2md:aspect-auto 2md:h-[100%] 2md:w-auto'>
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
