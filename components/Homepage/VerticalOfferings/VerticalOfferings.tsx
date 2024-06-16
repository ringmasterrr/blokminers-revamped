import Heading from '@/components/shared/Heading/Heading'
import Verticals from './VerticalCardComponent'

export function VerticalOfferings() {
  return (
    <div className='bg-dark my-10 flex flex-col items-center justify-center '>
      <div className='flex w-9/12 flex-col items-center justify-center gap-6 py-10 text-white'>
        <Heading
          white={true}
          heading='Our Vertical Offerings'
          message='Welcome to our comprehensive suite of Vertical Offerings, where your 
          unique business needs will find their perfect match. Our diverse range
          of services covers every dimension of your requirements, ensuring that
          your ideas flourish and reach new heights.'
        />
      </div>
      <div className='flex items-center justify-center'>
        <Verticals />
      </div>
    </div>
  )
}
