import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'AI Automation & Blockchain Development Agency | BlokMiners',
  description:
    'BlokMiners builds AI agents, workflow automation, and blockchain solutions for healthcare, finance, logistics and retail. Book a free 30-minute discovery call.',
  keywords: [
    'AI automation agency India',
    'blockchain development company',
    'AI agent development service',
  ],
}

import ExploreSection from '@/components/Homepage/Explore/ExlploreSection'
import { HeroSection } from '@/components/Homepage/HeroSection/HeroSection'
import WhySection from '@/components/Homepage/Why/WhySection'
import { Page } from '@/components/shared/Page'
import TechStack from '@/components/Homepage/Tech Stack/TechStack'
import FAQs from '@/components/Homepage/Faqs/FAQs'
import TestimonialsSection from '@/components/Homepage/Testimonials/TestimonialsSection'
import Cta from '@/components/Homepage/CTA/Cta'
import DualExpertise from '@/components/Homepage/DualExpertise/DualExpertise'
import { ParticleComponent } from '@/lib/particles'
import { OurProcess } from '@/components/Homepage/Process/OurProcess'
import IndustrySection from '@/components/Homepage/VerticalOfferings/VerticalOfferingsNew'
import SocialProof from '@/components/Homepage/SocialProof/SocialProof'
import ProcessSection from '@/components/Homepage/Process/OurProcessnew'
// import { IndustryVerticals } from '@/components/Homepage/VerticalOfferings/VerticalOfferingsNew'
// import { IndustryVerticalsStickyScroll } from '@/components/Homepage/VerticalOfferings/VerticalOfferingsNew'

export default function Home() {
  return (
    <>
      <Page className='justify-between'>
        <ParticleComponent />
        <HeroSection />
        <ExploreSection />
      </Page>
      <DualExpertise />

      {/* <VerticalOfferings /> */}
      <IndustrySection />

      <WhySection />
      <SocialProof />

      {/* <OurProcess /> */}
      <ProcessSection />
      <TestimonialsSection />
      <Page>
        <TechStack />
        <FAQs />
      </Page>
      <Cta />
    </>
  )
}
