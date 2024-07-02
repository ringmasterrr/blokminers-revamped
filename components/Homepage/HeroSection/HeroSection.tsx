import { ParticleComponent } from '@/lib/particles'
import { Header } from './Header'
import { Infographics } from './Infographics'
import { Numbers } from './Numbers'

export function HeroSection() {
  return (
    <div className='bg-grid relative flex flex-col items-center justify-between py-16 2md:flex-row'>
      <div className='flex flex-col items-center gap-20 2md:items-start 2md:gap-52'>
        <Header />
        <Numbers />
      </div>
      <div className='w-fit 2md:translate-x-10'>
        <Infographics />
      </div>
      <div className='bg-nav bg-blur absolute -top-[60rem] left-[20rem] hidden bg-[#D8F6FF] 2xl:block'></div>
    </div>
  )
}
