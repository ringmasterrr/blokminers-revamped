'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { industries } from './industriesData'

export default function IndustryAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return
    container.scrollBy({
      left:
        direction === 'left'
          ? -container.clientWidth * 0.8
          : container.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  return (
    <section className='mx-auto w-full max-w-8xl overflow-hidden bg-[#03263A] py-16 sm:py-20 lg:py-28'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto mb-12 text-center sm:mb-16'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-cyan-300'>
            Industry Verticals
          </p>
          <h2 className='mt-4 text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl'>
            Deep experience across the industries that need us most
          </h2>
          <p className='max-w-4xl mx-auto mt-5 text-balance text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl'>
            We do not just deliver code. We understand your sector, compliance
            requirements, and competitive pressure so our solutions get adopted.
          </p>
        </div>

        <div className='relative'>
          {/* Navigation Controls */}
          <button
            onClick={() => scroll('left')}
            className='absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a1120]/80 text-cyan-200 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-[#0a1120] md:flex'
            style={{ left: '-0.5rem' }}
            aria-label='Scroll left'
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          <button
            onClick={() => scroll('right')}
            className='absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a1120]/80 text-cyan-200 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-[#0a1120] md:flex'
            style={{ right: '-0.5rem' }}
            aria-label='Scroll right'
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>

          {/* FIX: added 'items-start' to prevent vertical stretching */}
          <div
            ref={scrollContainerRef}
            className='flex w-full snap-x snap-mandatory items-start gap-4 overflow-x-auto md:gap-5 md:p-6'
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
                  onMouseEnter={() => {
                    if (isDesktop) setExpandedIndex(idx)
                  }}
                  onClick={() => {
                    if (!isDesktop)
                      setExpandedIndex((prev) => (prev === idx ? null : idx))
                  }}
                  className='relative flex-shrink-0 cursor-pointer snap-start overflow-hidden rounded-[2rem] bg-[#0a1120] sm:rounded-[2.5rem]'
                  style={{
                    width: isExpanded
                      ? isDesktop
                        ? '600px'
                        : '85vw'
                      : isDesktop
                        ? '140px'
                        : '200px',
                    // FIX: Constant height on desktop ensures smooth horizontal transitions
                    height: isDesktop
                      ? '780px'
                      : isExpanded
                        ? '780px'
                        : '128px',
                    transition:
                      'width 0.5s cubic-bezier(0.32, 0.72, 0, 1), height 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: 'auto',
                  }}
                >
                  {/* Background image */}
                  <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                      backgroundImage: `url(${industry.image})`,
                      opacity: isExpanded ? 0.25 : 0.4,
                      transition: 'opacity 0.7s ease',
                    }}
                  />

                  {/* Overlay */}
                  <div
                    className='absolute inset-0 bg-[#03263A]'
                    style={{
                      opacity: isExpanded ? 0.85 : 0.6,
                      transition: 'opacity 0.5s ease',
                    }}
                  />

                  <div className='relative flex h-full flex-col p-5 sm:p-6 md:p-8'>
                    {/* Header row */}
                    <div className='mb-6 flex w-full items-center gap-3 sm:gap-4 md:mb-8'>
                      <div
                        className='shrink-0 rounded-2xl p-3 sm:p-3.5'
                        style={{
                          background: isExpanded
                            ? '#5BBEF7'
                            : 'rgba(255,255,255,0.05)',
                          color: isExpanded
                            ? '#00283C'
                            : 'rgba(255,255,255,0.4)',
                          transition: 'background 0.5s ease, color 0.5s ease',
                        }}
                      >
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <h3
                        className='overflow-hidden whitespace-nowrap text-lg font-bold text-white sm:text-xl md:text-2xl'
                        style={{
                          opacity: isExpanded ? 1 : 0,
                          maxWidth: isExpanded ? '400px' : '0px',
                          transition:
                            'opacity 0.3s ease, max-width 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
                          transitionDelay: isExpanded ? '0.15s' : '0s',
                        }}
                      >
                        {industry.title}
                      </h3>
                    </div>

                    {/* Vertical label for collapsed desktop cards */}
                    {isDesktop && (
                      <div
                        className='absolute inset-x-0 bottom-24 flex justify-center'
                        style={{
                          opacity: isExpanded ? 0 : 1,
                          transition: 'opacity 0.2s ease',
                          pointerEvents: 'none',
                        }}
                      >
                        <span className='rotate-180 whitespace-nowrap text-base font-bold uppercase tracking-[0.25em] text-white/70 [writing-mode:vertical-rl]'>
                          {industry.title}
                        </span>
                      </div>
                    )}

                    {/* Mobile collapsed title */}
                    {!isDesktop && !isExpanded && (
                      <h3 className='mt-2 text-xl font-bold text-white'>
                        {industry.title}
                      </h3>
                    )}

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.3, delay: 0.25 }}
                          className='flex flex-col pb-2'
                        >
                          <div className='min-w-0 space-y-5 md:space-y-7'>
                            <div>
                              <p className='mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300 opacity-80'>
                                The Pain Point
                              </p>
                              <p className='text-base font-medium leading-[1.4] text-white/95 sm:text-lg md:text-xl'>
                                {industry.painPoint}
                              </p>
                            </div>

                            <div className='rounded-[1.5rem] border border-white/5 bg-white/[0.03] p-4 shadow-inner backdrop-blur-sm sm:rounded-[2rem] sm:p-6'>
                              <span className='mb-2 block text-[9px] font-black uppercase tracking-widest text-cyan-300'>
                                AI & Automation Strategy
                              </span>
                              <p className='text-sm leading-relaxed text-slate-300/90'>
                                {industry.ai}
                              </p>
                            </div>

                            <div className='rounded-[1.5rem] border border-white/5 bg-white/[0.03] p-4 shadow-inner backdrop-blur-sm sm:rounded-[2rem] sm:p-6'>
                              <span className='mb-2 block text-[9px] font-black uppercase tracking-widest text-blue-300'>
                                Blockchain & Web3
                              </span>
                              <p className='text-sm leading-relaxed text-slate-300/90'>
                                {industry.blockchain}
                              </p>
                            </div>

                            <div className='border-t border-white/10 pt-5'>
                              <div className='flex flex-wrap gap-2.5'>
                                {industry.keyAreas.map((tag) => (
                                  <span
                                    key={tag}
                                    className='rounded-xl bg-white/5 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white/50 ring-1 ring-inset ring-white/10'
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
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
