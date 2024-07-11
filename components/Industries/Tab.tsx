// 'use client'
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

const Tab = ({ tab }: { tab: string | undefined }) => {
  const industries = [
    {
      category: 'Finance',
      path: 'finance',
      logo: '/industries/financelogo.svg',
    },
    {
      category: 'Healthcare',
      path: 'healthcare',
      logo: '/industries/healthcarelogo.svg',
    },
    {
      category: 'Insurance',
      path: 'insurance',
      logo: '/industries/insurancelogo.svg',
    },
    {
      category: 'Education',
      path: 'education',
      logo: '/industries/educationlogo.svg',
    },
    {
      category: 'Real Estate',
      path: 'realestate',
      logo: '/industries/realestatelogo.svg',
    },
    {
      category: 'Travel & Logistics',
      path: 'travel',
      logo: '/industries/travellogo.svg',
    },
    { category: 'Retail', path: 'retail', logo: '/industries/retaillogo.svg' },
    {
      category: 'Manufacturing',
      path: 'manufacturing',
      logo: '/industries/manufacturinglogo.svg',
    },
  ]

  // const router = useRouter()

  // const handleNavigation = (path: string, event: any) => {
  //   event.preventDefault()
  //   router.replace(`?tab=${path}`, undefined, { scroll: false })
  // }

  return (
    <div className='mx-auto my-16 w-fit px-4'>
      <div className='grid grid-cols-2 justify-center rounded-md bg-[#EBEFEF] p-2 xl:flex xl:gap-4'>
        {industries.map((item, index) => {
          let i = false
          if (index % 2 === 0) {
            i = true
          }
          return (
            <>
              <Link
                href={`?tab=${item.path}`}
                scroll={false}
                key={index}
                className={`flex items-center ${i ? 'justify-end' : 'flex-row'} rounded-md border text-gray-800 xl:justify-center`}
              >
                <div
                  className={`flex items-center gap-2 rounded-md p-3 text-xs ${
                    tab === item.path
                      ? 'bg-white text-theme-dark'
                      : 'opacity-50'
                  }`}
                >
                  <Image src={item.logo} alt='logo' height={20} width={20} />
                  <div>{item.category}</div>
                </div>
              </Link>
            </>
          )
        })}
      </div>
    </div>
    // <div className='py-4'>
    //   <div className='container mx-auto px-4'>
    //     <div className='mb-12 flex items-center justify-center text-center'>
    //       <div className='mb-4 flex w-fit justify-center gap-2 space-x-4 rounded-md bg-[#EBEFEF] p-2'>
    //         {industries.map((industry, index) => (
    //           <a
    //             href={`?tab=${industry.path}`}
    //             onClick={(event) => handleNavigation(industry.path, event)}
    //             key={index}
    //             className={`rounded-md border px-3 py-2 text-gray-800 ${
    //               tab === industry.path
    //                 ? 'bg-white text-theme-dark'
    //                 : 'opacity-50'
    //             }`}
    //           >
    //             <div className='flex items-center justify-center gap-2'>
    //               <Image
    //                 src={industry.logo}
    //                 alt='logo'
    //                 height={20}
    //                 width={20}
    //               />
    //               {industry.category}
    //             </div>
    //           </a>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Tab
