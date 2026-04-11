'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion, PanInfo } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Shield,
  TrendingUp,
  Zap,
} from 'lucide-react'

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
    transition: { staggerChildren: 0.1 },
  },
}

const metrics = [
  {
    value: '25%',
    label: 'Efficiency boost',
    context: 'Healthcare AI Ops',
    icon: TrendingUp,
  },
  {
    value: '60%',
    label: 'Task Reduction',
    context: 'Manual Workflow Automation',
    icon: Zap,
  },
  {
    value: '$2M+',
    label: 'On-Chain Value',
    context: 'Smart Contracts Secured',
    icon: Shield,
  },
  {
    value: '3 Weeks',
    label: 'Speed to Market',
    context: 'First Live Automation',
    icon: CheckCircle2,
  },
]

const caseStudies = [
  {
    category: 'AI Automation',
    industry: 'Healthcare',
    title: 'AI Patient Operations Automation',
    challenge:
      'A 4-person admin team was spending 70% of working hours on scheduling and claims. Clinical teams were picking up the slack.',
    solution:
      'Deployed an AI agent handling intake, scheduling, and claims routing integrated directly with EHR systems.',
    result:
      '25% efficiency gain. One admin role redeployed to patient care. Claims processing cut from 3 days to 4 hours.',
    tags: ['EHR Integration', 'LLM Agents', 'HIPAA'],
  },
  {
    category: 'Blockchain',
    industry: 'Web3',
    title: 'Decentralized Asset Exchange Platform',
    challenge:
      'Startup needed a secure, compliant DEX built and audited in under 3 months to hit a critical fundraising milestone.',
    solution:
      'Full-stack dApp with custom AMM smart contracts, security audit, and Polygon deployment for gas efficiency.',
    result:
      'Launched on schedule. Zero incidents in 6 months. $400K seed round closed one week post-launch.',
    tags: ['Solidity', 'AMM', 'Security Audit'],
  },
  {
    category: 'Consulting',
    industry: 'FinTech',
    title: 'Blockchain Architecture Consulting',
    challenge:
      'A FinTech team had conflicting advice from vendors and spent 2 months circling on architecture choices.',
    solution:
      '2-week sprint: requirements mapping, protocol evaluation, and a final implementation spec.',
    result:
      'Decision made in 14 days. Saved an estimated $150K in rework by avoiding the wrong protocol choice.',
    tags: ['Architecture', 'Tokenomics', 'Strategy'],
  },
]

const AUTO_INTERVAL = 10_000
const DRAG_THRESHOLD = 60

// Helper to get responsive offset values
const getOffsetX = (side: 'left' | 'right', isMobile: boolean): string => {
  if (isMobile) {
    return side === 'left' ? '-35%' : '35%'
  }
  return side === 'left' ? '-58%' : '58%'
}

export default function SocialProof() {
  const [centerIndex, setCenterIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const total = caseStudies.length

  // Detect mobile screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const getPosition = (idx: number): 'left' | 'center' | 'right' | 'hidden' => {
    if (idx === centerIndex) return 'center'
    const leftIndex = (centerIndex - 1 + total) % total
    const rightIndex = (centerIndex + 1) % total
    if (idx === leftIndex) return 'left'
    if (idx === rightIndex) return 'right'
    return 'hidden'
  }

  const paginate = useCallback(
    (direction: 1 | -1) => {
      setCenterIndex((prev) => (prev + direction + total) % total)
    },
    [total],
  )

  const goToIndex = useCallback(
    (idx: number) => {
      setCenterIndex(idx)
      startAutoScroll()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => paginate(1), AUTO_INTERVAL)
  }, [paginate])

  const handleNav = useCallback(
    (dir: 1 | -1) => {
      paginate(dir)
      startAutoScroll()
    },
    [paginate, startAutoScroll],
  )

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const { offset, velocity } = info
      const swipedFar = Math.abs(offset.x) > DRAG_THRESHOLD
      const swipedFast = Math.abs(velocity.x) > 400
      if (swipedFar || swipedFast) {
        const dir = offset.x < 0 ? 1 : -1
        handleNav(dir)
      }
    },
    [handleNav],
  )

  useEffect(() => {
    startAutoScroll()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startAutoScroll])

  return (
    <section className='max-w-8xl overflow-x-hidden mx-auto overflow-y-visible bg-[#031d2c] py-16 md:py-24 lg:py-32'>
      <div className='mx-auto max-w-8xl px-4 md:px-6 lg:px-8'>
        {/* Heading */}
        <div className='max-w-4xl mx-auto mb-12 text-center md:mb-20'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-cyan-300'>
            Proof of Concept
          </p>
          <h2 className='mt-4 text-balance text-2xl font-extrabold leading-tight text-white md:text-3xl lg:text-5xl'>
            Real results from real projects, not just promises
          </h2>
        </div>

        {/* Metrics */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-2 gap-6 border-b border-white/10 pb-12 md:gap-8 md:pb-20 lg:grid-cols-4'
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={reveal}
              className='space-y-2'
            >
              <div className='mb-4 text-cyan-400'>
                <metric.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className='text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl'>
                {metric.value}
              </h3>
              <div>
                <p className='text-sm font-bold text-white/90'>
                  {metric.label}
                </p>
                <p className='mt-1 text-xs uppercase tracking-widest text-white/40'>
                  {metric.context}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel */}
        <div className='relative mt-12 flex flex-col items-center md:mt-20'>
          <div
            className='relative flex w-full justify-center'
            style={{ minHeight: isMobile ? 520 : 580 }}
          >
            {caseStudies.map((study, idx) => {
              const position = getPosition(idx)
              const isCenter = position === 'center'
              let animateProps = {
                x: '0%',
                scale: 0,
                opacity: 0,
                zIndex: -1,
              }
              if (position === 'center') {
                animateProps = {
                  x: '0%',
                  scale: 1,
                  opacity: 1,
                  zIndex: 10,
                }
              } else if (position === 'left') {
                animateProps = {
                  x: getOffsetX('left', isMobile),
                  scale: isMobile ? 0.75 : 0.85,
                  opacity: isMobile ? 0.2 : 0.4,
                  zIndex: 0,
                }
              } else if (position === 'right') {
                animateProps = {
                  x: getOffsetX('right', isMobile),
                  scale: isMobile ? 0.75 : 0.85,
                  opacity: isMobile ? 0.2 : 0.4,
                  zIndex: 0,
                }
              }

              return (
                <motion.article
                  key={idx}
                  animate={animateProps}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 28,
                    mass: 0.85,
                  }}
                  drag={isCenter ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={isCenter ? handleDragEnd : undefined}
                  onClick={() => {
                    if (!isCenter && position !== 'hidden') {
                      goToIndex(idx)
                    }
                  }}
                  className={`absolute flex w-[85%] max-w-[20rem] cursor-pointer select-none flex-col rounded-2xl border border-white/10 bg-[#0d2b3a] p-5 transition-colors hover:border-cyan-400/30 md:w-[88%] md:max-w-[22rem] md:rounded-3xl md:p-7 lg:w-[46%] lg:max-w-[34rem] ${
                    isCenter ? 'cursor-grab active:cursor-grabbing' : ''
                  }`}
                  style={{ willChange: 'transform' }}
                >
                  <div className='mb-8 flex items-start justify-between md:mb-12'>
                    <div className='space-y-1'>
                      <span className='text-[10px] font-black uppercase tracking-widest text-cyan-400'>
                        {study.category}
                      </span>
                      <p className='text-xs text-white/40'>{study.industry}</p>
                    </div>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/20 transition-all group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black md:h-10 md:w-10'>
                      <ArrowUpRight
                        size={16}
                        className='md:h-[18px] md:w-[18px]'
                      />
                    </div>
                  </div>

                  <h4 className='mb-4 text-xl font-semibold text-white group-hover:text-cyan-200 md:mb-6 md:text-2xl'>
                    {study.title}
                  </h4>

                  <div className='flex-grow space-y-4 md:space-y-6'>
                    <div>
                      <p className='mb-2 text-[10px] font-bold uppercase text-white/30'>
                        The Challenge
                      </p>
                      <p className='text-xs leading-relaxed text-white/60 md:text-sm'>
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p className='mb-2 text-[10px] font-bold uppercase text-white/30'>
                        Our Solution
                      </p>
                      <p className='text-xs leading-relaxed text-white/60 md:text-sm'>
                        {study.solution}
                      </p>
                    </div>
                    <div className='rounded-xl bg-cyan-400/5 p-3 ring-1 ring-cyan-400/20 md:rounded-2xl md:p-4'>
                      <p className='mb-1 text-[10px] font-bold uppercase text-cyan-400'>
                        Result
                      </p>
                      <p className='text-xs font-medium leading-relaxed text-cyan-50/90 md:text-sm'>
                        {study.result}
                      </p>
                    </div>
                  </div>

                  <div className='mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-4 md:mt-8 md:pt-6'>
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-md border border-white/10 px-2 py-1 text-[9px] font-bold uppercase text-white/30'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* Controls */}
          <div className='mt-10 flex items-center gap-4 md:mt-8 md:gap-6'>
            <button
              onClick={() => handleNav(-1)}
              className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-cyan-400 hover:text-black md:h-12 md:w-12'
              aria-label='Previous'
            >
              <ChevronLeft size={18} className='md:h-5 md:w-5' />
            </button>

            <div className='flex gap-1.5 md:gap-2'>
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 md:h-2 ${
                    i === centerIndex
                      ? 'w-5 bg-cyan-400 md:w-6'
                      : 'w-1.5 bg-white/20 hover:bg-white/40 md:w-2'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleNav(1)}
              className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-cyan-400 hover:text-black md:h-12 md:w-12'
              aria-label='Next'
            >
              <ChevronRight size={18} className='md:h-5 md:w-5' />
            </button>
          </div>
        </div>

        {/* CTA - refined, more compact and blending */}
        <motion.div
          variants={reveal}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='mt-16 flex flex-col items-center justify-between gap-6 rounded-xl border border-white/10 bg-gradient-to-r from-cyan-500/90 to-blue-600/90 p-6 shadow-xl backdrop-blur-sm md:mt-20 md:flex-row md:gap-8 md:rounded-2xl md:p-8 lg:p-10'
        >
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-bold text-white md:text-2xl'>
              Ready to see these numbers in your business?
            </h3>
            <p className='mt-1 text-sm text-white/80 md:mt-2 md:text-base'>
              Let&apos;s map out your ROI before writing a single line of code.
            </p>
          </div>
          <Link
            href='/contact'
            className='whitespace-nowrap rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#031d2c] transition-all hover:bg-cyan-50 hover:shadow-lg md:px-8 md:py-4 md:text-base'
          >
            Book Discovery Call
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
