import { ParticleComponent } from '@/lib/particles'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Page } from '../shared/Page'
import Link from 'next/link'

const IndustriesSection = ({ tab }: { tab: string | undefined }) => {
  return (
    <div className='relative mx-auto max-w-8xl pb-10 pt-16 2md:pt-0'>
      <ParticleComponent />
      <Page>
        <div className='bg-grid flex min-h-[500px] flex-col items-center justify-between 2md:min-h-[700px] 2md:flex-row'>
          <div className='mb-20 flex flex-col items-center gap-6 pt-10 2md:w-[55%] 2md:items-start 2md:gap-8'>
            <div className='text-3xl font-extrabold text-theme-dark md:text-4xl 2md:text-5xl xl:text-6xl'>
              Blokminers Industries
            </div>
            <div className='max-w-[520px] text-center text-lg font-medium text-theme-dark 2md:text-start'>
              This is the page about the
              <br className='hidden 2md:block' /> Industries section of
              Blokminers
            </div>
            <Link className='py-2.5 px-6 bg-theme-dark text-white rounded-full font-medium' href={'/contact-us'}>Get Started</Link>
          </div>
          <div className='w-[300px] 2md:w-[45%]'>
            <Image
              src={'/Industries/industries.svg'}
              alt=''
              width={2000}
              height={2000}
              className='h-full w-full'
            />
          </div>
        </div>
      </Page>
    </div>
  )
}

export default IndustriesSection
