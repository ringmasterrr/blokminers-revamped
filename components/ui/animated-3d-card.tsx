'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Globe,
  Heart,
  Palette,
  Shield,
  Star,
  Users,
  Zap,
} from 'lucide-react'

import { cn } from '@/lib/utils'

const THEMES = {
  primary: 'from-[#00283C] via-[#0A3A56] to-[#124C6E]',
  secondary: 'from-[#1493C9] via-[#0C7FB2] to-[#096A97]',
  accent: 'from-[#0F5F8A] via-[#0C4E72] to-[#083B58]',
  success: 'from-[#0F766E] via-[#0E8B80] to-[#0A6D63]',
  warning: 'from-[#C77C17] via-[#B86A0C] to-[#9C5408]',
  danger: 'from-[#B74949] via-[#A43737] to-[#842A2A]',
  info: 'from-[#1A9FD8] via-[#168DBF] to-[#106D96]',
  neutral: 'from-[#4E6575] via-[#405766] to-[#304553]',
} as const

type ThemeType = keyof typeof THEMES

interface MousePos {
  readonly x: number
  readonly y: number
}

interface Card3DProps {
  title: string
  description: string
  image?: string
  icon?: React.ReactNode
  theme?: ThemeType
  gradient?: string
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'minimal' | 'premium'
  disabled?: boolean
  loading?: boolean
}

export interface CardData {
  id: string
  title: string
  description: string
  image?: string
  icon?: React.ReactNode
  theme?: ThemeType
  gradient?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}

interface Card3DListProps {
  cards: CardData[]
  className?: string
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'minimal' | 'premium'
  animated?: boolean
  staggerDelay?: number
}

const SIZES = {
  sm: 'h-64',
  md: 'h-80',
  lg: 'h-96',
} as const

const VARIANTS = {
  default: 'shadow-lg hover:shadow-2xl',
  minimal: 'shadow-md hover:shadow-lg border border-white/10',
  premium: 'shadow-xl hover:shadow-2xl ring-1 ring-white/20',
} as const

const GRIDS = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
} as const

const GAPS = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-10',
} as const

const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12, mass: 0.7 },
  },
}

export const Card3D = React.forwardRef<HTMLDivElement, Card3DProps>(
  (
    {
      title,
      description,
      image,
      icon,
      theme = 'primary',
      gradient,
      onClick,
      className,
      size = 'md',
      variant = 'default',
      disabled = false,
      loading = false,
      ...props
    },
    ref,
  ) => {
    const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 })
    const [hovered, setHovered] = useState(false)

    const finalGradient = useMemo(
      () => gradient || THEMES[theme],
      [gradient, theme],
    )
    const patternId = useMemo(
      () => `pattern-${theme}-${title.replace(/\s+/g, '-').toLowerCase()}`,
      [theme, title],
    )

    const handleMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePos({
          x: (x / rect.width - 0.5) * 25,
          y: (y / rect.height - 0.5) * -25,
        })
      },
      [disabled],
    )

    const handleEnter = useCallback(() => {
      if (disabled) return
      setHovered(true)
    }, [disabled])

    const handleLeave = useCallback(() => {
      if (disabled) return
      setHovered(false)
      setMousePos({ x: 0, y: 0 })
    }, [disabled])

    const handleClick = useCallback(() => {
      if (disabled || loading || !onClick) return
      onClick()
    }, [disabled, loading, onClick])

    return (
      <motion.div
        ref={ref}
        className={cn(
          'group relative w-full overflow-hidden rounded-2xl transform-gpu transition-all duration-500 ease-out',
          SIZES[size],
          VARIANTS[variant],
          onClick && !disabled && !loading && 'cursor-pointer',
          disabled && 'cursor-not-allowed opacity-50',
          loading && 'pointer-events-none',
          className,
        )}
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        animate={{
          rotateX: disabled ? 0 : mousePos.y,
          rotateY: disabled ? 0 : mousePos.x,
          z: disabled ? 0 : hovered ? 30 : 0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 35, mass: 0.8 }}
        whileTap={
          disabled || !onClick
            ? {}
            : {
                scale: 0.98,
                rotateX: mousePos.y + 3,
                rotateY: mousePos.x + 3,
              }
        }
        onClick={handleClick}
        style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
        role={onClick ? 'button' : 'article'}
        tabIndex={onClick && !disabled ? 0 : -1}
        {...props}
      >
        <motion.div
          className={cn(
            'absolute inset-0 rounded-2xl',
            image ? '' : `bg-gradient-to-br ${finalGradient}`,
          )}
          animate={{ scale: hovered ? 1.02 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ transform: 'translateZ(-10px)' }}
        >
          {image && (
            <img
              src={image}
              alt={title}
              className='h-full w-full object-cover transition-transform duration-500'
              loading='lazy'
            />
          )}
        </motion.div>

        <div className='absolute inset-0 overflow-hidden rounded-2xl opacity-20'>
          <svg
            className='absolute -right-4 -top-4 h-32 w-32 text-white/30'
            viewBox='0 0 100 100'
          >
            <defs>
              <pattern
                id={patternId}
                x='0'
                y='0'
                width='20'
                height='20'
                patternUnits='userSpaceOnUse'
              >
                <circle
                  cx='10'
                  cy='10'
                  r='1'
                  fill='currentColor'
                  opacity='0.3'
                />
              </pattern>
            </defs>
            <rect width='100' height='100' fill={`url(#${patternId})`} />
          </svg>

          <motion.div
            className='absolute -bottom-4 -left-4 h-24 w-24 opacity-30'
            animate={{ rotate: hovered ? 180 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <svg viewBox='0 0 100 100' className='h-full w-full text-white/40'>
              <rect
                x='20'
                y='20'
                width='60'
                height='60'
                fill='none'
                stroke='currentColor'
                strokeWidth='1'
                rx='8'
              />
              <rect
                x='35'
                y='35'
                width='30'
                height='30'
                fill='none'
                stroke='currentColor'
                strokeWidth='0.5'
                rx='4'
              />
            </svg>
          </motion.div>
        </div>

        <motion.div
          className='absolute inset-0 rounded-2xl'
          style={{
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.24) 50%, rgba(0,0,0,0.14) 100%)',
            transform: 'translateZ(5px)',
          }}
          animate={{ opacity: hovered ? 0.5 : 0.72 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className='pointer-events-none absolute inset-0 overflow-hidden rounded-2xl'
          style={{ transform: 'translateZ(15px)' }}
        >
          <motion.div
            className='absolute -inset-full'
            animate={{
              background: hovered
                ? `linear-gradient(${mousePos.x + 135}deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)`
                : 'transparent',
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className='relative z-20 flex h-full flex-col justify-between p-6 text-white'
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className='flex items-start justify-between'>
            {icon && (
              <motion.div
                className='relative'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className='text-3xl opacity-90 drop-shadow-lg'
                  animate={{
                    rotateZ: hovered ? 5 : 0,
                    y: hovered ? -2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {icon}
                </motion.div>
              </motion.div>
            )}

            <motion.div
              className='relative'
              animate={{ scale: hovered ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className='h-2.5 w-2.5 rounded-full bg-white/40 backdrop-blur-sm' />
              {!disabled && (
                <motion.div
                  className='absolute inset-0 h-2.5 w-2.5 rounded-full bg-white/70'
                  animate={{
                    scale: hovered ? [1, 1.4, 1] : 1,
                    opacity: hovered ? [0.7, 0.3, 0.7] : 0.7,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: hovered ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </motion.div>
          </div>

          <motion.div
            className='space-y-3'
            animate={{ y: hovered ? -3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className='text-xl font-semibold tracking-tight drop-shadow-md'
              animate={{ scale: hovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className='whitespace-pre-line text-sm leading-relaxed text-white/85 drop-shadow-sm'
              animate={{ opacity: hovered ? 1 : 0.85 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>

            {onClick && !disabled && (
              <motion.div
                className='flex items-center space-x-2 opacity-0'
                animate={{
                  x: hovered ? 0 : -8,
                  opacity: hovered ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className='h-0.5 w-4 rounded-full bg-white/70' />
                <div className='text-xs font-medium opacity-90'>
                  {loading ? 'Loading...' : 'Explore'}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className='pointer-events-none absolute inset-0 rounded-2xl'
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.1) 100%)',
            transform: 'translateZ(25px)',
          }}
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        />

        {!disabled && (
          <motion.div
            className='pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0'
            style={{
              background: `linear-gradient(135deg, ${finalGradient})`,
              filter: 'blur(15px)',
              transform: 'translateZ(-5px)',
            }}
            animate={{ opacity: hovered ? 0.2 : 0 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {loading && (
          <motion.div
            className='absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20 backdrop-blur-sm'
            style={{ transform: 'translateZ(30px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className='h-6 w-6 rounded-full border-2 border-white/30 border-t-white'
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        )}
      </motion.div>
    )
  },
)

Card3D.displayName = 'Card3D'

export const Card3DList: React.FC<Card3DListProps> = ({
  cards,
  className,
  columns = 3,
  gap = 'md',
  size = 'md',
  variant = 'default',
  animated = true,
  staggerDelay = 0.08,
}) => {
  const gridClass = useMemo(() => GRIDS[columns], [columns])
  const gapClass = useMemo(() => GAPS[gap], [gap])

  const customVariants = useMemo(
    () => ({
      ...containerVariants,
      visible: {
        ...containerVariants.visible,
        transition: {
          ...containerVariants.visible.transition,
          staggerChildren: staggerDelay,
        },
      },
    }),
    [staggerDelay],
  )

  const elements = useMemo(
    () =>
      cards.map((card, index) => (
        <motion.div
          key={card.id}
          variants={animated ? itemVariants : undefined}
          custom={index}
          whileInView={animated ? 'visible' : undefined}
          initial={animated ? 'hidden' : undefined}
          viewport={
            animated ? { once: true, margin: '-50px', amount: 0.2 } : undefined
          }
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card3D
            title={card.title}
            description={card.description}
            image={card.image}
            icon={card.icon}
            theme={card.theme}
            gradient={card.gradient}
            onClick={card.onClick}
            size={size}
            variant={variant}
            disabled={card.disabled}
            loading={card.loading}
          />
        </motion.div>
      )),
    [animated, cards, size, variant],
  )

  return (
    <div className='relative'>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 opacity-[0.015]'>
          <svg width='100%' height='100%' className='text-slate-900'>
            <defs>
              <pattern
                id='grid'
                width='32'
                height='32'
                patternUnits='userSpaceOnUse'
              >
                <path
                  d='M 32 0 L 0 0 0 32'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='0.5'
                />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#grid)' />
          </svg>
        </div>

        <motion.div
          className='absolute right-10 top-10 h-64 w-64 opacity-[0.03]'
          animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox='0 0 200 200' className='h-full w-full text-slate-600'>
            <circle
              cx='100'
              cy='100'
              r='80'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
            />
            <circle
              cx='100'
              cy='100'
              r='60'
              fill='none'
              stroke='currentColor'
              strokeWidth='0.5'
            />
            <circle
              cx='100'
              cy='100'
              r='40'
              fill='none'
              stroke='currentColor'
              strokeWidth='0.5'
            />
          </svg>
        </motion.div>

        <motion.div
          className='absolute bottom-10 left-10 h-48 w-48 opacity-[0.02]'
          animate={{ rotate: [360, 0], y: [-10, 10, -10] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox='0 0 150 150' className='h-full w-full text-slate-600'>
            <rect
              x='25'
              y='25'
              width='100'
              height='100'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              rx='8'
            />
            <rect
              x='40'
              y='40'
              width='70'
              height='70'
              fill='none'
              stroke='currentColor'
              strokeWidth='0.5'
              rx='4'
            />
            <rect
              x='55'
              y='55'
              width='40'
              height='40'
              fill='none'
              stroke='currentColor'
              strokeWidth='0.5'
              rx='2'
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className={cn('relative grid w-full', gridClass, gapClass, className)}
        variants={animated ? customVariants : undefined}
        initial={animated ? 'hidden' : undefined}
        animate={animated ? 'visible' : undefined}
        style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
      >
        {elements}
      </motion.div>

      <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent' />
    </div>
  )
}

export const Component = () => {
  const cards: CardData[] = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description:
        'Master modern web technologies with React, Next.js, and TypeScript. Build scalable applications with cutting-edge tools and best practices.',
      icon: <Code />,
      theme: 'primary',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description:
        'Create beautiful and intuitive user experiences that delight users and drive engagement through thoughtful design principles.',
      icon: <Palette />,
      theme: 'secondary',
    },
    {
      id: 'data',
      title: 'Data Science',
      description:
        'Analyze complex data sets and build powerful machine learning models to extract meaningful insights from big data.',
      icon: <Database />,
      theme: 'info',
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description:
        'Protect digital assets and infrastructure with advanced security protocols and threat detection methodologies.',
      icon: <Shield />,
      theme: 'danger',
    },
    {
      id: 'leadership',
      title: 'Team Leadership',
      description:
        'Build and manage high-performing teams that collaborate effectively and achieve exceptional results through strategic guidance.',
      icon: <Users />,
      theme: 'success',
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description:
        'Drive innovation in your organization by fostering creativity and implementing breakthrough solutions for complex challenges.',
      icon: <Zap />,
      theme: 'accent',
    },
    {
      id: 'impact',
      title: 'Global Impact',
      description:
        'Create solutions that make a meaningful difference worldwide and contribute to positive social change at scale.',
      icon: <Globe />,
      theme: 'neutral',
    },
    {
      id: 'community',
      title: 'Community',
      description:
        'Connect with like-minded professionals, share knowledge, and build lasting relationships in your industry network.',
      icon: <Heart />,
      theme: 'warning',
    },
    {
      id: 'excellence',
      title: 'Excellence',
      description:
        'Strive for excellence in everything you do and continuously improve your skills, capabilities, and professional expertise.',
      icon: <Star />,
      theme: 'secondary',
    },
  ]

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100'>
        <motion.div
          className='absolute left-20 top-20 h-96 w-96 opacity-[0.03]'
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox='0 0 400 400' className='h-full w-full text-slate-600'>
            <defs>
              <radialGradient id='grad1' cx='50%' cy='50%' r='50%'>
                <stop offset='0%' stopColor='currentColor' stopOpacity='0.1' />
                <stop offset='100%' stopColor='currentColor' stopOpacity='0' />
              </radialGradient>
            </defs>
            <circle cx='200' cy='200' r='150' fill='url(#grad1)' />
            <circle
              cx='200'
              cy='200'
              r='100'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeOpacity='0.1'
            />
            <circle
              cx='200'
              cy='200'
              r='50'
              fill='none'
              stroke='currentColor'
              strokeWidth='0.5'
              strokeOpacity='0.15'
            />
          </svg>
        </motion.div>

        <motion.div
          className='absolute bottom-20 right-20 h-80 w-80 opacity-[0.02]'
          animate={{ rotate: [360, 0], y: [-20, 20, -20] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox='0 0 320 320' className='h-full w-full text-slate-600'>
            <rect
              x='60'
              y='60'
              width='200'
              height='200'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeOpacity='0.1'
              rx='20'
            />
            <rect
              x='90'
              y='90'
              width='140'
              height='140'
              fill='none'
              stroke='currentColor'
              strokeWidth='0.5'
              strokeOpacity='0.1'
              rx='10'
            />
            <rect
              x='120'
              y='120'
              width='80'
              height='80'
              fill='none'
              stroke='currentColor'
              strokeWidth='0.5'
              strokeOpacity='0.15'
              rx='5'
            />
          </svg>
        </motion.div>

        <div className='absolute inset-0 opacity-[0.01]'>
          <svg width='100%' height='100%' className='text-slate-900'>
            <defs>
              <pattern
                id='mainGrid'
                width='50'
                height='50'
                patternUnits='userSpaceOnUse'
              >
                <path
                  d='M 50 0 L 0 0 0 50'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='0.5'
                />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#mainGrid)' />
          </svg>
        </div>
      </div>

      <div className='relative z-10 p-8'>
        <div className='mx-auto max-w-7xl'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Card3DList
              cards={cards}
              columns={3}
              gap='lg'
              size='md'
              variant='premium'
              className='mb-20'
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
