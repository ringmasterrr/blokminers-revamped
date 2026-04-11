import { TestimonialService } from '@/services/testimonials'
import TestimonialCarousel from './Corousel'

const testimonials = new TestimonialService()

export default async function TestimonialsSection() {
  const data = await testimonials.getAllTestimonials()

  // High-value fallback content if the API is empty or needs specific phrasing
  const fallbackData = [
    {
      name: 'Darshan Kothari',
      title: 'CEO',
      company: 'BlokMiners AI',
      industry: 'Healthcare',
      quote:
        'The machine learning insights directly drove a 25% boost in operational efficiency — within 90 days of deployment. We have since expanded to two more departments.',
    },
    {
      name: 'Vansh Jain',
      title: 'CEO',
      company: 'Web3 Platform',
      industry: 'Web3',
      quote:
        'BlokMiners hit the deadline and their smart contract audit caught two critical vulnerabilities before launch. In this space, that audit may have saved us from a catastrophic exploit.',
    },
    {
      name: 'Dr Ravi Chamaria',
      title: 'CEO',
      company: 'Blockchain Vision',
      industry: 'FinTech',
      quote:
        'Their consulting team made complex architecture decisions clear. They delivered a smart contract system that has processed over $800K in transactions without a single incident.',
    },
  ]

  const displayData = data?.data?.length ? data.data : fallbackData

  return (
    <section className='relative mx-auto w-full max-w-8xl overflow-hidden bg-[#031d2c] py-24 lg:py-32'>
      {/* Background Ambience */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent blur-[120px]' />
      </div>

      <div className='relative z-20 mx-auto max-w-8xl px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto mb-20 text-center'>
          <div className='mb-6 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5'>
            <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400'>
              Hear from our clients
            </span>
          </div>
          <h2 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
            Don't take our word for it
          </h2>
          <p className='mt-6 text-lg text-slate-400'>
            Our clients love working with us, just read what they have to say
            about the specific ROI we've delivered.
          </p>
        </div>

        <TestimonialCarousel testimonials={displayData} />
      </div>
    </section>
  )
}
