/**
 * INZOVATE TECHNOLOGIES - SEARCH INTENT CLASSIFICATION ENGINE
 * 
 * Classifies search queries into standard SEO intent categories:
 * - Transactional (Bottom of Funnel - BOFU)
 * - Commercial Investigation (Middle of Funnel - MOFU)
 * - Informational (Top of Funnel - TOFU)
 * - Navigational (Branded / Direct)
 */

export function classifySearchIntent(keyword = "") {
  const text = String(keyword).toLowerCase();

  // 1. Navigational patterns
  if (text.includes("inzovate") || text.includes("login") || text.includes("portal") || text.includes("contact us") || text.includes("careers at")) {
    return {
      intent: "Navigational",
      funnelStage: "BOFU",
      weight: 0.40,
    };
  }

  // 2. Transactional patterns (High Buyer Intent)
  const transactionalKeywords = [
    "hire", "buy", "pricing", "price", "cost", "quote", "demo", "free trial", "calculator",
    "request quote", "consultation", "near me", "service provider in", "contract", "rates", "developer for hire"
  ];
  if (transactionalKeywords.some(w => text.includes(w))) {
    return {
      intent: "Transactional",
      funnelStage: "BOFU",
      weight: 0.90,
    };
  }

  // 3. Commercial Investigation patterns (Evaluation & Decision)
  const commercialKeywords = [
    "best", "top", "leading", "software company", "development agency", "consulting company",
    "implementation partner", "custom development", "enterprise", "solutions for", "services",
    "vs", "comparison", "alternatives", "platform", "provider", "expert", "consultant"
  ];
  if (commercialKeywords.some(w => text.includes(w))) {
    return {
      intent: "Commercial",
      funnelStage: "MOFU",
      weight: 0.95,
    };
  }

  // 4. Informational patterns (Education & Research)
  const informationalKeywords = [
    "how to", "what is", "guide", "tutorial", "benefits of", "features of",
    "architecture", "best practices", "checklist", "example", "trends", "case study",
    "tips", "steps to", "understanding", "overview", "roadmap"
  ];
  if (informationalKeywords.some(w => text.includes(w))) {
    return {
      intent: "Informational",
      funnelStage: "TOFU",
      weight: 0.65,
    };
  }

  // Default fallback for B2B industry search is Commercial
  return {
    intent: "Commercial",
    funnelStage: "MOFU",
    weight: 0.80,
  };
}
