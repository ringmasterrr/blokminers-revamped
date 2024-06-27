'use client'

import Image from 'next/image'

interface SearchBarProps {
  setSearchTerm: (term: string) => void
}

const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  return (
    <div className='mb-4 flex w-1/2 items-center justify-start rounded-2xl bg-[#D5EBFF] px-4'>
      <Image src={'/search.svg'} alt='' height={20} width={20} />
      <input
        type='text'
        placeholder='Search our blogs by topic or keywords...'
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full bg-transparent p-2 placeholder-[#6A6A6A] outline-none'
      />
    </div>
  )
}

export default SearchBar
