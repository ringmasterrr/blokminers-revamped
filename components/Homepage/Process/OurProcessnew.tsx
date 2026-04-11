'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BrainCircuit,
  Blocks,
  Sparkles,
  FileSearch,
  PenTool,
  Cpu,
  ShieldCheck,
  Rocket,
  Binary,
} from 'lucide-react'

// ----- Process Data -----
const aiSteps = [
  {
    number: 1,
    title: 'Discovery call',
    icon: Sparkles,
    description:
      '30 minutes. We listen to your challenges, map your current operations, and identify your top 3 automation opportunities with rough ROI estimates. No sales pitch — just structured listening. Free, no commitment.',
  },
  {
    number: 2,
    title: 'Process audit',
    icon: FileSearch,
    description:
      'A focused documentation exercise: we map your current workflows, identify data sources and pain points, and separate high‑ROI automation candidates from low‑value ones. Honest about what is not worth automating.',
  },
  {
    number: 3,
    title: 'Solution design',
    icon: PenTool,
    description:
      'We recommend the right tools, models, and architecture. You see the complete technical design — including data flow, security model, integration points — before we write a single line of code.',
  },
  {
    number: 4,
    title: 'Build and integrate',
    icon: Cpu,
    description:
      'We develop the solution and integrate it with your existing stack: CRM, ERP, email, communication tools. You see it running in a staging environment with your actual data before it touches production.',
  },
  {
    number: 5,
    title: 'Test and validate',
    icon: ShieldCheck,
    description:
      'Real‑world testing against the ROI targets set in step 1. We measure accuracy, reliability, edge case handling, and performance. We iterate until the system meets the benchmark.',
  },
  {
    number: 6,
    title: 'Deploy and monitor',
    icon: Rocket,
    description:
      'Go live with dashboards tracking performance against your KPIs. Monthly reports. Ongoing monitoring with alerts for anomalies. We stay involved — we do not hand off and disappear.',
  },
]

const blockchainSteps = [
  {
    number: 1,
    title: 'Plan',
    icon: Sparkles,
    description:
      'Collaborative discovery: we determine blockchain relevance, choose the right model (public, private, consortium), clarify your idea, and align on technical and business objectives.',
  },
  {
    number: 2,
    title: 'Architect',
    icon: Binary,
    description:
      'We select the blockchain protocol based on type, energy efficiency, bridging requirements, and transaction costs. We define the smart contract architecture and data storage model.',
  },
  {
    number: 3,
    title: 'Design',
    icon: PenTool,
    description:
      'UI/UX design for the frontend, smart contract interface design, and data flow architecture. You see what the product will look like and how it will work before development begins.',
  },
  {
    number: 4,
    title: 'Build',
    icon: Cpu,
    description:
      'Smart contract development, backend integration, frontend development, and wallet connectivity. Built in sprints — you see working demos every 2 weeks, not just at the end.',
  },
  {
    number: 5,
    title: 'Test and audit',
    icon: ShieldCheck,
    description:
      'Comprehensive security audit covering reentrancy, integer overflow, access control, and OWASP Web3 Top 10. Performance testing under load. Testnet deployment with full review.',
  },
  {
    number: 6,
    title: 'Launch and upgrade',
    icon: Rocket,
    description:
      'Mainnet deployment with monitoring dashboards. Post‑launch support and regular upgrade sprints to evolve the protocol as your needs change. We are present through the full lifecycle.',
  },
]

// ----- Stepper Sub-Component -----
function VerticalStepper({ steps }: { steps: typeof aiSteps }) {
  return (
    <div className='max-w-5xl relative mx-auto'>
      {/* The Master Track (Vertical Line) */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: 'circOut' }}
        className='absolute bottom-0 left-6 top-24 w-px origin-top bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent md:left-12 md:top-28'
      />

      <div className='flex flex-col'>
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              className='group relative py-8 pl-16 pr-4 md:py-12 md:pl-32 md:pr-8'
            >
              {/* Stepper Node (Circle on the track) */}
              <div className='absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-12'>
                <div className='relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0d2b3a] transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]'>
                  {/* Inner glowing dot */}
                  <div className='absolute inset-2 rounded-full bg-cyan-500/10 transition-colors duration-500 group-hover:bg-cyan-500/20' />
                  <Icon
                    size={20}
                    className='relative z-10 text-white/60 transition-colors duration-500 group-hover:text-cyan-300'
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Step Card */}
              <div className='relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0d2b3a] p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-[#123547] hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.15)] md:p-12'>
                {/* Huge Watermark Number */}
                <div className='pointer-events-none absolute -bottom-10 -right-4 select-none text-[10rem] font-black leading-none text-white/[0.03] transition-all duration-700 group-hover:scale-110 group-hover:text-cyan-300/[0.08] md:-bottom-16 md:-right-8 md:text-[14rem]'>
                  0{step.number}
                </div>

                <div className='relative z-10 flex flex-col md:flex-row md:items-start md:justify-between'>
                  <div className='max-w-2xl'>
                    <div className='mb-4 flex items-center gap-4'>
                      <span className='text-sm font-bold tracking-widest text-cyan-300'>
                        PHASE 0{step.number}
                      </span>
                      <div className='h-px w-12 bg-cyan-300/30' />
                    </div>

                    <h3 className='mb-6 text-3xl font-extrabold text-white md:text-4xl'>
                      {step.title}
                    </h3>

                    <p className='text-lg leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/75'>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// ----- Main Process Section -----
export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState<'ai' | 'blockchain'>('ai')
  const steps = activeTab === 'ai' ? aiSteps : blockchainSteps

  return (
    <section className='relative mx-auto max-w-8xl overflow-hidden bg-[#031d2c] py-24 lg:py-32'>
      {/* Ambient Background Glows */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -left-[10%] top-[20%] h-[800px] w-[800px] rounded-full bg-cyan-900/15 blur-[150px]' />
        <div className='absolute -right-[10%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-blue-900/15 blur-[120px]' />
      </div>

      <div className='max-w-8xl relative z-10 mx-auto px-6 lg:px-8'>
        {/* Header Section */}
        <div className='max-w-3xl mx-auto text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-cyan-300'>
            Execution Excellence
          </p>
          <h2 className='mt-4 text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl'>
            From first call to production-ready code.
          </h2>
        </div>

        {/* Agency-Grade Toggle Switch */}
        <div className='mt-16 flex justify-center pb-8'>
          <div className='relative flex rounded-full border border-white/15 bg-[#0d2b3a]/70 p-1.5 backdrop-blur-md'>
            <button
              onClick={() => setActiveTab('ai')}
              className={`relative z-10 flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold tracking-widest transition-all duration-500 ${
                activeTab === 'ai'
                  ? 'text-white'
                  : 'text-white/45 hover:text-white/70'
              }`}
            >
              <BrainCircuit size={18} /> AI WORKFLOW
            </button>
            <button
              onClick={() => setActiveTab('blockchain')}
              className={`relative z-10 flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold tracking-widest transition-all duration-500 ${
                activeTab === 'blockchain'
                  ? 'text-white'
                  : 'text-white/45 hover:text-white/70'
              }`}
            >
              <Blocks size={18} /> WEB3 WORKFLOW
            </button>

            {/* Sliding Active Background */}
            <div
              className={`absolute bottom-1.5 top-1.5 w-[calc(50%-6px)] rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-500 ease-out ${
                activeTab === 'ai' ? 'left-1.5' : 'left-[50%]'
              }`}
            />
          </div>
        </div>

        {/* Animated Stepper Content */}
        <div className='mt-8'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <VerticalStepper steps={steps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
