import Blog from '@/components/Blog/Blog'
import { Page } from '@/components/shared/Page'
import { posts } from '@/components/Blog/Data'

export default function Blogposts() {
  return (
    <Page className='justify-between px-8'>
      <Blog posts={posts} />
    </Page>
  )
}
