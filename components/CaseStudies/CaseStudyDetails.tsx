'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { IBlog } from '@/types/blogs'
import { ContentDrawer } from './ContentDrawer'

export interface IBlogProp {
  caseStudy: IBlog
}

export default function CaseStudyDetail({ caseStudy }: IBlogProp) {
  const [open, setOpen] = useState(false)
  const sectionRefs = useRef<HTMLDivElement[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const navbarHeight = 80

  const scrollToSection = (index: number, value: boolean) => {
    if (value === true) {
      if (sectionRefs.current[index]) {
        const element = sectionRefs.current[index]
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navbarHeight
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    } else {
      setTimeout(() => {
        if (sectionRefs.current[index]) {
          const element = sectionRefs.current[index]
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - navbarHeight
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }, 500)
    }
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY + navbarHeight + 20
    const newActiveIndex = sectionRefs.current.findIndex((ref) => {
      if (ref) {
        const top = ref.getBoundingClientRect().top + window.scrollY
        const bottom = top + ref.clientHeight
        return scrollPosition >= top && scrollPosition <= bottom
      }
      return false
    })

    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeIndex])

  return (
    <>
      <div className='mt-20 flex w-full flex-col items-center justify-between gap-10 p-2 pb-10 2md:mt-28 2md:flex-row 2md:p-8'>
        <div className='h-[100%] 2md:w-[60%]'>
          <h1 className='mb-6 text-3xl font-extrabold text-theme-dark xl:text-5xl xl:leading-tight'>
            {caseStudy?.title}
          </h1>
          <p className='mb-6 text-lg font-medium text-theme-dark 2md:text-xl'>
            {caseStudy?.summary}
          </p>
          <div className='flex items-center space-x-4'>
            <div className='flex h-8 items-center rounded-full border-2 border-theme-dark/50 px-4'>
              <Image
                src={`/avatar.png`}
                alt='Author avatar'
                height={1000}
                width={1000}
                className='h-8 w-8 rounded-full object-cover'
              />
              <span className='text-sm text-theme-dark 2md:text-lg'>
                {caseStudy.authorName}
              </span>
            </div>
          </div>
        </div>
        <div className='flex h-[100%] items-center justify-center 2md:w-[40%]'>
          <Image
            src={caseStudy.image}
            alt='Blog image'
            height={1000}
            width={1000}
            className=''
          />
        </div>
      </div>

      {caseStudy.sections.length > 0 && (
        <div className='relative my-24 flex flex-col justify-between p-2 2md:flex-row 2md:p-8'>
          <div className='fixed left-0 top-[50%] block h-full items-center 2md:hidden'>
            <ContentDrawer
              sections={caseStudy.sections}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              scrollToSection={scrollToSection}
              setOpen={setOpen}
              open={open}
            />
          </div>
          <div className='sticky top-32 hidden h-full w-[360px] 2md:block'>
            <div className='mb-10 text-[20px] font-semibold text-theme-dark'>
              Contents
            </div>
            {caseStudy.sections &&
              caseStudy.sections.map((item: any, index: any) => (
                <p
                  key={index}
                  className={`mb-6 cursor-pointer rounded-md p-2 text-[20px] font-bold ${
                    activeIndex === index ? 'bg-[#0096E114]' : ''
                  }`}
                  onClick={() => scrollToSection(index, true)}
                >
                  {item.title}
                </p>
              ))}
          </div>

          <div className='2md:w-[744px]'>
            {caseStudy.sections &&
              caseStudy.sections.map((item: any, index: any) => (
                <div
                  key={index}
                  className='mb-16 mt-16 first:mt-0'
                  ref={(el) => {
                    sectionRefs.current[index] = el as HTMLDivElement
                  }}
                >
                  <p className='mb-6 w-[85%] text-2xl font-bold leading-tight text-theme-dark 2md:text-4xl'>
                    {item.title}
                  </p>
                  {item.image && (
                    <div className='w-full'>
                      <Image
                        src={item.image}
                        alt='Section image'
                        height={1000}
                        width={1000}
                        className='w-full object-cover'
                      />
                    </div>
                  )}
                  <div className='mt-4 text-lg font-medium tracking-wide 2md:mt-12 2md:text-xl'>
                    {item.content}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  )
}
