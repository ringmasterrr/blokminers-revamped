'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const content = [
  {
    title: 'Plan',
    description:
      'We lay out a detailed conceptual workflow by collaborating closely with you to see how your idea becomes a product. We’ll determine the relevance of Blockchain to your project, the best Blockchain model to deploy, gain clarity on the specifics of your idea and work with it.',
    image: '/OurProcess/plan.svg',
  },
  {
    title: 'Architect',
    description:
      'This is the skeletal framework of the project and at this point, we decide the Blockchain protocol based on type, energy efficiency, bridging strength and cost. We’ll also develop frameworks and determine smart contracts, business logic and storage.',
    image: '/OurProcess/architect.svg',
  },
  {
    title: 'Design',
    description:
      'We lay out a detailed conceptual workflow by collaborating closely with you to see how your idea becomes a product. We’ll determine the relevance of Blockchain to your project, the best Blockchain model to deploy, gain clarity on the specifics of your idea and work with it.',
    image: '/OurProcess/design.svg',
  },
  {
    title: 'Build',
    description:
      'This is the skeletal framework of the project and at this point, we decide the Blockchain protocol based on type, energy efficiency, bridging strength and cost. We’ll also develop frameworks and determine smart contracts, business logic and storage.',
    image: '/OurProcess/build.svg',
  },
  {
    title: 'Test',
    description:
      'We lay out a detailed conceptual workflow by collaborating closely with you to see how your idea becomes a product. We’ll determine the relevance of Blockchain to your project, the best Blockchain model to deploy, gain clarity on the specifics of your idea and work with it.',
    image: '/OurProcess/test.svg',
  },
  {
    title: 'Launch',
    description:
      'We’re present through every stage in the journey even after we’ve delivered your decentralised application. Safely deploy your products at this stage, you’ll typically gain traction all things being equal and also get more feedback to further solidify the app.',
    image: '/OurProcess/launch.svg',
  },
  {
    title: 'Upgrade',
    description:
      'There’s no perfect idea or software. You can only pay excellent attention to the most unnecessary details like we do. Regular updates and reviews keep your software alive as the world evolves. You can always count on our expert Blockchain tech team to readily deliver these solid upgrades.',
    image: '/OurProcess/upgrade.svg',
  },
]

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
}

const animationVariants = {
  fadeInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
  },
}

export const ProcessCards = () => {
  return (
    <>
      {content.map((item, index) => (
        <div
          key={index}
          className='flex flex-col items-center justify-center gap-8 overflow-clip 2md:flex-row'
        >
          {index % 2 === 0 ? (
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={animationVariants.fadeInLeft}
              className='flex flex-col-reverse items-center justify-center 2md:flex-row'
            >
              <div className='glassy-bg flex h-[21rem] w-[20rem] -translate-y-5 translate-x-5 flex-col items-start justify-center space-y-4 rounded-2xl p-8 backdrop-blur-lg 2md:w-[34.4rem] 2md:-translate-y-0 2md:translate-x-20'>
                <div className='text-3xl font-bold'>{item.title}</div>
                <div>{item.description}</div>
              </div>
              <div className='glassy-bg py-18 flex h-[24rem] w-[20rem] items-center justify-center rounded-2xl p-8 2md:w-[36rem]'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={animationVariants.fadeInRight}
              className='flex flex-col items-center justify-center 2md:flex-row'
            >
              <div className='glassy-bg py-18 flex h-[24rem] w-[20rem] translate-x-5 translate-y-5 items-center justify-center rounded-2xl p-8 2md:w-[36rem] 2md:translate-x-20 2md:translate-y-0'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                />
              </div>
              <div className='glassy-bg flex h-[21rem] w-[20rem] flex-col items-start justify-center space-y-4 rounded-2xl p-8 backdrop-blur-lg 2md:w-[36rem]'>
                <div className='text-3xl font-bold'>{item.title}</div>
                <div>{item.description}</div>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </>
  )
}
