import { TestimonialService } from '@/services/testimonials'
import TestimonialCarousel from './Corousel'

const testimonials = new TestimonialService()

export default async function TestimonialsSection() {
  const data = await testimonials.getAllTestimonials()

  const fallbackData = [
    {
      name: 'Darshan Kothari',
      title: 'CEO',
      company: 'BlokMiners AI',
      industry: 'Healthcare',
      quote:
        'The machine learning insights directly drove a 25% boost in operational efficiency within 90 days of deployment. We have since expanded to two more departments.',
    },
    {
      name: 'Vansh Jain',
      title: 'CEO',
      company: 'Web3 Platform',
      industry: 'Web3',
      quote:
        'BlokMiners hit the deadline and their smart contract audit caught two critical vulnerabilities before launch. In this space, that audit may have saved us from a catastrophic exploit.',
    },
    {
      name: 'Dr Ravi Chamaria',
      title: 'CEO',
      company: 'Blockchain Vision',
      industry: 'FinTech',
      quote:
        'Their consulting team made complex architecture decisions clear. They delivered a smart contract system that has processed over $800K in transactions without a single incident.',
    },
    {
      name: 'Vansh K.',
      title: 'Founder',
      company: 'CryptoGrad',
      industry: 'Web3',
      quote:
        'BlokMiners built our AI-driven trading engine from scratch. The intelligence layer they integrated is sharp, it reads market signals in real time and executes with precision. Our users have seen measurable gains in trade performance since launch.',
    },
    {
      name: 'Aman Mohindra',
      title: 'Founder',
      company: 'Bookitngo',
      industry: 'Web3',
      quote:
        "The team delivered a next-gen travel platform, an AI agent that books trips autonomously, combined with tokenised room inventory on-chain. It's a genuinely novel product. BlokMiners understood both the Web3 mechanics and the product vision from day one.",
    },
    {
      name: 'Claudio',
      title: 'Founder',
      company: 'Realhub',
      industry: 'FinTech',
      quote:
        "We needed a robust RWA tokenisation framework for real estate assets, and BlokMiners delivered a secure, compliant smart contract architecture. The token design is clean, the dashboard intuitive, and the team's blockchain expertise is genuinely world-class.",
    },
    {
      name: 'Roshan S.',
      title: 'Trader',
      company: 'Custom MT5 Trading Bot',
      industry: 'FinTech',
      quote:
        'My gold trading strategy was complex with custom entry/exit logic, dynamic lot sizing, and tight risk parameters on MT5. BlokMiners coded it exactly as I envisioned, backtested it rigorously, and delivered a live-ready bot. The communication throughout was excellent.',
    },
    {
      name: 'Ahmed H.',
      title: 'Founder',
      company: 'Telegram Trading Bot',
      industry: 'FinTech',
      quote:
        'BlokMiners built my Telegram trading bot with three strategy modes: Grid, Martingale, and DCA, all switchable on the fly. The bot handles everything autonomously with clean Telegram commands. Exactly what I needed. Fast delivery, zero bugs in production.',
    },
    {
      name: 'Mike R.',
      title: 'Founder',
      company: 'SocialSwap',
      industry: 'Web3',
      quote:
        'Building a DEX aggregator on TRON required deep protocol knowledge and performance optimisation. BlokMiners nailed the routing logic, integrated multiple liquidity pools, and shipped a slick front end. SocialSwap is live and outperforming competitors on swap rates.',
    },
    {
      name: 'Aditya V.',
      title: 'Founder',
      company: 'BlockTickets',
      industry: 'Web3',
      quote:
        "BlokMiners turned a concept into a full-featured event ticketing platform where every ticket is minted as a unique NFT. The smart contracts are airtight, fraud-proof, and resale logic is built right in. We've already sold out two events and the feedback has been incredible.",
    },
  ]

  const displayData = fallbackData

  return (
    <section className='relative mx-auto w-full max-w-8xl overflow-hidden bg-[#031d2c] py-16 sm:py-20 lg:py-28'>
      {/* Background Ambience */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent blur-[120px]' />
      </div>
      <div className='relative z-20 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto mb-12 text-center sm:mb-16 lg:mb-20'>
          <div className='mb-6 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5'>
            <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400'>
              Hear from our clients
            </span>
          </div>
          <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
            Don&apos;t take our word for it
          </h2>
          <p className='mt-5 text-base text-slate-400 sm:mt-6 sm:text-lg'>
            Our clients love working with us, just read what they have to say
            about the specific ROI we&apos;ve delivered.
          </p>
        </div>
        <TestimonialCarousel testimonials={displayData} />
      </div>
    </section>
  )
}
