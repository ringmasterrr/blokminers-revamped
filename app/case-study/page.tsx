import { CaseStudiesSection } from '@/components/CaseStudies/CaseStudiesSection'
import { Page } from '@/components/shared/Page'
import { CaseStudyService } from '@/services/caseStudies'

const cases = new CaseStudyService()

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: {
    page?: string
    search?: string
  }
}) {
  const data = await cases.getAllCaseStudies({
    keyword: searchParams.search,
    page: searchParams.page,
  })
  console.log(data)
  return (
    <Page className='justify-between px-4 2md:px-8'>
      <CaseStudiesSection
        cases={data.data}
        page={data.page}
        search={searchParams.search}
        totalPages = {data.totalPages}
      />
    </Page>
  )
}
