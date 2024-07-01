'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCaseStudyDetails } from '@/services/caseStudies'
import { CgSpinnerTwo } from 'react-icons/cg'
import Heading from '@/components/shared/Heading/Heading'
import Image from 'next/image'

interface CaseStudyDetailProps {
  id: string
}

const CaseStudyDetail = ({ id }: CaseStudyDetailProps) => {
  const [caseStudy, setCaseStudy] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const fetchCaseStudy = async () => {
    const res = await getCaseStudyDetails(id)
    console.log(res.caseStudy[0])
    setCaseStudy(res.caseStudy[0])
    setLoading(false)
  }
  useEffect(() => {
    fetchCaseStudy()
  }, [id])

  if (loading === true) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <CgSpinnerTwo className='animate-spin text-8xl text-blue-700' />
      </div>
    )
  } else
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
