import Link from 'next/link'

const Tab = ({ tab }: { tab: string | undefined }) => {
  const categories = [
    'Finance',
    'Healthcare',
    'Insurance',
    'Education',
    'Real Estate',
    'Travel',
    'Retail',
    'Manufacturing',
  ]
  return (
    <div className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 flex items-center justify-center text-center'>
          <div className='mb-4 flex w-fit justify-center space-x-4 bg-[#EBEFEF] p-2'>
            {categories.map((category, index) => (
              <Link
                href={`?tab=${category}`}
                scroll={false}
                key={index}
                className={`rounded-md border px-4 py-2 text-gray-800 ${
                  tab === category ? 'bg-white text-theme-dark' : 'opacity-50'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab
