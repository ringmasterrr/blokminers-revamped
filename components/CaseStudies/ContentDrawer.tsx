'use client'

import React from 'react'
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
import { Button } from '../ui/button'
import Image from 'next/image'

export const ContentDrawer = ({
  activeIndex,
  sections,
  scrollToSection,
}: any) => {
  return (
    <Drawer direction='left'>
      <DrawerTrigger>
        <Image
          src={'/content-sidebar.svg'}
          width={100}
          height={100}
          alt='sidebar'
          className='w-10'
        />
      </DrawerTrigger>
      <DrawerContent className='z-[1000] h-full w-[70%]'>
        <DrawerHeader>
          <DrawerTitle>Contents</DrawerTitle>
        </DrawerHeader>

        {sections &&
          sections.map((item: any, index: any) => (
            <p
              key={index}
              className={`mb-6 cursor-pointer rounded-md p-2 text-[20px] font-bold ${
                activeIndex === index ? 'bg-[#0096E114]' : ''
              }`}
              onClick={() => scrollToSection(index)}
            >
              {item.title}
            </p>
          ))}

        <DrawerFooter>
          {/* <Button>Submit</Button> */}
          <DrawerClose>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
