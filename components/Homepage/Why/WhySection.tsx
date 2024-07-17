import Heading from '@/components/shared/Heading/Heading'
import { BlockContent } from './BlockContent'

export default function WhySection() {
  return (
    <div className='mx-auto max-w-8xl bg-theme-dark py-28'>
      <Heading
        white
        heading={'Why BlokMiners'}
        message={
          'Opt for BlokMiners for pioneering Blockchain solutions driving transparent and secure digital transformations.'
        }
      />
      <BlockContent />
    </div>
  )
}
