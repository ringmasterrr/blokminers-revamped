'use client'

import Image from 'next/image'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { Input } from '../ui/input'
import { usePathname, useRouter } from 'next/navigation'

const SearchBar = ({ keyword }: { keyword?: string }) => {
  const [searchTerm, setSearchTerm] = useState(keyword ?? '')
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e
    if (key !== 'Enter') return
    router.push(`${pathname}?search=${searchTerm}`)
  }

  return (
    <div className='mb-4 flex w-full max-w-[600px] items-center justify-start rounded-2xl bg-[#D5EBFF] px-4 sm:px-8'>
      <Image src={'/search.svg'} alt='' height={20} width={20} />
      <Input
        type='text'
        placeholder='Search our blogs by topic or keywords...'
        value={searchTerm}
        onChange={handleChange}
        onKeyUp={onKeyUp}
        className='w-full bg-transparent p-3 py-5 text-sm placeholder-[#6A6A6A] outline-none focus:border-none focus:outline-none sm:p-4 sm:py-6 sm:text-base'
      />
    </div>
  )
}

export default SearchBar
