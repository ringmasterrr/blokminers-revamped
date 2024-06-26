'use client'
import Image from 'next/image'
import { posts } from './Data'
import { useEffect, useState } from 'react'
import { getBlogById } from '@/services/blog'

export default function BlogPost({ postId }: { postId: string }) {
  
  const [blog, setBlog] = useState({})
  const [sections, setSections] = useState([])

  const getBlog = async () => {
    const res: any = await getBlogById("667c12092b9b90fcc8c15505")
    setBlog(res.blog?.blog)
    setSections(res.blog?.sections)
  }

  console.log("blog :", blog)
  console.log("sections :", sections)

  useEffect(() => {
    getBlog()
  }, [postId])

  // const [data, setData] = useState(posts[post])
  return (
    <div>
      {/* <div className='container mx-auto p-4'>
        <h1 className='mb-4 text-3xl font-bold'>{blog.title}</h1>
        <h1 className='mb-4 text-3xl font-bold'>{blog.summary}</h1>
        <Image
          src={data.image}
          alt={data.title}
          width={1500}
          height={1500}
          className='mb-4 h-48 w-full rounded-xl object-cover'
        />
        <div className='mb-4 flex gap-2 text-sm font-medium text-[#A3A3A3]'>
          <div className='flex items-center gap-1'>
            <Image src={'/date.svg'} alt={'date icon'} height={20} width={20} />
            {data.date}
          </div>
          <span>|</span>
          <div className='flex items-center gap-1'>
            <Image src={'/time.svg'} alt={'time icon'} height={20} width={20} />
            {data.time}
          </div>
        </div>
        <p>{data.body}</p>
      </div> */}
      <h1 className='mb-4 text-3xl font-bold'>{blog.title}</h1>
      <h1 className='mb-4 text-3xl font-bold'>{blog?.summary}</h1>
      {
        sections && 
        sections.map((item: any)=>{
          return (<div>
            <div>{item?.title}</div>
            <div>{item?.content}</div>
          </div>
          )
        })
      }
      <div></div>
      yash
    </div>
  )
}
