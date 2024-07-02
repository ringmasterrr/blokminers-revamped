import Heading from '@/components/shared/Heading/Heading'
import Corousel from './Corousel'

export default function TestimonialsSection() {
  return (
    <div className='bg-dark z-[100] flex flex-col items-center gap-20 py-20 max-w-8xl mx-auto'>
      <div className='flex flex-col items-center gap-10 text-white'>
        <div className='rounded-full border-2 border-white px-5 py-1.5'>
          Testimonials
        </div>
        <Heading
          white={true}
          heading={'Hear from our clients'}
          message={
            'Our clients love working with us, just read what they have to say!'
          }
        />
      </div>
      <div className='w-full overflow-hidden'>
        <Corousel />
      </div>
    </div>
  )
}
