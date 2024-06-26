'use client'

import { useState } from 'react'
import SearchBar from './SearchBar'
import PostList from './PostList'
import Pagination from './Pagenation'
import { Post } from './Data'
import Heading from '../shared/Heading/Heading'

interface BlogProps {
  posts: Post[]
}

const Blog = ({ posts }: BlogProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const postsPerPage = 6

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className='relative'>
      <div className='mb-12 bg-grid pt-32'>
        <Heading
          heading='Blogs'
          message='Explore our innovative research in the realm of blockchain technology and its practical applications.'
        />
      </div>
      <div className='container mx-auto p-4 flex flex-col gap-12 items-center'>
        <SearchBar setSearchTerm={setSearchTerm} />
        <PostList posts={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredPosts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <div className="absolute inset-0 bg-[#D8F6FF] bg-opacity-70 bg-blur rounded-full -top-96"></div>

    </div>
  )
}

export default Blog
