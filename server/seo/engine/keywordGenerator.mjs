/**
 * INZOVATE TECHNOLOGIES - 500,000 KEYWORD GENERATOR & MATRIX ENGINE
 * 
 * Scalable streaming generator combining:
 * 1. Core industry & technology disciplines (ERP, CRM, HRM, AI, Cloud, Zoho, etc.)
 * 2. Industry-specific verticals (Manufacturing, Textile, Healthcare, Retail, etc.)
 * 3. Multi-tier locations (Hyperlocal, Regional, Metro, Global)
 * 4. High-value search intent vectors (Commercial, Transactional, Informational)
 * 5. Problem-solving, comparison, and long-tail query structures
 * 
 * Strict Principle: Never invent fake search volumes or competition scores.
 * All records conform to enterprise schema with deterministic hashes.
 */

import crypto from "crypto";
import { getKeywordHash, normalizeKeyword, StreamingDeduplicator } from "./deduplication.mjs";
import { classifySearchIntent } from "./intentClassifier.mjs";
import { LOCATION_MATRIX } from "./locationEngine.mjs";
import { mapKeywordToLandingPage } from "./pageMapper.mjs";
import { SEO_CONFIG } from "../config/seoConfig.mjs";

// ── Core Service & Technology Domains (26 Domains) ───────────────────────────
export const CORE_DOMAINS = [
  {
    category: "ERP",
    subCategory: "Enterprise Resource Planning",
    service: "Custom ERP Implementation",
    tech: "PostgreSQL, Node.js, Cloud ERP",
    coreTerms: [
      "ERP software", "ERP implementation", "cloud ERP system", "custom ERP software",
      "manufacturing ERP", "ERP consulting", "ERP migration", "ERP solutions",
      "inventory ERP software", "financial management ERP", "supply chain ERP"
    ],
  },
  {
    category: "CRM",
    subCategory: "Customer Relationship Management",
    service: "Enterprise CRM Solutions",
    tech: "React, Node.js, Webhooks, CRM APIs",
    coreTerms: [
      "CRM software", "custom CRM development", "sales CRM software", "CRM automation",
      "lead tracking software", "customer management system", "CRM implementation",
      "pipeline management software", "B2B CRM software", "client portal CRM"
    ],
  },
  {
    category: "HRM",
    subCategory: "Human Resource Management",
    service: "HRMS & Payroll Engineering",
    tech: "Biometrics Sync, Payroll Algorithms, React",
    coreTerms: [
      "HRMS software", "payroll management software", "HR software", "biometric attendance system",
      "employee management software", "leave management portal", "automated payroll software",
      "HR automation platform", "recruitment management software", "employee self service portal"
    ],
  },
  {
    category: "AI",
    subCategory: "Artificial Intelligence & ML",
    service: "Enterprise AI & GenAI Development",
    tech: "Python, PyTorch, OpenAI, LangChain, RAG",
    coreTerms: [
      "AI development company", "generative AI solutions", "AI business automation",
      "AI chatbot development", "machine learning consulting", "enterprise AI integration",
      "AI workflow automation", "intelligent document processing", "custom AI agents"
    ],
  },
  {
    category: "Cloud and AWS",
    subCategory: "Cloud Architecture & DevOps",
    service: "AWS Cloud Consulting & DevOps",
    tech: "AWS Lambda, ECS, S3, Terraform, Docker",
    coreTerms: [
      "AWS cloud consulting", "AWS migration services", "cloud infrastructure management",
      "DevOps consulting company", "cloud application development", "serverless architecture",
      "cloud cost optimization", "enterprise cloud solutions", "multi-cloud consulting"
    ],
  },
  {
    category: "Zoho",
    subCategory: "Zoho Ecosystem Implementation",
    service: "Zoho Consulting & Automation",
    tech: "Deluge, Zoho CRM, Zoho Books, Zoho One",
    coreTerms: [
      "Zoho implementation partner", "Zoho CRM customization", "Zoho Books integration",
      "Zoho One implementation", "Zoho automation consultant", "Zoho People setup",
      "Zoho migration services", "Zoho business workflow automation"
    ],
  },
  {
    category: "Software Development",
    subCategory: "Custom Software Engineering",
    service: "B2B Enterprise Software Development",
    tech: "TypeScript, React, Node.js, Python, Tailwind",
    coreTerms: [
      "custom software development", "enterprise software company", "SaaS development agency",
      "web application development", "business software solutions", "legacy software modernization",
      "bespoke software development", "full stack software engineering"
    ],
  },
  {
    category: "Digital Transformation",
    subCategory: "Enterprise Digitalization",
    service: "Digital Transformation Consulting",
    tech: "Microservices, Cloud Native, API Gateways",
    coreTerms: [
      "digital transformation services", "enterprise digitalization", "business process modernization",
      "digital business consulting", "operational automation services", "technology modernization"
    ],
  },
  {
    category: "Business Automation",
    subCategory: "Workflow & RPA Automation",
    service: "Process Automation Engineering",
    tech: "RPA, Zapier, Webhooks, Custom Bots",
    coreTerms: [
      "business workflow automation", "process automation software", "automated invoicing system",
      "enterprise workflow optimization", "digital approval workflows", "custom workflow automation"
    ],
  },
  {
    category: "Data Analytics",
    subCategory: "Business Intelligence & BI",
    service: "Data Engineering & Dashboard Analytics",
    tech: "Power BI, PostgreSQL, Tableau, ETL Pipelines",
    coreTerms: [
      "business intelligence solutions", "data analytics company", "custom dashboard development",
      "Power BI consulting", "predictive business analytics", "data warehouse engineering"
    ],
  },
  {
    category: "Mobile Applications",
    subCategory: "Mobile App Development",
    service: "iOS & Android Cross-Platform Apps",
    tech: "React Native, Flutter, Swift, Kotlin",
    coreTerms: [
      "mobile app development company", "enterprise mobile application", "cross platform app development",
      "B2B mobile app developers", "custom Android app development", "iOS business app solutions"
    ],
  },
  {
    category: "Web Development",
    subCategory: "Full-Stack Web Engineering",
    service: "High-Performance Modern Web Platforms",
    tech: "React, Vite, Next.js, Node.js, Tailwind CSS",
    coreTerms: [
      "web application development company", "custom portal development", "responsive enterprise web apps",
      "progressive web applications", "modern web engineering services"
    ],
  },
  {
    category: "Supply Chain",
    subCategory: "Supply Chain Management (SCM)",
    service: "Logistics & SCM Software Systems",
    tech: "Real-time Tracking, RFID, Barcode, Node.js",
    coreTerms: [
      "supply chain management software", "fleet dispatch management", "supplier vendor portal software",
      "demand forecasting platform", "warehouse tracking software", "logistics dispatch software"
    ],
  },
  {
    category: "Billing & Invoicing",
    subCategory: "FinTech & Automated Billing",
    service: "GST & Subscription Billing Systems",
    tech: "Payment Gateways, NPCI UPI, Webhooks",
    coreTerms: [
      "GST billing software", "automated invoicing software", "recurring subscription billing",
      "payment gateway integration services", "e-way bill generation software", "multi-gateway checkout system"
    ],
  },
  {
    category: "Cybersecurity",
    subCategory: "Application Security & Compliance",
    service: "Security Auditing & Hardening",
    tech: "OAuth2, Zero-Trust, SSL/TLS, Pen Testing",
    coreTerms: [
      "application security services", "enterprise cybersecurity consulting", "cloud security audit",
      "zero trust security architecture", "compliance and vulnerability management"
    ],
  },
  {
    category: "Technology Consulting",
    subCategory: "Strategic IT Consulting",
    service: "Enterprise Architecture Advisory",
    tech: "Enterprise Architecture, TOGAF, Scalability",
    coreTerms: [
      "IT consulting company", "technology consulting services", "software architecture consulting",
      "CTO advisory services", "digital product strategy"
    ],
  },
];

// ── Target Industry Verticals (24 Verticals) ─────────────────────────────────
export const INDUSTRY_VERTICALS = [
  "manufacturing",
  "textile and garments",
  "healthcare and clinics",
  "retail and ecommerce",
  "wholesale and distribution",
  "construction and real estate",
  "transportation and logistics",
  "education and schools",
  "financial services and NBFC",
  "publishing and media",
  "automotive and dealerships",
  "hospitality and restaurants",
  "pharmaceuticals",
  "food processing and FMCG",
  "professional services firms",
  "engineering contractors",
  "printing and packaging",
  "import and export companies",
  "electrical and electronics",
  "chemical manufacturing",
  "agriculture and agribusiness",
  "legal and compliance firms",
  "startups and scaleups",
  "small and medium businesses"
];

// ── Intent Modifiers & Template Formulas ──────────────────────────────────────
const COMMERCIAL_PREFIXES = [
  "best", "top", "leading", "enterprise", "affordable", "custom", "reliable",
  "professional", "advanced", "next-generation", "secure", "certified", "trusted"
];

const COMMERCIAL_SUFFIXES = [
  "company", "solutions", "services", "provider", "agency", "firm", "developers",
  "consultants", "implementation partner", "specialists", "platform"
];

const PROBLEM_SOLVING_TEMPLATES = [
  "how to automate [INDUSTRY] with [DOMAIN]",
  "benefits of [DOMAIN] for [INDUSTRY]",
  "how [DOMAIN] improves [INDUSTRY] operations",
  "guide to choosing [DOMAIN] for [INDUSTRY]",
  "cost of [DOMAIN] in [LOCATION]",
  "features of modern [DOMAIN] for [INDUSTRY]",
  "why [INDUSTRY] businesses need [DOMAIN]",
  "best practices for [DOMAIN] implementation in [LOCATION]",
  "checklist for [DOMAIN] implementation",
  "how to integrate [DOMAIN] with existing systems"
];

const TRANSACTIONAL_PATTERNS = [
  "hire [DOMAIN] developers in [LOCATION]",
  "[DOMAIN] quotation in [LOCATION]",
  "[DOMAIN] pricing for [INDUSTRY]",
  "book [DOMAIN] demo in [LOCATION]",
  "[DOMAIN] implementation cost in [LOCATION]",
  "request quote for [DOMAIN] [INDUSTRY]",
  "custom [DOMAIN] development company in [LOCATION]",
  "[DOMAIN] consultation services [LOCATION]"
];

/**
 * High-performance Generator yielding up to targetCount unique keyword records.
 * Uses backpressure-safe streaming and deduplication.
 */
export function* generateKeywordStream(targetCount = 500000) {
  const deduplicator = new StreamingDeduplicator();
  let generatedCount = 0;
  const now = new Date().toISOString();

  // Helper to yield cleanly
  function* tryYield(rawText, domainObj, locationObj, specificIntent = null, extraService = null) {
    if (generatedCount >= targetCount) return;

    const normalized = normalizeKeyword(rawText);
    if (normalized.length < 5 || normalized.length > 120) return;

    if (!deduplicator.add(normalized)) {
      return; // duplicate
    }

    const hash = getKeywordHash(normalized);
    const intentData = specificIntent || classifySearchIntent(normalized);
    const landingPage = mapKeywordToLandingPage(
      normalized,
      domainObj.category,
      domainObj.subCategory,
      locationObj.name
    );

    // Calculate priority score (1-100)
    let priority = Math.round(
      (intentData.weight * 45) +
      (locationObj.weight * 35) +
      (domainObj.category === "ERP" || domainObj.category === "CRM" || domainObj.category === "AI" ? 20 : 10)
    );
    priority = Math.max(1, Math.min(100, priority));

    generatedCount++;

    yield {
      keyword_id: `kw_${hash.substring(0, 16)}`,
      keyword: rawText.trim(),
      keyword_hash: hash,
      category: domainObj.category,
      sub_category: domainObj.subCategory,
      search_intent: intentData.intent,
      funnel_stage: intentData.funnelStage,
      related_service: extraService || domainObj.service,
      related_technology: domainObj.tech,
      target_country: locationObj.country,
      target_location: locationObj.name,
      language: "en",
      priority_score: priority,
      competition_score: null, // Strictly null unless verified by official API
      search_volume: null,     // Strictly null unless verified by official API
      target_landing_page: landingPage,
      keyword_status: "active",
      last_updated: now,
    };
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PHASE 1: Domain Core Terms × Locations (Hyperlocal + Metro + Global)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  for (const domain of CORE_DOMAINS) {
    for (const term of domain.coreTerms) {
      for (const loc of LOCATION_MATRIX) {
        if (generatedCount >= targetCount) return;
        yield* tryYield(`${term} in ${loc.name}`, domain, loc);
        yield* tryYield(`${term} company in ${loc.name}`, domain, loc);
        yield* tryYield(`${term} services in ${loc.name}`, domain, loc);
        yield* tryYield(`${term} provider ${loc.name}`, domain, loc);
        yield* tryYield(`best ${term} in ${loc.name}`, domain, loc);
        yield* tryYield(`top ${term} company ${loc.name}`, domain, loc);
        yield* tryYield(`custom ${term} ${loc.name}`, domain, loc);
      }
    }
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PHASE 2: Commercial Modifiers × Domain × Industry Verticals × Locations
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  for (const domain of CORE_DOMAINS) {
    for (const industry of INDUSTRY_VERTICALS) {
      for (const loc of LOCATION_MATRIX) {
        if (generatedCount >= targetCount) return;

        // Pattern A: [Domain Term] for [Industry] in [Location]
        const primaryTerm = domain.coreTerms[0];
        yield* tryYield(`${primaryTerm} for ${industry} in ${loc.name}`, domain, loc);
        yield* tryYield(`best ${primaryTerm} for ${industry} in ${loc.name}`, domain, loc);
        yield* tryYield(`${industry} ${primaryTerm} company in ${loc.name}`, domain, loc);
        yield* tryYield(`custom ${primaryTerm} for ${industry} ${loc.name}`, domain, loc);
        yield* tryYield(`${industry} ${domain.category} software development ${loc.name}`, domain, loc);

        // Pattern B: Additional Core Terms for key industries
        for (let i = 1; i < Math.min(domain.coreTerms.length, 5); i++) {
          if (generatedCount >= targetCount) return;
          const subTerm = domain.coreTerms[i];
          yield* tryYield(`${subTerm} for ${industry} ${loc.name}`, domain, loc);
          yield* tryYield(`${subTerm} solutions for ${industry} in ${loc.name}`, domain, loc);
          yield* tryYield(`affordable ${subTerm} for ${industry} in ${loc.name}`, domain, loc);
        }
      }
    }
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PHASE 3: Transactional & Buyer Intent Patterns (BOFU)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  for (const domain of CORE_DOMAINS) {
    for (const loc of LOCATION_MATRIX) {
      for (const pattern of TRANSACTIONAL_PATTERNS) {
        if (generatedCount >= targetCount) return;
        const phrase = pattern
          .replace("[DOMAIN]", domain.coreTerms[0])
          .replace("[LOCATION]", loc.name);

        yield* tryYield(phrase, domain, loc, { intent: "Transactional", funnelStage: "BOFU", weight: 0.95 });
      }

      for (const industry of INDUSTRY_VERTICALS.slice(0, 10)) {
        if (generatedCount >= targetCount) return;
        yield* tryYield(`hire ${domain.category} developers for ${industry} in ${loc.name}`, domain, loc, { intent: "Transactional", funnelStage: "BOFU", weight: 0.95 });
        yield* tryYield(`${domain.category} implementation pricing for ${industry} in ${loc.name}`, domain, loc, { intent: "Transactional", funnelStage: "BOFU", weight: 0.90 });
        yield* tryYield(`${domain.category} software quote for ${industry} in ${loc.name}`, domain, loc, { intent: "Transactional", funnelStage: "BOFU", weight: 0.92 });
      }
    }
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PHASE 4: Problem-Solving & Informational Inquiries (TOFU)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  for (const domain of CORE_DOMAINS) {
    for (const industry of INDUSTRY_VERTICALS) {
      for (const loc of LOCATION_MATRIX.slice(0, 12)) { // Hyperlocal & Indian Metros
        for (const template of PROBLEM_SOLVING_TEMPLATES) {
          if (generatedCount >= targetCount) return;
          const query = template
            .replace("[DOMAIN]", domain.coreTerms[0])
            .replace("[INDUSTRY]", industry)
            .replace("[LOCATION]", loc.name);

          yield* tryYield(query, domain, loc, { intent: "Informational", funnelStage: "TOFU", weight: 0.65 });
        }
      }
    }
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PHASE 5: Modular Technology & Long-Tail Combinations
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const TECH_MODIFIERS = [
    "cloud-based", "AI-powered", "mobile-friendly", "automated", "scalable",
    "secure", "customizable", "real-time", "microservices-based", "open-source integrated"
  ];

  for (const domain of CORE_DOMAINS) {
    for (const techMod of TECH_MODIFIERS) {
      for (const industry of INDUSTRY_VERTICALS) {
        for (const loc of LOCATION_MATRIX) {
          if (generatedCount >= targetCount) return;

          yield* tryYield(`${techMod} ${domain.coreTerms[0]} for ${industry} in ${loc.name}`, domain, loc);
          yield* tryYield(`${techMod} ${domain.category} implementation company in ${loc.name}`, domain, loc);
          yield* tryYield(`${techMod} enterprise ${domain.category} solutions in ${loc.name}`, domain, loc);
        }
      }
    }
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PHASE 6: Comparison, Migration & Specialized Enterprise Combinations
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const ENTERPRISE_PREFIXES = [
    "enterprise-grade", "multi-branch", "multi-company", "omnichannel",
    "ISO compliant", "HIPAA compliant", "audit-ready", "zero-downtime"
  ];

  for (const domain of CORE_DOMAINS) {
    for (const entPrefix of ENTERPRISE_PREFIXES) {
      for (const loc of LOCATION_MATRIX) {
        for (const industry of INDUSTRY_VERTICALS) {
          if (generatedCount >= targetCount) return;

          yield* tryYield(`${entPrefix} ${domain.coreTerms[0]} for ${industry} ${loc.name}`, domain, loc);
          yield* tryYield(`${entPrefix} ${domain.category} platform in ${loc.name}`, domain, loc);
        }
      }
    }
  }
}

/**
 * Returns a batch of generated keyword records
 */
export function generateKeywordBatch(batchSize = 5000, startOffset = 0) {
  const stream = generateKeywordStream(startOffset + batchSize);
  const batch = [];
  let index = 0;

  for (const record of stream) {
    if (index >= startOffset) {
      batch.push(record);
      if (batch.length >= batchSize) break;
    }
    index++;
  }

  return batch;
}
