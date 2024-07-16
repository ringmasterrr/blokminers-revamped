import Image from 'next/image'
import Link from 'next/link'
import { FaCopyright } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='text-[#E0E0E0]'>
      <div className='mx-auto flex max-w-8xl flex-col justify-between gap-10 bg-theme-dark px-10 py-10 font-light 2md:flex-row'>
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
          <div className='flex items-center gap-4'>
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
        <div className='flex flex-1 flex-col gap-6'>
          <div className='text-lg font-semibold text-cyan-500'>SERVICES</div>
          <div className='grid grid-cols-1 gap-6 2md:grid-cols-2'>
            <div>Blockchain Development Services</div>
            <div>AI & ML Blockchain Development</div>
            <div>Exchange</div>
            <div>Metaverse & Gaming</div>
            <div>AI Developement</div>
            <div>Cloud Computing</div>
            <div>Consulting</div>
            <div>Cloud Security</div>
            <div>Data & Analytics</div>
            <div>Smart Contract Development</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
