import { HoverEffect } from '@/components/ui/card-hover-effect'

export function BlockContent() {
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <HoverEffect items={items} />
    </div>
  )
}

export const items = [
  {
    title: 'Tech Advantage',
    description:
      "We leverage expertise in blockchain and AI/ML for clients' competitive edge in today's dynamic market.",
    image: '/Images/Why/icon1.svg',
  },
  {
    title: 'Innovative Deliveries',
    description:
      'BlokMiners consistently delivers innovative solutions with tangible, measurable results.',
    image: '/Images/Why/icon2.svg',
  },
  {
    title: 'Customized Offerings',
    description:
      "We offer tailored solutions, understanding each business's unique objectives.",
    image: '/Images/Why/icon3.svg',
  },
  {
    title: 'Security Priority',
    description:
      'We provide secure blockchain implementations and cybersecurity measures to safeguard digital assets.',
    image: '/Images/Why/icon4.svg',
  },
]
