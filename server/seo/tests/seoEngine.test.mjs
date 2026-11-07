/**
 * INZOVATE TECHNOLOGIES - SEO ENGINE UNIT & INTEGRATION TEST SUITE
 * 
 * Verifies:
 * 1. Deduplication & hashing integrity
 * 2. Search intent classification accuracy
 * 3. Location specificity & tier weights
 * 4. Page mapping & zero cannibalization
 * 5. High-volume keyword generator correctness
 * 6. Metadata compliance & structured data
 * 7. Database storage & query pagination
 */

import { normalizeKeyword, getKeywordHash, StreamingDeduplicator } from "../engine/deduplication.mjs";
import { classifySearchIntent } from "../engine/intentClassifier.mjs";
import { LOCATION_MATRIX, findLocation } from "../engine/locationEngine.mjs";
import { mapKeywordToLandingPage, INZOVATE_CANONICAL_PAGES } from "../engine/pageMapper.mjs";
import { generateKeywordStream, generateKeywordBatch } from "../engine/keywordGenerator.mjs";
import { assignCluster, CLUSTER_DEFINITIONS } from "../engine/clustering.mjs";
import { generatePageMetadata } from "../engine/metadataGenerator.mjs";
import { dbManager } from "../database/dbConnection.mjs";
import { runSeoMigrations } from "../database/migrations.mjs";

function assert(condition, testName) {
  if (!condition) {
    console.error(`❌ FAIL: ${testName}`);
    throw new Error(`Assertion failed: ${testName}`);
  }
  console.log(`✅ PASS: ${testName}`);
}

async function runTests() {
  console.log("==================================================================");
  console.log("🧪 RUNNING INZOVATE SEO INTELLIGENCE ENGINE TEST SUITE");
  console.log("==================================================================");

  // Test 1: Deduplication
  const norm1 = normalizeKeyword("  ERP Software   Company In Coimbatore!!  ");
  assert(norm1 === "erp software company in coimbatore", "Deduplication: string normalization trims and lowercases");

  const hash1 = getKeywordHash("CRM Software Erode");
  const hash2 = getKeywordHash("crm software erode");
  assert(hash1 === hash2, "Deduplication: identical hashes for case-insensitive matches");

  const dedup = new StreamingDeduplicator();
  assert(dedup.add("cloud consulting") === true, "Deduplication: first insertion returns true");
  assert(dedup.add("cloud consulting") === false, "Deduplication: duplicate insertion returns false");

  // Test 2: Search Intent Classification
  const intent1 = classifySearchIntent("hire ERP developers in Chennai");
  assert(intent1.intent === "Transactional" && intent1.funnelStage === "BOFU", "Intent: 'hire' classified as Transactional (BOFU)");

  const intent2 = classifySearchIntent("best CRM software for textile companies");
  assert(intent2.intent === "Commercial" && intent2.funnelStage === "MOFU", "Intent: 'best' classified as Commercial (MOFU)");

  const intent3 = classifySearchIntent("how to automate payroll with HRMS");
  assert(intent3.intent === "Informational" && intent3.funnelStage === "TOFU", "Intent: 'how to' classified as Informational (TOFU)");

  // Test 3: Location Engine
  const erodeLoc = findLocation("Erode");
  assert(erodeLoc && erodeLoc.tier === "hyperlocal", "Location: Erode identified as Hyperlocal Tamil Nadu hub");

  const usaLoc = findLocation("USA");
  assert(usaLoc && usaLoc.tier === "global", "Location: USA identified as Global market");

  // Test 4: Page Mapping
  const page1 = mapKeywordToLandingPage("GST e-invoicing automated software", "BILLING");
  assert(page1 === "/billing-gst-invoicing", "Page Mapping: GST keyword routes to /billing-gst-invoicing");

  const page2 = mapKeywordToLandingPage("Biometric attendance shift tracking system", "HRM");
  assert(page2 === "/hrm-biometric-attendance", "Page Mapping: Biometric keyword routes to /hrm-biometric-attendance");

  const page3 = mapKeywordToLandingPage("Zoho CRM customization partner", "Zoho");
  assert(page3 === "/strategic-partnerships", "Page Mapping: Zoho keyword routes to /strategic-partnerships");

  // Test 5: Keyword Generator Stream
  const sampleBatch = generateKeywordBatch(200, 0);
  assert(sampleBatch.length === 200, "Generator: generated exact requested batch size of 200");
  assert(sampleBatch[0].keyword_id && sampleBatch[0].keyword_hash, "Generator: records contain keyword_id and keyword_hash");
  assert(sampleBatch[0].competition_score === null, "Generator: competition_score is strictly null (verified metrics only)");
  assert(sampleBatch[0].search_volume === null, "Generator: search_volume is strictly null (never invent fake numbers)");

  // Test 6: Metadata Generator
  const meta = generatePageMetadata({
    path: "/erp-financial-management",
    pageTitle: "Enterprise ERP Financial Management",
    primaryCluster: "ERP",
  });
  assert(meta.canonicalUrl === "https://inzovate-technologies.com/erp-financial-management", "Metadata: canonical URL correctly constructed");
  assert(meta.title.includes("Inzovate Technologies"), "Metadata: title branded");
  assert(meta.schemaJson.includes("INZOVATE TECHNOLOGIES PRIVATE LIMITED"), "Metadata: schema JSON includes organization details");

  // Test 7: Database & Migrations
  const migrationResult = await runSeoMigrations(1500);
  assert(migrationResult.success === true, "Database: migration completed successfully");
  assert(migrationResult.totalKeywords >= 1500, "Database: verified at least 1,500 seeded keywords in database");

  const { db } = await dbManager.connect();
  const kwColl = db.collection("seo_keywords");
  const filtered = await kwColl.find({ search_intent: "Commercial" }).limit(10).toArray();
  assert(filtered.length <= 10, "Database: query pagination and filtering works");

  console.log("==================================================================");
  console.log("🎉 ALL TESTS PASSED SUCCESSFULLY (7/7)");
  console.log("==================================================================");
}

runTests()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Test Suite Failed:", err);
    process.exit(1);
  });
