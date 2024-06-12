import ExploreSection from '@/components/Homepage/Explore/ExlploreSection'
import { HeroSection } from '@/components/Homepage/HeroSection/HeroSection'
import WhySection from '@/components/Homepage/Why/WhySection'
import { Navbar } from '@/components/shared/Navbar/Navbar'
import { Page } from '@/components/shared/Page'

export default function Home() {
  return (
    <Page className='bg-grid justify-between p-8'>
      {/* <Navbar /> */}
      <HeroSection />
      <ExploreSection />
      <WhySection />
    </Page>
  )
}
