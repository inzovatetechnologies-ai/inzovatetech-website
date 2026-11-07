/**
 * INZOVATE TECHNOLOGIES - PHASE 2 ADVANCED LOCAL & INDUSTRY KEYWORD GENERATOR
 * 
 * Streams unique, high-intent local and industry keywords for:
 * - 4 Districts (Erode, Namakkal, Salem, Coimbatore) across 54+ localities
 * - Zoho Partner Domination cluster
 * - Amazon AWS Partner cluster
 * - AI, Data Science & Analytics, Web Development, Mobile Apps, Enterprise Technology
 * - Brand & Company Authority keywords
 * - Real query combinatorics: [Service] + [City], [Industry] + [Software] + [City], etc.
 * 
 * Zero fabricated metrics: search_volume and competition_score remain strictly null.
 */

import { FOUR_DISTRICT_MATRIX, getAllFourDistrictLocalities } from "./phase2LocationMatrix.mjs";
import { getKeywordHash, normalizeKeyword } from "./deduplication.mjs";
import { classifySearchIntent } from "./intentClassifier.mjs";
import { mapKeywordToLandingPage } from "./pageMapper.mjs";

// ── Service Core Templates for Local Expansion ────────────────────────────────
const LOCAL_CORE_SERVICES = [
  { term: "IT Companies", category: "IT Services", basePriority: 95 },
  { term: "Best IT Company", category: "IT Services", basePriority: 96 },
  { term: "Top IT Companies", category: "IT Services", basePriority: 94 },
  { term: "Software Company", category: "Software Development", basePriority: 95 },
  { term: "Software Development Company", category: "Software Development", basePriority: 97 },
  { term: "IT Services Company", category: "IT Services", basePriority: 93 },
  { term: "IT Solutions Company", category: "IT Services", basePriority: 92 },
  { term: "Technology Companies", category: "IT Services", basePriority: 90 },
  { term: "AI Company", category: "AI", basePriority: 96 },
  { term: "Artificial Intelligence Company", category: "AI", basePriority: 95 },
  { term: "AI Development Company", category: "AI", basePriority: 96 },
  { term: "Generative AI Company", category: "AI", basePriority: 94 },
  { term: "Digital Transformation Company", category: "Digital Transformation", basePriority: 94 },
  { term: "Enterprise Digital Transformation", category: "Digital Transformation", basePriority: 92 },
  { term: "ERP Software Company", category: "ERP", basePriority: 97 },
  { term: "ERP Development Company", category: "ERP", basePriority: 96 },
  { term: "Custom ERP Solutions", category: "ERP", basePriority: 95 },
  { term: "Cloud ERP Software", category: "ERP", basePriority: 94 },
  { term: "CRM Software Company", category: "CRM", basePriority: 96 },
  { term: "CRM Development Company", category: "CRM", basePriority: 95 },
  { term: "Custom CRM Solutions", category: "CRM", basePriority: 94 },
  { term: "HRMS Software Company", category: "HRM", basePriority: 95 },
  { term: "HRM Software Company", category: "HRM", basePriority: 93 },
  { term: "Payroll Software Company", category: "HRM", basePriority: 94 },
  { term: "Biometric Attendance Software", category: "HRM", basePriority: 93 },
  { term: "Website Development Company", category: "Web Development", basePriority: 95 },
  { term: "Website Designing Company", category: "Web Development", basePriority: 94 },
  { term: "Web Design Agency", category: "Web Development", basePriority: 92 },
  { term: "Web Application Development Company", category: "Web Development", basePriority: 95 },
  { term: "Mobile App Development Company", category: "Mobile Applications", basePriority: 96 },
  { term: "Mobile Application Development Company", category: "Mobile Applications", basePriority: 95 },
  { term: "Android App Development Company", category: "Mobile Applications", basePriority: 93 },
  { term: "iOS App Development Company", category: "Mobile Applications", basePriority: 93 },
  { term: "Flutter App Development Company", category: "Mobile Applications", basePriority: 92 },
  { term: "React Native App Development Company", category: "Mobile Applications", basePriority: 92 },
  { term: "Data Science Company", category: "Data Analytics", basePriority: 94 },
  { term: "Data Analytics Company", category: "Data Analytics", basePriority: 95 },
  { term: "Business Intelligence Company", category: "Data Analytics", basePriority: 93 },
  { term: "Power BI Consulting Company", category: "Data Analytics", basePriority: 92 },
  { term: "IT Consulting Company", category: "Technology Consulting", basePriority: 92 },
  { term: "Business Automation Company", category: "Business Automation", basePriority: 94 },
  { term: "GST Billing Software Company", category: "BILLING", basePriority: 93 },
  { term: "Inventory Management Software", category: "ERP", basePriority: 94 },
];

// ── Zoho Partner Domination Terms ─────────────────────────────────────────────
const ZOHO_DOMINATION_TERMS = [
  { term: "Zoho Partners", role: "Partner Search", prio: 97 },
  { term: "Zoho Partner", role: "Partner Search", prio: 98 },
  { term: "Zoho Official Partner", role: "Authorized Ecosystem", prio: 97 },
  { term: "Zoho Implementation Partner", role: "Deployment Services", prio: 98 },
  { term: "Zoho CRM Partner", role: "CRM Specialization", prio: 98 },
  { term: "Zoho CRM Implementation", role: "Implementation", prio: 97 },
  { term: "Zoho Consulting Company", role: "Consulting", prio: 95 },
  { term: "Zoho Customization Services", role: "Customization", prio: 96 },
  { term: "Zoho One Implementation", role: "Suite Integration", prio: 97 },
  { term: "Zoho Books Implementation", role: "Finance Integration", prio: 96 },
  { term: "Zoho People Implementation", role: "HR Integration", prio: 95 },
  { term: "Zoho Recruit Implementation", role: "Recruitment Integration", prio: 94 },
  { term: "Zoho Desk Implementation", role: "Support Desk", prio: 94 },
  { term: "Zoho Creator Development", role: "Custom App Building", prio: 96 },
  { term: "Zoho Integration Services", role: "API Integration", prio: 96 },
  { term: "Zoho Migration Services", role: "Cloud Migration", prio: 95 },
  { term: "Zoho Business Automation Solutions", role: "Enterprise Automation", prio: 95 },
];

// ── AWS Partner Domination Terms ──────────────────────────────────────────────
const AWS_DOMINATION_TERMS = [
  { term: "AWS Partners", role: "Cloud Partner", prio: 97 },
  { term: "AWS Partner", role: "Cloud Partner", prio: 98 },
  { term: "AWS Official Partner", role: "Cloud Ecosystem", prio: 96 },
  { term: "AWS Cloud Solutions", role: "Solutions Architecture", prio: 97 },
  { term: "AWS Cloud Consulting Company", role: "Advisory & Architecture", prio: 98 },
  { term: "AWS Cloud Service Provider", role: "Managed Cloud", prio: 96 },
  { term: "Amazon Web Services Partner", role: "Cloud Partner", prio: 97 },
  { term: "AWS Migration Services", role: "Cloud Migration", prio: 97 },
  { term: "AWS Deployment Services", role: "Cloud Deployment", prio: 95 },
  { term: "AWS DevOps Services", role: "DevOps Automation", prio: 96 },
  { term: "AWS Infrastructure Management", role: "Cloud Infrastructure", prio: 96 },
  { term: "AWS Cloud Architecture", role: "Enterprise Architecture", prio: 96 },
  { term: "AWS Hosting Solutions", role: "Hosting Services", prio: 94 },
  { term: "AWS Application Development", role: "Serverless & Cloud Native", prio: 95 },
  { term: "AWS Managed Cloud Services", role: "Managed Services", prio: 96 },
  { term: "Cloud Computing Company", role: "Cloud Provider", prio: 94 },
  { term: "Cloud Solutions Provider", role: "Solutions Provider", prio: 95 },
];

// ── Industry-Specific Local B2B Combinations ──────────────────────────────────
const REGIONAL_INDUSTRIES = [
  { name: "Textile", focus: "ERP, CRM & Supply Chain" },
  { name: "Manufacturing", focus: "ERP, Inventory & Production" },
  { name: "Foundry & Engineering", focus: "Custom ERP & Quality QA" },
  { name: "Poultry & Feed", focus: "Supply Chain & Farm ERP" },
  { name: "Rig & Drilling", focus: "Fleet, Transport & Inventory CRM" },
  { name: "Chemical & Dyeing", focus: "Batch Tracking & Pollution Compliance ERP" },
  { name: "Agriculture & Agro Food", focus: "Procurement & Dispatch Software" },
  { name: "Retail & Wholesale", focus: "POS, GST Billing & Multi-branch ERP" },
  { name: "Logistics & Transport", focus: "Fleet Management, Waybill & Tracking" },
  { name: "Education & Schools", focus: "Campus ERP, Attendance & Fees Portal" },
  { name: "Healthcare & Clinic", focus: "Patient Management, EMR & Billing" },
];

// ── Brand and Company Authority Keywords ──────────────────────────────────────
const BRAND_AUTHORITY_TERMS = [
  { phrase: "Inzovate Technologies", targetUrl: "/", category: "Brand Authority" },
  { phrase: "Inzovate Technologies Private Limited", targetUrl: "/", category: "Brand Authority" },
  { phrase: "Inzovate Technologies India", targetUrl: "/", category: "Brand Authority" },
  { phrase: "Inzovate IT Solutions", targetUrl: "/products", category: "Brand Authority" },
  { phrase: "Inzovate Software Development", targetUrl: "/products", category: "Brand Authority" },
  { phrase: "Inzovate AI Solutions", targetUrl: "/ai-automation-small-business-2026", category: "Brand Authority" },
  { phrase: "Inzovate ERP Solutions", targetUrl: "/erp-financial-management", category: "Brand Authority" },
  { phrase: "Inzovate CRM Solutions", targetUrl: "/crm-by-industry", category: "Brand Authority" },
  { phrase: "Inzovate HRMS Solutions", targetUrl: "/hrm-payroll-engine", category: "Brand Authority" },
  { phrase: "Inzovate Zoho Partner", targetUrl: "/strategic-partnerships", category: "Brand Authority" },
  { phrase: "Inzovate AWS Partner", targetUrl: "/services", category: "Brand Authority" },
  { phrase: "Inzovate Technology Services", targetUrl: "/services", category: "Brand Authority" },
  { phrase: "Inzovate Bhavani Head Office", targetUrl: "/about", category: "Brand Authority" },
  { phrase: "Inzovate Erode Software Company", targetUrl: "/about", category: "Brand Authority" },
];

/**
 * Generator function streaming unique Phase 2 Local & Industry Expansion keywords
 */
export function* generatePhase2KeywordStream(knownExistingHashes = new Set()) {
  const seenHashes = new Set(knownExistingHashes);
  const now = new Date().toISOString();
  const allLocations = getAllFourDistrictLocalities();

  // Helper to build a validated record
  const createRecord = (phrase, district, locality, category, priority, landingPageOverride = null) => {
    const norm = normalizeKeyword(phrase);
    if (!norm || norm.length < 3) return null;

    const hash = getKeywordHash(norm);
    if (seenHashes.has(hash)) return null;
    seenHashes.add(hash);

    const intentInfo = classifySearchIntent(norm);
    const targetUrl = landingPageOverride || mapKeywordToLandingPage(norm, category, "", locality);

    return {
      keyword_id: `kw_p2_${hash.substring(0, 12)}`,
      keyword: phrase.trim(),
      keyword_hash: hash,
      phase: "PHASE_2_LOCAL_EXPANSION",
      district: district,
      locality: locality,
      category: category,
      search_intent: intentInfo.intent,
      funnel_stage: intentInfo.funnelStage,
      related_service: category,
      related_technology: determineTechnology(norm, category),
      target_country: "India",
      target_location: locality ? `${locality}, ${district}, Tamil Nadu` : `${district}, Tamil Nadu`,
      target_landing_page: targetUrl,
      priority_score: Math.min(100, Math.max(50, Math.round(priority))),
      competition_score: null, // Strictly null (unverified)
      search_volume: null,     // Strictly null (unverified)
      status: "active",
      source: "PHASE_2_EXPANSION_ENGINE",
      verified_metric: false,
      created_at: now,
      last_updated: now,
    };
  };

  // ── 1. BRAND AUTHORITY EXPANSION ───────────────────────────────────────────
  for (const item of BRAND_AUTHORITY_TERMS) {
    const rec = createRecord(item.phrase, "Erode", "Bhavani", item.category, 99, item.targetUrl);
    if (rec) yield rec;
  }

  // ── 2. FOUR-DISTRICT LOCAL SERVICE COMBINATIONS ─────────────────────────────
  for (const loc of allLocations) {
    for (const srv of LOCAL_CORE_SERVICES) {
      // Form: [Service] in [Locality]
      const phrase1 = `${srv.term} in ${loc.locality}`;
      const rec1 = createRecord(phrase1, loc.district, loc.locality, srv.category, srv.basePriority * loc.priority);
      if (rec1) yield rec1;

      // Form: [Locality] [Service]
      const phrase2 = `${loc.locality} ${srv.term}`;
      const rec2 = createRecord(phrase2, loc.district, loc.locality, srv.category, (srv.basePriority - 2) * loc.priority);
      if (rec2) yield rec2;
    }
  }

  // District-level summaries (e.g., "IT Companies in Erode District")
  const districtList = ["Erode", "Namakkal", "Salem", "Coimbatore"];
  for (const dist of districtList) {
    for (const srv of LOCAL_CORE_SERVICES) {
      const p1 = `${srv.term} in ${dist} District`;
      const rec1 = createRecord(p1, dist, dist, srv.category, srv.basePriority * 0.96);
      if (rec1) yield rec1;

      const p2 = `Best ${srv.term} in ${dist}`;
      const rec2 = createRecord(p2, dist, dist, srv.category, srv.basePriority * 0.98);
      if (rec2) yield rec2;
    }
  }

  // ── 3. ZOHO PARTNER DOMINATION CLUSTER ──────────────────────────────────────
  for (const loc of allLocations) {
    for (const z of ZOHO_DOMINATION_TERMS) {
      const phrase = `${z.term} in ${loc.locality}`;
      const rec = createRecord(phrase, loc.district, loc.locality, "Zoho", z.prio * loc.priority, "/strategic-partnerships");
      if (rec) yield rec;

      // Long-tail high-intent variations
      const phraseNear = `Best ${z.term} near ${loc.locality}`;
      const recNear = createRecord(phraseNear, loc.district, loc.locality, "Zoho", (z.prio - 3) * loc.priority, "/strategic-partnerships");
      if (recNear) yield recNear;
    }
  }

  for (const dist of districtList) {
    for (const z of ZOHO_DOMINATION_TERMS) {
      const phraseDist = `${z.term} in ${dist} District`;
      const recDist = createRecord(phraseDist, dist, dist, "Zoho", z.prio * 0.96, "/strategic-partnerships");
      if (recDist) yield recDist;

      const phraseBiz = `Zoho partner for businesses in ${dist}`;
      const recBiz = createRecord(phraseBiz, dist, dist, "Zoho", z.prio * 0.97, "/strategic-partnerships");
      if (recBiz) yield recBiz;
    }
  }

  // ── 4. AWS PARTNER DOMINATION CLUSTER ───────────────────────────────────────
  for (const loc of allLocations) {
    for (const aws of AWS_DOMINATION_TERMS) {
      const phrase = `${aws.term} in ${loc.locality}`;
      const rec = createRecord(phrase, loc.district, loc.locality, "Cloud and AWS", aws.prio * loc.priority, "/services");
      if (rec) yield rec;

      const phraseNear = `Best ${aws.term} near ${loc.locality}`;
      const recNear = createRecord(phraseNear, loc.district, loc.locality, "Cloud and AWS", (aws.prio - 3) * loc.priority, "/services");
      if (recNear) yield recNear;
    }
  }

  for (const dist of districtList) {
    for (const aws of AWS_DOMINATION_TERMS) {
      const phraseDist = `${aws.term} in ${dist} District`;
      const recDist = createRecord(phraseDist, dist, dist, "Cloud and AWS", aws.prio * 0.96, "/services");
      if (recDist) yield recDist;
    }
  }

  // ── 5. INDUSTRY-SPECIFIC LOCAL B2B COMBINATIONS ─────────────────────────────
  // e.g., "Textile ERP Software Company in Erode", "Transport CRM in Tiruchengode"
  const industrySoftwarePairs = [
    { ind: "Textile", srv: "ERP Software", cat: "ERP" },
    { ind: "Textile", srv: "Inventory Management Software", cat: "ERP" },
    { ind: "Manufacturing", srv: "ERP Software Company", cat: "ERP" },
    { ind: "Foundry", srv: "Production ERP Software", cat: "ERP" },
    { ind: "Poultry", srv: "Farm Management Software", cat: "ERP" },
    { ind: "Transport", srv: "Logistics CRM Software", cat: "CRM" },
    { ind: "Rig Drilling", srv: "Fleet & Equipment Management Software", cat: "CRM" },
    { ind: "Chemical", srv: "Batch Tracking ERP System", cat: "ERP" },
    { ind: "Agriculture", srv: "Supply Chain Software", cat: "SCM" },
    { ind: "Retail", srv: "GST Billing and POS Software", cat: "BILLING" },
    { ind: "Hospital", srv: "Healthcare Management System", cat: "Custom Software" },
  ];

  for (const pair of industrySoftwarePairs) {
    for (const loc of allLocations) {
      const phrase = `${pair.ind} ${pair.srv} in ${loc.locality}`;
      const rec = createRecord(phrase, loc.district, loc.locality, pair.cat, 93 * loc.priority);
      if (rec) yield rec;
    }

    for (const dist of districtList) {
      const phrase = `${pair.ind} ${pair.srv} in ${dist} District`;
      const rec = createRecord(phrase, dist, dist, pair.cat, 94);
      if (rec) yield rec;
    }
  }

  // ── 6. PROBLEM-SOLVING & BUYER-INTENT LOCAL COMBINATIONS ────────────────────
  const problems = [
    { prob: "How to automate customer management using CRM", cat: "CRM" },
    { prob: "Best ERP software for manufacturing business", cat: "ERP" },
    { prob: "Custom CRM software development cost", cat: "CRM" },
    { prob: "Biometric attendance software integration for factories", cat: "HRM" },
    { prob: "GST e-invoicing software implementation", cat: "BILLING" },
    { prob: "AWS cloud migration consulting", cat: "Cloud and AWS" },
    { prob: "Zoho CRM automation services", cat: "Zoho" },
    { prob: "AI chatbot development for customer support", cat: "AI" },
  ];

  for (const p of problems) {
    for (const dist of districtList) {
      const phrase = `${p.prob} in ${dist}`;
      const rec = createRecord(phrase, dist, dist, p.cat, 90);
      if (rec) yield rec;
    }
  }
}

function determineTechnology(norm, category) {
  if (norm.includes("zoho")) return "Zoho Ecosystem";
  if (norm.includes("aws") || norm.includes("cloud")) return "AWS Cloud & Serverless";
  if (norm.includes("flutter") || norm.includes("react native") || norm.includes("android") || norm.includes("ios")) return "Mobile Frameworks";
  if (norm.includes("react") || norm.includes("full stack") || norm.includes("web")) return "React / Node.js";
  if (norm.includes("ai") || norm.includes("machine learning") || norm.includes("generative")) return "Python / AI Agents";
  if (norm.includes("power bi") || norm.includes("data analytics") || norm.includes("data science")) return "Power BI / Data Pipelines";
  if (norm.includes("biometric") || norm.includes("payroll")) return "HRMS Engine";
  if (norm.includes("gst") || norm.includes("billing")) return "GST Invoicing Engine";
  return `${category} Platform`;
}
