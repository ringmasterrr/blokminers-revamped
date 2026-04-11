import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Cta from '@/components/Homepage/CTA/Cta'
import { Page } from '@/components/shared/Page'
import { getHomepageServiceBySlug, homepageServices } from '@/lib/service-pages'

export async function generateStaticParams() {
  return homepageServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = getHomepageServiceBySlug(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found | BlokMiners',
    }
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  }
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const service = getHomepageServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.seoDescription,
    'provider': {
      '@type': 'Organization',
      'name': 'BlokMiners',
      'url': 'https://blokminers.com',
    },
    'areaServed': 'Global',
    'serviceType':
      service.category === 'ai' ? 'AI Automation' : 'Blockchain Development',
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Page className='py-10 sm:py-14'>
        <div className='max-w-5xl mx-auto'>
          <div className='rounded-3xl border border-theme-light/10 bg-white p-8 shadow-[0_24px_60px_rgba(0,40,60,0.08)] sm:p-10'>
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] ${
                service.badge === 'AI'
                  ? 'bg-blue-ribbon text-theme-dark'
                  : 'bg-dodger-blue text-theme-dark'
              }`}
            >
              {service.badge}
            </span>
            <h1 className='mt-6 text-balance text-3xl font-extrabold leading-tight text-theme-dark sm:text-4xl lg:text-5xl'>
              {service.name}
            </h1>
            <p className='mt-4 text-lg font-semibold leading-relaxed text-theme-dark'>
              {service.tagline}
            </p>
            <p className='mt-6 text-base leading-relaxed text-theme-light sm:text-lg'>
              {service.description}
            </p>

            <div className='mt-8'>
              <p className='text-sm font-bold uppercase tracking-[0.24em] text-theme-light'>
                Technology Stack
              </p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {service.tech.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-full border border-theme-light/10 bg-slate-50 px-3 py-1.5 text-sm font-medium text-theme-light'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className='mt-10 flex flex-wrap gap-4'>
              <Link
                href='/contact-us'
                className='rounded-xl bg-theme-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-theme-light'
              >
                Book Discovery Call
              </Link>
              <Link
                href={`/services?tab=${service.tab}`}
                className='rounded-xl border border-theme-light/15 bg-white px-5 py-3 text-sm font-semibold text-theme-dark transition hover:bg-blue-ribbon'
              >
                View Related Services
              </Link>
            </div>
          </div>
        </div>
      </Page>

      <Cta />
    </>
  )
}
