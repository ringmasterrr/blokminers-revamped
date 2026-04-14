'use client'
import { ICases } from '@/types/cases'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// import FilterCaseStudy from './FilterCaseStudy'

export interface ICasesPage {
  search?: string
  page?: number
  limit?: number
  total?: number
  cases: ICases[]
}

interface ICaseWithMeta extends ICases {
  id?: string | number
  category?: string
  categories?: string[]
  Category?: string
  caseCategory?: string
  case_type?: string
  type?: string
  description?: string
}

const ALL_CATEGORIES = 'All Categories'

const getCategoryValue = (item: ICaseWithMeta) => {
  const rawCategory =
    item.category ||
    item.Category ||
    item.caseCategory ||
    (Array.isArray(item.categories) ? item.categories[0] : undefined)

  return rawCategory?.trim() || 'Uncategorized'
}

const getCardDescription = (item: ICaseWithMeta) => {
  const content = item.summary?.trim() || item.description?.trim()
  if (content) return content

  return 'Explore this case study to see the challenge, our implementation approach, and the measurable outcomes delivered.'
}

const isBlockchainCase = (item: ICaseWithMeta) => {
  const type = (item.type || item.case_type)?.toUpperCase().trim()
  if (type === 'BC' || type === 'WEB3') return true

  const searchableText =
    `${getCategoryValue(item)} ${item.title || ''} ${item.summary || ''}`.toLowerCase()
  const blockchainKeywords = [
    'blockchain',
    'web3',
    'crypto',
    'defi',
    'nft',
    'metaverse',
    'token',
  ]

  return blockchainKeywords.some((keyword) => searchableText.includes(keyword))
}

const CaseStudiesCards = ({ cases }: ICasesPage) => {
  const typedCases = cases as ICaseWithMeta[]
  const blockchainCases = typedCases.filter(isBlockchainCase)
  const aiCases = typedCases.filter((item) => !isBlockchainCase(item))

  const blockchainCategories = [
    ALL_CATEGORIES,
    ...Array.from(new Set(blockchainCases.map(getCategoryValue))),
  ]
  const aiCategories = [
    ALL_CATEGORIES,
    ...Array.from(new Set(aiCases.map(getCategoryValue))),
  ]

  const [selectedBlockchainCategory, setSelectedBlockchainCategory] =
    useState(ALL_CATEGORIES)
  const [selectedAiCategory, setSelectedAiCategory] = useState(ALL_CATEGORIES)

  const filteredBlockchainCases =
    selectedBlockchainCategory === ALL_CATEGORIES
      ? blockchainCases
      : blockchainCases.filter(
          (item) => getCategoryValue(item) === selectedBlockchainCategory,
        )

  const filteredAiCases =
    selectedAiCategory === ALL_CATEGORIES
      ? aiCases
      : aiCases.filter((item) => getCategoryValue(item) === selectedAiCategory)

  const scrollToAiSection = () => {
    document
      .getElementById('ai-automation-section')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToBlockchainSection = () => {
    document
      .getElementById('blockchain-web3-section')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const renderCards = (sectionCases: ICaseWithMeta[]) => (
    <div className='mb-24 mt-8 grid grid-cols-1 gap-6 2md:grid-cols-3'>
      {sectionCases.map((item) => (
        <Link
          href={`/case-study/${item._id}`}
          key={item._id || item.id}
          className='cursor-pointer rounded-2xl bg-white p-6'
          style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}
        >
          <h3 className='mb-2 text-2xl font-semibold'>{item.title}</h3>
          <p
            className='mb-6 min-h-[72px] text-sm leading-6 text-[#6B7280]'
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {getCardDescription(item)}
          </p>
          <Image
            src={item.image}
            alt={item.title}
            height={1000}
            width={1000}
            className='mb-4 h-64 w-full rounded-md object-cover'
          />
        </Link>
      ))}
    </div>
  )

  const renderCategoryButtons = (
    categories: string[],
    selectedCategory: string,
    onClick: (category: string) => void,
  ) => (
    <div className='mb-2 mt-5 flex flex-wrap gap-3'>
      {categories.map((category) => (
        <button
          key={category}
          className={`rounded-full px-4 py-2 text-lg font-medium ${selectedCategory === category ? 'border-2 border-theme-dark bg-theme-dark text-white' : 'border-2 border-theme-dark bg-transparent text-theme-dark'} transition hover:bg-theme-dark hover:text-white`}
          onClick={() => onClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      {/* <FilterCaseStudy /> */}
      <div className='w-full' id='blockchain-web3-section'>
        <div className='flex w-full items-center justify-between gap-4'>
          <h2 className='text-4xl font-bold text-theme-dark'>
            Blockchain and Web3
          </h2>
          <button
            className='rounded-full border-2 border-theme-dark bg-transparent px-5 py-2 text-base font-semibold text-theme-dark transition hover:bg-theme-dark hover:text-white'
            onClick={scrollToAiSection}
          >
            AI and Automation ↓
          </button>
        </div>
        {renderCategoryButtons(
          blockchainCategories,
          selectedBlockchainCategory,
          setSelectedBlockchainCategory,
        )}
        {renderCards(filteredBlockchainCases)}
      </div>

      <div className='w-full' id='ai-automation-section'>
        <div className='flex w-full items-center justify-between gap-4'>
          <h2 className='text-4xl font-bold text-theme-dark'>
            AI and Automation
          </h2>
          <button
            className='rounded-full border-2 border-theme-dark bg-transparent px-5 py-2 text-base font-semibold text-theme-dark transition hover:bg-theme-dark hover:text-white'
            onClick={scrollToBlockchainSection}
          >
            Blockchain and Web3 ↑
          </button>
        </div>
        {renderCategoryButtons(
          aiCategories,
          selectedAiCategory,
          setSelectedAiCategory,
        )}
        {renderCards(filteredAiCases)}
      </div>
    </div>
  )
}

export default CaseStudiesCards
