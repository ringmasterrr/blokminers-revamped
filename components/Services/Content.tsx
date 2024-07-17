import Image from 'next/image'

export default function Content({ title, summary, data }: any) {
  return (
    // <div className='flex flex-col gap-36 bg-[#EBEFEF] px-16 py-16'>
    //   <div className='flex flex-col items-center gap-6 text-center'>
    //     <div className='text-5xl font-bold text-theme-dark'>{title}</div>
    //     <div className='max-w-[1000px] text-lg font-medium text-theme-dark'>
    //       {summary}
    //     </div>
    //   </div>
    //   <div className='grid grid-cols-3 items-center justify-items-center gap-x-24 gap-y-20'>
    //     {data.map((item: any, index: any) => {
    //       return (
    //         <div key={index} className='flex mx-auto flex-col gap-4 overflow-hidden'>
    //           <div className='aspect-square h-[50px] w-[50px]'>
    //             <Image
    //               src={item.image}
    //               width={500}
    //               height={500}
    //               alt=''
    //               className='h-full w-full object-contain'
    //             />
    //           </div>
    //           <div className='text-lg font-bold text-theme-dark'>
    //             {item.title}
    //           </div>
    //           <div className='ellipsis-multiline text-sm font-normal leading-loose tracking-wide text-[#8f8e8e]'>
    //             {item.content}
    //           </div>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
    <div className='relative flex flex-col gap-36 px-4 py-16 2md:px-16'>
      <div className='bg-blur absolute inset-0 bg-[#D8F6FF] bg-opacity-60'></div>

      <div className='flex flex-col items-center gap-6 text-center'>
        <div className='text-3xl font-bold text-theme-dark 2md:text-5xl'>
          {title}
        </div>
        <div className='max-w-[1000px] font-medium text-theme-dark 2md:text-lg'>
          {summary}
        </div>
      </div>
      <div className='grid grid-cols-1 items-center justify-items-center gap-x-24 gap-y-20 2md:grid-cols-3'>
        {data.map((item: any, index: any) => {
          const last = data.length % 3
          return (
            <div
              key={index}
              className={`flex flex-col gap-4 overflow-hidden ${
                last === 1 && index === data.length - 1
                  ? '2md:col-span-1 2md:col-start-2'
                  : ''
              }`}
            >
              <div className='aspect-square h-[50px] w-[50px]'>
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt=''
                  className='h-full w-full object-contain'
                />
              </div>
              <div className='text-lg font-bold text-theme-dark'>
                {item.title}
              </div>
              <div className='ellipsis-multiline text-sm font-normal leading-loose tracking-wide text-[#8f8e8e]'>
                {item.content}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
