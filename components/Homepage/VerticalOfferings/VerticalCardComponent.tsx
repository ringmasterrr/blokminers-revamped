'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  {
    src: '/verticals/vertical (1).svg',
    alt: 'vertical',
    height: 500,
    width: 500,
    className: 'absolute cursor-pointer left-[590px] top-32 z-50 w-[200px] backdrop-blur',
    yInitial: 10,
    yAnimate: 0,
    duration: 1,
    delay: 0,
  },
  {
    src: '/verticals/vertical (2).svg',
    alt: 'vertical',
    height: 500,
    width: 500,
    className: 'absolute cursor-pointer left-[450px] top-3 w-[172px]',
    yInitial: 20,
    yAnimate: 5,
    duration: 1.2,
    delay: 0.2,
  },
  {
    src: '/verticals/vertical (3).svg',
    alt: 'vertical',
    height: 500,
    width: 500,
    className: 'absolute cursor-pointer left-[450px] top-72 z-40 w-[200px] backdrop-blur',
    yInitial: 15,
    yAnimate: 0,
    duration: 1.5,
    delay: 0.4,
  },
  {
    src: '/verticals/vertical (4).svg',
    alt: 'vertical',
    height: 500,
    width: 500,
    className: 'absolute cursor-pointer left-64 top-[460px] w-[248px]',
    yInitial: 5,
    yAnimate: 0,
    duration: 1.1,
    delay: 0.1,
  },
  {
    src: '/verticals/vertical (5).svg',
    alt: 'Retail',
    height: 500,
    width: 500,
    className: 'absolute cursor-pointer left-60 top-52 w-[186px]',
    yInitial: 12,
    yAnimate: 2,
    duration: 1.3,
    delay: 0.3,
  },
  {
    src: '/verticals/vertical (6).svg',
    alt: 'vertical',
    height: 500,
    width: 500,
    className: 'absolute cursor-pointer -left-8 top-96 z-50 w-[200px] backdrop-blur',
    yInitial: 10,
    yAnimate: 0,
    duration: 1.6,
    delay: 0.5,
  },
  {
    src: '/verticals/vertical (7).svg',
    alt: 'vertical',
    height: 500,
    width: 500,
    className: 'absolute cursor-pointer -left-32 top-52 w-[201px]',
    yInitial: 8,
    yAnimate: 0,
    duration: 1.2,
    delay: 0.2,
  },
  {
    src: '/verticals/vertical (8).svg',
    alt: 'vertical',
    height: 500,
    width: 500,
    className: 'top-112 absolute cursor-pointer left-10 w-[240px] backdrop-blur',
    yInitial: 10,
    yAnimate: 0,
    duration: 1,
    delay: 0,
  },
]

const Verticals = () => (
  <div className='relative h-[50rem] w-[50rem] translate-x-20 translate-y-6'>
    {images.map((image, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 1, y: image.yInitial }}
        animate={{ opacity: 1, y: image.yAnimate }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        transition={{
          y: {
            duration: image.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: image.delay,
          },
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          height={image.height}
          width={image.width}
          className={image.className}
        />
      </motion.div>
    ))}
  </div>
)

export default Verticals
