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
    <div className='mb-4 flex max-w-[600px] w-full items-center justify-start rounded-2xl bg-[#D5EBFF] sm:px-8 px-4'>
      <Image src={'/search.svg'} alt='' height={20} width={20} />
      <Input
        type='text'
        placeholder='Search our blogs by topic or keywords...'
        value={searchTerm}
        onChange={handleChange}
        onKeyUp={onKeyUp}
        className='w-full bg-transparent p-4 py-6 placeholder-[#6A6A6A] outline-none focus:border-none focus:outline-none'
      />
    </div>
  )
}

export default SearchBar
