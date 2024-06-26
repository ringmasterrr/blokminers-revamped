import ExploreSection from '@/components/Homepage/Explore/ExlploreSection'
import  {HeroSection}  from '@/components/Homepage/HeroSection/HeroSection'
import WhySection from '@/components/Homepage/Why/WhySection'
import { VerticalOfferings } from '@/components/Homepage/VerticalOfferings/VerticalOfferings'
import { Page } from '@/components/shared/Page'
import Box from '@/components/ui/box'
import TechStack from '@/components/Homepage/Tech Stack/TechStack'
import FAQs from '@/components/Homepage/Faqs/FAQs'
import TestimonialsSection from '@/components/Homepage/Testimonials/TestimonialsSection'
import Cta from '@/components/Homepage/CTA/Cta'
import { StickyScrollRevealDemo } from '@/components/Homepage/Processes/OurProcess'
import { ParticleComponent } from '@/lib/particles'


export default function Home() {
  return (
    <Page className='justify-between px-8'> 
    <ParticleComponent />
      <HeroSection />
      {/* <Box /> */}
      <ExploreSection />
      <VerticalOfferings />
      <WhySection />
      <StickyScrollRevealDemo/>
      <TestimonialsSection />
      <TechStack />
      <FAQs />
      <Cta />
    </Page>
  )
}
