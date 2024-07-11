import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Numbers } from '../Homepage/HeroSection/Numbers'
import CardList from './PortfolioCards'
import { ParticleComponent } from '@/lib/particles'

export function Portfolio({ data }: { data: any }) {
  return (
    <div className='relative'>
      <ParticleComponent />
      <div className='bg-grid my-10 flex 2md:h-screen flex-col items-start justify-between pt-20 2md:flex-row'>
        <div className='flex w-full flex-col items-center justify-between gap-14 2md:w-1/2 2md:items-start 2md:gap-28 2md:pt-10'>
          <div className='flex flex-col items-center gap-6 2md:items-start'>
            <div className='text-center text-[32px] font-extrabold text-theme-dark md:text-6xl 2md:text-start'>
              Blokminers Portfolio
            </div>
            <div className='max-w-[520px] text-center text-lg font-medium text-theme-dark 2md:text-start'>
              Explore How we turn ideas into reality.
            </div>
            <div className='flex gap-4'>
              <Button>Talk To Our Experts</Button>
            </div>
            <div className='2md:hidden'>
              <Image
                src={'/portfolio.png'}
                alt=''
                width={2000}
                height={2000}
                className='w-[35rem]'
              />
            </div>
          </div>
          <Numbers />
        </div>
        <div className='hidden 2md:block'>
          <Image
            src={'/portfolio.png'}
            alt=''
            width={2000}
            height={2000}
            className='w-[35rem]'
          />
        </div>
      </div>
      <div className='bg-blur absolute inset-0 -top-96 rounded-full bg-[#D8F6FF] bg-opacity-50'></div>

      <CardList data={data} />
    </div>
  )
}
