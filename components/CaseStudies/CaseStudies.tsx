'use client'

import { useState } from 'react'

const caseStudies = [
  {
    id: 1,
    category: 'DeFi Projects',
    title: 'Dex Aggregator',
    description: 'Our EVM DEX Aggregator with Limit and Market order types...',
    image: '/cases/dex.png',
  },
  {
    id: 2,
    category: 'Tokenization',
    title: 'Event Ticket Tokenization',
    description: 'Explore our Event Ticket Tokenization Case Study...',
    image: '/cases/ticket.png',
  },
  {
    id: 3,
    category: 'Tokenization',
    title: 'Hotel Room Tokenization',
    description:
      'Discover how BlokMiners development expertise transformed the hotel industry...',
    image: '/cases/hotel.png',
  },
]

const categories = [
  'All Topics',
  'MLM Projects',
  'DeFi Projects',
  'Tokenization',
  'ZNFT Projects',
  'Gaming',
  'Prediction & Speculation',
  'Metaverse',
]

const CaseStudiesCards = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Topics')

  const filteredCaseStudies =
    selectedCategory === 'All Topics'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory)

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='mb-6 flex flex-wrap gap-3'>
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full px-4 py-2 text-lg font-medium ${selectedCategory === category ? 'border-2 border-theme-dark bg-theme-dark text-white' : 'border-2 border-theme-dark bg-transparent text-theme-dark'} transition hover:bg-theme-dark hover:text-white`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='sm:grid-cols-2 mb-32 mt-12 grid grid-cols-3 gap-6'>
        {filteredCaseStudies.map((cs) => (
          <div
            key={cs.id}
            className='rounded-2xl bg-white p-6'
            style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}
          >
            <h3 className='mb-2 text-2xl font-semibold'>{cs.title}</h3>
            <p className='mb-6 text-sm text-[#A3A3A3]'>{cs.description}</p>
            <img
              src={cs.image}
              alt={cs.title}
              className='mb-4 h-64 w-full rounded-md object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseStudiesCards
