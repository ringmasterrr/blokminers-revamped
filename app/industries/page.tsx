import IndustriesSection from '@/components/Industries/IndustriesSection'
import { Page } from '@/components/shared/Page'

export default function IndustriesPage({
  searchParams,
}: {
  searchParams: {
    tab: string
  }
}) {
  console.log(searchParams.tab ?? 'Finance')
  return (
    <Page className='justify-between px-8'>
      <IndustriesSection tab={searchParams.tab} />
    </Page>
  )
}
