import { services } from '@/lib/items'
import Image from 'next/image'
import Link from 'next/link'
import { FaCopyright } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='text-[#E0E0E0]'>
      <div className='mx-auto flex max-w-8xl flex-col justify-between gap-10 bg-theme-dark px-4 py-8 font-light sm:px-6 sm:py-10 2md:flex-row 2md:px-10'>
        <div className='flex flex-1 flex-col gap-8'>
          <div className='w-[150px]'>
            <Image
              src={'/logowhite.svg'}
              alt='logo'
              width={200}
              height={200}
              className='w-full'
            />
          </div>
          <div className='max-w-[98%] 2md:max-w-[60%]'>
            Transforming Blockchain concepts into flawless realities, Building
            greater futures through innovation and collective Knowledge
          </div>
          <div className='flex flex-wrap items-center gap-4'>
            <Link href={'https://www.goodfirms.co/company/blokminers'}>
              <div className='w-[30px]'>
                <Image
                  src={'/goodfirms.svg'}
                  alt='logo'
                  width={200}
                  height={200}
                  className='w-full'
                />
              </div>
            </Link>
            <Link
              href={'https://www.linkedin.com/company/theblokminers/mycompany/'}
            >
              <div className='w-[30px]'>
                <Image
                  src={'/logos/linkednlogo.svg'}
                  alt='logo'
                  width={200}
                  height={200}
                  className='w-full'
                />
              </div>
            </Link>
            <Link
              href={'https://x.com/blokminershq?s=21&t=QHYqpOiQqrEX0HQz30GtQQ'}
            >
              <div className='w-[30px]'>
                <Image
                  src={'/logos/xlogo.svg'}
                  alt='logo'
                  width={200}
                  height={200}
                  className='w-full'
                />
              </div>
            </Link>
            <Link href={'https://clutch.co/profile/blokminers#highlights'}>
              <div className='h-full w-[30px] text-3xl'>
                <FaCopyright />
              </div>
            </Link>
          </div>
          <div>© 2024. BlokMiners. All Rights Reserved.</div>
        </div>
        <div className='flex flex-1 flex-col gap-5 sm:gap-6'>
          <div className='text-lg font-semibold text-cyan-500'>SERVICES</div>
          <div className='z-60 grid h-fit cursor-pointer grid-cols-1 gap-x-6 rounded-lg font-semibold text-gray-500 sm:grid-cols-2'>
            {services.map((item: any) => (
              <Link
                href={item.path}
                key={item}
                className='flex w-fit items-center justify-between gap-6 border-theme-light border-opacity-20 py-2 text-sm text-gray-500 hover:text-white sm:py-4'
              >
                <div className='flex gap-4'>{item.category}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
