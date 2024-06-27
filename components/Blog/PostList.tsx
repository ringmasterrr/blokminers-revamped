// components/PostList.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { Url } from 'url'

interface Post {
  _id: number
  title: string
  summary: string
  image: string
  date: string
  createdAt: string
  authorName: string
}

interface PostListProps {
  posts: Post[]
}

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ')
  if (words.length <= wordLimit) {
    return text
  }
  return words.slice(0, wordLimit).join(' ') + '...'
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className='grid grid-cols-3 gap-6'>
      {posts &&
        posts.map((post, index) => (
          <Link href={`/blogpost/${post._id}`} key={index}>
            <div className='shadow-custom mb-4 cursor-pointer rounded-xl border border-[#00283C29] bg-white'>
              <Image
                src={'https://picsum.photos/200'}
                alt={post.title}
                height={1500}
                width={1500}
                className='mb-4 h-48 w-full rounded-xl object-cover'
              />

              <div className='flex h-[300px] flex-col justify-between gap-2 p-4'>
                <div>
                  <div className='flex gap-2'>
                    <p className='mb-2 flex items-center gap-1 text-sm font-medium text-[#A3A3A3]'>
                      <Image
                        src={'/date.svg'}
                        alt={'icon'}
                        height={20}
                        width={20}
                        className='text-[#A3A3A3]'
                      />
                      {post.date}
                    </p>
                    <span className='text-[#A3A3A3]'>|</span>
                    <p className='mb-2 flex items-center gap-1 text-sm font-medium text-[#A3A3A3]'>
                      <Image
                        src={'/time.svg'}
                        alt={'icon'}
                        height={20}
                        width={20}
                        className='text-[#A3A3A3]'
                      />
                      {post.createdAt}
                    </p>
                  </div>
                  <h2 className='mb-2 text-2xl font-bold'>
                    {truncateText(post.title, 10)}
                  </h2>
                  <p className='text-[#A3A3A3]'>
                    {truncateText(post.summary, 16)}
                  </p>
                </div>

                <div>
                  <button className='group my-4 flex items-center gap-2 text-sm font-semibold'>
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
            </div>
          </Link>
        ))}
    </div>
  )
}

export default PostList
