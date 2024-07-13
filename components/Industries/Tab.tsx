import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHandHoldingMedical, FaStethoscope, FaUserGraduate } from 'react-icons/fa6'
import { HiMiniBuildingOffice2 } from 'react-icons/hi2'
import { MdOutlineAirplanemodeActive, MdPrecisionManufacturing } from 'react-icons/md'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

const Tab = ({ tab }: { tab: string | undefined }) => {
   const industries = [
    {
      category: 'Finance',
      path: 'finance',
      icon: <RiMoneyDollarCircleFill className='h-full w-full' />,
    },
    {
      category: 'Healthcare',
      path: 'healthcare',
      icon: <FaStethoscope className='h-full w-full' />,
    },
    {
      category: 'Insurance',
      path: 'insurance',
      icon: <FaHandHoldingMedical className='h-full w-full' />,
    },
    {
      category: 'Education',
      path: 'education',
      icon: <FaUserGraduate className='h-full w-full' />,
    },
    {
      category: 'Real Estate',
      path: 'realestate',
      icon: <HiMiniBuildingOffice2 className='h-full w-full' />,
    },
    {
      category: 'Travel & Logistics',
      path: 'travel',
      icon: <MdOutlineAirplanemodeActive className='h-full w-full' />,
    },
    {
      category: 'Retail',
      path: 'retail',
      icon: <FaShoppingCart className='h-full w-full' />,
    },
    {
      category: 'Manufacturing',
      path: 'manufacturing',
      icon: <MdPrecisionManufacturing className='h-full w-full' />,
    },
  ]


  return (
    <div className='mx-auto my-16 w-fit px-4'>
      <div className='grid grid-cols-2 justify-center rounded-md bg-[#EBEFEF] p-2 2md:gap-4 xl:flex'>
        {industries.map((item, index) => {
          return (
            <>
              <Link
                href={`?tab=${item.path}`}
                scroll={false}
                key={index}
                className={`flex items-center rounded-md text-gray-800 xl:justify-center`}
              >
                <div
                  className={`flex w-full items-center gap-2 rounded-md p-3 text-xs sm:text-base ${
                    tab === `${item.path}`
                      ? 'bg-theme-dark text-white'
                      : 'opacity-50'
                  }`}
                >
                  <div className='h-5 w-5'>{item.icon}</div>
                  <div>{item.category}</div>
                </div>
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Tab
