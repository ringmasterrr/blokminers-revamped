'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className='group relative block h-full w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card isHovered={hoveredIndex === idx}>
            <CardTitle isHovered={hoveredIndex === idx}>{item.title}</CardTitle>
            <CardDescription isHovered={hoveredIndex === idx}>
              {item.description}
            </CardDescription>
            <div
              className={cn(
                'mt-6 flex items-center text-sm font-medium text-[#2563EB] transition-all duration-300',
                hoveredIndex === idx
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-2 opacity-0',
              )}
            >
              Learn more
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </Card>
        </a>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
  isHovered,
}: {
  className?: string
  children: React.ReactNode
  isHovered?: boolean
}) => {
  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300',
        isHovered
          ? 'border-[#2563EB] shadow-lg shadow-[#2563EB]/10'
          : 'border-gray-200 shadow-sm',
        className,
      )}
    >
      {/* Decorative gradient accent on hover */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-gradient-to-br from-[#D8F6FF]/0 to-[#22D3EE]/0 transition-opacity duration-300',
          isHovered && 'from-[#D8F6FF]/20 to-[#22D3EE]/10',
        )}
      />
      <div className='relative z-10'>{children}</div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
  isHovered,
}: {
  className?: string
  children: React.ReactNode
  isHovered?: boolean
}) => {
  return (
    <h4
      className={cn(
        'text-xl font-bold tracking-tight text-[#00283C] transition-colors duration-300',
        isHovered && 'text-[#2563EB]',
        className,
      )}
    >
      {children}
    </h4>
  )
}

export const CardDescription = ({
  className,
  children,
  isHovered,
}: {
  className?: string
  children: React.ReactNode
  isHovered?: boolean
}) => {
  return (
    <p
      className={cn(
        'mt-3 text-sm leading-relaxed text-[#64748B] transition-colors duration-300',
        className,
      )}
    >
      {children}
    </p>
  )
}

const industries = [
  {
    title: 'Healthcare & MedTech',
    description:
      'Manual admin is consuming thousands of clinical hours that should be spent on patients.',
    link: '/industries/healthcare-medtech',
  },
  {
    title: 'Finance & FinTech',
    description:
      'Compliance overhead, fraud losses, and slow settlement are compressing margins across the sector.',
    link: '/industries/finance-fintech',
  },
  {
    title: 'Supply Chain & Logistics',
    description:
      'Lack of real-time end-to-end visibility is costing supply chains 8 to 10% of annual revenue.',
    link: '/industries/supply-chain-logistics',
  },
  {
    title: 'Retail & eCommerce',
    description:
      'Generic customer experiences and supply uncertainty are killing conversion rates and customer lifetime value.',
    link: '/industries/retail-ecommerce',
  },
  {
    title: 'Real Estate & PropTech',
    description:
      'Property transactions are slow, opaque, and drowning in paper while AI and blockchain can solve both sides of the problem.',
    link: '/industries/real-estate-proptech',
  },
  {
    title: 'Legal & Compliance',
    description:
      'Legal teams spend 60% of their billable time on tasks that AI can perform in minutes at a fraction of the cost.',
    link: '/industries/legal-compliance',
  },
]

export default function IndustrySection() {
  return (
    <section className='bg-[#F8FAFC] py-24 lg:py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto mb-16 text-center'>
          {/* Pill badge - now stable, never disappears */}
          <div className='inline-flex items-center rounded-full bg-[#D8F6FF] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#2563EB]'>
            Industry Verticals
          </div>
          <h2 className='mt-6 text-balance text-3xl font-extrabold leading-tight text-[#00283C] sm:text-4xl lg:text-5xl'>
            Deep experience across the industries that need us most
          </h2>
          <p className='max-w-2xl mx-auto mt-6 text-base leading-relaxed text-[#64748B] sm:text-lg'>
            We do not just deliver code — we understand your sector, your
            compliance requirements, and your competitive pressures. That is why
            our solutions actually get adopted and used.
          </p>
        </div>

        <HoverEffect items={industries} />
      </div>
    </section>
  )
}
