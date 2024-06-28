'use client'
import { getAllCaseStudies } from '@/services/caseStudies'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

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
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true)

  // const filteredCaseStudies =
  //   selectedCategory === 'All Topiitem'
  //     ? caseStudies
  //     : caseStudies.filter((item) => item.category === selectedCategory)

  const handleCardClick = (id: number) => {
    router.push(`/case-studies/${id}`)
  }

  const [data, setData] = useState<any | null>(null)
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<any | null>([])

  const getCaseStudies = async () => {
    const res = await getAllCaseStudies()
    const fetchedData = res[0].data
    setData(fetchedData)
    setLoading(false)
    setFilteredCaseStudies(
      selectedCategory === 'All Topics'
        ? fetchedData
        : fetchedData.filter((item: any) => item.category === selectedCategory),
    )
  }


  useEffect(() => {
    if (data === null) return
    console.log(data)

    setFilteredCaseStudies(
      selectedCategory === 'All Topics'
        ? data
        : data.filter((item: any) => item.category === selectedCategory),
    )
  }, [selectedCategory])

  useEffect(() => {
    getCaseStudies()
  }, [])
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
        {filteredCaseStudies.map((item: any) => (
          <div
            key={item.id}
            className='cursor-pointer rounded-2xl bg-white p-6'
            style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}
            onClick={() => handleCardClick(item.id)}
          >
            <h3 className='mb-2 text-2xl font-semibold'>{item.title}</h3>
            <p className='mb-6 text-sm text-[#A3A3A3]'>{item.description}</p>
            {/* <Image
              src={item.image}
              alt={item.title}
              height={1000}
              width={1000}
              className='mb-4 h-64 w-full rounded-md object-cover'
            /> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseStudiesCards
