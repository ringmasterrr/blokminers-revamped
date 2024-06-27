'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperCore from 'swiper'
import { useRef, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { GoStarFill } from 'react-icons/go'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

SwiperCore.use([Navigation])

const Corousel = () => {
  const [slideData] = useState([
    {
      name: 'First slide',
      message:
        'The dedication, integrity, and commitment coupled with the extensive knowledge in Web3.O makes BlokMiners stand apart from the crowd. We have taken their assistance in 3 projects and they have never failed us ever. I consider them our extended technology arm whenever we have constrained bandwidth.',
      index: 1,
    },
    {
      name: 'Second slide',
      message:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem maxime perferendis accusamus quidem facere fugiat numquam ducimus ab quis fugit, consequuntur minima, nobis consectetur? Odio facere rem aut hic? Eius!',
      index: 2,
    },
    {
      name: 'third slide',
      message:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem maxime perferendis accusamus quidem facere fugiat numquam ducimus ab quis fugit, consequuntur minima, nobis consectetur? Odio facere rem aut hic? Eius!',
      index: 3,
    },
    {
      name: 'fourth slide',
      message:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem maxime perferendis accusamus quidem facere fugiat numquam ducimus ab quis fugit, consequuntur minima, nobis consectetur? Odio facere rem aut hic? Eius!',
      index: 4,
    },
    {
      name: 'fifth slide',
      message:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem maxime perferendis accusamus quidem facere fugiat numquam ducimus ab quis fugit, consequuntur minima, nobis consectetur? Odio facere rem aut hic? Eius!',
      index: 5,
    },
    {
      name: 'six slide',
      message:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem maxime perferendis accusamus quidem facere fugiat numquam ducimus ab quis fugit, consequuntur minima, nobis consectetur? Odio facere rem aut hic? Eius!',
      index: 6,
    },
  ])
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentSlide(swiper.activeIndex)
  }

  return (
    <>
      <div className='scale-x-[130%] transform'>
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          navigation={{
            prevEl: swiperInstance?.navigation?.prevEl,
            nextEl: swiperInstance?.navigation?.nextEl,
          }}
          className='w-full'
        >
          {slideData.map((item, index) => (
            <SwiperSlide key={index} className={``}>
              <div
                className={` ${index !== currentSlide && '!py-8'} mx-auto h-[300px]`}
              >
                <div className='flex h-full flex-col justify-between overflow-hidden rounded-xl border-2 border-white border-opacity-20 bg-white bg-opacity-5 !py-8 px-8 text-white transition-all'>
                  <div className='flex w-full scale-y-[120%] items-center justify-between'>
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
                        <div>Zeeve</div>
                        <div className='text-gray-400'>CEO</div>
                      </div>
                    </div>
                    <div className='flex gap-1 text-yellow-400'>
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                    </div>
                  </div>
                  <div
                    className={`${index !== currentSlide && 'text-xs'} scale-y-[120%] text-sm`}
                  >
                    {item.message}
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

export default Corousel
