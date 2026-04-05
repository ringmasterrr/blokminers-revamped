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
import { VerticalOfferings } from '@/components/Homepage/VerticalOfferings/VerticalOfferings'
import { Page } from '@/components/shared/Page'
import TechStack from '@/components/Homepage/Tech Stack/TechStack'
import FAQs from '@/components/Homepage/Faqs/FAQs'
import TestimonialsSection from '@/components/Homepage/Testimonials/TestimonialsSection'
import Cta from '@/components/Homepage/CTA/Cta'
import DualExpertise from '@/components/Homepage/DualExpertise/DualExpertise'
import { StickyScrollRevealDemo } from '@/components/Homepage/Processes/OurProcess'
import { ParticleComponent } from '@/lib/particles'
import { OurProcess } from '@/components/Homepage/Process/OurProcess'

export default function Home() {
  return (
    <>
      <Page className='justify-between'>
        <ParticleComponent />
        <HeroSection />
        <ExploreSection />
      </Page>
      <DualExpertise />

      <VerticalOfferings />

      <WhySection />

      <OurProcess />
      {/* <StickyScrollRevealDemo /> */}
      <TestimonialsSection />
      <Page>
        <TechStack />
        <FAQs />
      </Page>
      <Cta />
    </>
  )
}
