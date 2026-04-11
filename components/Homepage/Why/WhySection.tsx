import { BadgeDollarSign, Blocks, ShieldCheck, Telescope } from 'lucide-react'

const valueProps = [
  {
    title: 'One team. Two technologies.',
    description:
      'Most agencies do AI or blockchain. We do both, and not superficially. Our team has shipped systems that saved healthcare clients 25% on operations and processed millions in on-chain value.',
    icon: Blocks,
    stats: 'AI + Blockchain Native',
    image: '/why/tech.svg',
  },
  {
    title: 'ROI before the first line of code.',
    description:
      "Every engagement starts with a discovery call where we map operations against automation opportunities. We walk away from projects where we can't make the numbers work.",
    icon: BadgeDollarSign,
    stats: 'Honest Engineering',
    image: '/why/deliveries.svg',
  },
  {
    title: 'Industry-deep, not wide.',
    description:
      'We understand HIPAA in healthcare, AML in finance, and global data sensitivity. Less time explaining your context to us means faster time to market.',
    icon: Telescope,
    stats: '6 Regulatory Verticals',
    image: '/why/offerings.svg',
  },
  {
    title: 'Secure by design.',
    description:
      'Security is not a layer; it is the foundation. Our track record includes zero post-launch incidents on all audited mainnet systems. That is the only promise that matters.',
    icon: ShieldCheck,
    stats: 'Audit-Ready Systems',
    image: '/why/security.svg',
  },
]

export default function WhySection() {
  return (
    <section className='relative w-full overflow-hidden bg-white py-16 sm:py-24 lg:py-32'>
      {/* 1. AMBIENT BACKGROUND GLOWS */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -left-[5%] top-[10%] h-[600px] w-[600px] rounded-full bg-cyan-100/50 blur-[120px]' />
        <div className='absolute -right-[5%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-blue-100/50 blur-[120px]' />
      </div>

      {/* 2. FIXED WIDTH CONTAINER */}
      <div className='relative z-10 mx-auto max-w-8xl px-6 lg:px-8'>
        {/* Header Section */}
        <div className='max-w-4xl relative z-20 mx-auto mb-16 text-center lg:mb-24'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-cyan-600'>
            The BlokMiners Advantage
          </p>
          <h2 className='relative z-30 mt-4 text-balance text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl'>
            Why 30+ companies chose BlokMiners over a bigger agency
          </h2>
        </div>

        {/* 3. THE GRID */}
        <div className='grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10'>
          {valueProps.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className='group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-700/50 bg-[#001C2B] p-8 transition-all duration-500 sm:p-10'
              >
                {/* STATIC ILLUSTRATIONS (Top Right)
                    Locked at 35% opacity. No hover effects, transitions, or scaling.
                */}
                <div className='absolute right-0 top-0 h-56 w-56 -translate-y-4 translate-x-4 opacity-35'>
                  <img
                    src={item.image}
                    alt=''
                    className='h-full w-full object-contain'
                  />
                </div>

                {/* Top Content: Icon + Stats */}
                <div className='relative z-10'>
                  <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/10 text-cyan-400 ring-1 ring-cyan-500/30 transition-all duration-500 group-hover:bg-cyan-400 group-hover:text-black'>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <div className='mb-4 mt-8'>
                    <span className='rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-300'>
                      {item.stats}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className='relative z-10'>
                  <h3 className='text-2xl font-bold tracking-tight text-white sm:text-3xl'>
                    {item.title}
                  </h3>

                  <p className='mt-5 text-base leading-relaxed text-slate-300 transition-colors group-hover:text-white'>
                    {item.description}
                  </p>
                </div>

                {/* Bottom Bar: Progress Line + Number at Bottom Right */}
                <div className='relative z-10 mt-10 flex items-center justify-between'>
                  <div className='h-[1px] flex-grow overflow-hidden bg-slate-700/50'>
                    <div className='h-full w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 group-hover:w-full' />
                  </div>

                  {/* Number at Bottom Right */}
                  <span className='ml-4 text-4xl font-black text-white/[0.1] transition-colors group-hover:text-cyan-400/40'>
                    0{index + 1}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
