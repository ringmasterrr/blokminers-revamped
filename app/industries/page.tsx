import Cta from '@/components/Homepage/CTA/Cta'
import Education from '@/components/Industries/Education'
import Finance from '@/components/Industries/Finance'
import Healthcare from '@/components/Industries/Healthcare'
import IndustriesSection from '@/components/Industries/IndustriesSection'
import Insurance from '@/components/Industries/Insurance'
import Manufacturing from '@/components/Industries/Manufacturing'
import RealEstate from '@/components/Industries/RealEstate'
import Retail from '@/components/Industries/Retail'
import Tab from '@/components/Industries/Tab'
import Travel from '@/components/Industries/Travel'
import CardList from '@/components/Portfolio/PortfolioCards'
import { PortfolioService } from '@/services/portfolio'
const portfolio = new PortfolioService()

export default async function IndustriesPage({
  searchParams,
}: {
  searchParams: {
    tab?: string
  }
}) {
  const tab = searchParams.tab
  const portfolioData = await portfolio.getAllPortfolios(searchParams.tab ?? '')

  return (
    <div className='mx-auto max-w-8xl'>
      <IndustriesSection tab={searchParams.tab} />
      <Tab tab={tab ?? 'finance'} />
      {tab === undefined && <Finance />}
      {tab === 'finance' && <Finance />}
      {tab === 'healthcare' && <Healthcare />}
      {tab === 'insurance' && <Insurance />}
      {tab === 'education' && <Education />}
      {tab === 'realestate' && <RealEstate />}
      {tab === 'travel' && <Travel />}
      {tab === 'retail' && <Retail />}
      {tab === 'manufacturing' && <Manufacturing />}

      <CardList data={portfolioData} />
      <Cta/>
    </div>
  )
}
