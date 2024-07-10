import { ParticleComponent } from '@/lib/particles'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const IndustriesSection = ({ tab }: { tab: string | undefined }) => {
  return (
    <div className='relative'>
      <ParticleComponent />
      <div className='bg-grid my-10 flex h-screen items-start justify-between pt-12'>
        <div className='flex w-1/2 flex-col justify-between gap-28 pt-10'>
          <div className='flex flex-col gap-6'>
            <div className='text-6xl font-extrabold text-theme-dark'>
              Blokminers Industries
            </div>
            <div className='max-w-[520px] text-lg font-medium text-theme-dark'>
              This is the page about the
              <br /> Industries section of Blokminers
            </div>
            <div className='flex gap-4'>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={'/industries/industries.svg'}
            alt=''
            width={2000}
            height={2000}
            className='w-[35rem]'
          />
        </div>
      </div>
    </div>
  )
}

export default IndustriesSection
