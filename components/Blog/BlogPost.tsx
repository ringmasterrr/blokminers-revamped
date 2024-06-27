'use client'
import Image from 'next/image'
import { posts } from './Data'
import { useEffect, useState } from 'react'
import { getBlogById } from '@/services/blog'
import { format, parseISO } from 'date-fns'
import { CgSpinnerTwo } from 'react-icons/cg'

const blogPost = {
  title: 'Choosing the Right DApp Development Company – Factors to Consider',
  paragraph: [
    'In the ever-evolving landscape of technology, decentralized applications (DApps) stand out as revolutionary solutions leveraging blockchain technology.',
    'For aspiring entrepreneurs and businesses, embarking on the journey of DApp development requires careful consideration and strategic decision-making.',
  ],
  HighlightedPara:
    'Choosing the right development company is paramount to success, and empowering clients with essential insights and factors to consider is crucial in this endeavor. In this comprehensive guide, we’ll explore key insights and factors to equip clients with the knowledge and confidence needed to navigate the path to DApp development success.',

  author: {
    name: 'Jade Jackson',
    avatar: '/Processes/Build.png',
  },
  date: 'May 7, 2024',
  readTime: '9 Mins',

  content: [
    {
      title: 'Introduction',
      text: 'In the ever-evolving landscape of technology, decentralized applications (DApps) stand out as revolutionary solutions leveraging blockchain technology.',
    },
    {
      title: 'The Importance of Strategic Decision-Making',
      text: 'For aspiring entrepreneurs and businesses, embarking on the journey of DApp development requires careful consideration and strategic decision-making.',
      image: '/Processes/Build.png',
    },
  ],

  image: '/Processes/Build.png',
}

export default function BlogPost({ postId }: { postId: string }) {
  const [blog, setBlog] = useState<any | null>(null)
  const [sections, setSections] = useState<any | null>(null)
  const [formattedDate, setFormattedDate] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  console.log(sections)

  const getBlog = async () => {
    try {
      const res: any = await getBlogById(postId)
      console.log(res)
      const fetchedBlog = res?.blog[0]
      if (fetchedBlog) {
        setBlog(fetchedBlog)
        setSections(fetchedBlog.sections)

        const dateString: string | undefined = fetchedBlog.createdAt
        if (dateString) {
          const parsedDate: Date = parseISO(dateString)
          setFormattedDate(format(parsedDate, 'MMMM do, yyyy '))
        }
      }
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    } catch (error) {
      console.error('Error fetching blog:', error)
    }
  }

  useEffect(() => {
    getBlog()
  }, [postId])
  if (loading) {
    return (
      <div className='flex h-screen items-center justify-center text-blue-700'>
        <CgSpinnerTwo className='animate-spin text-8xl' />
      </div>
    )
  } else
    return (
      <>
        {blog && (
          <div className='bg-grid'>
            <div className='flex w-full items-center justify-between gap-5 pb-10 pt-28'>
              <div className='h-[100%] w-[50%] p-8'>
                <h1 className='mb-6 text-[52px] font-extrabold leading-tight text-theme-dark'>
                  {blog?.title}
                </h1>
                <p className='mb-6 text-[20px] font-medium text-theme-dark'>
                  {blog?.summary}
                </p>
                <div className='flex items-center space-x-4'>
                  <div className='flex items-center rounded-full border-2 border-theme-dark/50 px-2'>
                    <Image
                      src={blogPost.author.avatar}
                      alt='Coding on a laptop'
                      height={1000}
                      width={1000}
                      className='h-5 w-5 rounded-full object-cover'
                    />
                    <span className='ml-2 text-xl text-theme-dark'>
                      {blog.authorName}
                    </span>
                  </div>
                  <div className='flex items-center rounded-full border-2 border-theme-dark/50 px-2'>
                    <span className='text-xl text-theme-dark'>
                      {formattedDate}
                    </span>
                  </div>
                  {/* <div className='flex items-center rounded-full border-2 border-theme-dark/50 px-2'>
                  <span className='text-xl text-theme-dark'>
                    {blogPost.readTime}
                  </span>
                </div> */}
                </div>
              </div>
              <div className='h-[100%] w-[50%]'>
                <Image
                  src={blogPost.image}
                  alt='Coding on a laptop'
                  height={1000}
                  width={1000}
                  className='object-cover'
                />
              </div>
              <div className='bg-nav bg-blur absolute -top-[60rem] left-[20rem] bg-[#D8F6FF]'></div>
            </div>
            <div className='p-8'>
              <p className='text-[20px] font-medium text-theme-dark'>
                {blogPost.HighlightedPara}
              </p>
            </div>
            <div className='relative flex my-24 p-8 justify-between'>
              <div className='w-[360px] sticky-sidebar'>
                <div className='mb-10 text-[20px] font-semibold text-theme-dark'>
                  Contents
                </div>
                {sections &&
                  sections.map((item: any, index: any) => (
                    <p
                      key={index}
                      className='mb-6 text-[20px]  font-bold text-theme-dark '
                    >
                      {item.title}
                    </p>
                  ))}
              </div>
              <div className='w-[744px]'>
                {sections &&
                  sections.map((item: any, index: any) => (
                    <div key={index} className='mt-16 mb-16 first:mt-0'>
                      <p className='mb-6 text-4xl font-bold text-theme-dark leading-tight w-[85%] '>
                        {item.title}
                      </p>
                      {item.image && (
                        <div className='w-full'>
                          <Image
                            src={item.image}
                            alt='Coding on a laptop'
                            height={1000}
                            width={1000}
                            className='object-cover w-full '
                          />
                        </div>
                      )}
                      <div className='mt-12 text-xl font-medium tracking-wide '>{item.content}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </>
    )
}
