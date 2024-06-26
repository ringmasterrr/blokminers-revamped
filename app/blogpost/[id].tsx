// app/blogpost/[id].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { posts, Post } from '@/components/Blog/Data';

interface PostProps {
  post: Post;
}

const PostDetail = ({ post }: PostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={1500}
        height={1500}
        className="mb-4 h-48 w-full rounded-xl object-cover"
      />
      <div className="flex gap-2 mb-4 text-[#A3A3A3] text-sm font-medium">
        <div className="flex items-center gap-1">
          <Image src={'/date.svg'} alt={'date icon'} height={20} width={20} />
          {post.date}
        </div>
        <span>|</span>
        <div className="flex items-center gap-1">
          <Image src={'/time.svg'} alt={'time icon'} height={20} width={20} />
          {post.time}
        </div>
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
};


export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const post = posts.find((p) => p.id === parseInt(id as string));

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export default PostDetail;
