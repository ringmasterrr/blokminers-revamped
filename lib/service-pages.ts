import type { LucideIcon } from 'lucide-react'
import {
  Blocks,
  Bot,
  BrainCircuit,
  DatabaseZap,
  FileSearch,
  GitBranchPlus,
  ShieldCheck,
  Waypoints,
} from 'lucide-react'

export type ServiceCategory = 'all' | 'ai' | 'blockchain'

export type HomepageService = {
  slug: string
  category: Exclude<ServiceCategory, 'all'>
  badge: 'AI' | 'BC'
  name: string
  shortTitle: string
  tagline: string
  description: string
  tech: string[]
  tab: string
  icon: LucideIcon
  seoTitle: string
  seoDescription: string
}

export const homepageServices: HomepageService[] = [
  {
    slug: 'ai-agent-development',
    category: 'ai',
    badge: 'AI',
    name: 'AI Agent Development',
    shortTitle: 'AI Agent Development',
    tagline: 'Autonomous agents that work 24/7 so your team does not have to',
    description:
      'We build custom AI agents for customer support, lead qualification, data extraction, internal operations, and more. Agents are integrated with your existing tools such as CRM, email, Slack, and databases, then tested against real business scenarios before deployment. The result is repetitive work that used to take your team hours now completing itself.',
    tech: [
      'LangChain',
      'CrewAI',
      'AutoGen',
      'OpenAI API',
      'Claude API',
      'Python',
      'FastAPI',
    ],
    tab: 'aiml',
    icon: Bot,
    seoTitle: 'AI Agent Development Company | BlokMiners',
    seoDescription:
      'BlokMiners builds custom AI agents for support, lead qualification, operations, and data workflows. Hire an AI agent development company focused on production ROI.',
  },
  {
    slug: 'workflow-automation',
    category: 'ai',
    badge: 'AI',
    name: 'Workflow Automation',
    shortTitle: 'Workflow Automation',
    tagline:
      'Map, automate, and scale your business processes without adding headcount',
    description:
      'We audit your current operations, identify the highest-ROI automation opportunities, and deploy solutions using the right tool for the job, whether that is n8n, Make, Zapier, or a custom integration pipeline. We prioritize quick wins first, so most clients see a working automation in the first sprint with measurable time savings before the full project is complete.',
    tech: [
      'n8n',
      'Make',
      'Zapier',
      'Custom APIs',
      'REST',
      'Webhooks',
      'Python',
    ],
    tab: 'dataanalytics',
    icon: GitBranchPlus,
    seoTitle: 'Workflow Automation Services | BlokMiners',
    seoDescription:
      'Automate business processes with n8n, Make, Zapier, and custom API pipelines. BlokMiners delivers workflow automation services that reduce manual work fast.',
  },
  {
    slug: 'llm-chatbot-development',
    category: 'ai',
    badge: 'AI',
    name: 'LLM & Chatbot Development',
    shortTitle: 'LLM & Chatbot Development',
    tagline: 'AI that knows your business, your data, and your customers',
    description:
      'We build RAG-based AI assistants trained on your documents, knowledge base, CRM, and product data. These are not generic chatbots. They understand your specific products, policies, pricing, and history. They can be deployed for customer support, internal help desks, sales qualification, and employee onboarding while reducing support ticket volume in typical deployments.',
    tech: [
      'RAG',
      'Pinecone',
      'Weaviate',
      'LlamaIndex',
      'OpenAI',
      'Claude',
      'Vector DBs',
    ],
    tab: 'aiml',
    icon: BrainCircuit,
    seoTitle: 'LLM Chatbot Development Service | BlokMiners',
    seoDescription:
      'Build custom RAG assistants and enterprise chatbots trained on your business data. BlokMiners provides LLM and chatbot development services for real-world deployment.',
  },
  {
    slug: 'ai-strategy-consulting',
    category: 'ai',
    badge: 'AI',
    name: 'AI Strategy & Consulting',
    shortTitle: 'AI Strategy & Consulting',
    tagline: 'Know exactly where AI will save you money before spending a cent',
    description:
      'This focused consulting engagement is for businesses that know they need AI but are not sure where to start. We audit operations across departments, rank automation opportunities by ROI and effort, recommend the right tools and architecture, and produce a clear roadmap so you leave with a 90-day AI adoption plan tailored to your business.',
    tech: [
      'Process Mapping',
      'ROI Analysis',
      'Tool Selection',
      'Vendor Evaluation',
      'Change Management',
    ],
    tab: 'consulting',
    icon: FileSearch,
    seoTitle: 'AI Strategy Consulting Services | BlokMiners',
    seoDescription:
      'Get a 90-day AI adoption roadmap with ROI analysis, tool selection, and process mapping. BlokMiners provides AI strategy consulting for practical business outcomes.',
  },
  {
    slug: 'blockchain-development',
    category: 'blockchain',
    badge: 'BC',
    name: 'Blockchain Development',
    shortTitle: 'Blockchain Development',
    tagline:
      'Decentralized solutions engineered for enterprise scale and production reliability',
    description:
      'We design and build custom blockchain architectures from the protocol level up. Whether you need a private enterprise chain, a public DeFi protocol, or a cross-chain bridge, we choose the right architecture for your transaction volume, cost requirements, and compliance needs. Every system is built for production rather than demo theatre.',
    tech: [
      'Ethereum',
      'Solana',
      'Polygon',
      'Hyperledger',
      'Avalanche',
      'Rust',
      'Solidity',
      'Go',
    ],
    tab: 'blockchaindevelopment',
    icon: Blocks,
    seoTitle: 'Blockchain Development Company | BlokMiners',
    seoDescription:
      'Hire a blockchain development company for enterprise chains, DeFi protocols, and production-grade decentralized systems built for scale, reliability, and compliance.',
  },
  {
    slug: 'smart-contracts-defi',
    category: 'blockchain',
    badge: 'BC',
    name: 'Smart Contracts & DeFi',
    shortTitle: 'Smart Contracts & DeFi',
    tagline:
      'Trustless business logic that executes without intermediaries and is verified before it goes live',
    description:
      'We write, test, and formally audit smart contracts for DeFi protocols, token launches, automated payment systems, DAOs, and escrow mechanisms. Every contract goes through a structured security review before deployment because when your code handles real value, track record matters.',
    tech: [
      'Solidity',
      'Rust',
      'Hardhat',
      'Foundry',
      'Slither',
      'DeFi',
      'DAO',
      'ERC standards',
    ],
    tab: 'blockchain',
    icon: ShieldCheck,
    seoTitle: 'Smart Contract Audit Service India | BlokMiners',
    seoDescription:
      'BlokMiners delivers smart contract development, DeFi engineering, and structured security reviews. Use our smart contract audit service in India before you launch.',
  },
  {
    slug: 'web3-nft-platforms',
    category: 'blockchain',
    badge: 'BC',
    name: 'Web3 & NFT Platforms',
    shortTitle: 'Web3 & NFT Platforms',
    tagline:
      'Full-stack decentralized applications built for real users and not just crypto natives',
    description:
      'We develop NFT marketplaces, Web3 games, tokenized asset platforms, and dApps with polished UI and UX that regular users can navigate. Wallet integration, IPFS storage, on-chain and off-chain data management, and gas optimization are built in so the product works for mainstream adoption.',
    tech: [
      'NFT',
      'dApp',
      'WalletConnect',
      'IPFS',
      'Next.js',
      'wagmi',
      'ethers.js',
      'React',
    ],
    tab: 'web3',
    icon: Waypoints,
    seoTitle: 'Web3 Development Services | BlokMiners',
    seoDescription:
      'Build NFT marketplaces, dApps, and Web3 platforms with production-ready UX, wallet integration, and gas-optimized architecture through BlokMiners.',
  },
  {
    slug: 'web3-consulting-smart-contract-auditing',
    category: 'blockchain',
    badge: 'BC',
    name: 'Web3 Consulting & Smart Contract Auditing',
    shortTitle: 'Web3 Consulting & Smart Contract Auditing',
    tagline:
      'Navigate the complexities and catch vulnerabilities before attackers do',
    description:
      'From protocol architecture reviews to full security audits, we help teams launch with confidence. Our consulting engagements cover tokenomics design, governance review, compliance framing, and technical validation. Our audit process covers reentrancy, overflow risks, access control flaws, and broader Web3 security categories before attackers can exploit them.',
    tech: [
      'Security Audit',
      'Tokenomics',
      'Governance Design',
      'Protocol Architecture',
      'Compliance',
    ],
    tab: 'consulting',
    icon: DatabaseZap,
    seoTitle: 'Web3 Consulting and Smart Contract Auditing | BlokMiners',
    seoDescription:
      'Get Web3 consulting, protocol reviews, tokenomics guidance, and smart contract auditing from BlokMiners before your decentralized product goes live.',
  },
]

export const homepageServiceFilters: {
  label: string
  value: ServiceCategory
}[] = [
  { label: 'All', value: 'all' },
  { label: 'AI & Automation', value: 'ai' },
  { label: 'Blockchain & Web3', value: 'blockchain' },
]

export function getHomepageServiceBySlug(slug: string) {
  return homepageServices.find((service) => service.slug === slug)
}
