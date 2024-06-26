'use client'

import Image from "next/image"

interface SearchBarProps {
  setSearchTerm: (term: string) => void
}

const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  return (
    <div className="rounded-2xl w-1/2 mb-4 bg-[#D5EBFF] flex items-center justify-start px-4">
        <Image src={'/search.svg'} alt="" height={20} width={20}/>
      <input
        type='text'
        placeholder='Search our blogs by topic or keywords...'
        onChange={(e) => setSearchTerm(e.target.value)}
        className='p-2 w-full bg-transparent placeholder-[#6A6A6A] outline-none'
      />
    </div>
  )
}

export default SearchBar
