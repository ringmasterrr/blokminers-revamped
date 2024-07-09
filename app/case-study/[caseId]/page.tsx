import CaseStudyDetail from '@/components/CaseStudies/CaseStudyDetails'
import { Page } from '@/components/shared/Page'
import { CaseStudyService } from '@/services/caseStudies'

const cases = new CaseStudyService()

export default async function CaseStudy({
  params,
}: {
  params: {
    caseId: string
  }
}) {
  const data = await cases.getCaseStudyDetails(params.caseId)
  console.log(data.data)
  return (
    <Page>
      <CaseStudyDetail caseStudy={data.data} />
    </Page>
  )
}
