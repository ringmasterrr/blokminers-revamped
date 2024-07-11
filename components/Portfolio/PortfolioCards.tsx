import Image from 'next/image'
import Link from 'next/link'

const CardList = ({ data }: { data: any }) => {
  return (
    <div className='2md:my-12 my-20 grid grid-cols-1 gap-6 2md:p-6 p-2 2md:grid-cols-2 xl:grid-cols-3'>
      {data.map((card: any, index: any) => (
        <div className='flex justify-center items-center'>
          <Link
            href={card.url}
            className='flex flex-col justify-between rounded-2xl bg-white p-6 max-w-[450px]'
            style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}
          >
            <div>
              <h2 className='mb-2 text-2xl font-semibold'>{card.title}</h2>
              <p className='mb-6 text-sm text-[#A3A3A3] ellipsis-multiline-blog-portfolio'>{card.description}</p>
            </div>
            <Image
              src={card.image}
              alt={card.title}
              height={1000}
              width={1000}
              className='mb-4 h-64 w-full rounded-md object-cover'
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CardList
