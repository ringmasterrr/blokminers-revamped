import Image from 'next/image'
import Link from 'next/link'

const Tab = ({ tab }: { tab: string | undefined }) => {
  const industries = [
    { category: 'Finance', logo: '/industries/financelogo.svg' },
    { category: 'Healthcare', logo: '/industries/healthcarelogo.svg' },
    { category: 'Insurance', logo: '/industries/insurancelogo.svg' },
    { category: 'Education', logo: '/industries/educationlogo.svg' },
    { category: 'Real Estate', logo: '/industries/realestatelogo.svg' },
    { category: 'Travel and logistics', logo: '/industries/travellogo.svg' },
    { category: 'Retail', logo: '/industries/retaillogo.svg' },
    { category: 'Manufacturing', logo: '/industries/manufacturinglogo.svg' },
  ]

  return (
    <div className='py-4'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 flex items-center justify-center text-center'>
          <div className='mb-4 flex w-fit justify-center gap-2 space-x-4 rounded-md bg-[#EBEFEF] p-2'>
            {industries.map((industries, index) => (
              <Link
                href={`?tab=${industries.category}`}
                scroll={false}
                key={index}
                className={`rounded-md border px-3 py-2 text-gray-800 ${
                  tab === industries.category
                    ? 'bg-white text-theme-dark'
                    : 'opacity-50'
                }`}
              >
                <div className='flex items-center justify-center gap-2'>
                  <Image
                    src={industries.logo}
                    alt='logo'
                    height={20}
                    width={20}
                  />
                  {industries.category}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab
