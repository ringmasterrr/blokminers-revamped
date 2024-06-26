import Heading from '@/components/shared/Heading/Heading'
import Image from 'next/image'
import React from 'react'
import { iconPaths } from './TechStackPaths'

const TechStack = () => {
  const halfIndex = Math.ceil(iconPaths.length / 2)
  const firstHalf = iconPaths.slice(0, halfIndex)
  const secondHalf = iconPaths.slice(halfIndex)

  return (
    <div className='masked-element my-14 flex flex-col items-center  rounded-2xl border border-[#00283C1F] bg-gradient-to-b from-[#FFFFFF] from-50% to-[#00283C1F] py-16 overflow-hidden z-[100]'>
      <div>
        <Heading
          heading='Our Tech Stack and Protocols'
          message='Skilled in diverse technologies for Blockchain development. Build on robust Layer 1 Blockchains as per project requirements.'
        />
      </div>
      <div className='flex overflow-hidden mt-16'>

        <div className='element-to-animate my-4 flex items-center justify-center gap-4 pr-[10.6px] '>
          {firstHalf.map((iconPath, index) => (
            <div
              key={index}
              className='flex w-fit items-center justify-center gap-3 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-8 py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-10 w-10'
              />
              <span className='text-xl font-medium'>{iconPath.name}</span>
            </div>
          ))}
        </div>
        <div className='element-to-animate my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {firstHalf.map((iconPath, index) => (
            <div
              key={index}
              className='flex w-fit items-center justify-center gap-3 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-8 py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-10 w-10'
              />
              <span className='text-xl font-medium'>{iconPath.name}</span>
            </div>
          ))}
        </div>
        <div className='element-to-animate my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {firstHalf.map((iconPath, index) => (
            <div
              key={index}
              className='flex w-fit items-center justify-center gap-3 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-8 py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-10 w-10'
              />
              <span className='text-xl font-medium'>{iconPath.name}</span>
            </div>
          ))}
        </div>

      </div>
      <div className='flex overflow-hidden '>

        <div className='element-to-animate-rev my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {secondHalf.map((iconPath, index) => (
            <div
              key={index}
              className='marquee2 flex items-center justify-center gap-3 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-8 py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-10 w-10'
              />
              <span className='text-xl font-medium'>{iconPath.name}</span>
            </div>
          ))}
        </div>
        <div className='element-to-animate-rev my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {secondHalf.map((iconPath, index) => (
            <div
              key={index}
              className='marquee2 flex items-center justify-center gap-3 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-8 py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-10 w-10'
              />
              <span className='text-xl font-medium'>{iconPath.name}</span>
            </div>
          ))}
        </div>
        <div className='element-to-animate-rev my-4 flex items-center justify-center gap-4 pr-[10.6px]'>
          {secondHalf.map((iconPath, index) => (
            <div
              key={index}
              className='marquee2 flex items-center justify-center gap-3 rounded-xl border border-[#00283C3D] bg-[#00283C14] px-8 py-3'
            >
              <Image
                src={iconPath.path}
                alt={`icon-${iconPath.name}`}
                height={30}
                width={30}
                className='h-10 w-10'
              />
              <span className='text-xl font-medium'>{iconPath.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TechStack
 