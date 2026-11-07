/**
 * INZOVATE TECHNOLOGIES - SEO CONTENT GAP & OPPORTUNITY SCORER
 * 
 * Computes SEO opportunity scores across clusters and identifies high-intent
 * queries requiring dedicated content coverage.
 */

import { CLUSTER_DEFINITIONS } from "./clustering.mjs";
import { SEO_CONFIG } from "../config/seoConfig.mjs";

export function calculateOpportunityScore(keywordRecord) {
  const intentWeight = SEO_CONFIG.scoringWeights.intent[keywordRecord.search_intent] || 0.70;
  const priority = keywordRecord.priority_score || 50;
  
  // Specificity factor
  const hasLocalTarget = keywordRecord.target_location && keywordRecord.target_location !== "India";
  const locationMultiplier = hasLocalTarget ? 1.15 : 1.0;

  const score = Math.round(((priority * 0.5) + (intentWeight * 100 * 0.4) + (hasLocalTarget ? 10 : 0)) * (locationMultiplier / 1.15));
  return Math.min(100, Math.max(1, score));
}

/**
 * Evaluates clusters to identify content gaps
 */
export function analyzeContentGaps(keywords = [], indexedPages = []) {
  const clusterCoverage = new Map();

  for (const def of CLUSTER_DEFINITIONS) {
    clusterCoverage.set(def.clusterId, {
      clusterId: def.clusterId,
      clusterName: def.clusterName,
      category: def.category,
      canonicalUrl: def.canonicalUrl,
      keywordCount: 0,
      highIntentCount: 0,
      hasLivePage: indexedPages.some(p => p.url_path === def.canonicalUrl || p.path === def.canonicalUrl),
      avgPriority: 0,
    });
  }

  for (const kw of keywords) {
    for (const def of CLUSTER_DEFINITIONS) {
      if (def.matchPatterns.some(p => kw.keyword.toLowerCase().includes(p))) {
        const item = clusterCoverage.get(def.clusterId);
        if (item) {
          item.keywordCount++;
          if (kw.search_intent === "Transactional" || kw.search_intent === "Commercial") {
            item.highIntentCount++;
          }
          item.avgPriority += (kw.priority_score || 50);
        }
        break;
      }
    }
  }

  const opportunities = [];

  for (const [id, data] of clusterCoverage.entries()) {
    if (data.keywordCount > 0) {
      data.avgPriority = Math.round(data.avgPriority / data.keywordCount);
    }

    const opportunityScore = Math.round(
      (data.highIntentCount > 50 ? 40 : data.highIntentCount * 0.8) +
      (data.avgPriority * 0.4) +
      (data.hasLivePage ? 10 : 30) // higher opportunity if page is missing
    );

    opportunities.push({
      clusterId: data.clusterId,
      clusterName: data.clusterName,
      category: data.category,
      canonicalUrl: data.canonicalUrl,
      keywordVolumeCandidate: data.keywordCount,
      highIntentKeywords: data.highIntentCount,
      opportunityScore: Math.min(100, opportunityScore),
      contentGapStatus: !data.hasLivePage ? "Missing Dedicated Page" : (data.highIntentCount > 30 ? "Expand Content & Case Studies" : "Adequately Covered"),
      recommendation: `Enhance ${data.clusterName} landing page (${data.canonicalUrl}) with technical case studies, B2B implementation workflow, and ROI calculator.`,
    });
  }

  return opportunities.sort((a, b) => b.opportunityScore - a.opportunityScore);
}
