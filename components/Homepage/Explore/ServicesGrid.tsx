'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { WobbleCard } from '@/components/ui/wobble-card'
import {
  homepageServiceFilters,
  homepageServices,
  type ServiceCategory,
} from '@/lib/service-pages'

/**
 * Bento logic
 * AI: 2+1 then 1+2
 * Blockchain: opposite 1+2 then 2+1
 */
const getBentoClasses = (
  index: number,
  total: number,
  isOpposite = false,
) => {
  const defaultPattern = [
    'lg:col-span-2', // index 0
    'lg:col-span-1', // index 1
    'lg:col-span-1', // index 2
    'lg:col-span-2', // index 3
    'lg:col-span-2', // index 4
    'lg:col-span-1', // index 5
    'lg:col-span-3', // index 6
  ]
  const oppositePattern = [
    'lg:col-span-1', // index 0
    'lg:col-span-2', // index 1
    'lg:col-span-2', // index 2
    'lg:col-span-1', // index 3
    'lg:col-span-1', // index 4
    'lg:col-span-2', // index 5
    'lg:col-span-3', // index 6
  ]

  const pattern = isOpposite ? oppositePattern : defaultPattern
  const isLast = index === total - 1
  if (isLast && total === 7) return 'lg:col-span-3'

  return pattern[index % pattern.length]
}

const getAlternatingAllTabBentoClasses = (index: number, total: number) => {
  const isLast = index === total - 1
  if (isLast && total % 2 === 1) return 'lg:col-span-3'

  const rowIndex = Math.floor(index / 2)
  const isFirstInRow = index % 2 === 0
  const isWeb3StyleRow = rowIndex % 2 === 1

  if (isWeb3StyleRow) {
    return isFirstInRow ? 'lg:col-span-1' : 'lg:col-span-2'
  }

  return isFirstInRow ? 'lg:col-span-2' : 'lg:col-span-1'
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

const serviceArtwork: Record<
  string,
  { src: string; imageClassName: string }
> = {
  'ai-agent-development': {
    src: '/Images/Explore/image4.svg',
    imageClassName: 'w-full',
  },
  'workflow-automation': {
    src: '/Images/Explore/image5.svg',
    imageClassName: 'w-full',
  },
  'llm-chatbot-development': {
    src: '/Images/Explore/image7.svg',
    imageClassName: 'w-full',
  },
  'ai-strategy-consulting': {
    src: '/Images/Explore/image6.svg',
    imageClassName: 'w-full',
  },
  'blockchain-development': {
    src: '/Images/Explore/image1.svg',
    imageClassName: 'w-full',
  },
  'smart-contracts-defi': {
    src: '/Images/Explore/image2.svg',
    imageClassName: 'w-full',
  },
  'web3-nft-platforms': {
    src: '/Images/Explore/image3.svg',
    imageClassName: 'w-full',
  },
  'web3-consulting-smart-contract-auditing': {
    src: '/Images/Explore/image1.svg',
    imageClassName: 'w-full',
  },
}

export default function ServicesGrid({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: ServiceCategory
  onFilterChange: (f: ServiceCategory) => void
}) {
  const filteredServices =
    activeFilter === 'all'
      ? homepageServices
      : homepageServices.filter((s) => s.category === activeFilter)

  const renderServiceGrid = (
    services: typeof homepageServices,
    gridKey: string,
    isOppositeLayout = false,
    isAlternatingAllLayout = false,
  ) => (
    <motion.div
      key={gridKey}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
      className='grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:auto-rows-[minmax(320px,auto)] lg:grid-cols-3'
    >
      {services.map((service, index) => {
        const bentoClasses = isAlternatingAllLayout
          ? getAlternatingAllTabBentoClasses(index, services.length)
          : getBentoClasses(index, services.length, isOppositeLayout)
        const artwork = serviceArtwork[service.slug]
        const isTwoColumnCard = bentoClasses.includes('lg:col-span-2')
        const isThreeColumnCard = bentoClasses.includes('lg:col-span-3')
        const imageWrapperSizeClass = isThreeColumnCard
          ? 'w-40 sm:w-44 lg:w-52'
          : isTwoColumnCard
            ? 'w-32 sm:w-36 lg:w-44'
            : 'w-24 sm:w-28 lg:w-32'

        return (
          <motion.div
            key={service.slug}
            layout
            variants={cardVariants}
            className={`h-full ${bentoClasses}`}
          >
            <WobbleCard
              containerClassName='card h-full rounded-[28px]'
              className='relative flex h-full min-h-[320px] flex-col gap-4 overflow-hidden p-5 sm:p-6'
            >
              <div className='flex items-center justify-between'>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase ${service.badge === 'AI' ? 'bg-white/85 text-theme-dark' : 'bg-theme-dark/85 text-white'}`}
                >
                  {service.badge}
                </span>
                <div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70'>
                  <service.icon size={18} strokeWidth={1.7} />
                </div>
              </div>
              <div>
                <Link
                  href={`/services?tab=${service.tab}`}
                  className='block text-[1.55rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-theme-dark hover:text-theme-light sm:text-[1.8rem] lg:text-[2rem]'
                >
                  {service.shortTitle}
                </Link>
                <p className='mt-2 text-[0.9rem] font-semibold leading-relaxed text-theme-dark'>
                  {service.tagline}
                </p>
              </div>
              <div className='flex-1 pb-20'>
                <p className='text-sm leading-6 text-theme-light'>
                  {service.description}
                </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {service.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className='rounded-full border border-theme-light/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-theme-light backdrop-blur-sm'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {artwork && (
                <div
                  className={`pointer-events-none absolute bottom-2 right-2 z-10 overflow-hidden ${imageWrapperSizeClass}`}
                >
                  <Image
                    src={artwork.src}
                    alt=''
                    width={200}
                    height={200}
                    className={`${artwork.imageClassName} block h-auto max-w-full object-contain object-bottom-right opacity-80`}
                  />
                </div>
              )}
            </WobbleCard>
          </motion.div>
        )
      })}
    </motion.div>
  )

  return (
    <>
      <div className='mt-8 flex flex-wrap justify-center gap-2.5'>
        {homepageServiceFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${activeFilter === filter.value ? 'bg-theme-dark text-white shadow-lg shadow-theme-dark/15' : 'border border-theme-light/10 bg-white text-theme-light hover:border-theme-light/20'}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className='mt-8 sm:mt-10'>
        <AnimatePresence mode='wait'>
          <motion.div key={activeFilter} className='space-y-5 sm:space-y-6'>
            {activeFilter === 'all' ? (
              renderServiceGrid(homepageServices, 'all', false, true)
            ) : (
              renderServiceGrid(
                filteredServices,
                activeFilter,
                activeFilter === 'blockchain',
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
