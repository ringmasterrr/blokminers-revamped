import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Numbers } from '../Homepage/HeroSection/Numbers'
import CardList from './PortfolioCards'
import { ParticleComponent } from '@/lib/particles'

export function Portfolio() {
  return (
    <div className='relative'>
      <ParticleComponent />
      <div className='bg-grid my-10 flex h-screen items-start justify-between pt-20'>
        <div className='flex w-1/2 flex-col justify-between gap-28 pt-10'>
          <div className='flex flex-col gap-6'>
            <div className='text-6xl font-extrabold text-theme-dark'>
              Blokminers Portfolio
            </div>
            <div className='max-w-[520px] text-lg font-medium text-theme-dark'>
              Explore How we turn ideas into reality.
            </div>
            <div className='flex gap-4'>
              <Button>Talk To Our Experts</Button>
            </div>
          </div>
          <Numbers />
        </div>
        <div>
          <Image
            src={'/portfolio.png'}
            alt=''
            width={2000}
            height={2000}
            className='w-[35rem]'
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-[#D8F6FF] bg-opacity-50 bg-blur rounded-full -top-96"></div>

      <CardList />
    </div>
  )
}
