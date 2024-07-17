import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Numbers } from '../Homepage/HeroSection/Numbers'
import CaseStudiesCards from './CaseStudies'
import { ParticleComponent } from '@/lib/particles'
import { ICases } from '@/types/cases'
import Pagination from '../shared/Pagination'
import Link from 'next/link'

export interface ICasesPage {
  search?: string
  page?: number
  limit?: number
  total?: number
  cases: ICases[]
  totalPages?: number
}

export function CaseStudiesSection({
  search,
  page,
  cases,
  limit,
  total,
  totalPages,
}: ICasesPage) {
  return (
    <div className='relative'>
      <div className='bg-grid my-10 flex flex-col items-center justify-between pt-20 text-center 2md:flex-row 2md:items-start 2md:text-left'>
        <div className='flex flex-col items-center justify-between gap-12 pt-10 2md:w-1/2 2md:items-start 2md:gap-28'>
          <div className='flex flex-col items-center gap-6 2md:items-start'>
            <div className='text-4xl font-extrabold text-theme-dark 2md:text-5xl lg:text-6xl'>
              Our Successful Cases
            </div>
            <div className='max-w-[520px] text-lg font-medium text-theme-dark'>
              Investigate software development case studies from organizations
              facing comparable challenges and analyze their incremental
              execution processes.
            </div>
            <Link
              className='rounded-full bg-theme-dark px-6 py-2.5 font-medium text-white'
              href={'/contact-us'}
            >
              Talk To Our Experts
            </Link>
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

        <div className='bg-blur absolute inset-0 -top-96 rounded-full bg-[#D8F6FF] bg-opacity-50'></div>
        <ParticleComponent />
      </div>
      <div className='my-20 space-y-20'>
        <CaseStudiesCards cases={cases} />
        <Pagination
          search={search ?? undefined}
          page={page ?? 1}
          totalPages={totalPages ?? 1}
        />
      </div>
    </div>
  )
}
