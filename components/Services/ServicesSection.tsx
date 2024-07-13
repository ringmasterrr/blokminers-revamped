import Image from 'next/image'
import { ParticleComponent } from '@/lib/particles'
import ServiceTabs from './ServiceTabs'
import Blockchain from './Blockchain'
import Web3 from './Web3'
import AIML from './AIML'
import BlockchainDev from './BlockchainDev'
import Consulting from './Consulting'
import DataAnalytics from './DataAnalytics'
import CyberSecurity from './CyberSecurity'
import Cloud from './Cloud'
import { Page } from '../shared/Page'
import { serviceData } from '@/lib/services'
import Link from 'next/link'

function ServicesSection({ tab }: { tab: string | undefined }) {
  return (
    <div className='relative mx-auto max-w-8xl pb-10 pt-16 2md:pt-0'>
      <ParticleComponent />
      <Page>
        <div className='bg-grid flex min-h-[500px] flex-col items-center justify-between 2md:min-h-[700px] 2md:flex-row'>
          <div className='mb-20 flex flex-col items-center gap-6 pt-10 2md:w-[55%] 2md:items-start 2md:gap-8'>
            <div className='text-3xl font-extrabold text-theme-dark md:text-4xl 2md:text-5xl xl:text-6xl'>
              Blokminers Services
            </div>
            <div className='max-w-[520px] text-center text-lg font-medium text-theme-dark 2md:text-start'>
              This is the page about the
              <br className='hidden 2md:block' /> Services section of Blokminers
            </div>
            <Link
              className='rounded-full bg-theme-dark px-6 py-2.5 font-medium text-white'
              href={'/contact-us'}
            >
              Get Started
            </Link>
          </div>
          <div className='w-[300px] 2md:w-[45%]'>
            <Image
              src={'/Industries/industries.svg'}
              alt=''
              width={2000}
              height={2000}
              className='h-full w-full'
            />
          </div>
        </div>
      </Page>
      <ServiceTabs tab={tab ?? 'blockchain'} />
      {tab === undefined && <Blockchain data={serviceData.blockchain} />}
      {tab === 'blockchain' && <Blockchain data={serviceData.blockchain} />}
      {tab === 'web3' && <Web3 data={serviceData.web3} />}
      {tab === 'aiml' && <AIML data={serviceData.aiml} />}
      {tab === 'blockchaindevelopment' && (
        <BlockchainDev data={serviceData.blockchainDev} />
      )}
      {tab === 'consulting' && <Consulting data={serviceData.consulting} />}
      {tab === 'dataanalytics' && (
        <DataAnalytics data={serviceData.dataAnalytics} />
      )}
      {tab === 'cybersecurity' && (
        <CyberSecurity data={serviceData.cybersecurity} />
      )}
      {tab === 'cloud' && <Cloud data={serviceData.cloud} />}
    </div>
  )
}

export default ServicesSection
