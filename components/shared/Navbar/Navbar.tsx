'use client'
import { Button } from '@/components/ui/button'
import { FaChevronDown } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NavbarDrawer } from './NavbarDrawer'
import { industries, services } from '@/lib/items'

export function Navbar() {
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

  const router = useRouter()

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[100] w-full px-2 2md:px-4 xl:px-16 ${scrolled ? 'bg-white' : 'bg-transparent'}`}
    >
      <div className='mx-auto flex h-16 max-w-8xl items-center justify-between p-4 md:p-8 2md:h-20'>
        <Link href={'/'}>
          <Image
            src={'/Images/Navbar/logo.svg'}
            width={100}
            height={100}
            className='w-40 cursor-pointer'
            alt='logo'
          />
        </Link>
        <div className='hidden gap-8 font-semibold text-theme-dark xl:flex'>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className='flex cursor-pointer items-center gap-1 border-none !bg-transparent p-0 text-base font-semibold text-theme-dark hover:text-gray-500'>
                Services
                <FaChevronDown className='text-xs' />
              </MenubarTrigger>
              <MenubarContent className='z-[120] min-w-[220px] rounded-lg border-none bg-none p-0 shadow-none'>
                <div>
                  <div className='h-fit rounded-lg bg-white'>
                    <div className='z-60 flex h-fit w-[240px] cursor-pointer flex-col rounded-lg bg-[#88caec] bg-opacity-15 font-semibold text-gray-500'>
                      {services.map((item: any) => (
                        <Link
                          href={item.path}
                          scroll={false}
                          key={item}
                          className='flex items-center justify-between gap-6 border-b-2 border-theme-light border-opacity-20 p-3 text-sm text-gray-500 last:border-b-0 hover:bg-theme-dark hover:text-white hover:first:rounded-t-lg hover:last:rounded-b-lg'
                        >
                          <div className='flex gap-4'>
                            <div className='h-[20px] w-[20px]'>{item.icon}</div>
                            {item.category}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className='flex cursor-pointer items-center gap-1 border-none !bg-transparent p-0 text-base font-semibold text-theme-dark hover:text-gray-500'>
                Industries
                <FaChevronDown className='text-xs' />
              </MenubarTrigger>
              <MenubarContent className='z-[120] min-w-[220px] rounded-lg border-none bg-none p-0 shadow-none'>
                <div>
                  <div className='h-fit rounded-lg bg-white'>
                    <div className='z-60 flex h-fit w-[240px] cursor-pointer flex-col rounded-lg bg-[#88caec] bg-opacity-15 font-semibold text-gray-500'>
                      {industries.map((item: any) => (
                        <Link
                          href={item.path}
                          scroll={false}
                          key={item}
                          className='flex items-center justify-between gap-6 border-b-2 border-theme-light border-opacity-20 p-3 text-sm text-gray-500 last:border-b-0 hover:bg-theme-dark hover:text-white hover:first:rounded-t-lg hover:last:rounded-b-lg'
                        >
                          <div className='flex gap-4'>
                            <div className='h-[20px] w-[20px]'>{item.icon}</div>
                            {item.category}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Link
            href={'/case-study'}
            className='flex cursor-pointer items-center justify-center hover:text-gray-500'
          >
            Case Studies
          </Link>
          <Link
            href={'/blog'}
            className='flex cursor-pointer items-center justify-center hover:text-gray-500'
          >
            Blog
          </Link>
          <Link
            href={'/portfolio'}
            className='flex cursor-pointer items-center justify-center hover:text-gray-500'
          >
            Portfolio
          </Link>
          <Link
            href={'/about-us'}
            className='flex cursor-pointer items-center justify-center hover:text-gray-500'
          >
            About Us
          </Link>
        </div>
        <div className='hidden xl:block'>
          <Button onClick={()=> router.push('/contact-us')}>Get Started</Button>
        </div>
        <div className='xl:hidden'>
          <NavbarDrawer />
        </div>
      </div>
    </nav>
  )
}
