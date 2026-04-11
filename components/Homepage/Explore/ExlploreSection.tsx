'use client'

import ServicesGrid from './ServicesGrid'
import { ServiceCategory } from '@/lib/service-pages'
import { useState } from 'react'

export default function ExploreSection() {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('ai')

  return (
    <div className='relative mt-4 px-0 py-2 2md:mt-12 2md:py-24 xl:px-24'>
      <div className='bg-blur absolute inset-0 bg-[#D8F6FF] bg-opacity-60'></div>
      <div className='relative mx-auto max-w-8xl px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-theme-light'>
            Explore Our Offerings
          </p>
          <h2 className='mt-4 text-balance text-3xl font-extrabold leading-tight text-theme-dark sm:text-4xl lg:text-5xl'>
            Services built for businesses that want to move fast and build to
            last
          </h2>
          <p className='max-w-3xl mx-auto mt-5 text-base leading-relaxed text-theme-light sm:text-lg'>
            Explore the eight core services BlokMiners delivers across AI
            automation and blockchain product engineering, then jump directly
            into the service page that matches your project.
          </p>
        </div>
        <ServicesGrid
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>
    </div>
  )
}
