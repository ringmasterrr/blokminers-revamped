import { motion } from 'framer-motion'

export const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className='relative z-10 mb-2 w-16 overflow-hidden rounded-lg'>
      <motion.img
        src={src}
        alt={alt}
        className='h-full w-full object-cover'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  )
}
