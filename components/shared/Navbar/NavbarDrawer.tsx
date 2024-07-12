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
import { Button } from '@/components/ui/button'
import { RxCross2 } from 'react-icons/rx'
import { useRouter } from 'next/navigation'

export function NavbarDrawer() {
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab') || 'defaultTabValue'
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const finalPath = `${pathname}?tab=${tab}`
  const router = useRouter()

  useEffect(() => {
    console.log(pathname)
    setOpen(false)
  }, [pathname, tab])
  return (
    <Drawer direction='top' open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className='h-8 w-8 text-theme-dark'>
          <RiMenu4Line className='h-full w-full stroke-1' />
        </button>
      </DrawerTrigger>
      <DrawerContent className='z-[150] h-full w-full bg-white'>
        <div className='flex h-full flex-col overflow-y-auto py-4 scrollbar-hide'>
          <div className='flex items-center justify-between px-6'>
            <Link href={'/'}>
              <Image
                src={'/Images/Navbar/logo.svg'}
                width={100}
                height={100}
                className='w-40 cursor-pointer'
                alt='logo'
              />
            </Link>
            <DrawerClose>
              <div className='h-8 w-8 font-extrabold text-theme-dark'>
                <RxCross2 className='h-full w-full' />
              </div>
            </DrawerClose>
          </div>
          <Accordion type='single' collapsible className='mt-8 w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='mt-2 px-6 py-4 text-lg font-bold text-theme-dark'>
                Serivices
              </AccordionTrigger>
              <AccordionContent className='flex flex-col py-0'>
                {services.map((item, index) => (
                  <Link
                    href={item.path}
                    scroll={false}
                    key={index}
                    className={`py-2 pl-10 text-lg font-semibold text-theme-dark ${item.path === finalPath ? 'bg-theme-dark text-white' : ''} `}
                  >
                    <div className='flex items-center gap-4'>
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
              <AccordionTrigger className='mt-2 px-6 py-4 text-lg font-bold text-theme-dark'>
                Industries
              </AccordionTrigger>
              <AccordionContent className='flex flex-col py-0'>
                {industries.map((item, index) => (
                  <Link
                    href={item.path}
                    scroll={false}
                    key={index}
                    className={`py-2 pl-10 text-lg font-semibold text-theme-dark ${item.path === finalPath ? 'bg-theme-dark text-white' : ''} `}
                  >
                    <div className='flex items-center gap-4'>
                      <div className='h-[18px] w-[18px]'>{item.icon}</div>
                      {item.category}
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            className={`mt-2 px-6 py-4 text-lg font-bold text-theme-dark ${pathname.startsWith('/case-study') ? 'bg-theme-dark text-white' : ''}`}
            href={'/case-study'}
          >
            Case Studies
          </Link>
          <Link
            className={`mt-2 px-6 py-4 text-lg font-bold text-theme-dark ${pathname.startsWith('/blog') ? 'bg-theme-dark text-white' : ''}`}
            href={'/blog'}
          >
            Blog
          </Link>
          <Link
            className={`mt-2 px-6 py-4 text-lg font-bold text-theme-dark ${pathname === '/portfolio' ? 'bg-theme-dark text-white' : ''}`}
            href={'/portfolio'}
          >
            Portfolio
          </Link>
          <Link
            className={`mt-2 px-6 py-4 text-lg font-bold text-theme-dark ${pathname === '/about-us' ? 'bg-theme-dark text-white' : ''}`}
            href={'/'}
          >
            About Us
          </Link>
          <Button
            onClick={() => router.push('/contact-us')}
            className='m-4 my-6 w-fit'
          >
            Get Started
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
