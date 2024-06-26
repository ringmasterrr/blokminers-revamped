import BlogPost from '@/components/Blog/BlogPost'

const page = ({
  params,
}: {
  params: {
    postId: string
  }
}) => {
  return <BlogPost postId={params.postId} />
}

export default page
