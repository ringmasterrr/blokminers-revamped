import BlogPost from '@/components/Blog/BlogPost'
import { Page } from '@/components/shared/Page'
import { BlogsService } from '@/services/blog'

const blog = new BlogsService()

export default async function Blog({
  params,
}: {
  params: {
    postId: string
  }
}) {
  const data = await blog.getBlogById(params.postId)
  console.log(data.data)
  return (
    <Page>
      <BlogPost blog={data.data} />
    </Page>
  )
}
