import Image from 'next/image'

export default function Finance() {
  const section = [
    {
      title: 'Decentralized Finance (DeFi) Solutions',
      description:
        'Unlock new financial products and services with our DeFi solutions, offering greater accessibility, inclusivity, and returns for customers and institutions alike.',
      icon: '/path/to/defi-icon.svg',
    },
    {
      title: 'Smart Contract Implementation',
      description:
        'Automate and secure financial transactions with smart contracts, reducing administrative errors, and fraud, while enhancing operational efficiency.',
      icon: '/path/to/smart-contract-icon.svg',
    },
    {
      title: 'Cross-Border Payments',
      description:
        'Facilitate faster, cheaper, and more transparent international transactions with blockchain-based payment solutions, breaking down barriers in global finance.',
      icon: '/path/to/cross-border-icon.svg',
    },
    {
      title: 'Regulatory Compliance and Reporting',
      description:
        'Leverage blockchain’s immutable ledger for accurate, tamper-proof record-keeping, ensuring compliance with financial regulations and reporting requirements.',
      icon: '/path/to/regulatory-icon.svg',
    },
  ]
  return (
    <>
      <div id='finance' className='mb-12 text-center'>
        <h1 className='text-4xl font-bold text-gray-900'>
          Finance and Banking
        </h1>
        <p className='mt-4 text-lg text-gray-700'>
          Step into the future of finance with BlokMiners, where we harness the
          power of blockchain to revolutionize the banking and finance industry.
          In an era where transparency, security, and efficiency are more
          critical than ever, BlokMiners is at the forefront of providing
          blockchain solutions that redefine financial operations, enhance
          customer trust, and streamline regulatory compliance.
        </p>
        <h2 className='text-2xl font-bold text-gray-900'>
          Transforming Finance and Banking with BlokMiners&apos; Blockchain
          Solutions
        </h2>
        <p className='mt-4 text-lg text-gray-700'>
          Step into the future of finance with BlokMiners, where we harness the
          power of blockchain to revolutionize the banking and finance industry.
          In an era where transparency, security, and efficiency are more
          critical than ever, BlokMiners is at the forefront of providing
          blockchain solutions that redefine financial operations, enhance
          customer trust, and streamline regulatory compliance.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {section.map((item) => (
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
  )
}
