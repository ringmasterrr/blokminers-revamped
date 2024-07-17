import Image from 'next/image'

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

export default function Education() {
  return (
    <div className='relative'>
      <div className='bg-blur absolute inset-0 bg-[#D8F6FF] bg-opacity-60'></div>
      <div className='mb-12 flex flex-col items-center gap-24 p-10 text-center 2md:p-32'>
        <div>
          <h1 className='text-4xl font-bold text-gray-900 2md:text-6xl'>
            Education
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
        <div className='h-fit rounded-xl bg-white p-4 shadow-md'>
          <Image
            height={604}
            width={424}
            src={'/Industries/education.svg'}
            alt={'Healthcare'}
            className='mx-auto w-full'
          />
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='w-[80%] text-4xl font-bold text-gray-900'>
            Establishing a value-based network.
          </h2>
          <p className='mt-6 text-lg text-gray-700'>
            Customers nowadays seek experiences, not solely products.
            Manufacturers need to construct connected, cognitive, and
            cooperative networks that facilitate adaptable innovation on a grand
            scale. This necessitates an approach resembling the neural system,
            where the manufacturing value chain imitates the human nervous
            system—automatically detecting new data, grasping its significance,
            and promptly reacting.
          </p>
        </div>
      </div>
    </div>
  )
}
