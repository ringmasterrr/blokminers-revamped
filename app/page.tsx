import { HeroSection } from '@/components/Homepage/HeroSection/HeroSection'
import { Navbar } from '@/components/shared/Navbar/Navbar'
import { Page } from '@/components/shared/Page'

export default function Home() {
  return (
    <Page className='bg-grid justify-between p-0'>
      <Navbar />
      <HeroSection />
    </Page>
  )
}
