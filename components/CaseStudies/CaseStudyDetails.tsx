'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { format, parseISO } from 'date-fns'
import { IBlog } from '@/types/blogs'

export interface IBlogProp {
  caseStudy: IBlog
}

export default function CaseStudyDetail({ caseStudy }: IBlogProp) {
  const sectionRefs = useRef<HTMLDivElement[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const navbarHeight = 80

  const scrollToSection = (index: number) => {
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
  }, [])

  return (
    <>
      <div className='flex w-full 2md:flex-row flex-col items-center justify-between gap-10 pb-10 2md:mt-28 mt-20 2md:p-8 p-2'>
        <div className='h-[100%] 2md:w-[60%]'>
          <h1 className='mb-6 text-3xl font-extrabold text-theme-dark xl:text-5xl xl:leading-tight'>
            {caseStudy?.title}
          </h1>
          <p className='mb-6 2md:text-xl text-lg font-medium text-theme-dark'>
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
              <span className='2md:text-lg text-sm text-theme-dark'>{caseStudy.authorName}</span>
            </div>
            <div className='flex h-8 items-center rounded-full border-2 border-theme-dark/50 px-4'>
              <span className='2md:text-lg text-sm text-theme-dark'>
                {format(parseISO(caseStudy.createdAt), 'MMMM do, yyyy ')}
              </span>
            </div>
          </div>
        </div>
        <div className='flex h-[100%] 2md:w-[40%] items-center justify-center'>
          <Image
            src={caseStudy.image}
            alt='Blog image'
            height={1000}
            width={1000}
            className=''
          />
        </div>
        {/* <div className='bg-nav bg-blur absolute -top-[60rem] left-[20rem] bg-[#D8F6FF]'></div> */}
      </div>

      {caseStudy.sections.length > 0 && (
        <div className='relative my-24 flex justify-between p-8'>
          <div className='sticky top-32 h-full w-[360px]'>
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
                  onClick={() => scrollToSection(index)}
                >
                  {item.title}
                </p>
              ))}
          </div>
          <div className='w-[744px]'>
            {caseStudy.sections &&
              caseStudy.sections.map((item: any, index: any) => (
                <div
                  key={index}
                  className='mb-16 mt-16 first:mt-0'
                  ref={(el) => {
                    sectionRefs.current[index] = el as HTMLDivElement
                  }}
                >
                  <p className='mb-6 w-[85%] text-4xl font-bold leading-tight text-theme-dark'>
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
                  <div className='mt-12 text-xl font-medium tracking-wide'>
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
