// import pokytimg from '../assets/images/pokytportfolio.png'
// import cutfree from '../assets/images/cutfreeportfolio.png'

// src/content/portfolioContent.js

export const portfolios = [
    {
        slug: "cellpay-payments-platform",
        title: "CellPay – Unified Payment Gateway Platform",
        category: "SaaS Platform / FinTech Payment Gateway",
        client: "CellPay.us",
        url: "https://www.cellpay.us",
        location: "United States",
        industry: "Financial Technology / Digital Payments",
        stack: ["Node.js", "Express", "React", "MongoDB Atlas", "Azure Static Web Apps", "Stripe", "Moov", "Astra", "Circle", "Redis", "GitHub Actions"],
        image: '/images/portfolio/cutfreeportfolio.png',
        shortDesc: "A unified platform managing multiple payment methods cards, bank transfers, and digital wallets under one secure, scalable infrastructure with real-time reconciliation.",
        challenge: "CellPay needed a unified platform to manage multiple payment methods cards, bank transfers, and digital wallets under one secure, scalable infrastructure. They required a system capable of handling high transaction volumes, real-time reconciliation, and modular onboarding for merchants.",
        solution: "Saasential architected and developed a full SaaS payment platform with built-in wallet and ledger modules, instant settlement flows, and a robust API layer for third-party integrations. We focused on reliability, regulatory readiness, and ease of merchant onboarding.",
        process: [
            {
                title: "Requirements Gathering & Compliance Mapping",
                desc: "Conducted comprehensive requirements analysis and mapped regulatory compliance needs across different payment rails and merchant types."
            },
            {
                title: "System Architecture & Data Flow Design",
                desc: "Designed scalable microservices architecture with separate services for payment processing, wallet management, ledger reconciliation, and merchant onboarding."
            },
            {
                title: "UI/UX Design for Admin & Merchant Dashboards",
                desc: "Created intuitive dashboards for both administrators and merchants, focusing on real-time transaction monitoring, reporting, and easy navigation."
            },
            {
                title: "Backend API & Database Implementation",
                desc: "Built robust RESTful APIs with MongoDB Atlas for data persistence, Redis for caching, and integrated multiple payment providers (Stripe, Moov, Astra, Circle)."
            },
            {
                title: "Testing & Azure Deployment with GitHub CI/CD",
                desc: "Implemented comprehensive testing suite and automated deployment pipeline using GitHub Actions to Azure Static Web Apps for continuous delivery."
            }
        ],
        results: [
            {
                title: "Unified Multi-Rail Processing",
                desc: "Successfully integrated multiple payment rails enabling faster settlement and reducing transaction processing time by 60%."
            },
            {
                title: "Streamlined Merchant Onboarding",
                desc: "Reduced merchant onboarding time from several days to under 24 hours with automated verification and simplified workflows."
            },
            {
                title: "Scalable Architecture",
                desc: "Built future-ready infrastructure supporting cross-border expansion and capable of handling 10x current transaction volumes."
            }
        ]
    },
    {
        slug: "pockyt-solution-engineering",
        title: "Pockyt.io – Solution Engineering & API Enablement",
        category: "Solution Engineering / API Enablement & Knowledge Visualization",
        client: "Pockyt.io",
        url: "https://pockyt.io",
        location: "United States",
        industry: "FinTech / Cross-border Payments",
        stack: ["API Astrolab", "Wiki.js", "Node.js", "Confluence", "Jira Service Management", "MongoDB Atlas", "Discord Integration"],
        image: '/images/portfolio/pokytportfolio.png',
        shortDesc: "Advanced solution engineering support enabling better API product visualization, faster enterprise client onboarding, and improved internal knowledge sharing.",
        challenge: "Pockyt.io needed advanced solution engineering support for onboarding new enterprise clients, internal knowledge sharing, and API product showcasing. Their engineering and sales teams needed better visibility into how APIs interconnect and power real-world use cases.",
        solution: "Saasential provided deep solution engineering support by implementing a ticketing and documentation ecosystem using Jira and Confluence integrated through custom Node.js services. We visualized their API products and payment workflows using API Astrolab, enabling faster onboarding, testing, and client demos.",
        process: [
            {
                title: "Internal System Audit & Requirements Gathering",
                desc: "Performed thorough audit of existing documentation, ticketing systems, and internal workflows to identify gaps and improvement opportunities."
            },
            {
                title: "Custom Integration between Jira, Confluence & Discord Bot",
                desc: "Built custom Node.js integrations connecting Jira Service Management, Confluence documentation, and Discord for real-time notifications and streamlined communication."
            },
            {
                title: "Workflow Visualization via API Astrolab",
                desc: "Implemented API Astrolab to create visual representations of API workflows, payment flows, and integration patterns for better stakeholder understanding."
            },
            {
                title: "Testing & Rollout across Solution Engineering Teams",
                desc: "Conducted pilot testing with solution engineering teams, gathered feedback, and iteratively refined the system before full deployment."
            },
            {
                title: "Continuous Documentation & Support",
                desc: "Established ongoing documentation processes and provided continuous support to ensure system adoption and knowledge transfer."
            }
        ],
        results: [
            {
                title: "Enhanced Team Collaboration",
                desc: "Improved collaboration between sales and engineering teams through unified documentation and communication channels."
            },
            {
                title: "Better API Value Communication",
                desc: "Enhanced visibility and communication of API value to clients through visual workflow representations and interactive demos."
            },
            {
                title: "Faster Enterprise Onboarding",
                desc: "Reduced onboarding time for enterprise merchants by 50% through better documentation and visual API guides."
            },
            {
                title: "Stronger Product Demos",
                desc: "Strengthened product demonstrations through workflow visualization, leading to higher conversion rates and client satisfaction."
            }
        ]
    },
    {
        slug: "african-payments-aggregator",
        title: "Regional Payments Aggregator – Multi-Rail Integration",
        category: "FinTech Infrastructure / Regional Payments Integration",
        client: "Confidential (Under NDA)",
        url: "#",
        location: "Sub-Saharan Africa",
        industry: "FinTech / Payments Aggregation",
        stack: ["Node.js", "Express", "React", "MongoDB Atlas", "Flutterwave", "Airtel Money", "QR Code SDKs", "Azure", "GitHub Actions"],
        image: "/images/portfolio/cofid.jpg",
        shortDesc: "A unified payments aggregator integrating multiple regional payment providers (mobile money, QR codes, bank APIs) into a single standardized API layer.",
        challenge: "The client aimed to unify multiple regional payment providers (mobile money, QR codes, and bank APIs) into a single API layer to streamline merchant acceptance and reduce technical complexity. Fragmented local integrations created high maintenance overhead and limited scalability.",
        solution: "Saasential engineered a multi-rail aggregator API that standardizes mobile money, QR, and card payments across countries. The system includes real-time transaction validation, settlement logic, and a secure dashboard for merchants. Built for reliability in bandwidth-limited environments.",
        process: [
            {
                title: "Requirements & Market Analysis for Local PSPs",
                desc: "Conducted extensive research on regional payment service providers, regulatory requirements, and market-specific technical constraints."
            },
            {
                title: "Unified API Design with Security Layer",
                desc: "Designed a standardized RESTful API with robust authentication, encryption, and fraud prevention mechanisms suitable for various local payment methods."
            },
            {
                title: "Integration with Flutterwave, Airtel, and Custom QR APIs",
                desc: "Built connectors for multiple payment providers including Flutterwave, Airtel Money, and various QR code systems with fallback mechanisms."
            },
            {
                title: "Dashboard Development & Testing",
                desc: "Developed merchant dashboard with real-time transaction monitoring, settlement tracking, and reporting capabilities optimized for low-bandwidth environments."
            },
            {
                title: "Pilot Deployment & Continuous Support",
                desc: "Launched pilot program with select merchants, monitored performance metrics, and provided ongoing technical support and optimization."
            }
        ],
        results: [
            {
                title: "Regional QR Payments Processing",
                desc: "Successfully processed live regional QR payments across multiple countries with 99.7% uptime and sub-second response times."
            },
            {
                title: "Simplified Merchant Integration",
                desc: "Reduced merchant integration complexity from managing 5+ separate APIs to a single unified endpoint, cutting integration time by 75%."
            },
            {
                title: "Scalable Regional Foundation",
                desc: "Created a scalable foundation supporting regional expansion and regulatory compliance across multiple jurisdictions with modular architecture."
            }
        ]
    }
];
