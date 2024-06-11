import { Header } from './Header'
import { Infographics } from './Infographics'
import { Numbers } from './Numbers'

export function HeroSection() {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col gap-52'>
        <Header />
        <Numbers />
      </div>
      <div className='w-fit'>
        <Infographics />
      </div>
    </div>
  )
}
