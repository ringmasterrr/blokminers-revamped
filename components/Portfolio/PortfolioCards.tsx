// src/components/Card.tsx
import React from 'react'
import { cards } from './PortfolioData'
import Image from 'next/image'

interface CardProps {
  title: string
  subheading: string
  image: string
}

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ')
  if (words.length <= wordLimit) {
    return text
  }
  return words.slice(0, wordLimit).join(' ') + '...'
}

const Card: React.FC<CardProps> = ({ title, subheading, image }) => {
  return (
    <div
      className='flex flex-col justify-between rounded-2xl bg-white p-6'
      style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}
    >
      <div>
        <h2 className='mb-2 text-2xl font-semibold'>{title}</h2>
        <p className='mb-6 text-sm text-[#A3A3A3]'>
          {truncateText(subheading, 16)}
        </p>
      </div>
      <Image
        src={image}
        alt={title}
        height={1000}
        width={1000}
        className='mb-4 h-64 w-full rounded-md object-cover'
      />
    </div>
  )
}

const CardList: React.FC = () => {
  return (
    <div className='sm:grid-cols-2 lg:grid-cols-3 my-12 grid grid-cols-3 gap-6 p-6'>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          subheading={card.subheading}
          image={card.image}
        />
      ))}
    </div>
  )
}

export default CardList
