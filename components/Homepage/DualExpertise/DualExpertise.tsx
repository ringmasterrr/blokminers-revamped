'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
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

const listContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const listItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

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
    <motion.ul variants={listContainer} className='space-y-4'>
      {items.map((item) => (
        <motion.li
          key={item}
          variants={listItem}
          className={`flex items-start gap-3 text-sm font-medium leading-relaxed sm:text-base ${textClassName}`}
        >
          <span
            className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotClassName}`}
          />
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default function DualExpertise() {
  const cardStageRef = useRef<HTMLDivElement | null>(null)
  const autoRotatePauseUntilRef = useRef(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isCardStageInView = useInView(cardStageRef, {
    once: true,
    margin: '-80px',
  })
  const [activeCard, setActiveCard] = useState<'ai' | 'blockchain'>('ai')

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      // Only rotate if the pause period has expired
      if (Date.now() >= autoRotatePauseUntilRef.current) {
        setActiveCard((prev) => (prev === 'ai' ? 'blockchain' : 'ai'))
      }
    }, 12000)
  }

  const stopAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    if (!isCardStageInView) return
    startAutoRotate()
    return () => stopAutoRotate()
  }, [isCardStageInView])

  const handleCardSelect = (card: 'ai' | 'blockchain') => {
    // Pause auto‑rotation for 15 seconds after manual selection
    autoRotatePauseUntilRef.current = Date.now() + 15000
    setActiveCard(card)
    // Ensure interval is running (it will respect the pause flag)
    startAutoRotate()
  }

  const cardContent =
    activeCard === 'ai'
      ? {
          key: 'ai',
          icon: BrainCircuit,
          eyebrow: 'AI & Automation',
          title: 'Make your business run itself',
          description:
            'We design and deploy AI agents that work 24/7 without a salary. We automate repetitive operations, build LLM-powered tools trained on your data, and focus on the clearest ROI opportunities first.',
          panelLabel: 'What this means for your bottom line:',
          points: aiPoints,
          dotClassName: 'bg-cyan-400',
          textClassName: 'text-slate-200',
          cardClassName:
            'border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 text-left text-white shadow-2xl shadow-slate-900/20',
          iconClassName:
            'bg-gradient-to-br from-cyan-500/30 to-teal-500/20 text-cyan-400 ring-1 ring-cyan-500/30',
          eyebrowClassName: 'text-white/60',
          titleClassName: 'text-white',
          descriptionClassName: 'text-slate-300',
          panelClassName: 'bg-white/5 ring-1 ring-white/10',
          panelTitleClassName: 'text-white',
          footerClassName: 'text-white/60',
          footer:
            'AI Agent Development | Workflow Automation | LLM & Chatbot Dev | AI Strategy',
        }
      : {
          key: 'blockchain',
          icon: Blocks,
          eyebrow: 'Blockchain & Web3',
          title:
            'Build on the decentralized web with security engineered in from day one',
          description:
            'We architect production-grade blockchain systems, smart contracts that execute trustlessly, DeFi protocols that handle real value, and full-stack Web3 applications with polished UX.',
          panelLabel: 'What this means for your project:',
          points: blockchainPoints,
          dotClassName: 'bg-cyan-400',
          textClassName: 'text-slate-200',
          cardClassName:
            'border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 text-left text-white shadow-2xl shadow-slate-900/20',
          iconClassName:
            'bg-gradient-to-br from-cyan-500/30 to-teal-500/20 text-cyan-400 ring-1 ring-cyan-500/30',
          eyebrowClassName: 'text-white/60',
          titleClassName: 'text-white',
          descriptionClassName: 'text-slate-300',
          panelClassName: 'bg-white/5 ring-1 ring-white/10',
          panelTitleClassName: 'text-white',
          footerClassName: 'text-white/60',
          footer:
            'Blockchain Development | Smart Contracts & DeFi | NFT Platforms | Web3 Consulting',
        }

  const ActiveIcon = cardContent.icon
  const cardPanel = (
    <div className='flex w-full flex-col items-center justify-center'>
      <div className='mb-5 inline-flex flex-wrap justify-center rounded-full border border-white/10 bg-slate-950/35 p-1 backdrop-blur-md'>
        <button
          type='button'
          onClick={() => handleCardSelect('ai')}
          className={`rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:px-4 sm:text-xs sm:tracking-[0.18em] ${
            activeCard === 'ai'
              ? 'bg-cyan-400 text-slate-950'
              : 'text-white/65 hover:text-white'
          }`}
        >
          AI & Automation
        </button>
        <button
          type='button'
          onClick={() => handleCardSelect('blockchain')}
          className={`rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:px-4 sm:text-xs sm:tracking-[0.18em] ${
            activeCard === 'blockchain'
              ? 'bg-cyan-400 text-slate-950'
              : 'text-white/65 hover:text-white'
          }`}
        >
          Blockchain & Web3
        </button>
      </div>

      <AnimatePresence mode='wait'>
        <motion.article
          key={cardContent.key}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`group relative mx-auto flex w-full flex-col rounded-3xl border p-5 pb-16 sm:max-w-[32rem] sm:p-8 sm:pb-24 md:max-w-[40rem] md:max-w-[95%] lg:max-w-[60rem] ${cardContent.cardClassName}`}
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${cardContent.iconClassName}`}
          >
            <ActiveIcon size={24} strokeWidth={1.5} />
          </div>
          <p
            className={`mt-6 text-sm font-bold uppercase tracking-[0.26em] ${cardContent.eyebrowClassName}`}
          >
            {cardContent.eyebrow}
          </p>
          <h3
            className={`mt-4 text-lg font-bold sm:text-2xl ${cardContent.titleClassName}`}
          >
            {cardContent.title}
          </h3>
          <p
            className={`mt-4 text-sm leading-relaxed sm:text-base ${cardContent.descriptionClassName}`}
          >
            {cardContent.description}
          </p>
          <div
            className={`mt-6 rounded-2xl p-4 sm:p-5 ${cardContent.panelClassName}`}
          >
            <p
              className={`mb-4 text-sm font-bold ${cardContent.panelTitleClassName}`}
            >
              {cardContent.panelLabel}
            </p>
            <motion.div initial='hidden' animate='visible' variants={reveal}>
              <InfoList
                items={cardContent.points}
                dotClassName={cardContent.dotClassName}
                textClassName={cardContent.textClassName}
              />
            </motion.div>
          </div>
          <p
            className={`mt-6 text-xs font-bold uppercase tracking-[0.2em] ${cardContent.footerClassName}`}
          >
            {cardContent.footer}
          </p>
          <div className='absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition-colors duration-300 sm:bottom-6 sm:right-6 sm:h-11 sm:w-11'>
            <ArrowUpRight size={18} strokeWidth={2} />
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  )

  return (
    <section className='sm:py-18 mx-auto max-w-8xl px-4 py-14 lg:py-24'>
      <div className='max-w-7xl mx-auto space-y-9 sm:space-y-14'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-theme-light'>
            What we do
          </p>
          <h2 className='mt-4 text-balance text-3xl font-extrabold leading-tight text-theme-dark sm:text-4xl lg:text-5xl'>
            Two cutting-edge technologies. One expert team. Zero compromise.
          </h2>
        </div>

        <div ref={cardStageRef} className='shadow-2xl shadow-slate-900/10'>
          <div className='relative overflow-hidden rounded-3xl'>
            <CosmicParallaxBg
              head='BlokMiners'
              text='AI Automation, Blockchain, One System'
              showText={false}
              className='min-h-[86rem] sm:min-h-[66rem] lg:min-h-[72rem]'
            />
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-slate-900/20 via-slate-900/45 to-slate-900/85' />
            <div className='absolute inset-x-0 top-0 z-20 flex justify-center px-4 pt-10 sm:px-8 sm:pt-16 lg:pt-20'>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-100px' }}
                variants={reveal}
                className='max-w-5xl flex w-full flex-col items-center text-center'
              >
                <span className='inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-sm'>
                  <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400' />
                  AI + Blockchain
                </span>
                <h3 className='max-w-5xl mt-7 text-balance text-center text-3xl font-extrabold leading-[0.98] tracking-tight text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl'>
                  AI automation and blockchain, one system.
                </h3>
                <div className='max-w-4xl mt-5 w-full sm:mt-6'>
                  <p className='text-balance text-center text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl'>
                    Most forward-thinking businesses need both: AI automation to
                    cut operational costs and move faster today, and blockchain
                    infrastructure to build trust, security, and competitive
                    advantage tomorrow.
                  </p>
                </div>

                <div className='max-w-4xl mt-10 hidden w-full pb-8 sm:mt-12 sm:block sm:pb-12'>
                  {cardPanel}
                </div>
              </motion.div>
            </div>
          </div>

          <div className='pb-2 pt-4 sm:hidden'>{cardPanel}</div>
        </div>
      </div>
    </section>
  )
}
