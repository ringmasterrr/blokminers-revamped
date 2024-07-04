'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const categories = [
  'Finance',
  'Healthcare',
  'Insurance',
  'Education',
  'Real Estate',
  'Travel & Logistics',
  'Retail',
  'Manufacturing',
] as const

type Category = (typeof categories)[number]

const Section: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('Finance')

  const content: Record<Category, JSX.Element> = {
    'Finance': (
      <>
        <div className='mb-12 text-center'>
          <h1 className='text-4xl font-bold text-gray-900'>
            Finance and Banking
          </h1>
          <p className='mt-4 text-lg text-gray-700'>
            Step into the future of finance with BlokMiners, where we harness
            the power of blockchain to revolutionize the banking and finance
            industry. In an era where transparency, security, and efficiency are
            more critical than ever, BlokMiners is at the forefront of providing
            blockchain solutions that redefine financial operations, enhance
            customer trust, and streamline regulatory compliance.
          </p>
          <h2 className='text-2xl font-bold text-gray-900'>
            Transforming Finance and Banking with BlokMiners&apos; Blockchain
            Solutions
          </h2>
          <p className='mt-4 text-lg text-gray-700'>
            Step into the future of finance with BlokMiners, where we harness
            the power of blockchain to revolutionize the banking and finance
            industry. In an era where transparency, security, and efficiency are
            more critical than ever, BlokMiners is at the forefront of providing
            blockchain solutions that redefine financial operations, enhance
            customer trust, and streamline regulatory compliance.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {[
            {
              title: 'Decentralized Finance (DeFi) Solutions',
              description:
                'Unlock new financial products and services with our DeFi solutions, offering greater accessibility, inclusivity, and returns for customers and institutions alike.',
              icon: '/path/to/defi-icon.svg', // Replace with actual icon paths
            },
            {
              title: 'Smart Contract Implementation',
              description:
                'Automate and secure financial transactions with smart contracts, reducing administrative errors, and fraud, while enhancing operational efficiency.',
              icon: '/path/to/smart-contract-icon.svg', // Replace with actual icon paths
            },
            {
              title: 'Cross-Border Payments',
              description:
                'Facilitate faster, cheaper, and more transparent international transactions with blockchain-based payment solutions, breaking down barriers in global finance.',
              icon: '/path/to/cross-border-icon.svg', // Replace with actual icon paths
            },
            {
              title: 'Regulatory Compliance and Reporting',
              description:
                'Leverage blockchain’s immutable ledger for accurate, tamper-proof record-keeping, ensuring compliance with financial regulations and reporting requirements.',
              icon: '/path/to/regulatory-icon.svg', // Replace with actual icon paths
            },
          ].map((item) => (
            <div
              key={item.title}
              className='rounded-lg bg-white p-8 text-center shadow-md'
            >
              <Image
                height={1000}
                width={1000}
                src={item.icon}
                alt={item.title}
                className='mx-auto mb-4 h-12 w-12'
              />
              <h3 className='text-xl font-semibold text-gray-900'>
                {item.title}
              </h3>
              <p className='mt-2 text-gray-700'>{item.description}</p>
            </div>
          ))}
        </div>
      </>
    ),
    'Healthcare': (
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-900'>
          Healthcare Solutions
        </h2>
        <p className='mt-4 text-lg text-gray-700'>
          Content for Healthcare Solutions...
        </p>
      </div>
    ),
    'Insurance': (
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-900'>
          Insurance Solutions
        </h2>
        <p className='mt-4 text-lg text-gray-700'>
          Content for Insurance Solutions...
        </p>
      </div>
    ),
    'Education': (
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-900'>
          Education Solutions
        </h2>
        <p className='mt-4 text-lg text-gray-700'>
          Content for Education Solutions...
        </p>
      </div>
    ),
    'Real Estate': (
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-900'>
          Real Estate Solutions
        </h2>
        <p className='mt-4 text-lg text-gray-700'>
          Content for Real Estate Solutions...
        </p>
      </div>
    ),
    'Travel & Logistics': (
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-900'>
          Travel & Logistics Solutions
        </h2>
        <p className='mt-4 text-lg text-gray-700'>
          Content for Travel & Logistics Solutions...
        </p>
      </div>
    ),
    'Retail': (
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-900'>Retail Solutions</h2>
        <p className='mt-4 text-lg text-gray-700'>
          Content for Retail Solutions...
        </p>
      </div>
    ),
    'Manufacturing': (
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-900'>
          Manufacturing Solutions
        </h2>
        <p className='mt-4 text-lg text-gray-700'>
          Content for Manufacturing Solutions...
        </p>
      </div>
    ),
  }

  return (
    <div className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 flex items-center justify-center text-center'>
          <div className='mb-4 flex w-fit justify-center space-x-4 bg-[#EBEFEF] p-2'>
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-md border px-4 py-2 text-gray-800 ${
                  activeTab === category
                    ? 'bg-white text-theme-dark'
                    : 'opacity-50'
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className='bg-[#EBEFEF] p-8'>{content[activeTab]}</div>
      </div>
    </div>
  )
}

export default Section
