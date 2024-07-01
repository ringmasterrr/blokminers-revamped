import { ParticleComponent } from '@/lib/particles'
import { Header } from './Header'
import { Infographics } from './Infographics'
import { Numbers } from './Numbers'

export function HeroSection() {
  return (
    <div className='bg-grid relative flex 2md:flex-row flex-col  justify-between py-16'>
      <div className='flex flex-col gap-52'>
        <Header />
        {/* <Numbers /> */}
      </div>
      {/* <div className='w-fit translate-x-10'>
        <Infographics />
      </div> */}
      <div className='bg-nav bg-blur absolute -top-[60rem] left-[20rem] bg-[#D8F6FF] hidden 2md:block'></div>
    </div>
  )
}
