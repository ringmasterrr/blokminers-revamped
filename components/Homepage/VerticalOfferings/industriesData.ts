import {
  Building2,
  HeartPulse,
  Landmark,
  Scale,
  ShoppingBag,
  Truck,
  Factory,
  HardHat,
  Zap,
  Shield,
  Package,
  GraduationCap,
  Sprout,
  Hotel,
  Clapperboard,
  Users,
  Building,
  Pill,
  Wifi,
} from 'lucide-react'

export const industries = [
  // Existing 6 (unchanged)
  {
    title: 'Healthcare & MedTech',
    painPoint:
      'Manual admin is consuming thousands of clinical hours that should be spent on patients',
    ai: 'Automate patient intake, appointment scheduling, insurance claims processing, and clinical documentation. AI agents that handle the administrative layer so clinicians focus on care. Typical result: 25 to 40% reduction in admin time, faster claims resolution, and one or more admin roles redeployed to patient-facing work.',
    blockchain:
      'Secure EHR sharing between providers using permissioned blockchain. Drug supply chain verification to prevent counterfeit medications. Patient consent management on-chain with auditable, immutable, HIPAA-aligned controls. Reduces data breach risk and improves inter-system interoperability.',
    keyAreas: [
      'HIPAA',
      'HL7 FHIR',
      'EHR Integration',
      'Claims Automation',
      'Drug Traceability',
    ],
    link: '/industries?tab=healthcare',
    icon: HeartPulse,
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Finance & FinTech',
    painPoint:
      'Compliance overhead, fraud losses, and slow settlement are compressing margins across the sector',
    ai: 'AI-powered fraud detection with real-time scoring, regulatory reporting automation (AML, KYC), credit risk models, and AI financial advisors. Automates the compliance documentation that currently takes your team weeks to produce manually.',
    blockchain:
      'DeFi protocols with smart contract-enforced rules, cross-border payment infrastructure using stablecoins, on-chain settlement for securities and derivatives, and immutable audit trails for regulatory compliance. Reduces settlement time from days to seconds and counterparty risk to near zero.',
    keyAreas: [
      'AML',
      'KYC',
      'DeFi',
      'Stablecoins',
      'Regulatory Reporting',
      'Smart Settlement',
    ],
    link: '/industries?tab=finance',
    icon: Landmark,
    image:
      'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Supply Chain & Logistics',
    painPoint:
      'Lack of real-time end-to-end visibility is costing supply chains 8 to 10% of annual revenue',
    ai: 'Demand forecasting agents that update in real time, route optimization that factors in live conditions, warehouse automation with AI-driven pick-and-pack, and supplier risk analysis that flags issues before they become disruptions.',
    blockchain:
      'End-to-end provenance tracking where every product, component, or shipment is recorded on-chain from source to customer. Automated purchase order settlement via smart contracts. Counterfeit prevention through tokenized certificates of authenticity.',
    keyAreas: [
      'IoT Integration',
      'Provenance Tracking',
      'Smart PO Settlement',
      'Demand Forecasting',
    ],
    link: '/industries?tab=travel',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Retail & eCommerce',
    painPoint:
      'Generic customer experiences and supply uncertainty are killing conversion rates and customer lifetime value',
    ai: 'Personalization engines that adjust product recommendations, pricing, and content in real time. Inventory forecasting that prevents stockouts and overstock simultaneously. AI customer service agents handling 70% of queries without human involvement.',
    blockchain:
      'Loyalty token programs where points are owned by customers on-chain. Product authenticity verification via NFT certificates for luxury goods. Transparent sourcing records that let ethical consumers verify supply chain claims.',
    keyAreas: [
      'Personalization',
      'Inventory AI',
      'Loyalty Tokens',
      'Authenticity',
      'Dynamic Pricing',
    ],
    link: '/industries?tab=retail',
    icon: ShoppingBag,
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Real Estate & PropTech',
    painPoint:
      'Property transactions are slow, opaque, and paper-heavy. AI and blockchain solve both sides of that problem.',
    ai: 'Automated lease abstraction that summarizes long documents in minutes. Tenant screening agents that check multiple data sources simultaneously. AI market analysis tools for acquisition decisions. Document pipelines that cut transaction admin time by 60 to 80%.',
    blockchain:
      'Tokenized property ownership that enables fractional investment and faster transfer. Smart contract leases with automated rent collection, deposit handling, and maintenance triggers. Immutable title records that reduce title fraud risk.',
    keyAreas: [
      'Tokenized Property',
      'Smart Leases',
      'Lease Abstraction',
      'Tenant Screening',
      'Title Records',
    ],
    link: '/industries?tab=realestate',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Legal & Compliance',
    painPoint:
      'Legal teams spend large portions of billable time on tasks that AI can perform in minutes',
    ai: 'Contract review and risk flagging instantly. Legal research automation across case law and statutes. Compliance monitoring that tracks regulatory changes automatically. Document drafting assistants trained on style guides.',
    blockchain:
      'Immutable audit trails for evidence management with timestamped and tamper-resistant records. Smart contract-enforced compliance reporting. Automated escrow for settlements. On-chain notarization for documents requiring permanent proof.',
    keyAreas: [
      'Contract AI',
      'Compliance Monitoring',
      'Legal Research',
      'Smart Escrow',
      'On-chain Notarization',
    ],
    link: '/industries?tab=finance',
    icon: Scale,
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80',
  },

  // New verticals (13) - trimmed and dashes removed
  {
    title: 'Manufacturing',
    painPoint:
      'Unplanned downtime, quality escapes, and opaque supplier networks cost manufacturers 5 to 10% of annual revenue.',
    ai: 'Predictive maintenance AI monitors equipment sensor data in real time, flagging failure risk 72+ hours ahead and cutting unplanned downtime by up to 45%. Computer vision quality inspection detects defects at line speed. AI driven scheduling optimizes throughput, energy cost, and maintenance simultaneously.',
    blockchain:
      'End to end supply chain provenance records every material and component on chain from supplier to delivery. Smart contract supplier payments release automatically upon receipt and quality check. Tokenized authenticity certificates prevent counterfeit parts and ISO compliance lives on an immutable ledger.',
    keyAreas: [
      'Predictive Maintenance',
      'Computer Vision QC',
      'Production Scheduling AI',
      'Procurement AI',
      'Parts Provenance',
      'ISO Compliance Ledger',
      'Smart PO Automation',
    ],
    link: '/industries?tab=manufacturing',
    icon: Factory,
    image:
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Construction',
    painPoint:
      'Cost overruns, payment disputes, and fragmented documentation erode margins on every project.',
    ai: 'AI project assistants monitor schedule adherence and surface delay risks before deadlines slip. Document AI processes thousands of drawings, RFIs, and change orders to extract key data and flag conflicts. Subcontractor communication automation collects daily progress and matches invoices against completion evidence.',
    blockchain:
      'Smart contract milestone payments release automatically when milestones are verified, eliminating disputes between owners and subs. Material provenance tracks every batch on chain with immutable quality certs. Timestamped project records and tokenized performance bonds reduce dispute time and locked capital.',
    keyAreas: [
      'Milestone Payment Automation',
      'RFI Processing AI',
      'Schedule Risk Monitoring',
      'Material Provenance',
      'Dispute Records',
      'BIM Analysis',
      'Subcontractor Coordination',
    ],
    link: '/industries?tab=construction',
    icon: HardHat,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Energy & Renewables',
    painPoint:
      'Unpredictable renewable output and fragmented carbon markets slow the energy transition and compress utility margins.',
    ai: 'AI demand forecasting integrates weather, consumption, and IoT signals to achieve 92%+ accuracy at 24 to 72 hour horizons. Predictive maintenance for wind, solar, and substation assets cuts downtime. AI procurement agents trade spot markets and hedge contracts using real time price signals.',
    blockchain:
      'Tokenized Renewable Energy Certificates and carbon credits trade peer to peer without brokers or double counting. Decentralized energy trading lets prosumers sell excess power directly via smart contracts. Immutable ESG and carbon offset trails ensure audit ready sustainability reporting.',
    keyAreas: [
      'Grid Demand Forecasting',
      'Asset Predictive Maintenance',
      'REC Tokenisation',
      'P2P Energy Trading',
      'Carbon Credit Blockchain',
      'ESG Reporting',
      'Spot Market AI',
    ],
    link: '/industries?tab=energy',
    icon: Zap,
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Insurance',
    painPoint:
      'Manual claims processing, rising fraud, and underserved markets hold insurers back while disruptors gain ground.',
    ai: 'AI claims processing handles first notice of loss, document extraction, damage assessment, and payment authorization, cutting cycle times from weeks to hours. Real time fraud detection scores claims against hundreds of risk signals. AI underwriting assesses unstructured data for more accurate pricing and new products.',
    blockchain:
      'Parametric insurance smart contracts trigger automatically from on chain data like weather or flight delays, eliminating claims processing entirely. Reinsurance settlement on chain removes reconciliation delays. Immutable policy history prevents cross insurer fraud and decentralized pools offer transparent governance.',
    keyAreas: [
      'Claims Automation',
      'Fraud Detection AI',
      'Parametric Insurance',
      'Underwriting AI',
      'Reinsurance Settlement',
      'IoT-Triggered Claims',
      'Decentralised Insurance Pools',
    ],
    link: '/industries?tab=insurance',
    icon: Shield,
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Freight & Logistics',
    painPoint:
      'Paper documentation, opaque custody chains, and reactive routing cost freight operators 10 to 15% in inefficiency.',
    ai: 'AI route optimization integrates live traffic, weather, port congestion, and fuel costs to cut transit time and spend. Cargo booking and load optimization maximize container utilization. Automated customs documentation and predictive port congestion modeling enable smarter scheduling and procurement.',
    blockchain:
      'Digital bill of lading on blockchain is immutable and accessible to all parties instantly, eliminating the 5 day postal delay. Smart contract freight settlement releases payment on proof of delivery, removing 30 to 60 day cycles. On chain custody records include timestamp and GPS for full transparency.',
    keyAreas: [
      'Route Optimisation',
      'Digital Bill of Lading',
      'Cargo Tracking',
      'Smart Contract Settlement',
      'Customs Automation',
      'Port Congestion AI',
      'Letters of Credit',
    ],
    link: '/industries?tab=freight',
    icon: Package,
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Education',
    painPoint:
      'Credential fraud, generic learning, and admin overhead drain resources meant for teaching and outcomes.',
    ai: 'AI tutoring assistants adapt lesson difficulty in real time, boosting digital completion rates by over 40%. Administrative automation handles enrollment, timetables, fees, and parent communication. AI plagiarism monitoring, personalized learning paths, and automated exam generation free educators to teach.',
    blockchain:
      'Tamper proof digital credentials on blockchain let employers verify degrees instantly without contacting institutions. NFT micro credentials support corporate L&D and online courses. Student controlled data sovereignty puts learner records on a permissioned chain shared only with consent.',
    keyAreas: [
      'AI Tutoring',
      'Admin Automation',
      'Blockchain Credentials',
      'Micro-Credential NFTs',
      'Plagiarism Detection',
      'Learning Analytics',
      'Student Data Sovereignty',
    ],
    link: '/industries?tab=education',
    icon: GraduationCap,
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Agriculture',
    painPoint:
      'Unpredictable yields, food fraud, and inefficient farm to consumer chains leave money on the table.',
    ai: 'AI crop yield prediction uses satellite imagery, weather, and soil sensors to cut input costs 15 to 25%. Drone and computer vision disease detection catches issues early. Irrigation automation responds to soil moisture and forecasts. Market price prediction helps farmers time sales for optimal returns.',
    blockchain:
      'Farm to fork traceability tracks every produce batch on chain, scannable by consumers for full provenance. Contamination source farms are identified in under 2 hours versus the industry average of 11 days. Smart contract ag financing and tokenized commodity trading reduce reliance on traditional exchanges.',
    keyAreas: [
      'Crop Yield AI',
      'Disease Detection CV',
      'Irrigation Automation',
      'Farm-to-Fork Traceability',
      'Commodity Tokenisation',
      'Smart Agri Finance',
      'Price Prediction',
    ],
    link: '/industries?tab=agriculture',
    icon: Sprout,
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Hospitality & Travel',
    painPoint:
      'Generic guest experiences and manual operations drive churn to platforms that personalize at scale.',
    ai: 'AI concierge handles 70% of guest queries across WhatsApp, email, and chat. Dynamic revenue management adjusts room pricing in real time against demand signals and competitor rates. Intelligent housekeeping scheduling prioritizes by check in time and guest priority. Review automation generates personalized responses.',
    blockchain:
      'Interoperable blockchain loyalty tokens let guests earn and spend points across any partner property, not locked to one brand. Smart contract travel packages automate fulfillment across accommodation, transport, and tours. Immutable guest reviews prevent manipulation and NFT passes offer exclusive access.',
    keyAreas: [
      'AI Concierge',
      'Dynamic Revenue Management',
      'Housekeeping Scheduling',
      'Review Automation',
      'Interoperable Loyalty Tokens',
      'Smart Package Deals',
      'NFT Access Passes',
    ],
    link: '/industries?tab=hospitality',
    icon: Hotel,
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Media & Entertainment',
    painPoint:
      'Manual royalty collection and opaque distribution leave creators and media companies undermonetized.',
    ai: 'AI content production assistants handle script analysis, social generation, captioning, translation, and repurposing across formats. Audience analytics identify which content drives long term engagement. AI rights management monitors usage across platforms and flags unlicensed use automatically.',
    blockchain:
      'On chain royalty distribution uses smart contracts to pay rights holders automatically without intermediary delays. NFT creator monetization sells limited digital content and fan passes directly to audience. Tokenized IP enables fractional catalog ownership and an immutable rights registry prevents disputes.',
    keyAreas: [
      'Royalty Smart Contracts',
      'Creator NFT Platforms',
      'Content Rights Registry',
      'AI Content Tools',
      'Audience Analytics',
      'Direct-to-Fan Monetisation',
      'IP Tokenisation',
    ],
    link: '/industries?tab=media',
    icon: Clapperboard,
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'HR & Recruitment',
    painPoint:
      'Recruiters spend 70% of time on manual tasks while top candidates talk to faster competitors.',
    ai: 'AI CV screening parses and scores every application in seconds, ranking by fit and flagging career trajectory and red flags. Interview scheduling automation finds mutual availability across calendars. Reference checks and onboarding workflows run without human coordination. Workforce analytics predict attrition risk.',
    blockchain:
      'Blockchain verified employment credentials let previous employers issue cryptographically signed work records, eliminating CV fraud and cutting reference check time to seconds. Immutable payroll records ensure compliance and smart contract employment agreements automate bonuses, vesting, and severance.',
    keyAreas: [
      'CV Screening AI',
      'Interview Scheduling',
      'Reference Automation',
      'Onboarding Workflows',
      'Attrition Prediction',
      'Blockchain Credentials',
      'Smart Employment Contracts',
    ],
    link: '/industries?tab=hr',
    icon: Users,
    image:
      'https://images.unsplash.com/photo-1521737711867-6a9f1d3b1b9c?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Government',
    painPoint:
      'Manual processing, document fraud, and opaque procurement erode public trust and waste taxpayer resources.',
    ai: 'AI citizen service agents handle permits, benefits, tax filing, and grievances via web, mobile, and voice in multiple languages. Document verification eliminates manual review of ID and certificates. Procurement analytics flag fraud signals and conflicts of interest. Predictive analytics inform urban planning.',
    blockchain:
      'Blockchain land registry provides immutable property records that eliminate title fraud. Benefit distribution via smart contracts delivers funds directly to beneficiaries without diversion. Self sovereign digital identity puts citizens in control. Transparent procurement on a public ledger makes every tender and award auditable.',
    keyAreas: [
      'Citizen Service AI',
      'Document Verification',
      'Procurement Analytics',
      'Land Registry Blockchain',
      'Benefit Distribution',
      'Digital Identity',
      'Transparent Procurement',
    ],
    link: '/industries?tab=government',
    icon: Building,
    image:
      'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Pharmaceuticals & Biotech',
    painPoint:
      'Drug counterfeiting, trial data integrity issues, and regulatory bottlenecks cost billions in recalls and delays.',
    ai: 'AI clinical trial management detects protocol deviations and adverse events while predicting patient dropout. Regulatory submission automation generates IND and NDA packages from structured trial data. Lab data pipelines eliminate manual entry between instruments and LIMS. Patent landscape analysis informs R&D strategy.',
    blockchain:
      'Drug supply chain track and trace records every batch, transfer, and temperature excursion immutably from API to patient. Serialisation compliance for DSCSA and EU FMD lives on chain. Clinical trial data integrity is guaranteed with immutable audit trails. Smart contract licensing automates IP royalty distribution.',
    keyAreas: [
      'Clinical Trial Automation',
      'Regulatory Submission AI',
      'Drug Supply Chain',
      'Serialisation Compliance',
      'Pharmacovigilance',
      'Lab Data Pipelines',
      'IP Royalty Contracts',
    ],
    link: '/industries?tab=pharma',
    icon: Pill,
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Telecom',
    painPoint:
      'High churn, network inefficiency, and slow inter operator settlement compress margins while OTT players commoditize connectivity.',
    ai: 'AI churn prediction identifies at risk subscribers 30 to 60 days ahead, enabling retention interventions with 3x higher success. Network traffic prediction optimizes capacity and reduces congestion. AI customer service resolves 70% of billing and usage queries without an agent. Automated fault detection reduces repair time.',
    blockchain:
      'Inter operator roaming settlement on blockchain automates clearing in real time, replacing slow and dispute prone batch reconciliation. Blockchain number portability tracking eliminates delays and disputes. MVNO settlement and eSIM provisioning on chain provide secure, auditable identity management.',
    keyAreas: [
      'Churn Prediction',
      'Network Optimisation AI',
      'Customer Service AI',
      'Roaming Settlement',
      'Number Portability',
      'MVNO Settlement',
      'eSIM Blockchain',
    ],
    link: '/industries?tab=telecom',
    icon: Wifi,
    image:
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1800&q=80',
  },
]
