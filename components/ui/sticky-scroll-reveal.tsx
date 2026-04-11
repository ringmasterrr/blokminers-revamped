'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'

import { cn } from '@/lib/utils'

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  })

  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0,
    )

    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = ['#f8fcff', '#f3fbff', '#eef9ff']
  const gradients = [
    'linear-gradient(135deg, rgba(216,246,255,0.9), rgba(255,255,255,0.95))',
    'linear-gradient(135deg, rgba(232,248,255,0.92), rgba(244,252,255,0.96))',
    'linear-gradient(135deg, rgba(240,250,255,0.96), rgba(255,255,255,0.98))',
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(gradients[0])

  useEffect(() => {
    setBackgroundGradient(gradients[activeCard % gradients.length])
  }, [activeCard])

  return (
    <>
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className='relative hidden h-[42rem] gap-10 overflow-y-auto px-6 py-8 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,1.05fr)] lg:px-8'
        ref={ref}
      >
        <div className='relative'>
          <div className='max-w-2xl pr-4'>
            {content.map((item, index) => {
              const isActive = activeCard === index

              return (
                <motion.div
                  key={item.title + index}
                  className='my-12 rounded-2xl border border-transparent px-5 py-5 transition-colors'
                  animate={{
                    opacity: isActive ? 1 : 0.42,
                    borderColor: isActive
                      ? 'rgba(0,40,60,0.08)'
                      : 'rgba(0,0,0,0)',
                    backgroundColor: isActive
                      ? 'rgba(255,255,255,0.55)'
                      : 'rgba(255,255,255,0)',
                  }}
                >
                  <div className='mb-4 flex items-center gap-3'>
                    <span
                      className={cn(
                        'h-2.5 w-2.5 rounded-full transition-colors',
                        isActive ? 'bg-theme-dark' : 'bg-theme-light/30',
                      )}
                    />
                    <span
                      className={cn(
                        'text-[11px] font-semibold uppercase tracking-[0.18em]',
                        isActive ? 'text-theme-dark/70' : 'text-theme-light/45',
                      )}
                    >
                      Industry Snapshot
                    </span>
                  </div>
                  <motion.h3
                    animate={{ opacity: isActive ? 1 : 0.5 }}
                    className='text-2xl font-extrabold leading-tight text-theme-dark'
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    animate={{ opacity: isActive ? 1 : 0.55 }}
                    className='max-w-xl mt-4 text-base leading-8 text-theme-light'
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              )
            })}
            <div className='h-24' />
          </div>
        </div>

        <div className='sticky top-8 h-fit'>
          <div
            style={{ background: backgroundGradient }}
            className={cn(
              'overflow-hidden rounded-[28px] p-3',
              contentClassName,
            )}
          >
            {content[activeCard]?.content ?? null}
          </div>
        </div>
      </motion.div>

      <div className='space-y-5 px-5 py-6 lg:hidden'>
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className='rounded-[24px] border border-theme-light/10 bg-[#F8FCFF] p-4 shadow-[0_16px_40px_rgba(0,40,60,0.06)]'
          >
            <p className='text-[11px] font-semibold uppercase tracking-[0.18em] text-theme-light/70'>
              Industry Snapshot
            </p>
            <h3 className='mt-2 text-xl font-extrabold leading-tight text-theme-dark'>
              {item.title}
            </h3>
            <p className='mt-3 text-sm leading-7 text-theme-light'>
              {item.description}
            </p>
            <div className='mt-4'>{content[index]?.content ?? null}</div>
          </div>
        ))}
      </div>
    </>
  )
}
