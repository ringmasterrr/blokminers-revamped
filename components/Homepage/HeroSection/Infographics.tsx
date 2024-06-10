import Image from 'next/image'

export function Infographics() {
  return (
    <div className='flex h-full w-full items-center justify-center overflow-clip border-r'>
      <div className='relative ml-16 flex h-64 w-64 translate-x-32 items-center justify-center'>
        <div className='animate-spin-superslow absolute flex h-[32rem] w-[32rem] items-center justify-center rounded-full border-2 border-gray-300'>
          <div className='absolute -top-5 right-24 transform'>
            <Image
              src={'/orbit-icons/eth.svg'}
              alt=''
              width={200}
              height={200}
              className='h-24 w-24 rotate-12'
            />
            <div className='absolute -right-[25%] top-[90%] h-2 w-2 transform rounded-full bg-black/80 p-1'></div>
          </div>
          <div className='absolute -bottom-4 left-24 transform'>
            <Image
              src={'/orbit-icons/polygon.svg'}
              alt=''
              width={200}
              height={200}
              className='h-20 w-20 rotate-[100deg]'
            />
            <div className='absolute -left-[40%] bottom-[110%] h-3 w-3 transform rounded-full bg-black/80 p-1'></div>
          </div>
          <div className='animate-spin-slow absolute flex h-96 w-96 items-center justify-center rounded-full border-2 border-gray-400'>
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
              <div className='absolute bottom-[110%] right-[160%] h-2 w-2 transform rounded-full bg-black/80 p-1'></div>
            </div>
            <div className='animate-spin-slower absolute flex h-64 w-64 items-center justify-center rounded-full border-2 border-gray-500'>
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
