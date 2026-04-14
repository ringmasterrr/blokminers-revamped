import { ParticleComponent } from '@/lib/particles'
import { Header } from './Header'
import { Infographics } from './Infographics'
import { Numbers } from './Numbers'

export function HeroSection() {
  return (
    <div className='bg-grid relative flex flex-col items-center justify-between gap-8 pb-12 pt-6 sm:pb-16 sm:pt-8 xl:flex-row xl:pt-6'>
      <div className='flex flex-col items-center gap-12 2md:items-start 2md:gap-28'>
        <Header />
        <div className='hidden 2md:block'>
          <Numbers />
        </div>
      </div>
      <div className='w-full max-w-[30rem] overflow-x-clip overflow-y-visible sm:max-w-[34rem] xl:max-w-none xl:translate-x-10'>
        <Infographics />
      </div>
      <div className='block 2md:hidden'>
        <Numbers />
      </div>
      <div className='bg-nav bg-blur absolute -top-[60rem] left-[20rem] hidden bg-[#D8F6FF] 2xl:block'></div>
    </div>
  )
}
