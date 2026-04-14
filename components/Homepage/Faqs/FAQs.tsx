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
    <section className='relative w-full overflow-hidden bg-[#031725] py-20 sm:py-24'>
      {/* Background Ambience */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -right-[10%] top-[12%] h-[560px] w-[560px] rounded-full bg-cyan-500/10 blur-[120px]' />
        <div className='absolute -left-[12%] bottom-[10%] h-[560px] w-[560px] rounded-full bg-indigo-500/10 blur-[120px]' />
        <div className='absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]' />
      </div>

      <div className='max-w-7xl relative z-10 mx-auto space-y-6 px-6 lg:px-8'>
        {/* Header Section */}
        <div className='flex flex-col items-center justify-center gap-6 text-center'>
          <div className='rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 backdrop-blur-sm'>
            <span className='text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400'>
              Common Queries
            </span>
          </div>

          <h2 className='text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl'>
            Frequently Asked Questions
          </h2>
          <p className='max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg'>
            Clear answers for teams evaluating AI automation and blockchain
            development with BlokMiners.
          </p>
        </div>

        <div>
          {/* Top bar: theme toggle (kept from original) */}
          <div className='mb-6 flex flex-wrap items-center justify-between gap-4'>
            {/* Filter Buttons */}
            <div className='flex flex-wrap gap-2'>
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
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
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
          <label className='mb-7 flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/65 px-4 py-3 text-slate-400 focus-within:border-cyan-400/55 focus-within:text-cyan-200'>
            <Search className='h-5 w-5' />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              type='text'
              placeholder='Search FAQ...'
              className='w-full bg-transparent text-base text-slate-100 outline-none placeholder:text-slate-500'
            />
          </label>

          {/* FAQ Accordion */}
          <div className='rounded-3xl border border-slate-800/80 bg-slate-900/35 p-2 sm:p-3'>
            <FAQAccordion items={filteredItems} searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs
