import Image from 'next/image'

const section = [
  {
    title: 'Asset Tokenization',
    description:
      'Convert real estate assets into digital tokens, making property investment more accessible, liquid, and divisible.',
    icon: '/Industries/asset.png',
  },
  {
    title: 'Smart Contracts for Transactions',
    description:
      'Utilize self-executing contracts with the terms of the agreement directly written into code, reducing the need for intermediaries and accelerating transaction processes.',
    icon: '/Industries/smart.png',
  },
  {
    title: 'Immutable Property Records',
    description:
      'Ensure secure, transparent, and tamper-proof record-keeping for property titles, deeds, and transactions, enhancing trust and simplifying verification processes.',
    icon: '/Industries/records.svg',
  },
  {
    title: 'Decentralized Marketplaces',
    description:
      'Facilitate direct property buying, selling, and leasing through decentralized platforms, removing barriers and reducing costs.',
    icon: '/Industries/decentralized.svg',
  },
]

export default function RealEstate() {
  return (
    <div className='bg-[#EBEFEF]' id='healthcare'>
      <div className='mb-2 flex flex-col items-center gap-24 p-32 text-center'>
        <div>
          <h1 className='text-6xl font-bold text-gray-900'>Real Estate</h1>
          <p className='mt-10 text-lg text-gray-700'>
            Step into the future of finance with BlokMiners, where we harness
            the power of blockchain to revolutionize the banking and finance
            industry. In an era where transparency, security, and efficiency are
            more critical than ever, BlokMiners is at the forefront of providing
            blockchain solutions that redefine financial operations, enhance
            customer trust, and streamline regulatory compliance.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='w-[80%] text-4xl font-bold text-gray-900'>
            Transforming Finance and Banking with BlokMiners’ Blockchain
            Solutions
          </h2>
          <p className='mt-6 text-lg text-gray-700'>
            Step into the future of finance with BlokMiners, where we harness
            the power of blockchain to revolutionize the banking and finance
            industry. In an era where transparency, security, and efficiency are
            more critical than ever, BlokMiners is at the forefront of providing
            blockchain solutions that redefine financial operations, enhance
            customer trust, and streamline regulatory compliance.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-8 p-20 md:grid-cols-2'>
        {section.map((item) => (
          <div
            key={item.title}
            className='flex flex-col justify-between rounded-2xl bg-white p-8 text-start shadow-md'
          >
            <h3 className='text-xl font-semibold text-gray-900'>
              {item.title}
            </h3>
            <p className='mt-2 text-gray-700'>{item.description}</p>
            <Image
              height={1000}
              width={1000}
              src={item.icon}
              alt={item.title}
              className='mx-auto my-6 mb-4 w-full'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
