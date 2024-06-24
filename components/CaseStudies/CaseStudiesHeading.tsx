import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Numbers } from '../Homepage/HeroSection/Numbers'
import CaseStudiesCards from './CaseStudies'

export function CaseStudies() {
  return (
    <div>
      <div className='my-10 flex items-center justify-between'>
        <div className='flex w-1/2 flex-col gap-6 pt-10'>
          <div className='text-6xl font-extrabold text-theme-dark'>
            Our Successful Cases
          </div>
          <div className='max-w-[520px] text-lg font-medium text-theme-dark'>
            Investigate software development case studies from organizations
            facing comparable challenges and analyze their incremental execution
            processes.
          </div>
          <div className='flex gap-4'>
            <Button>Talk To Our Experts</Button>
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
      </div>
      <CaseStudiesCards/>
    </div>
  )
}
