import IndustriesSection from '@/components/Industries/IndustriesSection'
import { Page } from '@/components/shared/Page'

export default function IndustriesPage({
  searchParams,
}: {
  searchParams: {
    tab?: string
    main?: string
  }
}) {
  console.log(searchParams.tab ?? 'Finance')
  console.log(searchParams.main)

  return (
    <Page className='justify-between px-8'>
      <IndustriesSection tab={searchParams.tab} />
    </Page>
  )
}
