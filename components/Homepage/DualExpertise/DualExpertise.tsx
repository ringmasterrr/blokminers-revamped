'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Blocks, BrainCircuit } from 'lucide-react'

import { CosmicParallaxBg } from '@/components/ui/parallax-cosmic-background'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const aiPoints = [
  '20 to 60% reduction in time spent on manual tasks across operations',
  'Customer-facing AI agents handling queries at a fraction of the cost of a full support team',
  'Faster decisions with AI surfacing the right data at the right time automatically',
  'No more bottlenecks with workflows that complete themselves while your team focuses on growth',
]

const blockchainPoints = [
  'Immutable, transparent records that eliminate the need to trust any central intermediary',
  'Smart contracts audited before deployment with no critical vulnerabilities and no expensive surprises',
  'Decentralized architecture that cannot be censored, shut down, or manipulated by any single party',
  'On-chain transactions that settle in seconds, not days, reducing counterparty risk and friction',
]

function InfoList({
  items,
  dotClassName,
  textClassName,
}: {
  items: string[]
  dotClassName: string
  textClassName: string
}) {
  return (
    <ul className='space-y-4'>
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 text-sm font-medium leading-relaxed sm:text-base ${textClassName}`}
        >
          <span
            className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotClassName}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function DualExpertise() {
  return (
    <section className='bg-slate-50 px-4 py-16 sm:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto space-y-10 sm:space-y-14'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-theme-light'>
            What we do
          </p>
          <h2 className='mt-4 text-balance text-3xl font-extrabold leading-tight text-theme-dark sm:text-4xl lg:text-5xl'>
            Two cutting-edge technologies. One expert team. Zero compromise.
          </h2>
        </div>

        <div className='shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5'>
          <div className='relative overflow-hidden rounded-t-3xl'>
            <CosmicParallaxBg
              head='BlokMiners'
              text='AI Automation, Blockchain, One System'
              showText={false}
              className='min-h-[28rem] sm:min-h-[32rem] lg:min-h-[36rem]'
            />
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-slate-900/20 via-slate-900/45 to-slate-900/85' />
            <div className='absolute inset-x-0 top-0 z-20 flex justify-center px-5 pt-12 sm:px-8 sm:pt-16 lg:pt-20'>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-100px' }}
                variants={reveal}
                className='max-w-6xl flex w-full flex-col items-center text-center'
              >
                <span className='inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-sm'>
                  <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400' />
                  AI + Blockchain
                </span>
                <h3 className='max-w-5xl mt-8 text-balance text-center text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl'>
                  AI automation and blockchain, one system.
                </h3>
                <p className='max-w-4xl mt-6 text-balance text-center text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl'>
                  Most forward-thinking businesses need both: AI automation to
                  cut operational costs and move faster today, and blockchain
                  infrastructure to build trust, security, and competitive
                  advantage tomorrow.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className='grid gap-5 sm:gap-6 xl:grid-cols-2'
        >
          <motion.article
            variants={reveal}
            className='group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5 transition-shadow hover:shadow-xl sm:p-8'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'>
              <BrainCircuit size={24} strokeWidth={1.5} />
            </div>
            <p className='mt-6 text-sm font-bold uppercase tracking-[0.26em] text-theme-light'>
              AI & Automation
            </p>
            <h3 className='mt-4 text-xl font-bold text-slate-900 sm:text-2xl'>
              Make your business run itself
            </h3>
            <p className='mt-4 text-sm leading-relaxed text-slate-600 sm:text-base'>
              We design and deploy AI agents that work 24/7 without a salary. We
              automate your repetitive ops workflows, build LLM-powered tools
              trained on your data, and consult on exactly where AI generates
              the clearest ROI in your business, whether that is cutting $50,000
              in annual admin costs or reducing customer response time from 4
              hours to 4 minutes.
            </p>
            <div className='mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100'>
              <p className='mb-4 text-sm font-bold text-slate-900'>
                What this means for your bottom line:
              </p>
              <InfoList
                items={aiPoints}
                dotClassName='bg-blue-600'
                textClassName='text-slate-700'
              />
            </div>
            <p className='mt-6 text-xs font-bold uppercase tracking-[0.2em] text-theme-light'>
              AI Agent Development | Workflow Automation | LLM & Chatbot Dev |
              AI Strategy
            </p>
          </motion.article>

          <motion.article
            variants={reveal}
            className='group flex flex-col rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 p-7 text-white shadow-2xl shadow-slate-900/20 transition-shadow hover:shadow-cyan-500/10 sm:p-8'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-teal-500/20 text-cyan-400 ring-1 ring-cyan-500/30'>
              <Blocks size={24} strokeWidth={1.5} />
            </div>
            <p className='mt-6 text-sm font-bold uppercase tracking-[0.26em] text-white/60'>
              Blockchain & Web3
            </p>
            <h3 className='mt-4 text-xl font-bold text-white sm:text-2xl'>
              Build on the decentralized web with security engineered in from
              day one
            </h3>
            <p className='mt-4 text-sm leading-relaxed text-slate-300 sm:text-base'>
              We architect and deliver production-grade blockchain systems,
              smart contracts that execute trustlessly, DeFi protocols that
              handle real value, NFT platforms built for scale, and full-stack
              Web3 applications with polished UX. Security is not a feature we
              add at the end; it is the foundation we build from.
            </p>
            <div className='mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10'>
              <p className='mb-4 text-sm font-bold text-white'>
                What this means for your project:
              </p>
              <InfoList
                items={blockchainPoints}
                dotClassName='bg-cyan-400'
                textClassName='text-slate-200'
              />
            </div>
            <p className='mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/60'>
              Blockchain Development | Smart Contracts & DeFi | NFT Platforms |
              Web3 Consulting
            </p>
          </motion.article>
        </motion.div>

        <motion.article
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
          variants={reveal}
          className='rounded-3xl border border-cyan-200/50 bg-gradient-to-br from-cyan-50 to-slate-50 p-7 sm:p-8'
        >
          <span className='inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan-700'>
            <span className='h-1 w-4 rounded-full bg-cyan-500' />
            Bridge
          </span>
          <div className='mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
            <p className='max-w-4xl text-base leading-relaxed text-slate-700 sm:text-lg'>
              Most forward-thinking businesses need both: AI automation to cut
              operational costs and move faster today, and blockchain
              infrastructure to build trust, security, and competitive advantage
              tomorrow. We are the only team you need for both and the only one
              that understands how they work together.
            </p>
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'>
              <ArrowUpRight size={18} strokeWidth={2} />
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
