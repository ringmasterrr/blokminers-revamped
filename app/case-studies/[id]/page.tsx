import CaseStudyDetail from '@/components/CaseStudies/CaseStudyDetails'
import { Page } from '@/components/shared/Page'

const CaseStudyPage = ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  return (
    <Page>
      <CaseStudyDetail id={params.id} />
    </Page>
  )
}

export default CaseStudyPage
