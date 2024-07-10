'use client'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { RiMenu4Line } from 'react-icons/ri'
import Image from 'next/image'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { industries, services } from '@/lib/items'

export function NavbarDrawer() {
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab') || 'defaultTabValue'
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const finalPath = `${pathname}?tab=${tab}`

  useEffect(() => {
    console.log(pathname)
    setOpen(false)
  }, [pathname, tab])
  return (
    <Drawer direction='left' open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className='h-8 w-8 text-theme-dark'>
          <RiMenu4Line className='h-full w-full stroke-1' />
        </button>
      </DrawerTrigger>
      <DrawerContent className='z-[150] h-full max-w-[350px] bg-white'>
        <div className='flex h-full flex-col py-4'>
          <div className='flex items-center justify-between px-4'>
            <Link href={'/'}>
              <Image
                src={'/Images/Navbar/logo.svg'}
                width={100}
                height={100}
                className='w-32 cursor-pointer'
                alt='logo'
              />
            </Link>
            <DrawerClose>
              <div className='text-theme-dark'>
                <X />
              </div>
            </DrawerClose>
          </div>
          <Accordion type='single' collapsible className='mt-4 w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='px-4 py-3 text-theme-dark'>
                Serivices
              </AccordionTrigger>
              <AccordionContent className='flex flex-col py-0'>
                {services.map((item, index) => (
                  <Link
                    href={item.path}
                    scroll={false}
                    key={index}
                    className={`py-2 pl-6 ${item.path === finalPath ? 'bg-theme-dark text-white' : ''} `}
                  >
                    <div className='flex gap-4'>
                      <div className='h-[18px] w-[18px]'>{item.icon}</div>
                      {item.category}
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='px-4 py-3 text-theme-dark'>
                Industries
              </AccordionTrigger>
              <AccordionContent className='flex flex-col py-0'>
                {industries.map((item, index) => (
                  <Link
                    href={item.path}
                    scroll={false}
                    key={index}
                    className={`py-2 pl-6 ${item.path === finalPath ? 'bg-theme-dark text-white' : ''} `}
                  >
                    <div className='flex gap-4'>
                      <div className='h-[18px] w-[18px]'>{item.icon}</div>
                      {item.category}
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            className={`px-4 py-3 text-theme-dark ${pathname.startsWith('/case-study') ? 'bg-theme-dark text-white' : ''}`}
            href={'/case-study'}
          >
            Case Studies
          </Link>
          <Link
            className={`px-4 py-3 text-theme-dark ${pathname.startsWith('/blog') ? 'bg-theme-dark text-white' : ''}`}
            href={'/blog'}
          >
            Blog
          </Link>
          <Link
            className={`px-4 py-3 text-theme-dark ${pathname === '/portfolio' ? 'bg-theme-dark text-white' : ''}`}
            href={'/portfolio'}
          >
            Portfolio
          </Link>
          <Link
            className={`px-4 py-3 text-theme-dark ${pathname === '/about-us' ? 'bg-theme-dark text-white' : ''}`}
            href={'/'}
          >
            About Us
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
