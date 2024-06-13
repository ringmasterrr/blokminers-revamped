import Image from 'next/image';

const Verticals = () => (
  <div className='relative h-[50rem] w-[50rem] translate-x-20 translate-y-6'>
    <Image
      src={'/verticals/vertical (1).svg'}
      alt='vertical'
      height={500}
      width={500}
      className='absolute w-[200px] left-[590px] top-32 backdrop-blur z-50'
    />
    <Image
      src={'/verticals/vertical (2).svg'}
      alt='vertical'
      height={500}
      width={500}
      className='absolute w-[172px] left-[450px] top-3'
    />
    <Image
      src={'/verticals/vertical (3).svg'}
      alt='vertical'
      height={500}
      width={500}
      className='absolute w-[200px] left-[450px] top-72 z-40 backdrop-blur'
    />
    <Image
      src={'/verticals/vertical (4).svg'}
      alt='vertical'
      height={500}
      width={500}
      className='absolute w-[248px] left-64 top-[460px]'
    />
    <Image
      src={'/verticals/vertical (5).svg'}
      alt='Retail'
      height={500}
      width={500}
      className='absolute w-[186px] left-60 top-52'
    />
    <Image
      src={'/verticals/vertical (6).svg'}
      alt='vertical'
      height={500}
      width={500}
      className='absolute w-[200px] -left-8 top-96 backdrop-blur z-50 '
    />
    <Image
      src={'/verticals/vertical (7).svg'}
      alt='vertical'
      height={500}
      width={500}
      className='absolute w-[201px] -left-32  top-52'
    />
    <Image
      src={'/verticals/vertical (8).svg'}
      alt='vertical'
      height={500}
      width={500}
      className='absolute w-[240px] left-10 top-112 backdrop-blur'
    />
  </div>
);

export default Verticals;
