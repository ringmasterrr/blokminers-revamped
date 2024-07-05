export default function Heading({
  heading,
  message,
  white,
}: {
  heading: string
  message: string
  white?: boolean
}) {
  return (
    <div className='w-full'>
      <div
        className={`mx-auto flex max-w-[700px] flex-col items-center text-center ${white ? 'text-white' : 'text-theme-dark'} justify-center gap-6`}
      >
        <h1 className='text-4xl font-extrabold 2md:text-5xl'>{heading}</h1>
        <p className='text-center text-lg font-medium'>{message}</p>
      </div>
    </div>
  )
}
