'use client'

import React, { useEffect, useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
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
  setActiveIndex,
  scrollToSection,
  setOpen,
  open,
}: any) => {
  useEffect(() => {
    setOpen(false)
  }, [activeIndex])

  const handleSectionClick = (index: number) => {
    setActiveIndex(index)
    scrollToSection(index, false)
    setOpen(false)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} direction='left'>
      <DrawerTrigger>
        <div className='w-[50px] shadow-2xl'>
          <Image
            src={'/content-sidebar.svg'}
            width={100}
            height={100}
            alt='sidebar'
            className='w-full'
          />
        </div>
      </DrawerTrigger>
      <DrawerContent className='z-[1000] h-full w-[min(85vw,24rem)]'>
        <div className='overflow-y-auto px-3 py-4 scrollbar-hide sm:px-4'>
          <div className='mb-8 p-2 text-[20px] font-bold'>Contents</div>
          {sections &&
            sections.map((item: any, index: any) => (
              <p
                key={index}
                className={`mb-6 cursor-pointer rounded-md p-2 text-lg font-bold ${
                  activeIndex === index ? 'bg-[#0096E114]' : ''
                }`}
                onClick={() => handleSectionClick(index)}
              >
                {item.title}
              </p>
            ))}
        </div>

        <DrawerFooter>
          {/* <DrawerClose>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
