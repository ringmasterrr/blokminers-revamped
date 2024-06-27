'use client'
import Image from 'next/image'
import { posts } from './Data'
import { useEffect, useState } from 'react'
import { getBlogById } from '@/services/blog'
import { format, parseISO } from 'date-fns'
import { CgSpinnerTwo } from 'react-icons/cg'

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
                      src={`/avatar.png`}
                      alt='Coding on a laptop'
                      height={1000}
                      width={1000}
                      className='h-8 w-8 rounded-full object-cover'
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
                  src={blog.image}
                  alt='Coding on a laptop'
                  height={1000}
                  width={1000}
                  className='object-cover'
                />
              </div>
              <div className='bg-nav bg-blur absolute -top-[60rem] left-[20rem] bg-[#D8F6FF]'></div>
            </div>

            <div className='relative my-24 flex justify-between p-8'>
              <div className='sticky top-32 h-full w-[360px]'>
                <div className='mb-10 text-[20px] font-semibold text-theme-dark'>
                  Contents
                </div>
                {sections &&
                  sections.map((item: any, index: any) => (
                    <p
                      key={index}
                      className='mb-6 text-[20px] font-bold text-theme-dark'
                    >
                      {item.title}
                    </p>
                  ))}
              </div>
              <div className='w-[744px]'>
                {sections &&
                  sections.map((item: any, index: any) => (
                    <div key={index} className='mb-16 mt-16 first:mt-0'>
                      <p className='mb-6 w-[85%] text-4xl font-bold leading-tight text-theme-dark'>
                        {item.title}
                      </p>
                      {item.image && (
                        <div className='w-full'>
                          <Image
                            src={item.image}
                            alt='Coding on a laptop'
                            height={1000}
                            width={1000}
                            className='w-full object-cover'
                          />
                        </div>
                      )}
                      <div className='mt-12 text-xl font-medium tracking-wide'>
                        {item.content}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </>
    )
}
