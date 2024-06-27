"use client"
import BlogPost from '@/components/Blog/BlogPost'
import { Page } from '@/components/shared/Page'

const page = ({
  params,
}: {
  params: {
    postId: string
  }
}) => {
  console.log(params.postId)
  return (
    <Page>
      {' '}
      <BlogPost postId={params.postId} />{' '}
    </Page>
  )
}

export default page
