import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { FaStethoscope } from 'react-icons/fa'
import { FaHandHoldingMedical } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import { HiMiniBuildingOffice2 } from 'react-icons/hi2'
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import { MdPrecisionManufacturing } from 'react-icons/md'
import { IoGlobeOutline } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { TbBriefcaseFilled } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { IoCloudy } from "react-icons/io5";
import { SiBlockchaindotcom } from "react-icons/si";
export const industries = [
  {
    category: 'Finance',
    path: '/industries/finance',
    icon: <RiMoneyDollarCircleFill className='h-full w-full' />,
  },
  {
    category: 'Healthcare',
    path: '/industries/healthcare',
    icon: <FaStethoscope className='h-full w-full' />,
  },
  {
    category: 'Insurance',
    path: '/industries/insurance',
    icon: <FaHandHoldingMedical className='h-full w-full' />,
  },
  {
    category: 'Education',
    path: '/industries/education',
    icon: <FaUserGraduate className='h-full w-full' />,
  },
  {
    category: 'Real Estate',
    path: '/industries/real-estate',
    icon: <HiMiniBuildingOffice2 className='h-full w-full' />,
  },
  {
    category: 'Travel & Logistics',
    path: '/industries/travel-logistics',
    icon: <MdOutlineAirplanemodeActive className='h-full w-full' />,
  },
  {
    category: 'Retail',
    path: '/industries/retail',
    icon: <FaShoppingCart className='h-full w-full' />,
  },
  {
    category: 'Manufacturing',
    path: '/industries/manufacturing',
    icon: <MdPrecisionManufacturing className='h-full w-full' />,
  },
]

export const services = [
  {
    category: 'Blockchain',
    path: '/services?tab=blockchain',
    icon: <SiBlockchaindotcom className='h-full w-full' />,
  },
  {
    category: 'Web3',
    path: '/services?tab=web3',
    icon: <IoGlobeOutline className='h-full w-full' />,
  },
  {
    category: 'AI/ML',
    path: '/services?tab=aiml',
    icon: <LuBrainCircuit className='h-full w-full' />,
  },
  {
    category: 'Blockchain Development',
    path: '/services?tab=blockchaindevelopment',
    icon: <FaCode className='h-full w-full' />,
  },
  {
    category: 'Consulting',
    path: '/services?tab=consulting',
    icon: <TbBriefcaseFilled className='h-full w-full' />,
  },
  {
    category: 'Data & Analytics',
    path: '/services?tab=dataanalytics',
    icon: <IoStatsChart className='h-full w-full' />,
  },
  {
    category: 'Cyber Security',
    path: '/services?tab=cybersecurity',
    icon: <FaShieldAlt className='h-full w-full' />,
  },
  {
    category: 'Cloud',
    path: '/services?tab=cloud',
    icon: <IoCloudy className='h-full w-full' />,
  },
]
