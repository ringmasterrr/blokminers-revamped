import Heading from '@/components/shared/Heading/Heading'
import { BlockContent } from './BlockContent'

export default function WhySection() {
  return (
    <div className='z-[10000000] my-24'>
      <Heading
        heading={'Why BlokMiners'}
        message={
          'Opt for BlokMiners for pioneering blockchain solutions driving transparent and secure digital transformations.'
        }
      />
      <BlockContent />
    </div>
  )
}
