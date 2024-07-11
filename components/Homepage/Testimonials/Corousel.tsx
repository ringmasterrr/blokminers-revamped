'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperCore from 'swiper'
import { useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { GoStarFill } from 'react-icons/go'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { ITestimonial } from '@/types/testimonial'

SwiperCore.use([Navigation])

export interface CorouselProps {
  testimonials: ITestimonial[]
}

export default function Corousel({ testimonials }: CorouselProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentSlide(swiper.activeIndex)
  }

  return (
    <>
      <div className='mx-8 transform 2md:mx-0 2md:scale-x-[130%]'>
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          breakpoints={{
            0: {
              // for screens 0px and up
              slidesPerView: 1,
            },
            992: {
              // for screens 640px and up
              slidesPerView: 1,
            },
            1024: {
              // for screens 1024px and up
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: swiperInstance?.navigation?.prevEl,
            nextEl: swiperInstance?.navigation?.nextEl,
          }}
          className='w-full'
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className={``}>
              <div
                className={` ${index !== currentSlide && '!py-8'} mx-auto h-[300px]`}
              >
                <div className='flex h-full flex-col justify-between overflow-hidden rounded-xl border-2 border-white border-opacity-20 bg-white bg-opacity-5 !py-8 px-8 text-white transition-all'>
                  <div className='flex w-full items-center justify-between 2md:scale-y-[120%]'>
                    <div className='flex items-center gap-2'>
                      <div className='h-12 w-12'>
                        <Image
                          src={'/Corousel/zeeve.svg'}
                          width={100}
                          height={80}
                          alt='zeeve'
                        />
                      </div>
                      <div>
                        <div>{item.title}</div>
                        <div className='text-gray-400'>{item.designation}</div>
                      </div>
                    </div>
                    <div className='flex gap-1 text-yellow-400'>
                      {Array.from({ length: item.ratings }).map((_, i) => (
                        <GoStarFill key={i} />
                      ))}
                    </div>
                  </div>
                  <div
                    className={`${index !== currentSlide && 'text-xs'} text-sm 2md:scale-y-[120%]`}
                  >
                    {item.testimony}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='mt-20 flex justify-center gap-4'>
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className='rounded-lg border-2 border-white border-opacity-20 bg-white bg-opacity-5 p-3 text-white hover:bg-opacity-25'
        >
          <IoIosArrowBack className='h-6 w-6' />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className='rounded-lg border-2 border-white border-opacity-20 bg-white bg-opacity-5 p-3 text-white hover:bg-opacity-25'
        >
          <IoIosArrowForward className='h-6 w-6' />
        </button>
      </div>
    </>
  )
}
