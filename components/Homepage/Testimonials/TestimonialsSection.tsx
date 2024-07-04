import Heading from '@/components/shared/Heading/Heading'
import Corousel from './Corousel'
import { TestimonialService } from '@/services/testimonials'
import { ITestimonial } from '@/types/testimonial'

const testimonials = new TestimonialService()

export default async function TestimonialsSection() {
  const data = await testimonials.getAllTestimonials()
  return (
    <div className='bg-dark z-[100] mx-auto flex max-w-8xl flex-col items-center gap-20 py-20'>
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
        <Corousel testimonials={data.data} />
      </div>
    </div>
  )
}
