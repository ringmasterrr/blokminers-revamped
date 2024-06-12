import Image from 'next/image'

export default function BlockContent() {
    return (
        <div className='mb-20 mt-20 w-full'>
            <div className='grid grid-cols-4 gap-8 '>
                <div className='flex flex-col gap-3 border-slate-300 border-t-4 py-6 px-3 half-gradient'>
                    <div className='w-[70px]'>
                        <Image
                            src={'/Images/Why/icon1.svg'}
                            alt='image'
                            width={300}
                            height={300}
                        />
                    </div>
                    <h1 className='text-2xl font-bold text-theme-dark'>Tech Advantage</h1>
                    <p className='font-semibold  text-theme-dark'>We leverage expertise in blockchain and AI/ML for clients' competitive edge in today's dynamic market.</p>
                </div>
                <div className='flex flex-col gap-3 border-slate-300 border-t-4 py-6 px-3 half-gradient'>
                    <div className='w-[70px]'>
                        <Image
                            src={'/Images/Why/icon2.svg'}
                            alt='image'
                            width={300}
                            height={300}
                        />
                    </div>
                    <h1 className='text-2xl font-bold text-theme-dark'>Innovative Deliveries</h1>
                    <p className='font-semibold  text-theme-dark'>BlokMiners consistently delivers innovative solutions with tangible, measurable results.</p>
                </div>
                <div className='flex flex-col gap-3 border-slate-300 border-t-4 py-6 px-3 half-gradient'>
                    <div className='w-[70px]'>
                        <Image
                            src={'/Images/Why/icon3.svg'}
                            alt='image'
                            width={300}
                            height={300}
                        />
                    </div>
                    <h1 className='text-2xl font-bold text-theme-dark'>Customized Offerings</h1>
                    <p className='font-semibold  text-theme-dark'>We offer tailored solutions, understanding each business's unique objectives.</p>
                </div>
                <div className='flex flex-col gap-3 border-slate-300 border-t-4 py-6 px-3 half-gradient'>
                    <div className='w-[70px]'>
                        <Image
                            src={'/Images/Why/icon4.svg'}
                            alt='image'
                            width={300}
                            height={300}
                        />
                    </div>
                    <h1 className='text-2xl font-bold text-theme-dark'>Security Priority</h1>
                    <p className='font-semibold  text-theme-dark'>We provide secure blockchain implementations and cybersecurity measures to safeguard digital assets.</p>
                </div>
            </div>
        </div>
    )
}
