import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Numbers } from '../Homepage/HeroSection/Numbers'
import CaseStudiesCards from './CaseStudies'
import { ParticleComponent } from '@/lib/particles'

export function CaseStudies() {
  return (
    <div className='relative'>
      <div className=' my-10 flex h-screen items-start justify-between bg-grid pt-20'>
        <div className='flex flex-col justify-between w-1/2  pt-10 gap-28'>
          <div className='flex flex-col gap-6'>
            <div className='text-6xl font-extrabold text-theme-dark'>
              Our Successful Cases
            </div>
            <div className='max-w-[520px] text-lg font-medium text-theme-dark'>
              Investigate software development case studies from organizations
              facing comparable challenges and analyze their incremental
              execution processes.
            </div>
            <div className='flex gap-4'>
              <Button>Talk To Our Experts</Button>
            </div>
          </div>
          <Numbers />
        </div>
        <div>
          <Image
            src={'/case.png'}
            alt=''
            width={2000}
            height={2000}
            className='w-[30rem]'
          />
        </div>

        <div className="absolute inset-0 bg-[#D8F6FF] bg-opacity-50 bg-blur rounded-full -top-96"></div>
        <ParticleComponent />
      </div>
      <CaseStudiesCards />
    </div>
  )
}
