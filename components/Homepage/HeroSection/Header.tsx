'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function Header() {
  const Router = useRouter()
  return (
    <div className='flex flex-col gap-6 pt-10'>
      <div className='text-center text-4xl font-extrabold text-theme-dark md:text-5xl 2md:text-start 2md:text-6xl'>
        Enhancing your Business <br className='hidden 2md:block' />
        through our Secure Blockchain
      </div>
      <div className='text-center text-lg font-medium text-theme-dark 2md:text-start'>
        Experience Seamless Migration and Top-Notch{' '}
        <br className='hidden 2md:block' /> Support as we Elevate your Business
        To New Heights
      </div>
      <div className='flex w-full justify-center gap-4 2md:justify-start'>
        <Button onClick={() => Router.push('/contact-us')}>Get Started</Button>
        <Button variant={'outline'}>Learn More</Button>
      </div>
    </div>
  )
}
