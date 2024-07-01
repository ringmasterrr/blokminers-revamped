import Image from 'next/image'

export function Infographics() {
  return (
    <div className='flex h-full w-full items-center justify-center 2md:overflow-clip  border-r pt-44 pb-64'>
      <div className='relative z-50 ml-16 flex h-[23rem] w-[23rem] translate-x-40 items-center justify-center'>
        <div className='animate-spin-superslow absolute flex h-[38rem] w-[38rem] items-center justify-center rounded-full border-2 border-gray-300'>
          <div className='absolute -top-0 right-24 transform'>
            <Image
              src={'/orbit-icons/eth.svg'}
              alt=''
              width={200}
              height={200}
              className='h-24 w-24 rotate-12'
            />
            <div className='absolute -right-[25%] top-[100%] h-2 w-2 transform rounded-full bg-black/80 p-1'></div>
          </div>
          <div className='absolute -bottom-0 left-24 transform'>
            <Image
              src={'/orbit-icons/polygon.svg'}
              alt=''
              width={200}
              height={200}
              className='h-20 w-20 rotate-[100deg]'
            />
            <div className='absolute -left-[40%] bottom-[125%] h-3 w-3 transform rounded-full bg-black/80 p-1'></div>
          </div>
          <div className='animate-spin-slow absolute flex h-[28rem] w-[28rem] items-center justify-center rounded-full border-2 border-gray-400'>
            <div className='absolute -top-4 right-24 transform'>
              <Image
                src={'/orbit-icons/sol.svg'}
                alt=''
                width={200}
                height={200}
                className='h-16 w-16'
              />
              <div className='absolute right-[160%] top-[18%] h-2 w-2 transform rounded-full bg-black/80 p-1'></div>
            </div>
            <div className='absolute -bottom-4 left-24 transform'>
              <Image
                src={'/orbit-icons/atomic.svg'}
                alt=''
                width={200}
                height={200}
                className='h-16 w-16'
              />
              <div className='absolute bottom-[135%] right-[160%] h-2 w-2 transform rounded-full bg-black/80 p-1'></div>
            </div>
            <div className='animate-spin-slower absolute flex h-[18rem] w-[18rem] items-center justify-center rounded-full border-2 border-gray-500'>
              <div className='absolute -top-5 right-14 transform'>
                <Image
                  src={'/orbit-icons/next.svg'}
                  alt=''
                  width={200}
                  height={200}
                  className='h-16 w-16 -rotate-12'
                />
                <div className='absolute right-[160%] top-[30%] h-3 w-3 transform rounded-full bg-black/80 p-1'></div>
              </div>
              <div className='animate-spin-slowest absolute flex h-32 w-32 items-center justify-center rounded-full border-2 border-gray-500'>
                <div className='absolute -top-7 transform'>
                  <Image
                    src={'/orbit-icons/rust.svg'}
                    alt=''
                    width={200}
                    height={200}
                    className='h-16 w-16'
                  />
                  <div className='absolute -bottom-[80%] right-[137%] h-2 w-2 transform rounded-full bg-black/80 p-1'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infographics
