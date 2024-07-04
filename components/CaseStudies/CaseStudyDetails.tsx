import Heading from '@/components/shared/Heading/Heading'
import Image from 'next/image'
import { ICases } from '@/types/cases'

interface CaseStudyDetailProps {
  caseStudy: ICases
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <div className='container mx-auto p-4'>
      <Heading heading={caseStudy.title} message={caseStudy.summary} />
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
