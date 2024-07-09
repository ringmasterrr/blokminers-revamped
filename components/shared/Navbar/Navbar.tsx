'use client'

import { Button } from '@/components/ui/button'
import { RiMenu4Line } from 'react-icons/ri'
import { FaChevronDown } from 'react-icons/fa6'
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaAngleRight } from 'react-icons/fa6'
import { white } from 'tailwindcss/colors'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { NavbarDrawer } from './NavbarDrawer'

export function Navbar() {
  const router = useRouter()

  const hoverContent = {
    'Finance & Banking': (
      <div className='flex flex-col items-center rounded-lg bg-[#88caec] bg-opacity-10 p-10 text-center text-lg font-semibold text-theme-dark shadow-md'>
        <h2 className='mb-6 text-xl font-bold'>Finance & Banking</h2>
        <p className='mb-10 text-sm text-theme-light'>
          We empower the real estate sector to provide beyond property - the
          commitment to enhancing clients&apos; lifestyles
        </p>
        <div className='mb-10 text-xl font-bold'>
          Transforming Finance and Banking with BlokMiners&apos; Blockchain
          Solutions
        </div>
        <div className='grid w-full grid-cols-2 gap-8'>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/image1.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Decentralized Finance <br /> (DeFi) Solutions
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/Image2.png'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Smart Contract <br /> Implementation
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/Image3.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Cross-Border <br /> Payments
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/Image4.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Regulatory Compliance <br /> and Reporting
            </div>
          </div>
        </div>
      </div>
    ),
    'Healthcare': (
      <div className='flex flex-col items-center rounded-lg bg-[#88caec] bg-opacity-10 p-10 text-center text-lg font-semibold text-theme-dark shadow-md'>
        <h2 className='mb-6 text-xl font-bold'>Healthcare</h2>
        <p className='mb-10 text-sm text-theme-light'>
          We assist in achieving healthcare that is intelligent, interconnected,
          and focused on the patient.
        </p>
        <h3 className='mb-10 text-xl font-bold'>
          Establishing a value-based network.
        </h3>
        <ul className='w-full list-outside list-disc pl-4 text-left text-sm'>
          <li className='mb-4'>
            Customers nowadays seek experiences, not solely products.
          </li>
          <li className='mb-4'>
            Manufacturers need to construct connected, cognitive, and
            cooperative networks that facilitate adaptable innovation on a grand
            scale.{' '}
          </li>
          <li className=''>
            This necessitates an approach resembling the neural system, where
            the manufacturing value chain imitates the human nervous system —
            automatically detecting new data, grasping its significance, and
            promptly reacting.
          </li>
        </ul>
      </div>
    ),
    'Insurance': (
      <div className='flex flex-col items-center rounded-lg bg-[#88caec] bg-opacity-10 p-10 text-center text-lg font-semibold text-theme-dark shadow-md'>
        <h2 className='mb-6 text-xl font-bold'>Insurance</h2>
        <p className='mb-10 text-sm text-theme-light'>
          We enable insurance providers to offer more than just security – the
          assurance of an improved life for their clients.
        </p>
        <h3 className='mb-10 text-xl font-bold'>
          Innovative Approaches Deliver Customer Benefit
        </h3>
        <ul className='w-full list-outside list-disc pl-4 text-left text-sm'>
          <li className='mb-4'>
            Historically, insurers have supplied financial safeguarding against
            life and property losses.{' '}
          </li>
          <li className='mb-4'>
            Over the past ten years, their approaches have evolved to encompass
            prevention and sustainability. Prevention alerts policyholders to
            potential risks, while sustainability guarantees ongoing security.{' '}
          </li>
          <li className=''>
            Encompassing this entire range—from protection to
            sustainability—necessitates an adaptable business structure and a
            digitally-focused approach.
          </li>
        </ul>
      </div>
    ),
    'Education': (
      <div className='flex flex-col items-center rounded-lg bg-[#88caec] bg-opacity-10 p-10 text-center text-lg font-semibold text-theme-dark shadow-md'>
        <h2 className='mb-6 text-xl font-bold'>Education</h2>
        <p className='mb-10 text-sm text-theme-light'>
          We empower educators to provide beyond knowledge – the promise of a
          brighter future for their students
        </p>
        <h3 className='mb-10 text-xl font-bold'>
          Education and the Evolution of Learning Technology
        </h3>
        <ul className='w-full list-outside list-disc pl-4 text-left text-sm'>
          <li className='mb-4'>
            The 21st century heralded an education revolution, powered by the
            internet&apos;s perpetual learning resource.
          </li>
          <li className='mb-4'>
            Modern disruptions underscore the necessity for learning technology
            solutions, enriching blended learning experiences.
          </li>
          <li className='mb-4'>
            Through digital learning solutions offering boundless educational
            access via hybrid models, virtual campuses, extended reality, and
            the emerging metaverse, students encounter personalized, immersive,
            and self-paced learning.
          </li>
          <li className=''>
            Moreover, industry-academia collaboration reimagines the educational
            framework, cultivating a dynamic and future-ready workforce.
          </li>
        </ul>
      </div>
    ),
    'Real Estate': (
      <div className='flex flex-col items-center rounded-lg bg-[#88caec] bg-opacity-10 p-10 text-center text-lg font-semibold text-theme-dark shadow-md'>
        <h2 className='mb-6 text-xl font-bold'>Real Estate</h2>
        <p className='mb-10 text-sm text-theme-light'>
          We empower the real estate sector to provide beyond property – the
          commitment to enhancing clients&apos; lifestyles
        </p>
        <h3 className='mb-10 text-xl font-bold'>
          Building the Future of Real Estate on BlokMiners&apos; Blockchain
          Platform
        </h3>
        <div className='grid w-full grid-cols-2 gap-8'>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/assetTok.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Asset <br /> Tokenization
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/immutable.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Immutable Property <br /> Records
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/smart.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Smart Contracts for <br /> Transactions
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/market.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Decentralized <br /> Marketplaces
            </div>
          </div>
        </div>
      </div>
    ),
    'Travel & Logistics': (
      <div className='flex flex-col items-center rounded-lg bg-[#88caec] bg-opacity-10 p-10 text-center text-lg font-semibold text-theme-dark shadow-md'>
        <h2 className='mb-6 text-xl font-bold'>Travel & Logistics</h2>
        <p className='mb-10 text-sm text-theme-light'>
          Embarking on Journeys: Crafting Seamless Travel and Logistics
          Experiences
        </p>
        <h3 className='mb-10 text-xl font-bold'>
          Revolutionizing Travel and Logistics with BlokMiners&apos; Advanced
          Solutions
        </h3>
        <div className='grid w-full grid-cols-2 gap-8'>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/trans.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Blockchain for Enhanced <br /> Transparency and Security
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/data.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Data-Driven Insights for <br /> Strategic Decision-Making
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/ai.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              AI-Powered <br /> Optimization
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/Operations.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Digital Transformation for <br /> Seamless Operations
            </div>
          </div>
        </div>
      </div>
    ),
    'Retail': (
      <div className='flex flex-col items-center rounded-lg bg-[#88caec] bg-opacity-10 p-10 text-center text-lg font-semibold text-theme-dark shadow-md'>
        <h2 className='mb-6 text-xl font-bold'>Retail</h2>
        <p className='mb-10 text-sm text-theme-light'>
          We empower retailers to offer more than just products – the promise of
          an enhanced lifestyle for their customers
        </p>
        <h3 className='mb-10 text-xl font-bold'>
          Creative Strategies Enhance Shopping Experience
        </h3>
        <ul className='w-full list-outside list-disc pl-4 text-left text-sm'>
          <li className='mb-4'>
            Traditionally, retailers have provided products for consumers. In
            recent years, their methods have expanded to include personalization
            and sustainability.
          </li>
          <li className='mb-4'>
            Personalization tailors offerings to individual preferences, while
            sustainability ensures lasting impact.
          </li>
          <li className=''>
            Covering this spectrum—from customization to sustainability—requires
            a flexible business model and a digitally-oriented strategy
          </li>
        </ul>
      </div>
    ),
    'Manufacturing': (
      <div className='flex flex-col items-center rounded-lg bg-[#88caec] bg-opacity-10 p-10 text-center text-lg font-semibold text-theme-dark shadow-md'>
        <h2 className='mb-6 text-xl font-bold'>Manufacturing</h2>
        <p className='mb-10 text-sm text-theme-light'>
          We transform enterprise value chains into ecosystems that sense,
          learn, and adapt.
        </p>
        <h3 className='mb-10 text-xl font-bold'>
          Empowering Manufacturing with BlokMiners&apos; Blockchain Solutions
        </h3>
        <div className='grid w-full grid-cols-2 gap-8'>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/chain.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Supply Chain <br /> Transparency
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/automation.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Smart Contracts for <br /> Automation
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/protec.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Counterfeit <br /> Protection
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
              <Image
                alt='image'
                src={'/Industries/decentra.svg'}
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='text-sm'>
              Decentralized <br /> Operations
            </div>
          </div>
        </div>
      </div>
    ),
  }

  // const [hoverContent, setHoverContent] = useState(hoverContentData)

  const [hoveredItem, setHoveredItem] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[100] w-full px-4 2md:px-16 ${scrolled ? 'bg-white' : 'bg-transparent'}`}
    >
      <div className='mx-auto flex h-16 max-w-8xl items-center justify-between 2md:h-20'>
        <div onClick={() => router.push('/')}>
          <Image
            src={'/Images/Navbar/logo.svg'}
            width={100}
            height={100}
            className='w-40 cursor-pointer'
            alt='logo'
          />
        </div>
        <div className='hidden gap-8 font-semibold text-theme-dark 2md:flex'>
          <p className='flex cursor-pointer items-center justify-center gap-1 hover:text-gray-500'>
            Services
            <FaChevronDown className='text-xs' />
          </p>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className='flex cursor-pointer items-center gap-1 border-none !bg-transparent p-0 text-base font-semibold text-theme-dark hover:text-gray-500'>
                Industries
                <FaChevronDown className='text-xs' />
              </MenubarTrigger>
              <MenubarContent className='z-[120] min-w-[220px] rounded-lg border-none bg-none p-0 shadow-none'>
                <div
                // onMouseLeave={() => setHoveredItem(null)}
                // className='flex gap-4'
                >
                  <div className='h-fit rounded-lg bg-white'>
                    <div className='z-60 flex h-fit w-[240px] cursor-pointer flex-col rounded-lg bg-[#88caec] bg-opacity-15 font-semibold text-gray-500'>
                      {Object.keys(hoverContent).map((item: any) => (
                        <div
                          key={item}
                          className='flex items-center justify-between gap-6 border-b-2 border-theme-light border-opacity-20 p-3 text-sm last:border-b-0 hover:bg-theme-dark hover:text-white hover:first:rounded-t-lg hover:last:rounded-b-lg'
                          // onMouseEnter={() => setHoveredItem(item)}
                        >
                          <p>{item}</p> <FaAngleRight />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* <div className='max-w-[600px] rounded-lg bg-white'>
                    {hoveredItem && hoverContent[hoveredItem]}
                  </div> */}
                </div>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          {/* <Link
            className='flex cursor-pointer items-center justify-center hover:text-gray-500'
            href={'/industries'}
          >
            Industries
          </Link> */}
          <p
            className='flex cursor-pointer items-center justify-center hover:text-gray-500'
            onClick={() => router.push('/case-study')}
          >
            Case Studies
          </p>
          <p
            className='flex cursor-pointer items-center justify-center hover:text-gray-500'
            onClick={() => router.push('/blog')}
          >
            Blog
          </p>
          <p
            className='flex cursor-pointer items-center justify-center hover:text-gray-500'
            onClick={() => router.push('/portfolio')}
          >
            Portfolio
          </p>
          <p
            className='flex cursor-pointer items-center justify-center hover:text-gray-500'
            // onClick={() => router.push('/case-studies')}
          >
            About Us
          </p>
        </div>
        <div className='hidden 2md:block'>
          <Button>Get Started</Button>
        </div>
        <div className='2md:hidden'>
          <NavbarDrawer />
        </div>
      </div>
    </nav>
  )
}
