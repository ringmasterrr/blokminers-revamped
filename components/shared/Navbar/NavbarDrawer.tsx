
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { RiMenu4Line } from 'react-icons/ri'
import Image from 'next/image'
import { X } from 'lucide-react'

export function NavbarDrawer() {

  return (
    <Drawer direction='left'>
      <DrawerTrigger asChild>
        <button className='block h-8 w-8 text-theme-dark 2md:hidden'>
          <RiMenu4Line className='h-full w-full stroke-1' />
        </button>
      </DrawerTrigger>
      <DrawerContent className='z-[150] h-full max-w-[350px] bg-white'>
        <div className='flex h-full  flex-col gap-4 p-4'>
          <div className='flex justify-between items-center'>
            <Image
              src={'/Images/Navbar/logo.svg'}
              width={100}
              height={100}
              className='w-32 cursor-pointer'
              alt='logo'
            />
            <DrawerClose>
              <div className='text-theme-dark'>
                <X />
              </div>
            </DrawerClose>
          </div>
          {/* <Button className='w-fit'>Get Started</Button> */}
          
        </div>
      </DrawerContent>
    </Drawer>
  )
}
