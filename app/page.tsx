import { HeroSection } from '@/components/Homepage/HeroSection/HeroSection'
import { VerticalOfferings } from '@/components/Homepage/VerticalOfferings/VerticalOfferings'
import { Navbar } from '@/components/shared/Navbar/Navbar'
import { Page } from '@/components/shared/Page'

export default function Home() {
  return (
    <Page className='justify-between p-0'>
      <Navbar />
      <HeroSection />
      <VerticalOfferings/>
    </Page>
  )
}
