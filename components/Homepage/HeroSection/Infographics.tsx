import Image from 'next/image'

type OrbitImageProps = {
  src: string
  alt: string
  className: string
  imageClassName: string
  frameClassName?: string
  dotClassName?: string
}

function OrbitImage({
  src,
  alt,
  className,
  imageClassName,
  frameClassName,
  dotClassName,
}: OrbitImageProps) {
  return (
    <div className={`absolute z-[60] transform ${className}`}>
      <div className={frameClassName}>
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className={imageClassName}
        />
      </div>
      {dotClassName ? (
        <div
          className={`absolute rounded-full bg-theme-dark/80 p-1 ${dotClassName}`}
        />
      ) : null}
    </div>
  )
}

export function Infographics() {
  return (
    <div className='flex h-full w-full items-center justify-center py-12 xl:overflow-clip xl:pb-64 xl:pt-44'>
      <div className='relative z-50 flex h-[23rem] w-[23rem] items-center justify-center xl:ml-16 xl:translate-x-40'>
        <div className='animate-spin-superslow absolute flex h-[18.5rem] w-[18.5rem] items-center justify-center rounded-full border-2 border-gray-300 xl:h-[38rem] xl:w-[38rem]'>
          <OrbitImage
            src='/orbit-icons/eth.svg'
            alt='Ethereum'
            className='-top-7 right-24 xl:-top-0'
            imageClassName='w-14 -rotate-[20deg] xl:w-24 xl:rotate-12'
            dotClassName='-right-[25%] top-[66%] h-2 w-2 xl:top-[100%]'
          />

          <OrbitImage
            src='/orbit-icons/polygon.svg'
            alt='Polygon'
            className='left-23 -bottom-6 xl:-bottom-0'
            imageClassName='w-12 rotate-[80deg] xl:w-20 xl:rotate-[100deg]'
            dotClassName='-left-[80%] bottom-[90%] h-3 w-3'
          />

          <OrbitImage
            src='/orbit-icons/openai.webp'
            alt='OpenAI'
            className='left-4 top-[35%] -rotate-[10deg] xl:left-10'
            frameClassName='overflow-hidden rounded-full'
            imageClassName='w-14 rounded-full shadow-lg shadow-theme-light/15 xl:w-20'
          />

          <OrbitImage
            src='/orbit-icons/langchain.webp'
            alt='LangChain'
            className='right-0 top-[72%] rotate-[8deg] xl:right-6'
            frameClassName='overflow-hidden rounded-full'
            imageClassName='w-12 rounded-full shadow-lg shadow-theme-light/15 xl:w-16'
          />

          <div className='animate-spin-slow absolute flex h-[14rem] w-[14rem] items-center justify-center rounded-full border-2 border-gray-400 xl:h-[28rem] xl:w-[28rem]'>
            <OrbitImage
              src='/orbit-icons/sol.svg'
              alt='Solana'
              className='-top-4 right-24'
              imageClassName='w-10 xl:w-16'
              dotClassName='right-[160%] top-[60%] h-2 w-2'
            />

            <OrbitImage
              src='/orbit-icons/atomic.svg'
              alt='Atomic'
              className='-bottom-2 left-24'
              imageClassName='w-10 xl:w-16'
              dotClassName='bottom-[60%] right-[170%] h-2 w-2 xl:bottom-[120%]'
            />

            <OrbitImage
              src='/orbit-icons/n8n.webp'
              alt='n8n'
              className='left-[-1.5rem] top-[38%] xl:left-[-2rem]'
              frameClassName='overflow-hidden rounded-full'
              imageClassName='w-10 rounded-full shadow-lg shadow-theme-light/15 xl:w-14'
            />

            <OrbitImage
              src='/orbit-icons/llamaindex.webp'
              alt='LlamaIndex'
              className='right-[0.35rem] top-[63%] xl:right-[-0.4rem]'
              frameClassName='overflow-hidden rounded-full'
              imageClassName='w-10 rounded-full shadow-lg shadow-theme-light/15 xl:w-14'
            />

            <div className='animate-spin-slower absolute flex h-[9rem] w-[9rem] items-center justify-center rounded-full border-2 border-gray-500 xl:h-[18rem] xl:w-[18rem]'>
              <OrbitImage
                src='/orbit-icons/next.svg'
                alt='Next.js'
                className='-top-5 right-14'
                imageClassName='w-12 -rotate-12 xl:w-16'
                dotClassName='right-[160%] top-[130%] h-3 w-3 xl:top-[30%]'
              />

              <div className='animate-spin-slowest absolute flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-500 xl:h-32 xl:w-32'>
                <OrbitImage
                  src='/orbit-icons/rust.svg'
                  alt='Rust'
                  className='-top-7'
                  imageClassName='w-10 xl:w-16'
                  dotClassName='-bottom-[20%] right-[110%] h-2 w-2 xl:-bottom-[80%] xl:right-[137%]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infographics
