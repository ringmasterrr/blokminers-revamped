'use client'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
export default function FilterCaseStudy() {
  const [selectedCategory, setSelectedCategory] = useState('All Topics')
  const router = useRouter()
  const pathname = usePathname()
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

  const handleclick = (category: string) => {
    setSelectedCategory(category)
    router.push(
      `${pathname}?search=${category === 'All Topics' ? '' : category}`,
    )
  }

  return (
    <>
      <div className='mb-6 flex flex-wrap items-center justify-center gap-3'>
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full px-2 py-2 text-base font-medium 2md:px-4 2md:text-lg ${selectedCategory === category ? 'border-2 border-theme-dark bg-theme-dark text-white' : 'border-2 border-theme-dark bg-transparent text-theme-dark'} transition hover:bg-theme-dark hover:text-white`}
            onClick={() => handleclick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  )
}
