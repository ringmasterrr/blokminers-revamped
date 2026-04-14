// lib/faqData.ts
export const faqsByService = {
  'AI Agent Development': [
    {
      question:
        "What's the difference between an AI agent and an automation tool like Zapier?",
      answer:
        "Zapier runs predefined workflows — if X happens, do Y. An AI agent can reason, make decisions, handle exceptions, and adapt to situations it hasn't seen before. Zapier is rules. An AI agent is judgement. Both have their place — we help you choose the right tool for each task.",
    },
    {
      question:
        'Can the agent connect to our existing software (CRM, ERP, etc.)?',
      answer:
        "Yes. Integration is our core competency. We've connected agents to Salesforce, HubSpot, Microsoft Dynamics, SAP, NetSuite, Slack, Gmail, Teams, Notion, Airtable, and dozens of custom internal systems. If it has an API, we can connect to it.",
    },
    {
      question: 'What happens if the agent makes a mistake?',
      answer:
        'Every agent is built with guardrails: confidence thresholds, human-in-the-loop checkpoints for high-stakes actions, audit logs of every decision, and rollback mechanisms. Agents escalate to humans rather than guessing when outside their confidence range.',
    },
    {
      question: 'How do you ensure our data stays private?',
      answer:
        'Agents access only the data sources you explicitly connect. We never train models on your data without written permission. All data in transit is encrypted. We can deploy models on-premise or in your own cloud environment for maximum data sovereignty.',
    },
  ],
  'Workflow Automation': [
    {
      question: 'Do we need to replace our existing software to automate?',
      answer:
        'No. Automation works on top of your existing tools. We connect what you already use rather than replacing it. If a tool has an API or webhook support (most modern SaaS tools do), we can automate around it.',
    },
    {
      question: 'What if a workflow changes after you build the automation?',
      answer:
        'We document every automation with a maintenance guide and build them to be editable by your team without coding. For n8n and Make automations, changes are visual. For custom pipelines, we provide full code comments and handover sessions.',
    },
    {
      question: 'How do you prioritise which workflows to automate first?',
      answer:
        'We rank by: (1) time cost per week, (2) error rate when done manually, (3) implementation complexity. The sweet spot is high time cost + high error rate + low complexity — these deliver the fastest, most visible ROI.',
    },
    {
      question: 'Can you connect automation to our custom internal database?',
      answer:
        "Yes. We build custom connectors for databases, legacy systems, and internal APIs that don't have ready-made integrations. PostgreSQL, MySQL, MongoDB, custom REST APIs — we've connected them all.",
    },
  ],
  'LLM & Chatbot Development': [
    {
      question:
        'How do you prevent the AI from giving wrong or harmful answers?',
      answer:
        'We implement retrieval-grounding (the AI can only answer from your approved knowledge base), confidence thresholds (low-confidence responses escalate to humans), output filtering, and regular accuracy auditing. We set benchmarks and measure against them.',
    },
    {
      question: 'Can the chatbot handle multiple languages?',
      answer:
        'Yes. Modern LLMs handle multilingual queries natively. For businesses with specific language requirements, we configure the system language, train on translated documentation, and test accuracy per language.',
    },
    {
      question: "What happens when the chatbot doesn't know the answer?",
      answer:
        "It says so, clearly — and escalates to a human agent with the full conversation context. We never configure AI to hallucinate an answer. A graceful 'I don't know, let me connect you to the right person' is always better than a plausible wrong answer.",
    },
    {
      question:
        'How do you keep the chatbot updated as our products or policies change?',
      answer:
        "We build the knowledge pipeline to be updatable — adding new documents, updating existing ones, and re-indexing automatically when your knowledge base changes. You don't need to retrain a model every time you update a policy.",
    },
  ],
  'AI Strategy & Consulting': [
    {
      question:
        "What's the difference between this and a generic AI framework we could download?",
      answer:
        'We audit your specific operations, your actual data sources, your real team structure. We model ROI against your actual costs, not industry averages. The output is a plan for your business — not a template with your logo on it.',
    },
    {
      question:
        'We already have an IT team. Why do we need external consulting?',
      answer:
        "Internal IT teams know the infrastructure. We know AI deployment patterns, vendor pitfalls, and what ROI actually looks like after implementation. We've seen what fails — and why. That pattern recognition is what you're paying for.",
    },
    {
      question: 'Do we have to use BlokMiners to implement the roadmap?',
      answer:
        "No. The roadmap is yours. Some clients implement it entirely in-house. Some use a mix of vendors. Most choose to continue with us because we already understand their systems — but that's a choice, not an obligation.",
    },
    {
      question: "What if AI isn't the right solution for our business?",
      answer:
        "We'll tell you. We've walked away from projects where the ROI didn't justify the investment. That honesty is why our clients trust us. If the answer is 'automate with simple tools before AI,' that's what the roadmap will say.",
    },
  ],
  'Blockchain Development': [
    {
      question: 'Which blockchain should I build on?',
      answer:
        "It depends on four factors: transaction volume, cost per transaction, your compliance requirements, and your target users. We help you make this decision in the architecture phase — it's one of the most important choices in your project.",
    },
    {
      question: 'Do you only build on public blockchains?',
      answer:
        'No. We build on public chains (Ethereum, Solana, Polygon), private permissioned networks (Hyperledger Fabric), hybrid architectures, and enterprise platforms. The choice depends on whether you need public verifiability or private access control.',
    },
    {
      question:
        "What happens if there's a bug in the smart contract after deployment?",
      answer:
        'Immutability is a feature — but we build upgrade patterns (proxy contracts, diamond pattern) into systems that require future modification. For truly immutable systems, exhaustive testing and formal verification before deployment is the answer.',
    },
    {
      question:
        "Can you build on a blockchain we specify, even if it's not on your list?",
      answer:
        "Yes. If there's a chain your business or investors require, we assess it and build to it. Our engineers have built on more than 12 different chains and can onboard to new EVM-compatible chains within days.",
    },
  ],
  'Smart Contracts & DeFi': [
    {
      question: 'What vulnerabilities do you check for in the audit?',
      answer:
        'Reentrancy attacks, integer overflow/underflow, access control flaws, oracle manipulation, flash loan attack vectors, front-running exposure, gas griefing, and all OWASP Web3 Top 10 categories. We document every finding with severity rating and remediation.',
    },
    {
      question:
        "Do we need an audit if we're using OpenZeppelin's standard contracts?",
      answer:
        "Using OpenZeppelin's audited base contracts significantly reduces risk — but your custom business logic on top of them still needs to be audited. The bugs are almost always in the custom logic, not the base contracts.",
    },
    {
      question: 'Can you audit a contract we wrote or that another team wrote?',
      answer:
        'Yes. We accept third-party audit engagements. Provide us with the repository, the specification documents, and any existing test suites. We will return a full written audit report within 1–2 weeks depending on codebase size.',
    },
    {
      question: 'What is formal verification and does our project need it?',
      answer:
        "Formal verification mathematically proves that a contract's behaviour matches its specification — beyond what tests can cover. We recommend it for contracts handling $1M+ in value or for core DeFi primitives where a single edge case could drain the protocol.",
    },
  ],
  'Web3 & NFT Platforms': [
    {
      question: "Can you build for users who don't have a crypto wallet yet?",
      answer:
        "Yes. We implement social login onboarding (email → embedded wallet), gasless transactions via account abstraction, and fiat payment on-ramps using providers like Transak. Users don't need prior Web3 knowledge to get started.",
    },
    {
      question: 'How do you handle gas fees for users?',
      answer:
        'We implement gas estimation and human-readable cost displays, gas fee sponsorship for specific actions (ERC-4337 account abstraction), and Layer 2 deployment to minimise costs. For many operations, we can make transactions gasless for the end user.',
    },
    {
      question: 'What storage solution do you use for NFT metadata and media?',
      answer:
        'IPFS with Pinata for decentralised storage that survives even if our servers go down. For high-traffic collections, we add CDN caching in front of IPFS gateways. For enterprise platforms requiring content control, we use Arweave for permanent storage.',
    },
    {
      question:
        'Can you integrate our existing Web2 backend with a Web3 frontend?',
      answer:
        'Yes. Hybrid Web2/Web3 architectures are common and often correct. Your existing authentication, database, and business logic can remain in Web2 systems while blockchain handles what blockchain does best: ownership, payments, and trustless verification.',
    },
  ],
  'Web3 Consulting & Smart Contract Auditing': [
    {
      question: "What's included in the audit report?",
      answer:
        'Executive summary, scope of audit, methodology, full list of findings with severity rating (Critical, High, Medium, Low, Informational), detailed description of each finding, proof-of-concept exploit for critical/high findings, specific remediation guidance, and a post-fix verification section.',
    },
    {
      question: 'What if you find a critical vulnerability?',
      answer:
        'We notify you immediately — not in the final report. Critical findings are communicated within 24 hours of discovery so you can pause any pending launch or public announcement while we work on remediation together.',
    },
    {
      question: 'Can you audit a contract written in Rust (Solana, Near)?',
      answer:
        'Yes. Our team includes engineers with Rust and Anchor framework experience. Solana program audits are available — contact us with your codebase size for a specific quote.',
    },
    {
      question: 'Do you publish audit reports publicly?',
      answer:
        "That's your decision. We deliver the audit report to you. Whether to publish it, publish a redacted version, or keep it private is entirely your choice. Many projects publish audits as a trust signal to users.",
    },
  ],
}

export type ServiceName = keyof typeof faqsByService
export const allServices = Object.keys(faqsByService) as ServiceName[]
