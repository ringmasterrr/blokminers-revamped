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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
}

type Props = {
  activeFilter: ServiceCategory
  onFilterChange: (filter: ServiceCategory) => void
}

const serviceArtwork: Record<
  string,
  {
    src: string
    imageClassName: string
    wrapperClassName: string
    contentClassName: string
    bodyClassName: string
  }
> = {
  'ai-agent-development': {
    src: '/Images/Explore/image4.svg',
    wrapperClassName:
      'pointer-events-none absolute bottom-0 right-0 z-0 w-[28%] opacity-90 sm:w-[22%] xl:w-[20%]',
    imageClassName: 'h-auto w-full object-contain',
    contentClassName: 'max-w-full',
    bodyClassName: 'max-w-full pb-4 pr-[22%] xl:pr-[22%]',
  },
  'workflow-automation': {
    src: '/Images/Explore/image5.svg',
    wrapperClassName:
      'pointer-events-none absolute bottom-0 right-0 z-0 w-[32%] opacity-90 sm:w-[26%]',
    imageClassName: 'h-auto w-full object-contain',
    contentClassName: 'max-w-full',
    bodyClassName: 'max-w-full pb-4 pr-[28%]',
  },
  'llm-chatbot-development': {
    src: '/Images/Explore/image7.svg',
    wrapperClassName:
      'pointer-events-none absolute bottom-0 right-[-0.5rem] z-0 w-[44%] opacity-90',
    imageClassName: 'h-auto w-full object-contain',
    contentClassName: 'max-w-[58%]',
    bodyClassName: 'max-w-[58%] pb-4',
  },
  'ai-strategy-consulting': {
    src: '/Images/Explore/image6.svg',
    wrapperClassName:
      'pointer-events-none absolute bottom-0 right-2 z-0 w-[22%] opacity-90 sm:w-[18%]',
    imageClassName: 'h-auto w-full object-contain',
    contentClassName: 'max-w-full',
    bodyClassName: 'max-w-full pb-4 pr-[20%]',
  },
  'blockchain-development': {
    src: '/Images/Explore/image1.svg',
    wrapperClassName:
      'pointer-events-none absolute bottom-0 right-0 z-0 w-[34%] opacity-90 sm:w-[28%]',
    imageClassName: 'h-auto w-full object-contain',
    contentClassName: 'max-w-full',
    bodyClassName: 'max-w-full pb-4 pr-[30%]',
  },
  'smart-contracts-defi': {
    src: '/Images/Explore/image2.svg',
    wrapperClassName:
      'pointer-events-none absolute bottom-0 right-0 z-0 w-[22%] opacity-90 sm:w-[18%]',
    imageClassName: 'h-auto w-full object-contain',
    contentClassName: 'max-w-full',
    bodyClassName: 'max-w-full pb-4 pr-[20%]',
  },
  'web3-nft-platforms': {
    src: '/Images/Explore/image3.svg',
    wrapperClassName:
      'pointer-events-none absolute bottom-0 right-0 z-0 w-[34%] opacity-90 sm:w-[28%]',
    imageClassName: 'h-auto w-full object-contain',
    contentClassName: 'max-w-full',
    bodyClassName: 'max-w-full pb-4 pr-[30%]',
  },
  'web3-consulting-smart-contract-auditing': {
    src: '/Images/Explore/image1.svg',
    wrapperClassName:
      'pointer-events-none absolute bottom-0 right-0 z-0 w-[24%] opacity-90 sm:w-[20%]',
    imageClassName: 'h-auto w-full object-contain',
    contentClassName: 'max-w-full',
    bodyClassName: 'max-w-full pb-4 pr-[22%]',
  },
}

function getCardSpanClass(index: number, total: number) {
  if (total === 1) return 'col-span-1 md:col-span-2 xl:col-span-3'
  if (total === 2) return 'col-span-1 md:col-span-1 xl:col-span-1'
  if (total === 3) return 'col-span-1 md:col-span-1 xl:col-span-1'

  // Repeating 2-1-1 pattern on 3-col grid:
  // index 0 → wide (2 cols), index 1 → narrow (1 col), index 2 → narrow (1 col)
  // index 3 → wide (2 cols), index 4 → narrow (1 col), index 5 → narrow (1 col)
  // etc.
  const pos = index % 3
  if (pos === 0) return 'col-span-1 xl:col-span-2'
  return 'col-span-1'
}

export default function ServicesGrid({ activeFilter, onFilterChange }: Props) {
  const filteredServices =
    activeFilter === 'all'
      ? homepageServices
      : homepageServices.filter((service) => service.category === activeFilter)

  return (
    <>
      <div className='mt-10 flex flex-wrap justify-center gap-3'>
        {homepageServiceFilters.map((filter) => {
          const active = filter.value === activeFilter

          return (
            <button
              key={filter.value}
              type='button'
              onClick={() => onFilterChange(filter.value)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                active
                  ? 'bg-theme-dark text-white shadow-lg shadow-theme-dark/15'
                  : 'border border-theme-light/10 bg-white text-theme-light hover:border-theme-light/20 hover:bg-blue-ribbon hover:text-theme-dark'
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'
        >
          {filteredServices.map((service, index) => {
            const Icon = service.icon
            const artwork = serviceArtwork[service.slug]

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                exit='exit'
                className={getCardSpanClass(index, filteredServices.length)}
              >
                <WobbleCard
                  containerClassName='card relative h-full rounded-[28px]'
                  className='relative flex h-full flex-col gap-5 overflow-hidden p-5 sm:px-7 sm:py-7 min-h-[320px]'
                >
                  <div className='relative z-10 flex h-full flex-col'>
                    {/* Header row */}
                    <div className='flex items-center justify-between gap-4'>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] ${
                          service.badge === 'AI'
                            ? 'bg-white/85 text-theme-dark'
                            : 'bg-theme-dark/85 text-white'
                        }`}
                      >
                        {service.badge}
                      </span>
                      <div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 text-theme-dark backdrop-blur-sm'>
                        <Icon size={18} strokeWidth={1.7} />
                      </div>
                    </div>

                    {/* Title + tagline */}
                    <div className={artwork.contentClassName}>
                      <Link
                        href={`/services?tab=${service.tab}`}
                        className='mt-5 block text-[1.95rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-theme-dark transition-colors hover:text-theme-light sm:text-[2.4rem]'
                      >
                        {service.shortTitle}
                      </Link>
                      <p className='mt-3 text-[0.98rem] font-semibold leading-relaxed text-theme-dark sm:text-[1.08rem]'>
                        {service.tagline}
                      </p>
                    </div>

                    {/* Body: description + tech pills + CTA */}
                    <div className={`mt-auto ${artwork.bodyClassName}`}>
                      <p className='overflow-hidden text-sm leading-6 text-theme-light [-webkit-box-orient:vertical] [-webkit-line-clamp:4] [display:-webkit-box]'>
                        {service.description}
                      </p>
                      <div className='mt-5 flex flex-wrap gap-2'>
                        {service.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className='rounded-full border border-theme-light/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-theme-light backdrop-blur-sm'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/services?tab=${service.tab}`}
                        className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-theme-dark underline-offset-4 transition hover:text-theme-light hover:underline'
                      >
                        {service.name}
                        <span aria-hidden='true'>{'->'}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Decorative artwork */}
                  <div className={artwork.wrapperClassName}>
                    <Image
                      src={artwork.src}
                      alt={service.name}
                      width={400}
                      height={400}
                      className={artwork.imageClassName}
                      priority={index < 3}
                    />
                  </div>
                </WobbleCard>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
