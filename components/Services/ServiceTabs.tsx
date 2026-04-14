import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShieldAlt } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
import { IoCloudy, IoGlobeOutline, IoStatsChart } from 'react-icons/io5'
import { LuBrainCircuit } from 'react-icons/lu'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { TbBriefcaseFilled } from 'react-icons/tb'
import { SiBlockchaindotcom } from 'react-icons/si'

function ServiceTabs({ tab }: { tab: string | undefined }) {
  const services = [
    {
      category: 'Blockchain',
      path: 'blockchain',
      icon: <SiBlockchaindotcom className='h-full w-full' />,
    },
    {
      category: 'Web3',
      path: 'web3',
      icon: <IoGlobeOutline className='h-full w-full' />,
    },
    {
      category: 'AI/ML',
      path: 'aiml',
      icon: <LuBrainCircuit className='h-full w-full' />,
    },
    {
      category: 'Blockchain Development',
      path: 'blockchaindevelopment',
      icon: <FaCode className='h-full w-full' />,
    },
    {
      category: 'Consulting',
      path: 'consulting',
      icon: <TbBriefcaseFilled className='h-full w-full' />,
    },
    {
      category: 'Data & Analytics',
      path: 'dataanalytics',
      icon: <IoStatsChart className='h-full w-full' />,
    },
    {
      category: 'Cyber Security',
      path: 'cybersecurity',
      icon: <FaShieldAlt className='h-full w-full' />,
    },
    {
      category: 'Cloud',
      path: 'cloud',
      icon: <IoCloudy className='h-full w-full' />,
    },
  ]

  return (
    <div className='max-w-5xl mx-auto my-12 w-full px-4 sm:my-16'>
      <div className='grid grid-cols-1 justify-center rounded-md bg-[#88caec] bg-opacity-15 p-2 sm:grid-cols-2 xl:flex xl:gap-4'>
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
                className={`flex w-full items-center rounded-md text-gray-800 xl:justify-center`}
              >
                <div
                  className={`flex w-full min-w-0 items-center gap-2 rounded-md p-3 text-xs sm:text-sm 2md:text-base ${
                    tab === `${item.path}`
                      ? 'bg-theme-dark text-white'
                      : 'opacity-50'
                  }`}
                >
                  <div className='h-5 w-5 shrink-0'>{item.icon}</div>
                  <div className='min-w-0 whitespace-normal leading-tight 2md:whitespace-nowrap'>
                    {item.category}
                  </div>
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
