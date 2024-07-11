import { HoverEffect } from './cards'

export function BlockContent() {
  return (
    <div className='mx-auto my-12'>
      <HoverEffect items={items} />
    </div>
  )
}

export const items = [
  {
    title: 'Tech Advantage',
    description:
      "We leverage expertise in blockchain and AI/ML for clients' competitive edge in today's dynamic market.",
    image: '/Why/tech.svg',
  },
  {
    title: 'Innovative Deliveries',
    description:
      'BlokMiners consistently delivers innovative solutions with tangible, measurable results.',
    image: '/Why/deliveries.svg',
  },
  {
    title: 'Customized Offerings',
    description:
      "We offer tailored solutions, understanding each business's unique objectives.",
    image: '/Why/offerings.svg',
  },
  {
    title: 'Security Priority',
    description:
      'We provide secure blockchain implementations and cybersecurity measures to safeguard digital assets.',
    image: '/Why/security.svg',
  },
]
