'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { industries } from './industriesData'

export default function IndustryAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onResize = () => {
      const desktop = window.innerWidth >= 768
      setIsDesktop(desktop)
      // Auto-expand first item on desktop, keep all closed on mobile
      if (desktop) setExpandedIndex(0)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return
    const scrollAmount = container.clientWidth * 0.8
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const handleToggle = (idx: number) => {
    if (isDesktop) {
      setExpandedIndex(idx)
    } else {
      setExpandedIndex((prev) => (prev === idx ? null : idx))
    }
  }

  return (
    <section className='mx-auto w-full max-w-8xl overflow-hidden bg-[#03263A] py-16 sm:py-20 lg:py-28'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-4xl mx-auto mb-12 text-center sm:mb-16'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-cyan-300'>
            Industry Verticals
          </p>
          <h2 className='mt-4 text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl'>
            Deep experience across the industries that need us most
          </h2>
          <p className='max-w-4xl mx-auto mt-5 text-balance text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl'>
            We understand your sector and compliance requirements so our
            solutions actually get adopted.
          </p>
        </div>

        {/* Desktop Container with Nav Buttons */}
        <div className='group relative px-0 md:px-12'>
          {isDesktop && (
            <>
              <button
                onClick={() => scroll('left')}
                className='absolute left-0 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a1120]/90 text-cyan-200 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:text-black'
                aria-label='Scroll left'
              >
                <ChevronLeft size={28} strokeWidth={2} />
              </button>
              <button
                onClick={() => scroll('right')}
                className='absolute right-0 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a1120]/90 text-cyan-200 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:text-black'
                aria-label='Scroll right'
              >
                <ChevronRight size={28} strokeWidth={2} />
              </button>
            </>
          )}

          {/* Main List */}
          <div
            ref={scrollContainerRef}
            className={`flex w-full gap-4 transition-all duration-500 ${
              isDesktop
                ? 'snap-x snap-mandatory flex-row overflow-x-auto pb-8 pt-4'
                : 'flex-col'
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {industries.map((industry, idx) => {
              const isExpanded = expandedIndex === idx
              const Icon = industry.icon

              return (
                <div
                  key={industry.title}
                  onMouseEnter={() => isDesktop && setExpandedIndex(idx)}
                  onClick={() => handleToggle(idx)}
                  className='ease-[cubic-bezier(0.32,0.72,0,1)] relative flex-shrink-0 cursor-pointer overflow-hidden rounded-[1.5rem] bg-[#0a1120] transition-all duration-500'
                  style={{
                    width: isDesktop
                      ? isExpanded
                        ? '600px'
                        : '140px'
                      : '100%',
                    height: isDesktop ? '780px' : isExpanded ? 'auto' : '84px',
                  }}
                >
                  {/* Visual Background */}
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-700'
                    style={{
                      backgroundImage: `url(${industry.image})`,
                      opacity: isExpanded ? 0.2 : 0.35,
                      transform: isExpanded ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#03263A]/80 to-[#03263A]' />

                  {/* Content Container */}
                  <div className='relative flex h-full flex-col p-6 md:p-8'>
                    <div className='flex items-center justify-between gap-4'>
                      <div className='flex items-center gap-4'>
                        <div
                          className='shrink-0 rounded-2xl p-3 transition-all duration-500'
                          style={{
                            background: isExpanded
                              ? '#22d3ee'
                              : 'rgba(255,255,255,0.05)',
                            color: isExpanded
                              ? '#00283C'
                              : 'rgba(255,255,255,0.4)',
                          }}
                        >
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3
                          className={`text-xl font-bold text-white transition-all duration-300 ${isDesktop && !isExpanded ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'}`}
                        >
                          {industry.title}
                        </h3>
                      </div>

                      {!isDesktop && (
                        <div
                          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-cyan-400' : 'text-white/20'}`}
                        >
                          <ChevronDown size={24} />
                        </div>
                      )}
                    </div>

                    {/* Desktop Vertical Title */}
                    {isDesktop && !isExpanded && (
                      <div className='pointer-events-none absolute inset-x-0 bottom-24 flex justify-center'>
                        <span className='rotate-180 whitespace-nowrap text-base font-bold uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl]'>
                          {industry.title}
                        </span>
                      </div>
                    )}

                    {/* Detailed Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className='flex-grow'
                        >
                          <div className='mt-10 space-y-8 pb-4'>
                            <div className='max-w-md'>
                              <p className='mb-3 text-[11px] font-black uppercase tracking-[0.3em] text-cyan-400'>
                                The Opportunity
                              </p>
                              <p className='text-lg font-medium leading-relaxed text-white/95 md:text-2xl'>
                                {industry.painPoint}
                              </p>
                            </div>

                            <div className='grid grid-cols-1 gap-5'>
                              <div className='rounded-3xl border border-white/5 bg-white/[0.04] p-6 backdrop-blur-sm'>
                                <p className='mb-2 text-[10px] font-black uppercase tracking-widest text-cyan-400'>
                                  AI & Automation
                                </p>
                                <p className='text-sm leading-relaxed text-slate-300'>
                                  {industry.ai}
                                </p>
                              </div>

                              <div className='rounded-3xl border border-white/5 bg-white/[0.04] p-6 backdrop-blur-sm'>
                                <p className='mb-2 text-[10px] font-black uppercase tracking-widest text-blue-400'>
                                  Blockchain & Web3
                                </p>
                                <p className='text-sm leading-relaxed text-slate-300'>
                                  {industry.blockchain}
                                </p>
                              </div>
                            </div>

                            <div className='flex flex-wrap gap-2 pt-4'>
                              {industry.keyAreas.map((tag) => (
                                <span
                                  key={tag}
                                  className='rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/30'
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
