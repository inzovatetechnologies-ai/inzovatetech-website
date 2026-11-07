/**
 * INZOVATE TECHNOLOGIES - SEO DATABASE COLLECTIONS & SCHEMA INDEXING
 * 
 * Defines schema models, validation, and compound indexes for high-throughput
 * 500,000+ keyword retrieval and filtering.
 */

import { SEO_CONFIG } from "../config/seoConfig.mjs";

export const COLLECTION_INDEXES = {
  [SEO_CONFIG.collections.keywords]: [
    { key: { keyword_hash: 1 }, name: "uniq_keyword_hash", unique: true },
    { key: { keyword: "text" }, name: "text_keyword_search" },
    { key: { category: 1, intent: 1, priority_score: -1 }, name: "idx_cat_intent_priority" },
    { key: { target_location: 1, target_country: 1 }, name: "idx_location_country" },
    { key: { target_landing_page: 1 }, name: "idx_landing_page" },
    { key: { priority_score: -1 }, name: "idx_priority_score" },
    { key: { keyword_status: 1 }, name: "idx_keyword_status" },
    { key: { last_updated: -1 }, name: "idx_last_updated" },
  ],

  [SEO_CONFIG.collections.clusters]: [
    { key: { cluster_id: 1 }, name: "uniq_cluster_id", unique: true },
    { key: { primary_category: 1, sub_category: 1 }, name: "idx_cluster_cat" },
    { key: { canonical_landing_page: 1 }, name: "idx_canonical_page" },
  ],

  [SEO_CONFIG.collections.pages]: [
    { key: { url_path: 1 }, name: "uniq_url_path", unique: true },
    { key: { primary_cluster: 1 }, name: "idx_page_primary_cluster" },
    { key: { is_indexed: 1 }, name: "idx_page_is_indexed" },
  ],

  [SEO_CONFIG.collections.metadata]: [
    { key: { url_path: 1 }, name: "uniq_meta_url_path", unique: true },
  ],

  [SEO_CONFIG.collections.rankTracking]: [
    { key: { keyword_id: 1, date: -1 }, name: "idx_keyword_rank_date" },
    { key: { query: 1, date: -1 }, name: "idx_query_date" },
    { key: { position: 1 }, name: "idx_rank_position" },
  ],

  [SEO_CONFIG.collections.competitors]: [
    { key: { domain: 1 }, name: "uniq_competitor_domain", unique: true },
    { key: { target_vertical: 1 }, name: "idx_competitor_vertical" },
  ],

  [SEO_CONFIG.collections.searchConsole]: [
    { key: { date: -1, query: 1, page: 1 }, name: "uniq_gsc_entry", unique: true },
    { key: { clicks: -1 }, name: "idx_gsc_clicks" },
    { key: { impressions: -1 }, name: "idx_gsc_impressions" },
  ],

  [SEO_CONFIG.collections.contentOpportunities]: [
    { key: { cluster_name: 1 }, name: "uniq_opportunity_cluster", unique: true },
    { key: { opportunity_score: -1 }, name: "idx_opportunity_score" },
    { key: { status: 1 }, name: "idx_opportunity_status" },
  ],

  [SEO_CONFIG.collections.auditLogs]: [
    { key: { timestamp: -1 }, name: "idx_log_timestamp" },
    { key: { action: 1 }, name: "idx_log_action" },
  ],
};

/**
 * Ensures all collection indexes are created in MongoDB
 */
export async function initializeIndexes(db) {
  const results = {};
  for (const [collName, indexes] of Object.entries(COLLECTION_INDEXES)) {
    try {
      const coll = db.collection(collName);
      if (typeof coll.createIndexes === "function") {
        const created = await coll.createIndexes(indexes);
        results[collName] = created;
      }
    } catch (err) {
      console.warn(`[SEO Engine] Index warning on ${collName}:`, err.message);
      results[collName] = "error: " + err.message;
    }
  }
  return results;
}
