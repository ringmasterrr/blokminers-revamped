import SearchBar from './SearchBar'
import PostList from './PostList'
import Pagination from './Pagenation'
import Heading from '../shared/Heading/Heading'
import { IBlog } from '@/types/blogs'

export interface IBlogPage {
  search?: string
  page?: number
  limit?: number
  total?: number
  blogs: IBlog[]
}

const Blog = ({ search, page, blogs, limit, total }: IBlogPage) => {
  return (
    <div className='relative flex flex-col gap-10 items-center'>
      <div className='bg-grid mb-12 pt-32'>
        <Heading
          heading='Blogs'
          message='Explore our innovative research in the realm of blockchain technology and its practical applications.'
        />
      </div>
      <SearchBar keyword={search} />

      <PostList posts={blogs} />
      {/* <Pagination
                postsPerPage={limit ?? 12}
                totalPosts={total ?? 0}
                currentPage={page ?? 1}
              /> */}
      <div className='bg-blur absolute inset-0 -top-96 rounded-full bg-[#D8F6FF] bg-opacity-70'></div>
    </div>
  )
}

export default Blog
