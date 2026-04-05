'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ComponentType, SVGProps } from 'react'
import { ArrowRight } from 'lucide-react'
import { useMemo } from 'react'
import { FaEthereum } from 'react-icons/fa'
import { SiOpenai, SiSolana } from 'react-icons/si'

import { Button } from '@/components/ui/button'

const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  'https://calendly.com/shrishtiblockchain'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'BlokMiners',
  'description':
    'AI Automation & Blockchain Development Agency building AI agents, workflow automation, and blockchain solutions for healthcare, finance, logistics and retail.',
}

type BuiltOnLogo =
  | { type: 'image'; name: string; src: string }
  | {
      type: 'icon'
      name: string
      icon: ComponentType<SVGProps<SVGSVGElement>>
    }

const builtOnLogos: BuiltOnLogo[] = [
  { type: 'icon', name: 'OpenAI', icon: SiOpenai },
  { type: 'icon', name: 'Ethereum', icon: FaEthereum },
  { type: 'icon', name: 'Solana', icon: SiSolana },
  { type: 'image', name: 'LangChain', src: '/orbit-icons/langchain.webp' },
  { type: 'image', name: 'n8n', src: '/orbit-icons/n8n.webp' },
  { type: 'image', name: 'LlamaIndex', src: '/orbit-icons/llamaindex.webp' },
]

export function Header() {
  const schemaMarkup = useMemo(() => JSON.stringify(organizationSchema), [])

  return (
    <div className='flex flex-col gap-6 pt-10'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />

      <p
        itemProp='description'
        className='mx-auto inline-block w-fit rounded-full bg-blue-ribbon px-3 py-1 text-xs font-medium text-theme-dark 2md:mx-0'
      >
        AI Automation & Blockchain Development Agency
      </p>

      <h1 className='text-center text-4xl font-extrabold leading-tight text-theme-dark md:text-5xl 2md:text-start 2md:text-4xl'>
        We Build AI Automation and Blockchain Systems That Cut Costs, Automate
        Operations and Power the Decentralized Web
      </h1>

      <h2 className='text-center text-lg font-medium leading-relaxed text-theme-light 2md:text-start'>
        From custom AI agents and workflow automation to smart contracts and
        Web3 platforms, BlokMiners helps businesses in healthcare, finance,
        logistics and retail move faster, spend less, and build to last.
      </h2>

      <div className='flex w-full flex-wrap justify-center gap-4 2md:justify-start'>
        <Button asChild>
          <a href={calendlyUrl} target='_blank' rel='noreferrer'>
            Book Free Discovery Call
          </a>
        </Button>

        <Button asChild variant='outline'>
          <Link href='/case-study'>
            See Our Work
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </Button>
      </div>

      <p className='text-center text-sm text-theme-light 2md:text-start'>
        No commitment. 30-minute call. We will identify your top 3 automation
        opportunities, free.
      </p>

      <div className='pt-2'>
        <p className='text-center text-sm font-medium text-theme-light 2md:text-start'>
          Built on
        </p>
        <div className='mt-4 flex flex-wrap items-center justify-center gap-6 opacity-60 2md:justify-start'>
          {builtOnLogos.map((logo) => (
            <div
              key={logo.name}
              className='flex h-10 w-10 items-center justify-center grayscale transition-opacity'
            >
              {logo.type === 'icon' ? (
                <logo.icon
                  aria-label={logo.name}
                  className='h-10 w-10 text-theme-light'
                />
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className='h-10 w-10 object-contain'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
