import Image from 'next/image'

const section = [
  {
    title: 'Supply Chain Transparency',
    description:
      'Implement Blockchain to create an immutable ledger of all transactions and movements across your supply chain, offering unparalleled transparency and traceability from raw materials to finished products.',
    icon: '/Industries/manufacturing1.png',
  },
  {
    title: 'Smart Contracts for Automation',
    description:
      'Utilize smart contracts to automate contractual obligations and transactions, reducing delays, eliminating manual errors, and cutting operational costs.',
    icon: '/Industries/manufacturing2.png',
  },
  {
    title: 'Counterfeit Protection',
    description:
      'Secure your products and brand reputation by leveraging Blockchain’s tamper-proof nature, ensuring the authenticity of your goods through every phase of the supply chain.',
    icon: '/Industries/manufacturing3.png',
  },
  {
    title: 'Decentralized Operations',
    description:
      'Facilitate direct property buying, selling, and leasing through decentralized platforms, removing barriers and reducing costs.',
    icon: '/Industries/manufacturing4.png',
  },
]

export default function Manufacturing() {
  return (
    <div className='relative'>
      <div className='bg-blur absolute inset-0 bg-[#D8F6FF] bg-opacity-60'></div>

      <div className='mb-2 flex flex-col items-center gap-24 p-10 text-center 2md:p-32'>
        <div>
          <h1 className='text-4xl font-bold text-gray-900 2md:text-6xl'>
            Manufacturing
          </h1>
          <p className='mt-10 text-lg text-gray-700'>
            Step into the future of finance with BlokMiners, where we harness
            the power of Blockchain to revolutionize the banking and finance
            industry. In an era where transparency, security, and efficiency are
            more critical than ever, BlokMiners is at the forefront of providing
            Blockchain solutions that redefine financial operations, enhance
            customer trust, and streamline regulatory compliance.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='w-[80%] text-4xl font-bold text-gray-900'>
            Empowering Manufacturing with BlokMiners&apos; Blockchain Solutions
          </h2>
          <p className='mt-6 text-lg text-gray-700'>
            Dive into the era of smart manufacturing with BlokMiners, where
            Blockchain technology propels the industry towards unprecedented
            efficiency, transparency, and security. As the manufacturing sector
            faces the challenges of globalization, complex supply chains, and
            increasing demands for authenticity and sustainability, BlokMiners
            emerges as a pioneering force, integrating Blockchain solutions to
            drive innovation and resilience.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-8 p-10 md:grid-cols-2 2md:p-32'>
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
