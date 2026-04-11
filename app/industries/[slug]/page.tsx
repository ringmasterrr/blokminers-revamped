import { redirect } from 'next/navigation'

const industrySlugToTab: Record<string, string> = {
  'finance': 'finance',
  'healthcare': 'healthcare',
  'insurance': 'insurance',
  'education': 'education',
  'real-estate': 'realestate',
  'retail': 'retail',
  'manufacturing': 'manufacturing',
  'travel-logistics': 'travel',
  'healthcare-medtech': 'healthcare',
  'finance-fintech': 'finance',
  'supply-chain-logistics': 'travel',
  'retail-ecommerce': 'retail',
  'real-estate-proptech': 'realestate',
  'legal-compliance': 'finance',
}

export default function IndustrySlugPage({
  params,
}: {
  params: { slug: string }
}) {
  const tab = industrySlugToTab[params.slug]

  if (!tab) {
    redirect('/industries')
  }

  redirect(`/industries?tab=${tab}`)
}
