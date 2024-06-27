'use client'

import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import PostList from './PostList'
import Pagination from './Pagenation'
import { Post } from './Data'
import Heading from '../shared/Heading/Heading'
import { getAllBlogs } from '@/services/blog'
import { CgSpinnerTwo } from 'react-icons/cg'

interface BlogProps {
  posts: Post[]
}

const Blog = ({ posts }: BlogProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const postsPerPage = 6
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const [data, setData] = useState<any | null>(null)

  useEffect(() => {
    getAllPosts()
  }, [])

  const [currentPosts, setCurrentPosts] = useState<any | null>(null)
  const [filteredPosts, setFilteredPosts] = useState<any | null>(null)

  const getAllPosts = async () => {
    const res: any = await getAllBlogs()
    const fetchedData = res[0].data
    setData(fetchedData)
    setCurrentPosts(fetchedData)
    setLoading(false)
  }

  useEffect(() => {
    if (data === null) return
    const filteredPosts = data.filter((post: any) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    setCurrentPosts(filteredPosts.slice(indexOfFirstPost, indexOfLastPost))
  }, [searchTerm])

  return (
    <div className='relative'>
      <div className='bg-grid mb-12 pt-32'>
        <Heading
          heading='Blogs'
          message='Explore our innovative research in the realm of blockchain technology and its practical applications.'
        />
      </div>
      <div className='container mx-auto flex flex-col items-center gap-12 p-4'>
        <SearchBar setSearchTerm={setSearchTerm} />
        {loading === true ? (
          <div className='flex h-[40vh] items-center justify-center text-blue-700'>
            <CgSpinnerTwo className='animate-spin text-8xl' />
          </div>
        ) : (
          <>
            <PostList posts={currentPosts} />
            {filteredPosts && (
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={8}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </>
        )}
      </div>
      <div className='bg-blur absolute inset-0 -top-96 rounded-full bg-[#D8F6FF] bg-opacity-70'></div>
    </div>
  )
}

export default Blog
