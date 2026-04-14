import { CaseStudiesSection } from '@/components/CaseStudies/CaseStudiesSection'
import { Page } from '@/components/shared/Page'
import { CaseStudyService } from '@/services/caseStudies'

const cases = new CaseStudyService()

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: {
    search?: string
  }
}) {
  const firstPageData = await cases.getAllCaseStudies({
    keyword: searchParams.search,
    page: '1',
  })

  const allCases = [...firstPageData.data]

  if (firstPageData.totalPages > 1) {
    for (let page = 2; page <= firstPageData.totalPages; page++) {
      const pageData = await cases.getAllCaseStudies({
        keyword: searchParams.search,
        page: String(page),
      })
      allCases.push(...pageData.data)
    }
  }

  return (
    <Page className='justify-between px-4 2md:px-8'>
      <CaseStudiesSection cases={allCases} />
    </Page>
  )
}
