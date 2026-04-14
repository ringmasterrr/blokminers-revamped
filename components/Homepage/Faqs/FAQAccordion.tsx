// components/FAQAccordion.tsx
'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'

export type FaqItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FaqItem[]
  searchQuery?: string
}

const FAQAccordion = ({ items, searchQuery = '' }: FAQAccordionProps) => {
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredItems = items.filter((item) => {
    if (!normalizedQuery) return true
    return (
      item.question.toLowerCase().includes(normalizedQuery) ||
      item.answer.toLowerCase().includes(normalizedQuery)
    )
  })

  if (!filteredItems.length) {
    return (
      <div className='rounded-none border-y border-slate-700/60 bg-slate-900/40 p-4 text-xs text-slate-300 sm:rounded-3xl sm:border sm:p-6 sm:text-sm'>
        No FAQs found for that search. Try a broader keyword.
      </div>
    )
  }

  return (
    <Accordion
      type='single'
      collapsible
      defaultValue={filteredItems[0]?.question}
      className='w-full space-y-3 sm:space-y-4'
    >
      {filteredItems.map((item, index) => (
        <motion.div
          key={item.question}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <AccordionItem
            value={item.question}
            className='group overflow-hidden rounded-none border-y border-slate-700/70 bg-slate-900/45 px-1 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/65 data-[state=open]:border-cyan-400/55 data-[state=open]:bg-slate-900/70 data-[state=open]:shadow-[0_0_28px_rgba(34,211,238,0.14)] sm:rounded-3xl sm:border sm:px-2'
          >
            <AccordionTrigger className='py-4 pl-3 pr-2 text-start text-sm font-semibold text-slate-100 transition-all hover:no-underline group-data-[state=open]:text-cyan-300 sm:py-5 sm:pl-5 sm:pr-4 sm:text-lg [&>svg]:h-7 [&>svg]:w-7 [&>svg]:rounded-full [&>svg]:bg-slate-700/70 [&>svg]:p-1.5 [&>svg]:text-slate-200 [&>svg]:transition-colors group-hover:[&>svg]:bg-slate-600/80 group-data-[state=open]:[&>svg]:bg-cyan-400/25 group-data-[state=open]:[&>svg]:text-cyan-200 sm:[&>svg]:h-9 sm:[&>svg]:w-9 sm:[&>svg]:p-2'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='px-3 pb-4 pt-0 text-sm leading-relaxed text-slate-300 sm:px-5 sm:pb-5 sm:text-base'>
              <div className='rounded-xl border border-slate-700/60 bg-slate-950/45 p-3 sm:rounded-2xl sm:p-6'>
                {item.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  )
}

export default FAQAccordion
