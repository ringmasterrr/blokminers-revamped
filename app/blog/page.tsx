import Blog from '@/components/Blog/Blog'
import { Page } from '@/components/shared/Page'
import { BlogsService } from '@/services/blog'

const blogs = new BlogsService()

export default async function BlogsPage({ searchParams }: {
  searchParams: {
    page?: string
    search?: string
  }
}) {
  const data = await blogs.getAllBlogs({ keyword: searchParams.search, page: searchParams.page })
  console.log(data)
  return (
    <Page className='justify-between px-8'>
      <Blog blogs={data.data} page={data.page} search={searchParams.search} />
    </Page>
  )
}
