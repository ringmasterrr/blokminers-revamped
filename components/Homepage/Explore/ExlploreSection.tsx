import Heading from '@/components/shared/Heading/Heading'
import CardContent from './CardContent'

export default function ExploreSection() {
  return (
    <div className='relative mt-4 px-6 py-2 2md:mt-12 2md:px-24 2md:py-32'>
      <div className='bg-blur absolute inset-0 bg-[#D8F6FF] bg-opacity-60'></div>
      <Heading
        heading={'Explore our Offerings'}
        message={
          'At BlokMiners, we fuse innovation and expertise to deliver a customized range of services for the evolving digital landscape.'
        }
      />
      <CardContent />
    </div>
  )
}
