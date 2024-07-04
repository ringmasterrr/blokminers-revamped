import Image from 'next/image'

export function Infographics() {
  return (
    <div className='flex h-full w-full items-center justify-center py-12 2md:overflow-clip 2md:pb-64 2md:pt-44'>
      <div className='relative z-50 flex h-[23rem] w-[23rem] items-center justify-center 2md:ml-16 2md:translate-x-40'>
        <div className='animate-spin-superslow absolute flex h-[18.5rem] w-[18.5rem] items-center justify-center rounded-full border-2 border-gray-300 2md:h-[38rem] 2md:w-[38rem]'>
          <div className='absolute -top-7 right-24 transform 2md:-top-0'>
            <Image
              src={'/orbit-icons/eth.svg'}
              alt=''
              width={200}
              height={200}
              className='w-14 -rotate-[20deg] 2md:w-24 2md:rotate-12'
            />
            <div className='absolute -right-[25%] top-[66%] h-2 w-2 transform rounded-full bg-black/80 p-1 2md:top-[100%]'></div>
          </div>
          <div className='absolute -bottom-6 left-24 transform 2md:-bottom-0'>
            <Image
              src={'/orbit-icons/polygon.svg'}
              alt=''
              width={200}
              height={200}
              className='w-12 rotate-[80deg] 2md:w-20 2md:rotate-[100deg]'
            />
            <div className='absolute -left-[80%] bottom-[90%] h-3 w-3 transform rounded-full bg-black/80 p-1'></div>
          </div>
          <div className='animate-spin-slow absolute flex h-[14rem] w-[14rem] items-center justify-center rounded-full border-2 border-gray-400 2md:h-[28rem] 2md:w-[28rem]'>
            <div className='absolute -top-4 right-24 transform'>
              <Image
                src={'/orbit-icons/sol.svg'}
                alt=''
                width={200}
                height={200}
                className='w-10 2md:w-16'
              />
              <div className='absolute right-[160%] top-[60%] h-2 w-2 transform rounded-full bg-black/80 p-1'></div>
            </div>
            <div className='absolute -bottom-5 left-24 transform'>
              <Image
                src={'/orbit-icons/atomic.svg'}
                alt=''
                width={200}
                height={200}
                className='w-10 2md:w-16'
              />
              <div className='absolute bottom-[60%] right-[160%] h-2 w-2 transform rounded-full bg-black/80 p-1 2md:bottom-[135%]'></div>
            </div>
            <div className='animate-spin-slower absolute flex h-[9rem] w-[9rem] items-center justify-center rounded-full border-2 border-gray-500 2md:h-[18rem] 2md:w-[18rem]'>
              <div className='absolute -top-5 right-14 transform'>
                <Image
                  src={'/orbit-icons/next.svg'}
                  alt=''
                  width={200}
                  height={200}
                  className='w-12 -rotate-12 2md:w-16'
                />
                <div className='absolute right-[160%] top-[130%] h-3 w-3 transform rounded-full bg-black/80 p-1 2md:top-[30%]'></div>
              </div>
              <div className='animate-spin-slowest absolute flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-500 2md:h-32 2md:w-32'>
                <div className='absolute -top-7 transform'>
                  <Image
                    src={'/orbit-icons/rust.svg'}
                    alt=''
                    width={200}
                    height={200}
                    className='w-10 2md:w-16'
                  />
                  <div className='absolute -bottom-[20%] right-[110%] h-2 w-2 transform rounded-full bg-black/80 p-1 2md:-bottom-[80%] 2md:right-[137%]'></div>
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
