'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

interface PaginationProps {
  totalPages: number
  page: number
  search: string | undefined
}

export default function Pagination({
  totalPages,
  page,
  search,
}: PaginationProps) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(page)
  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxPageNumbersToShow = 5

    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      pageNumbers.push(1)

      if (currentPage > 3) {
        pageNumbers.push('...')
      }

      const startPage = Math.max(currentPage - 1, 2)
      const endPage = Math.min(currentPage + 1, totalPages - 1)

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push('...')
      }

      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }
  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  const pageNumbers = renderPageNumbers()

  return (
    <>
      {totalPages > 1 && (
        <div className='flex items-center justify-center space-x-2'>
          <button
            onClick={() => {
              if (search!==undefined) {
                router.push(`/blog?search=${search}&page=${currentPage - 1}`)
              } else {
                router.push(`/blog?page=${currentPage - 1}`)
              }
              setCurrentPage(currentPage - 1)
            }}
            disabled={currentPage === 1}
            className={`border border-none font-bold text-theme-dark`}
          >
            <IoIosArrowBack size={25} />
          </button>
          {pageNumbers.map((number, index) =>
            typeof number === 'number' ? (
              <div key={index}>
                <button
                  onClick={() => {
                    setCurrentPage(number)
                    if (search!==undefined) {
                      router.push(`/blog?search=${search}&page=${number}`)
                    } else {
                      router.push(`/blog?page=${number}`)
                    }
                    
                  }}
                  className={`border px-3 py-1 ${currentPage === number ? 'bg-theme-dark text-white' : 'bg-white text-theme-dark'}`}
                >
                  {number}
                </button>
              </div>
            ) : (
              <li key={index} className='px-3 py-1'>
                {number}
              </li>
            ),
          )}
          <button
            onClick={() => {
              if (search!==undefined) {
                router.push(`/blog?search=${search}&page=${currentPage + 1}`)
              } else {
                router.push(`/blog?page=${currentPage + 1}`)
              }
              setCurrentPage(currentPage + 1)
            }}
            disabled={currentPage === totalPages}
            className={`border border-none font-bold text-theme-dark`}
          >
            <IoIosArrowForward size={25} />
          </button>
        </div>
      )}
    </>
  )
}
