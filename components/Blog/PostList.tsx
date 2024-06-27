// components/PostList.tsx
"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  image: string;
  date: string;
  time: string;
}

interface PostListProps {
  posts: Post[];
}

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

const PostList = ({ posts }: PostListProps) => {


  

  return (
    <div className='grid grid-cols-3 gap-6'>
      {posts.map((post) => (
        <Link href={`/blogpost/${post.id}`}>
          <div className='mb-4 shadow-custom rounded-xl border border-[#00283C29] bg-white cursor-pointer'>
            <Image
              src={post.image}
              alt={post.title}
              height={1500}
              width={1500}
              className='mb-4 h-48 w-full rounded-xl object-cover'
            />
            <div className='p-4 flex flex-col gap-2'>
              <div className='flex gap-2'>
                <p className='mb-2 flex items-center gap-1 text-[#A3A3A3] text-sm font-medium'>
                  <Image
                    src={'/date.svg'}
                    alt={'icon'}
                    height={20}
                    width={20}
                    className='text-[#A3A3A3]'
                  />
                  {post.date}
                </p><span className='text-[#A3A3A3]'>|</span>
                <p className='mb-2 flex items-center gap-1 text-[#A3A3A3] text-sm font-medium'>
                  <Image
                    src={'/time.svg'}
                    alt={'icon'}
                    height={20}
                    width={20}
                    className='text-[#A3A3A3]'
                  />
                  {post.time}
                </p>
              </div>
              <h2 className='mb-2 text-2xl font-bold'>{post.title}</h2>
              <p className='text-[#A3A3A3]'>{truncateText(post.body, 16)}</p>
              <button className='flex items-center gap-2 my-4 group text-sm font-semibold'>
                Read now
                <Image
                  src={'/arrow.svg'}
                  alt={'icon'}
                  height={20}
                  width={20}
                  className='transform transition-transform duration-300 group-hover:-rotate-45'
                />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
