'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
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

  const backgroundColors = [
    'var(--blue-ribbon)', 
    'var(--dodger-blue)', 
    'var(--heliotrope)', 
    'var(--limeade)', 
    'var(--fun-green)', 
    'var(--electric-violet)', 
    'var(--lochmara)'
  ];
  
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  )

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
  }, [activeCard])

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className='bg relative my-40 flex h-[26rem] justify-evenly space-x-10 overflow-y-auto rounded-md p-10'
      ref={ref}
    >
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          'sticky top-0 h-[21rem] w-[32rem] overflow-hidden rounded-md bg-white',
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>

      <div className='max-w-[500px]'>
        {content.map((item, index) => (
          <div key={item.title + index} className='pb-28 pt-0 first:pt-6'>
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.1,
              }}
              className='text-4xl font-semibold text-white'
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.1,
              }}
              className='max-w-sm mt-10 text-lg font-medium text-white/80'
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
