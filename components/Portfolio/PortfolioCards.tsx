'use client'
import { useEffect, useState } from 'react'
import { getAllPortfolios } from '@/services/portfolio'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface CardProps {
  title: string
  description: string
  image: string
  url: string
}

// const truncateText = (text: string, wordLimit: number) => {
//   const words = text.split(' ')
//   if (words.length <= wordLimit) {
//     return text
//   }
//   return words.slice(0, wordLimit).join(' ') + '...'
// }

const Card: React.FC<CardProps> = ({ title, description, image, url }) => {
  const router = useRouter()

  return (
    <div
      className='cursor-pointerc flex flex-col justify-between rounded-2xl bg-white p-6'
      style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}
      onClick={() => router.push(url)}
    >
      <div>
        <h2 className='mb-2 text-2xl font-semibold'>{title}</h2>
        <p className='mb-6 text-sm text-[#A3A3A3]'>{description}</p>
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
  const [portfolio, setPortfolio] = useState<CardProps[]>([])

  useEffect(() => {
    const fetchPortfolio = async () => {
      const res = await getAllPortfolios()
      setPortfolio(res)
    }
    fetchPortfolio()
  }, [])

  return (
    <div className='my-12 grid grid-cols-3 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3'>
      {portfolio.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          url={card.url}
        />
      ))}
    </div>
  )
}

export default CardList
