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

export const getCaseStudyById = async (id: number) => {
  return caseStudies.find((cs) => cs.id === id) || null
}
