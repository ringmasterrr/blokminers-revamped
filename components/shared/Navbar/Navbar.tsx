'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const router = useRouter();
  
  return (
    <nav className='sticky left-0 right-0 top-0 w-full bg-white z-50 px-8'>
      <div className='mx-auto flex h-20 max-w-8xl items-center justify-between'>
        <div>
          <Image
            src={'/Images/Navbar/logo.svg'}
            width={100}
            height={100}
            className='w-40'
            alt='logo'
          />
        </div>
        <div className='flex gap-8 font-semibold text-theme-dark'>
          <p className='cursor-pointer hover:text-gray-500'>Services</p>
          <p className='cursor-pointer hover:text-gray-500'>Industries</p>
          <p className='cursor-pointer hover:text-gray-500' onClick={() => router.push('/case-studies')}>Case Studies</p>
          <p className='cursor-pointer hover:text-gray-500'>Blog</p>
          <p className='cursor-pointer hover:text-gray-500'>Portfolio</p>
          <p className='cursor-pointer hover:text-gray-500'>About Us</p>
        </div>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
