'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCaseStudyById } from '@/services/caseStudies'
import { CgSpinnerTwo } from 'react-icons/cg'
import Heading from '@/components/shared/Heading/Heading'
import Image from 'next/image'

interface CaseStudyDetailProps {
  id: string
}

const CaseStudyDetail = ({ id }: CaseStudyDetailProps) => {
  const [caseStudy, setCaseStudy] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchCaseStudy = async () => {
      const res = await getCaseStudyById(Number(id))
      setCaseStudy(res)
      setLoading(false)
    }
    fetchCaseStudy()
  }, [id])

  if (loading) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <CgSpinnerTwo className='animate-spin text-8xl text-blue-700' />
      </div>
    )
  }

  if (!caseStudy) {
    return <div>Case study not found</div>
  }

  return (
    <div className='container mx-auto p-4'>
      <Heading heading={caseStudy.title} message={caseStudy.description} />
      <div className='mt-8'>
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          height={1000}
          width={1000}
          className='rounded-md'
        />
      </div>
    </div>
  )
}

export default CaseStudyDetail
