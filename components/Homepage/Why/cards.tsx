'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HoverEffectProps {
  items: {
    title: string
    description: string
    image: string
  }[]
}

export const HoverEffect: React.FC<HoverEffectProps> = ({ items }) => {
  return (
    <div className='mx-14 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 2xl:grid-cols-4'>
      {items.map((item, index) => (
        <motion.div
          key={index}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='flex h-[19rem] w-[20rem] transform flex-col justify-end p-4 py-8'
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className='mt-4 text-center text-xl font-semibold text-white'>
              {item.title}
            </h3>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <p className='mt-2 text-center text-white/80'>{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
