import ExploreSection from '@/components/Homepage/Explore/ExlploreSection'
import { HeroSection } from '@/components/Homepage/HeroSection/HeroSection'
import WhySection from '@/components/Homepage/Why/WhySection'
import { VerticalOfferings } from '@/components/Homepage/VerticalOfferings/VerticalOfferings'
import { Navbar } from '@/components/shared/Navbar/Navbar'
import { Page } from '@/components/shared/Page'
import Box from '@/components/ui/box'

export default function Home() {
  return (
    <Page className='justify-between'>
      {/* <Navbar /> */}
      <HeroSection />
      <Box/>
      <ExploreSection />
      <WhySection />
      <VerticalOfferings/>
    </Page>
  )
}
