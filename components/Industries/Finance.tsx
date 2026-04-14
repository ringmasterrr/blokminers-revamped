import Image from 'next/image'

export default function Finance() {
  const section = [
    {
      title: 'Decentralized Finance (DeFi) Solutions',
      description:
        'Unlock new financial products and services with our DeFi solutions, offering greater accessibility, inclusivity, and returns for customers and institutions alike.',
      icon: '/Industries/defi.svg',
    },
    {
      title: 'Smart Contract Implementation',
      description:
        'Automate and secure financial transactions with smart contracts, reducing administrative errors, and fraud, while enhancing operational efficiency.',
      icon: '/Industries/contract.svg',
    },
    {
      title: 'Cross-Border Payments',
      description:
        'Facilitate faster, cheaper, and more transparent international transactions with Blockchain-based payment solutions, breaking down barriers in global finance.',
      icon: '/Industries/cross.svg',
    },
    {
      title: 'Regulatory Compliance and Reporting',
      description:
        'Leverage Blockchain’s immutable ledger for accurate, tamper-proof record-keeping, ensuring compliance with financial regulations and reporting requirements.',
      icon: '/Industries/regulatory.svg',
    },
  ]
  return (
    <div className='relative'>
      <div className='bg-blur absolute inset-0 bg-[#D8F6FF] bg-opacity-60'></div>

      <div className='mb-2 flex flex-col items-center gap-12 p-6 text-center sm:gap-16 sm:p-8 2md:gap-24 2md:p-32'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 sm:text-4xl 2md:text-6xl'>
            Finance and Banking
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
            Transforming Finance and Banking with BlokMiners&apos; Blockchain
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
            className='rounded-2xl bg-white p-6 text-start shadow-md sm:p-8'
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
