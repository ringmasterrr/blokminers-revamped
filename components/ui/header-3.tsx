'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { createPortal } from 'react-dom'
import type { LucideIcon } from 'lucide-react'
import {
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Factory,
  FileText,
  GraduationCap,
  Handshake,
  HeartPulse,
  HelpCircle,
  Landmark,
  Leaf,
  Shield,
  ShoppingBag,
  Star,
  Users,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

type LinkItem = {
  title: string
  href: string
  icon: LucideIcon
  description?: string
}

type LinkGroup = {
  title: string
  description: string
  items: LinkItem[]
}

const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  'https://calendly.com/shrishtiblockchain'

const serviceGroups: LinkGroup[] = [
  {
    title: 'AI & Automation',
    description:
      'Operational AI systems that improve speed, accuracy, and scale.',
    items: [
      {
        title: 'AI Agent Development',
        href: '/services?tab=aiml',
        icon: BrainCircuit,
        description:
          'Custom agents for support, execution, and internal workflows.',
      },
      {
        title: 'Workflow Automation',
        href: '/services?tab=dataanalytics',
        icon: Blocks,
        description:
          'Automations that connect tools, remove bottlenecks, and reduce manual work.',
      },
      {
        title: 'LLM & Chatbot Development',
        href: '/services?tab=aiml',
        icon: Star,
        description:
          'Conversational copilots and LLM experiences tailored to your business.',
      },
      {
        title: 'AI Strategy & Consulting',
        href: '/services?tab=consulting',
        icon: BriefcaseBusiness,
        description:
          'Roadmaps, architecture, and AI adoption planning for enterprise teams.',
      },
    ],
  },
  {
    title: 'Blockchain & Web3',
    description:
      'Secure blockchain products spanning infrastructure, apps, and advisory.',
    items: [
      {
        title: 'Blockchain Development',
        href: '/services?tab=blockchaindevelopment',
        icon: Blocks,
        description:
          'End-to-end blockchain engineering for production-grade platforms.',
      },
      {
        title: 'Smart Contracts & DeFi',
        href: '/services?tab=blockchain',
        icon: Shield,
        description:
          'Protocol logic, smart contracts, and DeFi product development.',
      },
      {
        title: 'Web3 & NFT Platforms',
        href: '/services?tab=web3',
        icon: Handshake,
        description:
          'Wallet-enabled apps, NFT ecosystems, and tokenized experiences.',
      },
      {
        title: 'Blockchain Auditing & Consulting',
        href: '/services?tab=consulting',
        icon: FileText,
        description:
          'Technical reviews, launch readiness, and strategic blockchain guidance.',
      },
    ],
  },
]

const industryLinks: LinkItem[] = [
  {
    title: 'Finance',
    href: '/industries/finance',
    icon: Landmark,
    description:
      'Digital finance, fintech products, and secure transaction systems.',
  },
  {
    title: 'Healthcare',
    href: '/industries/healthcare',
    icon: HeartPulse,
    description:
      'Automation and data systems for patient, provider, and operations workflows.',
  },
  {
    title: 'Education',
    href: '/industries/education',
    icon: GraduationCap,
    description:
      'Modern platforms for learning, engagement, and academic operations.',
  },
  {
    title: 'Real Estate',
    href: '/industries/real-estate',
    icon: Building2,
    description:
      'Proptech solutions for transactions, records, and process automation.',
  },
  {
    title: 'Retail',
    href: '/industries/retail',
    icon: ShoppingBag,
    description:
      'Commerce systems that improve conversion, retention, and logistics visibility.',
  },
  {
    title: 'Manufacturing',
    href: '/industries/manufacturing',
    icon: Factory,
    description:
      'Operational intelligence and workflow optimization for industrial teams.',
  },
]

const companyLinks: LinkItem[] = [
  {
    title: 'About Us',
    href: '/why',
    icon: Users,
    description: 'Learn how BlokMiners blends AI and blockchain delivery.',
  },
  {
    title: 'Case Studies',
    href: '/case-study',
    icon: Star,
    description: 'Explore recent work across automation, blockchain, and Web3.',
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: Leaf,
    description:
      'Insights, technical thinking, and product strategy from our team.',
  },
]

const companyLinks2: LinkItem[] = [
  {
    title: 'Contact Us',
    href: '/contact-us',
    icon: Handshake,
  },
  {
    title: 'Why BlokMiners',
    href: '/why',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Privacy Policy',
    href: '#',
    icon: Shield,
  },
  {
    title: 'Help Center',
    href: '#',
    icon: HelpCircle,
  },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(10)

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  const servicesActive = pathname.startsWith('/services')
  const industriesActive = pathname.startsWith('/industries')

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent bg-transparent text-theme-dark transition-all duration-200',
        scrolled &&
          'border-theme-light/15 bg-white/95 shadow-lg shadow-theme-light/10 backdrop-blur-lg',
      )}
    >
      <nav className='mx-auto grid h-14 w-full max-w-8xl grid-cols-[1fr_auto] items-center gap-4 px-4 md:px-8 lg:h-16 lg:grid-cols-[1fr_auto_1fr]'>
        <div className='flex min-w-0 items-center'>
          <Link
            href='/'
            className='flex flex-col justify-center rounded-md px-1 py-1'
          >
            <Image
              src='/Images/Navbar/logo.svg'
              alt='BlokMiners logo'
              width={160}
              height={44}
              className='h-auto w-32 sm:w-36'
              priority
            />
            <span className='mt-1 hidden text-[10px] leading-tight text-theme-light sm:block sm:text-xs'>
              AI Automation <span className='mx-1 text-theme-light/40'>|</span>{' '}
              Blockchain Development
            </span>
          </Link>
        </div>

        <div className='hidden justify-center lg:flex'>
          <NavigationMenu className='lg:flex'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    'bg-transparent text-theme-light hover:bg-blue-ribbon hover:text-theme-dark focus:bg-blue-ribbon focus:text-theme-dark data-[state=open]:bg-blue-ribbon data-[state=open]:text-theme-dark',
                    servicesActive && 'text-theme-dark',
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className='bg-transparent p-0'>
                  <div className='grid w-[46rem] grid-cols-2 gap-8 p-6'>
                    {serviceGroups.map((group) => (
                      <div key={group.title} className='space-y-4'>
                        <div>
                          <p className='text-sm font-semibold text-theme-dark'>
                            {group.title}
                          </p>
                          <p className='mt-1 text-xs leading-relaxed text-theme-light'>
                            {group.description}
                          </p>
                        </div>
                        <ul className='space-y-2'>
                          {group.items.map((item) => (
                            <li key={item.title}>
                              <ListItem {...item} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className='border-t border-theme-light/10 px-6 py-4 text-sm text-theme-light'>
                    Need help choosing the right engagement?{' '}
                    <Link
                      href='/contact-us'
                      className='font-medium text-theme-dark transition hover:text-theme-light'
                    >
                      Talk to the team
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    'bg-transparent text-theme-light hover:bg-dodger-blue hover:text-theme-dark focus:bg-dodger-blue focus:text-theme-dark data-[state=open]:bg-dodger-blue data-[state=open]:text-theme-dark',
                    industriesActive && 'text-theme-dark',
                  )}
                >
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent className='bg-transparent p-0'>
                  <div className='w-[24rem] p-4'>
                    <ul className='space-y-2'>
                      {industryLinks.map((item) => (
                        <li key={item.title}>
                          <ListItem {...item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {companyLinks.map((item) => (
                <NavigationMenuLink key={item.title} asChild className='px-1'>
                  <Link
                    href={item.href}
                    className={cn(
                      'inline-flex rounded-xl px-4 py-2 text-sm font-medium text-theme-light transition hover:bg-blue-ribbon hover:text-theme-dark',
                      pathname.startsWith(item.href) &&
                        'bg-blue-ribbon text-theme-dark',
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='hidden items-center justify-end gap-2 lg:flex'>
          <Button asChild variant='outline'>
            <Link href='/contact-us'>Contact Us</Link>
          </Button>
          <Button asChild>
            <a href={calendlyUrl} target='_blank' rel='noreferrer'>
              Book Free Discovery Call
            </a>
          </Button>
        </div>

        <Button
          size='icon'
          variant='outline'
          onClick={() => setOpen((current) => !current)}
          className='h-10 w-10 rounded-xl border-theme-light/20 bg-white text-theme-dark hover:bg-blue-ribbon hover:text-theme-dark lg:hidden'
          aria-expanded={open}
          aria-controls='mobile-menu'
          aria-label='Toggle menu'
        >
          <MenuToggleIcon open={open} className='size-5' duration={300} />
        </Button>
      </nav>

      <MobileMenu
        open={open}
        className='flex flex-col justify-between gap-8 overflow-y-auto'
      >
        <div className='flex flex-col gap-y-6'>
          <NavigationMenu className='max-w-full'>
            <div className='flex w-full flex-col gap-y-6'>
              <div className='space-y-3'>
                <span className='text-xs font-semibold uppercase tracking-[0.22em] text-theme-light'>
                  Services
                </span>
                {serviceGroups.map((group) => (
                  <div key={group.title} className='space-y-2'>
                    <p className='text-sm font-medium text-theme-dark'>
                      {group.title}
                    </p>
                    {group.items.map((link) => (
                      <ListItem key={link.title} {...link} />
                    ))}
                  </div>
                ))}
              </div>

              <div className='space-y-3'>
                <span className='text-xs font-semibold uppercase tracking-[0.22em] text-theme-light'>
                  Industries
                </span>
                {industryLinks.map((link) => (
                  <ListItem key={link.title} {...link} />
                ))}
              </div>

              <div className='space-y-3'>
                <span className='text-xs font-semibold uppercase tracking-[0.22em] text-theme-light'>
                  Company
                </span>
                {companyLinks.map((link) => (
                  <ListItem key={link.title} {...link} />
                ))}
                {companyLinks2.map((link) => (
                  <SimpleListItem key={link.title} {...link} />
                ))}
              </div>
            </div>
          </NavigationMenu>
        </div>

        <div className='flex flex-col gap-2'>
          <Button asChild variant='outline' className='w-full'>
            <Link href='/contact-us'>Contact Us</Link>
          </Button>
          <Button asChild className='w-full'>
            <a href={calendlyUrl} target='_blank' rel='noreferrer'>
              Book Free Discovery Call
            </a>
          </Button>
        </div>
      </MobileMenu>
    </header>
  )
}

type MobileMenuProps = React.ComponentProps<'div'> & {
  open: boolean
}

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null

  return createPortal(
    <div
      id='mobile-menu'
      className={cn(
        'fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col overflow-hidden border-y border-theme-light/10 bg-white/95 text-theme-dark backdrop-blur-lg lg:hidden',
      )}
    >
      <div
        data-slot={open ? 'open' : 'closed'}
        className={cn(
          'size-full p-4 data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 sm:p-6',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}

function ListItem({ title, description, icon: Icon, href }: LinkItem) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className='flex w-full flex-row gap-x-3 rounded-xl border border-theme-light/10 bg-white p-3 transition hover:border-theme-light/20 hover:bg-blue-ribbon'
      >
        <div className='flex aspect-square size-11 items-center justify-center rounded-xl border border-theme-light/10 bg-dodger-blue shadow-sm'>
          <Icon className='size-5 text-theme-dark' />
        </div>
        <div className='flex min-w-0 flex-col items-start justify-center'>
          <span className='font-medium text-theme-dark'>{title}</span>
          {description ? (
            <span className='mt-1 text-xs leading-relaxed text-theme-light'>
              {description}
            </span>
          ) : null}
        </div>
      </Link>
    </NavigationMenuLink>
  )
}

function SimpleListItem({ title, icon: Icon, href }: LinkItem) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className='flex items-center gap-x-3 rounded-xl border border-theme-light/10 bg-white px-4 py-3 text-sm font-medium text-theme-light transition hover:border-theme-light/20 hover:bg-blue-ribbon hover:text-theme-dark'
      >
        <Icon className='size-4 text-theme-dark' />
        <span>{title}</span>
      </Link>
    </NavigationMenuLink>
  )
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false)

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold)
  }, [threshold])

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  React.useEffect(() => {
    onScroll()
  }, [onScroll])

  return scrolled
}
