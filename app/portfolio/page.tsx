import { Portfolio } from '@/components/Portfolio/Portfolio'
import { Page } from '@/components/shared/Page'
import { PortfolioService } from '@/services/portfolio'
const portfolio = new PortfolioService()

export default async function CaseStudiesHome() {
  const portfolioData = await portfolio.getAllPortfolios()
  console.log(portfolioData)
  return (
    <Page className='justify-between px-8'>
      <Portfolio data={portfolioData} />
    </Page>
  )
}
