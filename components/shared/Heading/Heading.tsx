export default function Heading({
    heading,
    message,
    color
}: {
    heading: string
    message: string
    color?: string
}) {
    return (
        <div className='w-full'>
            <div className= {` flex mx-auto max-w-[700px] flex-col items-center justify-center gap-6`}>
                <h1 className= {`text-5xl font-extrabold text-theme-dark ${color} `} >{heading}</h1>
                <p className= {`font-medium text-theme-dark text-center ${color} `} >{message}</p>
            </div>
        </div>
    )
}
