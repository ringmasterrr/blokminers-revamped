'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  {
    src: '/verticals/vertical (1).svg',
    alt: 'insurance',
    height: 500,
    width: 500,
    className:
      'absolute cursor-pointer left-[180px] 2md:left-[590px] 2md:top-32 z-50 2md:w-[200px] w-[140px] backdrop-blur',
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
    className:
      'absolute cursor-pointer left-[250px] top-[150px] 2md:left-[450px]  2md:top-3 2md:w-[172px] w-[115px]',
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
    className:
      'absolute cursor-pointer 2md:left-[450px] left-[180px]  2md:top-72 top-[260px] z-40 2md:w-[200px] w-[115px] backdrop-blur',
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
    className:
      'absolute cursor-pointer w-[140px] top-[480px] left-[230px] 2md:left-64 2md:top-[460px] 2md:w-[248px]',
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
    className:
      'absolute cursor-pointer w-[140px] top-[405px] left-[120px] 2md:left-60 2md:top-52 2md:w-[186px]',
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
    className:
      'absolute cursor-pointer w-[115px] left-[25px] top-[310px] 2md:-left-8 2md:top-96 z-50 2md:w-[200px] backdrop-blur',
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
    className:
      'absolute cursor-pointer w-[140px] left-[10px] top-[520px] 2md:-left-32 2md:top-52 2md:w-[201px]',
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
    className:
      '2md:top-0 top-[120px] left-[42px] w-[160px]  absolute cursor-pointer 2md:left-10 2md:w-[240px] backdrop-blur',
    yInitial: 10,
    yAnimate: 0,
    duration: 1,
    delay: 0,
  },
]

const Verticals = () => (
  <div className='max-w-8xl mx-auto relative h-[50rem] w-[375px] translate-y-6 2md:w-[50rem] 2md:translate-x-20'>
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

// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const images = [
//   {
//     src: '/verticals/vertical (1).svg',
//     alt: 'insurance',
//     height: 500,
//     width: 500,
//     className: 'absolute cursor-pointer left-[590px] top-32 z-50 2md:w-[200px] w-[141px] backdrop-blur',
//     yInitial: 10,
//     yAnimate: 0,
//     duration: 1,
//     delay: 0,
//   },
//   {
//     src: '/verticals/vertical (2).svg',
//     alt: 'vertical',
//     height: 500,
//     width: 500,
//     className: 'absolute cursor-pointer left-[450px] top-3 w-[172px]',
//     yInitial: 20,
//     yAnimate: 5,
//     duration: 1.2,
//     delay: 0.2,
//   },
//   {
//     src: '/verticals/vertical (3).svg',
//     alt: 'vertical',
//     height: 500,
//     width: 500,
//     className: 'absolute cursor-pointer left-[450px] top-72 z-40 w-[200px] backdrop-blur',
//     yInitial: 15,
//     yAnimate: 0,
//     duration: 1.5,
//     delay: 0.4,
//   },
//   {
//     src: '/verticals/vertical (4).svg',
//     alt: 'vertical',
//     height: 500,
//     width: 500,
//     className: 'absolute cursor-pointer left-64 top-[460px] w-[248px]',
//     yInitial: 5,
//     yAnimate: 0,
//     duration: 1.1,
//     delay: 0.1,
//   },
//   {
//     src: '/verticals/vertical (5).svg',
//     alt: 'Retail',
//     height: 500,
//     width: 500,
//     className: 'absolute cursor-pointer left-60 top-52 w-[186px]',
//     yInitial: 12,
//     yAnimate: 2,
//     duration: 1.3,
//     delay: 0.3,
//   },
//   {
//     src: '/verticals/vertical (6).svg',
//     alt: 'vertical',
//     height: 500,
//     width: 500,
//     className: 'absolute cursor-pointer -left-8 top-96 z-50 w-[200px] backdrop-blur',
//     yInitial: 10,
//     yAnimate: 0,
//     duration: 1.6,
//     delay: 0.5,
//   },
//   {
//     src: '/verticals/vertical (7).svg',
//     alt: 'vertical',
//     height: 500,
//     width: 500,
//     className: 'absolute cursor-pointer -left-32 top-52 w-[201px]',
//     yInitial: 8,
//     yAnimate: 0,
//     duration: 1.2,
//     delay: 0.2,
//   },
//   {
//     src: '/verticals/vertical (8).svg',
//     alt: 'vertical',
//     height: 500,
//     width: 500,
//     className: 'top-112 absolute cursor-pointer left-10 w-[240px] backdrop-blur',
//     yInitial: 10,
//     yAnimate: 0,
//     duration: 1,
//     delay: 0,
//   },
// ]

// const Verticals = () => (
//   <div className='relative h-[50rem] w-[50rem] translate-x-20 translate-y-6'>
//     {images.map((image, index) => (
//       <motion.div
//         key={index}
//         initial={{ opacity: 1, y: image.yInitial }}
//         animate={{ opacity: 1, y: image.yAnimate }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.8 }}
//         transition={{
//           y: {
//             duration: image.duration,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             ease: 'easeInOut',
//             delay: image.delay,
//           },
//         }}
//       >
//         <Image
//           src={image.src}
//           alt={image.alt}
//           height={image.height}
//           width={image.width}
//           className={image.className}
//         />
//       </motion.div>
//     ))}
//   </div>
// )

// export default Verticals
