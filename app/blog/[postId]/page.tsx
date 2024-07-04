import BlogPost from '@/components/Blog/BlogPost'
import { Page } from '@/components/shared/Page'
import { BlogsService } from '@/services/blog'

const blog = new BlogsService()

export default async function page({
  params,
}: {
  params: {
    postId: string
  }
}) {
  const data = await blog.getBlogById(params.postId)
  console.log(data.blog[0])
  return (
    <Page>
      <BlogPost blog={data.blog[0]} />
    </Page>
  )
}
