import SearchBar from './SearchBar'
import PostList from './PostList'
import Heading from '../shared/Heading/Heading'
import { IBlog } from '@/types/blogs'
import Pagination from '../shared/Pagination'

export interface IBlogPage {
  search?: string
  page?: number
  limit?: number
  total?: number
  totalPages?: number
  blogs: IBlog[]
}

const Blog = ({ search, page, blogs, limit, total, totalPages }: IBlogPage) => {
  return (
    <div className='relative flex flex-col items-center gap-10'>
      <div className='bg-grid mb-12 pt-20 2md:pt-32'>
        <Heading
          heading='Blogs'
          message='Explore our innovative research in the realm of Blockchain technology and its practical applications.'
        />
      </div>
      <SearchBar keyword={search} />

      <PostList posts={blogs} />
      <Pagination
      search = {search ?? undefined}
        page={page?? 1}
        totalPages={totalPages ?? 1}
      />
      <div className='bg-blur absolute inset-0 -top-96 rounded-full bg-[#D8F6FF] bg-opacity-70'></div>
    </div>
  )
}

export default Blog
