import { Header } from './Header'
import { Infographics } from './Infographics'

export function HeroSection() {
  return (
    <div className='flex justify-between'>
      <Header />
      <Infographics />
    </div>
  )
}
