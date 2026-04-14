// app/faqs/page.tsx (or wherever your FAQs component lives)
'use client'

import React, { useState, useMemo } from 'react'
import { Moon, Search } from 'lucide-react'
import { faqsByService, allServices, type ServiceName } from '@/lib/faqData'
import FAQAccordion from './FAQAccordion'

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState<ServiceName | 'all'>(
    'all',
  )

  // Build the list of FAQ items to display based on selected service
  const displayedItems = useMemo(() => {
    if (selectedService === 'all') {
      // Default: show only the FIRST FAQ from each service
      return allServices.flatMap((service) => {
        const serviceFaqs = faqsByService[service]
        return serviceFaqs.length > 0 ? [serviceFaqs[0]] : []
      })
    } else {
      // Show ALL FAQs for the selected service
      return faqsByService[selectedService] || []
    }
  }, [selectedService])

  // Apply search filter on top of displayedItems
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return displayedItems
    const lowerQuery = searchQuery.toLowerCase()
    return displayedItems.filter(
      (item) =>
        item.question.toLowerCase().includes(lowerQuery) ||
        item.answer.toLowerCase().includes(lowerQuery),
    )
  }, [displayedItems, searchQuery])

  return (
    <section className='relative w-full overflow-hidden bg-[#031725] py-16 sm:py-24'>
      {/* Background Ambience */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -right-[10%] top-[12%] h-[560px] w-[560px] rounded-full bg-cyan-500/10 blur-[120px]' />
        <div className='absolute -left-[12%] bottom-[10%] h-[560px] w-[560px] rounded-full bg-indigo-500/10 blur-[120px]' />
        <div className='absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]' />
      </div>

      <div className='max-w-7xl relative z-10 mx-auto space-y-5 px-0 sm:space-y-6 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='flex flex-col items-center justify-center gap-4 px-3 text-center sm:gap-6 sm:px-0'>
          <div className='rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 backdrop-blur-sm sm:px-4 sm:py-1.5'>
            <span className='text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400'>
              Common Queries
            </span>
          </div>

          <h2 className='text-balance text-2xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl'>
            Frequently Asked Questions
          </h2>
          <p className='max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg'>
            Clear answers for teams evaluating AI automation and blockchain
            development with BlokMiners.
          </p>
        </div>

        <div className='px-0 sm:px-0'>
          {/* Top bar: theme toggle (kept from original) */}
          <div className='mb-4 flex flex-wrap items-center justify-between gap-3 px-3 sm:mb-6 sm:gap-4 sm:px-0'>
            {/* Filter Buttons */}
            <div className='flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap'>
              {/* <button
                onClick={() => setSelectedService('all')}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  selectedService === 'all'
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/80'
                }`}
              >
                All Services (1 each)
              </button> */}
              {allServices.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`w-full rounded-full px-4 py-2 text-xs font-medium transition-all sm:w-auto sm:py-1.5 sm:text-sm ${
                    selectedService === service
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/80'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <label className='mb-5 flex items-center gap-2 rounded-none border-y border-slate-700/80 bg-slate-900/65 px-3 py-2 text-slate-400 focus-within:border-cyan-400/55 focus-within:text-cyan-200 sm:mb-7 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3'>
            <Search className='h-4 w-4 sm:h-5 sm:w-5' />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              type='text'
              placeholder='Search FAQ...'
              className='w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500 sm:text-base'
            />
          </label>

          {/* FAQ Accordion */}
          <div className='border-y border-slate-800/80 bg-slate-900/35 p-0 px-3 sm:rounded-3xl sm:border sm:p-3'>
            <FAQAccordion items={filteredItems} searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs
