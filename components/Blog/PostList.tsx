import Link from 'next/link'
import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import { IBlog } from '@/types/blogs'

interface PostListProps {
  posts: IBlog[]
}

const PostList = ({ posts }: PostListProps) => {
  return (
    // <div className='grid w-full grid-cols-2 justify-center gap-8 px-4 xl:grid-cols-3'>
    //   {posts &&
    //     posts.map((post, index) => (
    //       <Link
    //         href={`/blog/${post._id}`}
    //         key={index}
    //         className='flex justify-center'
    //       >
    //         <div className='shadow-custom max-w-[400px] cursor-pointer rounded-xl border border-[#00283C29] bg-white'>
    //           <div className='relative mb-4 h-56 w-full overflow-hidden rounded-t-xl'>
    //             <Image
    //               src={post.image}
    //               alt={post.title}
    //               height={1500}
    //               width={1500}
    //               className='h-full w-full object-cover'
    //             />
    //             <div className='absolute inset-0'>
    //               <div className='absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-b from-transparent to-white backdrop-blur-sm'></div>
    //             </div>
    //           </div>

    //           <div className='flex h-[300px] flex-col justify-between gap-2 p-4'>
    //             <div>
    //               <div className='flex gap-2'>
    //                 <p className='mb-2 flex items-center gap-1 text-sm font-medium text-[#A3A3A3]'>
    //                   <Image
    //                     src={'/date.svg'}
    //                     alt={'icon'}
    //                     height={20}
    //                     width={20}
    //                     className='text-[#A3A3A3]'
    //                   />
    //                   {formattedDates[index]}
    //                 </p>
    //               </div>
    //               <h2 className='mb-2 text-2xl font-bold'>
    //                 {truncateText(post.title, 10)}
    //               </h2>
    //               <p className='text-[#A3A3A3]'>
    //                 {truncateText(post.summary, 16)}
    //               </p>
    //             </div>

    //             <div>
    //               <button className='group my-4 flex items-center gap-2 text-sm font-semibold'>
    //                 Read now
    //                 <Image
    //                   src={'/arrow.svg'}
    //                   alt={'icon'}
    //                   height={20}
    //                   width={20}
    //                   className='transform transition-transform duration-300 group-hover:-rotate-45'
    //                 />
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     ))}
    // </div>
    <div className='flex flex-wrap justify-center gap-8 sm:px-4'>
      {posts &&
        posts.map((post, index) => (
          <Link
            href={`/blog/${post._id}`}
            key={index}
            className='flex max-w-[400px] justify-center'
          >
            <div className='shadow-custom max-w-[400px] cursor-pointer rounded-xl border border-[#00283C29] bg-white'>
              <div className='relative mb-4 h-56 w-full overflow-hidden rounded-t-xl'>
                <Image
                  src={post.image}
                  alt={post.title}
                  height={1500}
                  width={1500}
                  className='h-full w-full object-cover'
                />
                <div className='absolute inset-0'>
                  <div className='absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-b from-transparent to-white backdrop-blur-sm'></div>
                </div>
              </div>

              <div className='flex min-h-[290px] flex-col gap-4 p-4 pb-8'>
                <div className='flex gap-2'>
                  <p className='flex items-center gap-1 text-sm font-medium text-[#A3A3A3]'>
                    <img
                      src={'/date.svg'}
                      alt={'icon'}
                      height={20}
                      width={20}
                      className='text-[#A3A3A3]'
                    />
                    {format(parseISO(post.createdAt), 'MMMM do, yyyy')}
                  </p>
                </div>
                <h2 className='ellipsis-multiline-blog-heading text-2xl font-bold text-theme-dark'>
                  {post.title}
                </h2>
                <p className='ellipsis-multiline-blog-content text-[#A3A3A3]'>
                  {post.summary}
                </p>
                <div className='flex flex-grow items-end justify-between'>
                  <button className='flex items-center gap-2 font-semibold text-theme-dark'>
                    Read now
                    <img
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
