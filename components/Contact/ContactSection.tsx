import { ParticleComponent } from '@/lib/particles'
import Image from 'next/image'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <div className='relative mx-auto flex max-w-8xl flex-col items-center pb-10 pt-16 2md:items-start 2md:pt-0'>
      <ParticleComponent />
      <div className='bg-grid flex w-full flex-col items-center justify-between gap-10 2md:min-h-[700px] 2md:flex-row 2md:gap-0'>
        <div className='mb-12 flex flex-col items-center gap-4 pt-8 sm:mb-16 sm:gap-6 sm:pt-10 2md:mb-20 2md:w-[55%] 2md:items-start 2md:gap-8'>
          <div className='text-3xl font-extrabold text-theme-dark md:text-4xl 2md:text-5xl xl:text-6xl'>
            Let&apos;s get connected
          </div>
          <div className='max-w-[520px] text-center text-lg font-medium text-theme-dark 2md:text-start'>
            Share your business query with us, and our expert
            <br className='hidden 2md:block' /> will soon get in touch with you!
          </div>
        </div>
        <div className='2md:max-w-none w-full max-w-[300px] 2md:w-[40%]'>
          <Image
            src={'/contact-us/message.svg'}
            alt=''
            width={2000}
            height={2000}
            className='h-full w-full'
          />
        </div>
      </div>
      <ContactForm />
    </div>
  )
}
