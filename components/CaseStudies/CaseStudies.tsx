"use client"

import { useState } from 'react';



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
    description: 'Discover how BlokMiners development expertise transformed the hotel industry...',
    image: '/cases/hotel.png',
  },
];

const categories = [
  'All Topics',
  'MLM Projects',
  'DeFi Projects',
  'Tokenization',
  'ZNFT Projects',
  'Gaming',
  'Prediction & Speculation',
  'Metaverse',
];

const CaseStudiesCards = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Topics');

  const filteredCaseStudies = selectedCategory === 'All Topics'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 text-lg font-medium rounded-full ${selectedCategory === category ? 'bg-theme-dark text-white border-2 border-theme-dark' : 'bg-transparent text-theme-dark border-2 border-theme-dark'} hover:bg-theme-dark hover:text-white transition`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-2 gap-6 mt-12 mb-32 ">
        {filteredCaseStudies.map(cs => (
          <div key={cs.id} className="bg-white p-6 rounded-2xl " style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}>
            <h3 className="text-2xl font-semibold mb-2">{cs.title}</h3>
            <p className="text-[#A3A3A3] mb-6 text-sm">{cs.description}</p>
            <img src={cs.image} alt={cs.title} className="w-full h-64 object-cover rounded-md mb-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesCards;
