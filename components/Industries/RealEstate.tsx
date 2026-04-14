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
    <div className='relative'>
      <div className='bg-blur absolute inset-0 bg-[#D8F6FF] bg-opacity-60'></div>

      <div className='mb-2 flex flex-col items-center gap-12 p-6 text-center sm:gap-16 sm:p-8 2md:gap-24 2md:p-32'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 sm:text-4xl 2md:text-6xl'>
            Real Estate
          </h1>
          <p className='mt-6 text-base text-gray-700 sm:mt-10 sm:text-lg'>
            Step into the future of finance with BlokMiners, where we harness
            the power of Blockchain to revolutionize the banking and finance
            industry. In an era where transparency, security, and efficiency are
            more critical than ever, BlokMiners is at the forefront of providing
            Blockchain solutions that redefine financial operations, enhance
            customer trust, and streamline regulatory compliance.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='w-full text-3xl font-bold text-gray-900 sm:text-4xl 2md:w-[80%]'>
            Transforming Finance and Banking with BlokMiners’ Blockchain
            Solutions
          </h2>
          <p className='mt-6 text-base text-gray-700 sm:text-lg'>
            Step into the future of finance with BlokMiners, where we harness
            the power of Blockchain to revolutionize the banking and finance
            industry. In an era where transparency, security, and efficiency are
            more critical than ever, BlokMiners is at the forefront of providing
            Blockchain solutions that redefine financial operations, enhance
            customer trust, and streamline regulatory compliance.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-6 p-6 sm:gap-8 sm:p-8 md:grid-cols-2 2md:p-32'>
        {section.map((item) => (
          <div
            key={item.title}
            className='flex flex-col justify-between rounded-2xl bg-white p-6 text-start shadow-md sm:p-8'
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
