import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <div className='flex flex-col gap-6 pt-10'>
      <div className='text-6xl font-extrabold text-theme-dark'>
        Enhancing your Business <br />
        through our Secure Blockchain
      </div>
      <div className='text-lg font-medium text-theme-dark'>
        Experience Seamless Migration and Top-Notch <br /> Support as we Elevate
        your Business To New Heights
      </div>
      <div className='flex gap-4'>
        <Button>Get Started</Button>
        <Button variant={'outline'}>Learn More</Button>
      </div>
    </div>
  )
}
