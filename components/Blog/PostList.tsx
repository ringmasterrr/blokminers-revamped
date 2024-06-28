// components/PostList.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { parseISO, format } from 'date-fns'

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
  const [formattedDates, setFormattedDates] = useState<string[]>([])

  useEffect(() => {
    const dates = posts.map((post) => {
      const dateString: string | undefined = post.createdAt
      if (dateString) {
        const parsedDate: Date = parseISO(dateString)
        return format(parsedDate, 'MMMM do, yyyy')
      }
      return ''
    })
    setFormattedDates(dates)
  }, [posts])

  return (
    <div className='grid grid-cols-3 gap-6'>
      {posts &&
        posts.map((post, index) => (
          <Link href={`/blogpost/${post._id}`} key={index}>
            <div className='shadow-custom mb-4 w-[350px] cursor-pointer rounded-xl border border-[#00283C29] bg-white'>
              <div className='relative mb-4 h-56 w-full overflow-hidden rounded-t-xl'>
                <Image
                  src={'https://picsum.photos/200'}
                  alt={post.title}
                  height={1500}
                  width={1500}
                  className='h-full w-full object-cover'
                />
                <div className='absolute inset-0'>
                  <div className='absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-b from-transparent to-white backdrop-blur-sm'></div>
                </div>
              </div>

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
                      {formattedDates[index]}
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
