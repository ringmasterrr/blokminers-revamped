import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <div className='flex flex-col gap-6 pt-10'>
      <div className='md:text-5xl text-center text-4xl font-extrabold text-theme-dark 2md:text-start 2md:text-6xl'>
        Enhancing your Business <br />
        through our Secure Blockchain
      </div>
      <div className='text-center text-lg font-medium text-theme-dark 2md:text-start'>
        Experience Seamless Migration and Top-Notch <br /> Support as we Elevate
        your Business To New Heights
      </div>
      <div className='flex w-full justify-center gap-4 2md:justify-start'>
        <Button>Get Started</Button>
        <Button variant={'outline'}>Learn More</Button>
      </div>
    </div>
  )
}
