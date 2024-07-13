import ServicesSection from '@/components/Services/ServicesSection'
import { Page } from '@/components/shared/Page'
import { PortfolioService } from '@/services/portfolio'
import CardList from '@/components/Portfolio/PortfolioCards'

const portfolio = new PortfolioService()

async function page({
  searchParams,
}: {
  searchParams: {
    tab?: string
  }
}) {
  const portfolioData = await portfolio.getAllPortfolios()

  return (
    <div>
      {/* <Page> */}
      <ServicesSection tab={searchParams.tab} />
      {/* </Page> */}
      <CardList data={portfolioData} />
    </div>
  )
}

export default page
