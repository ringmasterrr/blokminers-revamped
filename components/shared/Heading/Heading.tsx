export default function Heading({
    heading,
    message,
}: {
    heading: string
    message: string
}) {
    return (
        <div className='w-full'>
            <div className='flex mx-auto max-w-[500px] flex-col items-center justify-center gap-6'>
                <h1 className='text-4xl font-extrabold text-theme-dark'>{heading}</h1>
                <p className=' font-medium text-theme-dark text-center'>{message}</p>
            </div>
        </div>
    )
}
