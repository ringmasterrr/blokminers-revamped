import { ParticleComponent } from '@/lib/particles'
import { Header } from './Header'
import { Infographics } from './Infographics'
import { Numbers } from './Numbers'

export function HeroSection() {
  return (
    <div className='bg-grid relative flex min-h-[90vh] justify-between py-24'>
      <div className='flex flex-col gap-52'>
        <Header />
        <Numbers />
      </div>
      <div className='w-fit'>
        <Infographics />
      </div>
      <div className='bg-nav bg-blur absolute -top-[60rem] left-[20rem] bg-[#D8F6FF]'></div>
    </div>
  )
}
