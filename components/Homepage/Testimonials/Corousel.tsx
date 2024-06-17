'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperCore from 'swiper'
import { useRef, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { GoStarFill } from 'react-icons/go'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
    const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleSlideChange = (swiper: any) => {
        setCurrentSlide(swiper.activeIndex)
    }

    return (
        <>
            <div className='scale-x-[130%] transform'>
                <Swiper
                    onSwiper={setSwiperInstance}
                    onSlideChange={handleSlideChange}
                    spaceBetween={20}
                    // Option 1: Ensure enough slides for centering (if applicable)
                    slidesPerView={3} // Adjust based on your needs
                    centeredSlides={true}
                    // Option 2: Set a fixed container width (optional)
                    // style={{ width: '800px' }} // Adjust based on your layout
                    navigation={{
                        prevEl: swiperInstance?.navigation?.prevEl,
                        nextEl: swiperInstance?.navigation?.nextEl,
                    }}
                    className='w-full'
                >
                    {slideData.map((item, index) => (
                        <SwiperSlide key={index} className={``}>
                            <div
                                className={`  ${index !== currentSlide && '!py-8'} mx-auto  h-[280px]`}
                            >
                                {/* <SwipeBox name={item.name} message={item.message} index={item.index} big={index === currentSlide} /> */}
                                <div className='flex h-full flex-col justify-between rounded-xl  border-2 border-white border-opacity-20 px-8 !py-8  text-white overflow-hidden bg-white bg-opacity-5 transition-all '>
                                    <div className='flex w-full justify-between items-center'>
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
                                        <div className='flex text-yellow-400 gap-1'>
                                            <GoStarFill />
                                            <GoStarFill />
                                            <GoStarFill />
                                            <GoStarFill />
                                            <GoStarFill />
                                        </div>
                                    </div>
                                    <div className={`${index !== currentSlide && 'text-xs'} text-sm`}>{item.message}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <div className='mt-4 text-center'>
                <p className='text-white'>Current Slide: {currentSlide + 1}</p>
            </div> */}
            {/* <button
                onClick={() => swiperInstance?.slidePrev()}
                className='bg-black text-white'
                aria-label='Previous Slide'
            >
                {' '}
                previous{' '}
            </button>
            <button
                onClick={() => swiperInstance?.slideNext()}
                className='m-8 bg-black text-white'
                aria-label='Next Slide'
            >
                {' '}
                next{' '}
            </button> */}

            <div className='flex justify-center gap-4 mt-20'>
                <button onClick={() => swiperInstance?.slidePrev()} className='p-3 text-white border-2 border-white border-opacity-20 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-25'>
                    <IoIosArrowBack className='w-6 h-6' />
                </button>
                <button onClick={() => swiperInstance?.slideNext()} className='p-3 text-white border-2 border-white border-opacity-20 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-25'>
                    <IoIosArrowForward className='w-6 h-6' />
                </button>
            </div>
        </>
    )
}

export default Corousel

// function SwipeBox({ name, message, index, big }) {
//     return (
//         <div
//             className={`z-10 flex h-full w-full flex-col items-center justify-center gap-10 rounded-3xl bg-red-400 p-10`}
//         >
//             <div className='flex w-full justify-between'>
//                 <div>{name}</div>
//                 <div>*****</div>
//             </div>
//             <div>{message}</div>
//         </div>
//     )
// }
