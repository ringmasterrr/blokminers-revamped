import ServicesSection from '@/components/Services/ServicesSection'
import { Page } from '@/components/shared/Page'

function page({
  searchParams,
}: {
  searchParams: {
    tab?: string
  }
}) {
  return (
    <div>
      {/* <Page> */}
      <ServicesSection tab={searchParams.tab} />
      {/* </Page> */}
    </div>
  )
}

export default page
