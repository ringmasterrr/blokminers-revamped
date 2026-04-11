'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2,
  HeartPulse,
  Landmark,
  Scale,
  ShoppingBag,
  Truck,
} from 'lucide-react'

const industries = [
  {
    title: 'Healthcare & MedTech',
    painPoint:
      'Manual admin is consuming thousands of clinical hours that should be spent on patients',
    ai: 'Automate patient intake, appointment scheduling, insurance claims processing, and clinical documentation. AI agents that handle the administrative layer so clinicians focus on care. Typical result: 25 to 40% reduction in admin time, faster claims resolution, and one or more admin roles redeployed to patient-facing work.',
    blockchain:
      'Secure EHR (Electronic Health Record) sharing between providers using permissioned blockchain. Drug supply chain verification to prevent counterfeit medications. Patient consent management on-chain — auditable, immutable, HIPAA-aligned. Reduces data breach risk and improves inter-system interoperability.',
    keyAreas: [
      'HIPAA',
      'HL7 FHIR',
      'EHR Integration',
      'Claims Automation',
      'Drug Traceability',
    ],
    link: '/industries?tab=healthcare',
    icon: HeartPulse,
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Finance & FinTech',
    painPoint:
      'Compliance overhead, fraud losses, and slow settlement are compressing margins across the sector',
    ai: 'AI-powered fraud detection with real-time scoring, regulatory reporting automation (AML, KYC), credit risk models, and AI financial advisors. Automates the compliance documentation that currently takes your team weeks to produce manually.',
    blockchain:
      'DeFi protocols with smart contract-enforced rules, cross-border payment infrastructure using stablecoins, on-chain settlement for securities and derivatives, and immutable audit trails for regulatory compliance. Reduces settlement time from days to seconds and counterparty risk to near zero.',
    keyAreas: [
      'AML',
      'KYC',
      'DeFi',
      'Stablecoins',
      'Regulatory Reporting',
      'Smart Settlement',
    ],
    link: '/industries?tab=finance',
    icon: Landmark,
    image:
      'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Supply Chain & Logistics',
    painPoint:
      'Lack of real-time end-to-end visibility is costing supply chains 8 to 10% of annual revenue',
    ai: 'Demand forecasting agents that update in real time, route optimization that factors in live conditions, warehouse automation with AI-driven pick-and-pack, and supplier risk analysis that flags issues before they become disruptions.',
    blockchain:
      'End-to-end provenance tracking — every product, component, or shipment recorded on-chain from source to customer. Automated purchase order settlement via smart contracts. Counterfeit prevention through tokenized certificates of authenticity.',
    keyAreas: [
      'IoT Integration',
      'Provenance Tracking',
      'Smart PO Settlement',
      'Demand Forecasting',
    ],
    link: '/industries?tab=travel',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Retail & eCommerce',
    painPoint:
      'Generic customer experiences and supply uncertainty are killing conversion rates and customer lifetime value',
    ai: 'Personalization engines that adjust product recommendations, pricing, and content in real time. Inventory forecasting that prevents stockouts and overstock simultaneously. AI customer service agents handling 70% of queries without human involvement.',
    blockchain:
      'Loyalty token programs where points are actually owned by customers on-chain. Product authenticity verification via NFT certificates for luxury goods. Transparent sourcing records that let ethical consumers verify supply chain claims.',
    keyAreas: [
      'Personalization',
      'Inventory AI',
      'Loyalty Tokens',
      'Authenticity',
      'Dynamic Pricing',
    ],
    link: '/industries?tab=retail',
    icon: ShoppingBag,
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Real Estate & PropTech',
    painPoint:
      'Property transactions are slow, opaque, and drowning in paper — AI and blockchain solve both sides of that problem',
    ai: 'Automated lease abstraction that summarizes 200-page documents in minutes. Tenant screening agents that check multiple data sources simultaneously. AI market analysis tools for acquisition decisions. Document processing pipelines that cut transaction admin time by 60 to 80%.',
    blockchain:
      'Tokenized property ownership that enables fractional investment and faster transfer. Smart contract leases with automated rent collection, deposit handling, and maintenance triggers. Immutable title records that eliminate title fraud.',
    keyAreas: [
      'Tokenized Property',
      'Smart Leases',
      'Lease Abstraction',
      'Tenant Screening',
      'Title Records',
    ],
    link: '/industries?tab=realestate',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Legal & Compliance',
    painPoint:
      'Legal teams spend 60% of their billable time on tasks that AI can perform in minutes at a fraction of the cost',
    ai: 'Contract review and risk flagging instantly. Legal research automation across case law and statutes. Compliance monitoring that tracks regulatory changes automatically. Document drafting assistants trained on style guides.',
    blockchain:
      'Immutable audit trails for evidence management — timestamped and tamper-proof. Smart contract-enforced compliance reporting. Automated escrow for settlements. On-chain notarization for documents requiring permanent proof.',
    keyAreas: [
      'Contract AI',
      'Compliance Monitoring',
      'Legal Research',
      'Smart Escrow',
      'On-chain Notarization',
    ],
    link: '/industries?tab=finance',
    icon: Scale,
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80',
  },
]

export default function IndustryAccordion() {
  const router = useRouter()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)
  const [contentIndex, setContentIndex] = useState<number | null>(0)
  const revealTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (revealTimerRef.current) clearTimeout(revealTimerRef.current)
    setContentIndex(null)
    if (expandedIndex === null) return

    revealTimerRef.current = setTimeout(() => {
      setContentIndex(expandedIndex)
    }, 450)

    return () => {
      if (revealTimerRef.current) clearTimeout(revealTimerRef.current)
    }
  }, [expandedIndex])

  return (
    <section className='overflow-hidden bg-[#03263A] py-24 lg:py-32 w-full max-w-8xl overflow-x-hidden mx-auto'>
      <div className='mx-auto px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto mb-16 text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.28em] text-cyan-300'>
            Industry Verticals
          </p>
          <h2 className='mt-4 text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl'>
            Deep experience across the industries that need us most
          </h2>
          <p className='max-w-4xl mx-auto mt-6 text-balance text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl'>
            We do not just deliver code — we understand your sector, your
            compliance requirements, and your competitive pressures. That is why
            our solutions actually get adopted and used.
          </p>
        </div>

        <div className='flex p-8 h-[800px] w-full flex-col gap-5 overflow-hidden md:flex-row'>
          {industries.map((industry, idx) => {
            const isExpanded = expandedIndex === idx
            const isContentVisible = isExpanded && contentIndex === idx
            const Icon = industry.icon

            return (
              <motion.div
                key={industry.title}
                layout
                onMouseEnter={() => setExpandedIndex(idx)}
                onClick={() => router.push(industry.link)}
                className={`relative cursor-pointer overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-in-out ${
                  isExpanded
                    ? 'flex-[6] shadow-[0_20px_20px_rgba(0,0,0,0.3)]'
                    : 'flex-1'
                } bg-[#0a1120]`}
              >
                {/* Background Image Layer */}
                <motion.div
                  layout
                  className='absolute inset-0 bg-cover bg-center transition-opacity duration-1000'
                  style={{
                    backgroundImage: `url(${industry.image})`,
                    opacity: isExpanded ? 0.25 : 0.4,
                  }}
                />

                {/* Readability Overlay */}
                <div
                  className={`absolute inset-0 bg-[#03263A] transition-opacity duration-500 ${isExpanded ? 'opacity-85' : 'opacity-60'}`}
                />

                <div className='relative flex h-full flex-col p-8'>
                  {/* Icon & Title Header */}
                  <div className='mb-8 flex w-full items-center justify-between'>
                    <div className='flex min-w-0 items-center gap-4'>
                      <div
                        className={`shrink-0 rounded-2xl p-3.5 transition-all duration-500 ${isExpanded ? 'bg-[#5BBEF7] text-[#00283C] shadow-lg' : 'bg-white/5 text-white/40'}`}
                      >
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h3
                        className={`font-bold text-white transition-all duration-500 ${isExpanded ? 'text-2xl opacity-100' : 'invisible opacity-0'}`}
                      >
                        {industry.title}
                      </h3>
                    </div>
                  </div>

                  {/* Vertical Title (Collapsed Only) */}
                  <AnimatePresence>
                    {!isExpanded && (
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className='absolute inset-x-0 bottom-24 flex rotate-180 justify-center whitespace-nowrap text-lg font-bold uppercase tracking-[0.25em] text-white/70 [writing-mode:vertical-rl]'
                      >
                        {industry.title}
                      </motion.h3>
                    )}
                  </AnimatePresence>

                  {/* Text Content Area */}
                  <AnimatePresence mode='wait'>
                    {isContentVisible && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='flex flex-col'
                      >
                        {/* Width lock wrapper to prevent text jittering during expansion */}
                        <div className='min-w-[480px] space-y-7'>
                          <div>
                            <p className='mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300 opacity-80'>
                              The Pain Point
                            </p>
                            <p className='text-xl font-medium leading-[1.3] text-white/95'>
                              {industry.painPoint}
                            </p>
                          </div>

                          <div className='rounded-[2rem] border border-white/5 bg-white/[0.03] p-6 shadow-inner backdrop-blur-sm'>
                            <span className='mb-2 block text-[9px] font-black uppercase tracking-widest text-cyan-300'>
                              AI & Automation Strategy
                            </span>
                            <p className='text-[14px] leading-relaxed text-slate-300/90'>
                              {industry.ai}
                            </p>
                          </div>

                          <div className='rounded-[2rem] border border-white/5 bg-white/[0.03] p-6 shadow-inner backdrop-blur-sm'>
                            <span className='mb-2 block text-[9px] font-black uppercase tracking-widest text-blue-300'>
                              Blockchain & Web3
                            </span>
                            <p className='text-[14px] leading-relaxed text-slate-300/90'>
                              {industry.blockchain}
                            </p>
                          </div>

                          <div className='border-t border-white/10 pt-5'>
                            <div className='flex flex-wrap gap-2.5'>
                              {industry.keyAreas.map((tag) => (
                                <span
                                  key={tag}
                                  className='rounded-xl bg-white/5 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white/50 ring-1 ring-inset ring-white/10'
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
