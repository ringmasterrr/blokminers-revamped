import { ParticleComponent } from '@/lib/particles'
import { Header } from './Header'
import { Infographics } from './Infographics'
import { Numbers } from './Numbers'

export function HeroSection() {
    return (
    <div className='relative flex justify-between min-h-[90vh] bg-grid py-24'>
      <div className='flex flex-col gap-52'>
        <Header />
        <Numbers />
        </div>
      <div className='w-fit'>
        <Infographics />
      </div>
      <div className='absolute bg-nav bg-[#D8F6FF]  bg-blur -top-[60rem] left-[20rem]'></div>
    </div>
  )
}
