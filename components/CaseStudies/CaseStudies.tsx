"use client"

import { useState } from 'react';



const caseStudies = [
  {
    id: 1,
    category: 'DeFi Projects',
    title: 'Dex Aggregator',
    description: 'Our EVM DEX Aggregator with Limit and Market order types...',
    image: '/images/dex-aggregator.png',
  },
  {
    id: 2,
    category: 'Tokenization',
    title: 'Event Ticket Tokenization',
    description: 'Explore our Event Ticket Tokenization Case Study...',
    image: '/images/event-ticket.png',
  },
  {
    id: 3,
    category: 'Tokenization',
    title: 'Hotel Room Tokenization',
    description: 'Discover how BlokMiners development expertise transformed the hotel industry...',
    image: '/images/hotel-room.png',
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
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'} hover:bg-blue-500 transition`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCaseStudies.map(cs => (
          <div key={cs.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={cs.image} alt={cs.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">{cs.title}</h3>
            <p className="text-gray-600">{cs.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesCards;
