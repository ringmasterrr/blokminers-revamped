'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react'

// Standardized industry colors to match your Web3/AI palette
const getIndustryColor = (industry: string) => {
  const normalized = industry.toLowerCase()
  if (normalized.includes('health'))
    return 'text-teal-400 bg-teal-400/10 border-teal-400/20'
  if (normalized.includes('web3'))
    return 'text-purple-400 bg-purple-400/10 border-purple-400/20'
  if (normalized.includes('fintech'))
    return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
  return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20'
}

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: any[]
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div ref={containerRef} className='relative mx-auto w-full max-w-8xl'>
      {/* 1. PLATFORM RATING BADGE (Fixed positioning and styling) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className='mx-auto mb-16 flex max-w-fit flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-white/10 bg-[#0d2b3a]/80 px-6 py-4 backdrop-blur-xl sm:rounded-full sm:py-3'
      >
        <div className='flex items-center gap-2'>
          <div className='flex gap-0.5'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className='fill-amber-500 text-amber-500'
              />
            ))}
          </div>
          <span className='text-sm font-bold text-white'>
            4.9 stars on Clutch
          </span>
        </div>
        <div className='hidden h-4 w-px bg-white/15 sm:block' />
        <div className='flex items-center gap-2 text-sm text-white/75'>
          <ShieldCheck size={16} className='text-cyan-400' />
          <span className='font-medium'>GoodFirms Verified</span>
        </div>
        <div className='hidden h-4 w-px bg-white/15 sm:block' />
        <span className='text-sm font-medium text-white/75'>
          30+ Client Reviews
        </span>
      </motion.div>

      {/* 2. THE CAROUSEL TRACK */}
      <div className='group relative'>
        {/* Soft Edge Blurs */}
        <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#031d2c] to-transparent' />
        <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#031d2c] to-transparent' />

        <div
          ref={scrollRef}
          className='no-scrollbar flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-10 sm:px-6 lg:px-8'
        >
          {testimonials.map((item, idx) => (
            (() => {
              const clientName =
                item?.name ?? item?.clientName ?? item?.author ?? item?.title ?? 'Client'
              const clientRole = item?.designation ?? item?.title ?? 'Client'
              const companyName = item?.company ?? item?.organization ?? ''
              const industry = item?.industry ?? 'Strategic Partner'
              const quote = item?.quote ?? item?.testimony ?? ''
              const initials = String(clientName)
                .split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map((n: string) => n[0]?.toUpperCase())
                .join('')

              return (
                <motion.div
                  key={item?.id ?? item?._id ?? idx}
                  className='relative flex w-[350px] shrink-0 snap-center flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0d2b3a] p-8 transition-all duration-500 hover:border-cyan-400/35 sm:w-[450px]'
                >
                  <div>
                    <div className='mb-6 flex items-center justify-between'>
                      <div className='flex gap-0.5'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className='fill-amber-500 text-amber-500'
                          />
                        ))}
                      </div>
                      <span
                        className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${getIndustryColor(industry)}`}
                      >
                        {industry}
                      </span>
                    </div>

                    <p className='text-lg italic leading-relaxed text-white/75'>
                      "{quote}"
                    </p>
                  </div>

                  <div className='mt-10 flex items-center gap-4 border-t border-white/10 pt-6'>
                    <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#123547] text-xs font-bold text-cyan-300'>
                      {initials || 'CL'}
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-sm font-bold text-white'>
                        {clientName}
                      </span>
                      <span className='text-xs text-white/55'>
                        {clientRole}
                        {companyName ? (
                          <>
                            , <span className='text-cyan-300'>{companyName}</span>
                          </>
                        ) : null}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })()
          ))}
        </div>

        {/* Navigation Controls */}
        <div className='mt-8 flex justify-center gap-4'>
          <button
            onClick={() => scroll('left')}
            className='rounded-full border border-white/10 bg-white/5 p-3 text-white/75 transition-colors hover:border-cyan-400 hover:bg-cyan-400 hover:text-black'
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className='rounded-full border border-white/10 bg-white/5 p-3 text-white/75 transition-colors hover:border-cyan-400 hover:bg-cyan-400 hover:text-black'
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
