import ServicesSection from '@/components/Services/ServicesSection'
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
  const portfolioData = await portfolio.getAllPortfolios(searchParams.tab ?? '')
  console.log(portfolioData)
  return (
    
    <div>
      <ServicesSection tab={searchParams.tab}/>
      <CardList  data={portfolioData} />
    </div>
  )
}

export default page
