// src/components/Card.tsx
import React from 'react';
import { cards } from './PortfolioData';
import Image from 'next/image';

interface CardProps {
  title: string;
  subheading: string;
  image: string;
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
    <div className="bg-white p-6 rounded-2xl flex flex-col justify-between" style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}>
      <div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-[#A3A3A3] mb-6 text-sm">{truncateText(subheading, 16)}</p>
      </div>
      <Image src={image} alt={title} height={1000} width={1000} className="w-full h-64 object-cover rounded-md mb-4"/>
    </div>
  );
};

const CardList: React.FC = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 my-12">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          subheading={card.subheading}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardList;
