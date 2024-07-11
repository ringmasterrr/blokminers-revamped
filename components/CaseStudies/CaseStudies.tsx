'use client'
import { ICases } from '@/types/cases'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import FilterCaseStudy from './FilterCaseStudy'
import Link from 'next/link'

export interface ICasesPage {
  search?: string
  page?: number
  limit?: number
  total?: number
  cases: ICases[]
}

const CaseStudiesCards = ({ cases, search }: ICasesPage) => {
  const router = useRouter()
  const handleCardClick = (id: number) => {
    router.push(`/case-studies/${id}`)
  }
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <FilterCaseStudy />

      <div className='mb-32 mt-12 grid grid-cols-1 gap-6 2md:grid-cols-3'>
        {cases.map((item: any) => (
          <Link
            href={`/case-study/${item._id}`}
            key={item.id}
            className='cursor-pointer rounded-2xl bg-white p-6'
            style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}
          >
            <h3 className='mb-2 text-2xl font-semibold'>{item.title}</h3>
            <p className='mb-6 text-sm text-[#A3A3A3]'>{item.description}</p>
            <Image
              src={item.image}
              alt={item.title}
              height={1000}
              width={1000}
              className='mb-4 h-64 w-full rounded-md object-cover'
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CaseStudiesCards
