import { Header } from './Header'
import { Infographics } from './Infographics'
import { Numbers } from './Numbers'

export function HeroSection() {
  return (
    <div className='flex flex-col  gap-52'>
      <Header />
      {/* <Infographics /> */}
      <Numbers />
    </div>
  )
}
