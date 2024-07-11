import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ServiceTabs({ tab }: { tab: string | undefined }) {
  const services = [
    {
      category: 'Blockchain',
      path: 'blockchain',
      logo: '/Industries/financelogo.svg',
    },
    {
      category: 'Web3',
      path: 'web3',
      logo: '/Industries/healthcarelogo.svg',
    },
    {
      category: 'AI/ML',
      path: 'aiml',
      logo: '/Industries/insurancelogo.svg',
    },
    {
      category: 'Blockchain Development',
      path: 'blockchaindevelopment',
      logo: '/Industries/educationlogo.svg',
    },
    {
      category: 'Consulting',
      path: 'consulting',
      logo: '/Industries/realestatelogo.svg',
    },
    {
      category: 'Data & Analytics',
      path: 'dataanalytics',
      logo: '/Industries/travellogo.svg',
    },
    {
      category: 'Cyber Security',
      path: 'cybersecurity',
      logo: '/Industries/manufacturinglogo.svg',
    },
    {
      category: 'Cloud',
      path: 'cloud',
      logo: '/Industries/retaillogo.svg',
    },
  ]

  return (
    <div className='mx-auto my-16 w-fit px-4'>
      <div className='grid grid-cols-2 justify-center rounded-md bg-[#EBEFEF] p-2 2md:flex xl:gap-4'>
        {services.map((item, index) => {
          // let i = false
          // if (index % 2 === 0) {
          //   i = true
          // }
          return (
            <>
              <Link
                href={`?tab=${item.path}`}
                scroll={false}
                key={index}
                className={`flex items-center  rounded-md border text-gray-800 xl:justify-center`}
              >
                <div
                  className={`flex items-center w-full gap-2 rounded-md p-3 text-xs ${
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
    // <div className='mx-auto mb-16 w-fit px-4'>
    //   <div className='xl:flex justify-center gap-2 rounded-md bg-[#EBEFEF] p-2'>
    //     {services.map((item, index) => {
    //       let i
    //       if (index % 2 === 1) {
    //         i = true
    //       } else {
    //         i = false
    //       }
    //       return (
    //         <React.Fragment key={index}>
    //           <Link
    //             href={`?tab=${item.path}`}
    //             scroll={false}
    //             className={`rounded-md border px-3 py-2 text-gray-800 ${
    //               tab === item.path ? 'bg-white text-theme-dark' : 'opacity-50'
    //             }`}
    //           >
    //             <div className='flex items-center justify-center gap-2'>
    //               <Image src={item.logo} alt='logo' height={20} width={20} />
    //               {item.category}
    //             </div>
    //           </Link>
    //           {i && <br className='2md:hidden block'/>}
    //         </React.Fragment>
    //       )
    //     })}
    //   </div>
    // </div>
  )
}

export default ServiceTabs
