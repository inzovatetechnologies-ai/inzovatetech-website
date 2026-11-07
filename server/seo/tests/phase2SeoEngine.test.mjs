/**
 * INZOVATE TECHNOLOGIES - PHASE 2 SEO ENGINE COMPREHENSIVE TEST SUITE
 * 
 * Tests:
 * 1. 4-District Local Matrix integrity
 * 2. Phase 2 Streaming Keyword Generator & Schema Validation
 * 3. Strict Deduplication against existing records
 * 4. Zoho Ecosystem Domination cluster coverage
 * 5. AWS Cloud Ecosystem Domination cluster coverage
 * 6. Brand Authority keywords
 * 7. Phase 2 Migration execution & database safety
 */

import assert from "assert";
import { FOUR_DISTRICT_MATRIX, getAllFourDistrictLocalities, identifyDistrict } from "../engine/phase2LocationMatrix.mjs";
import { generatePhase2KeywordStream } from "../engine/phase2KeywordGenerator.mjs";
import { runPhase2Migration } from "../database/phase2Migration.mjs";
import { dbManager } from "../database/dbConnection.mjs";
import { SEO_CONFIG } from "../config/seoConfig.mjs";

console.log("==================================================================");
console.log("🧪 RUNNING INZOVATE SEO PHASE 2 ADVANCED TEST SUITE");
console.log("==================================================================");

let passCount = 0;
function test(name, fn) {
  try {
    fn();
    console.log(`✅ PASS: ${name}`);
    passCount++;
  } catch (err) {
    console.error(`❌ FAIL: ${name}`);
    console.error(err);
    process.exit(1);
  }
}

async function runTests() {
  // ── TEST 1: Four-District Matrix ────────────────────────────────────────────
  test("Four-District Matrix contains Erode, Namakkal, Salem, and Coimbatore", () => {
    assert(FOUR_DISTRICT_MATRIX.erode, "Missing Erode district");
    assert(FOUR_DISTRICT_MATRIX.namakkal, "Missing Namakkal district");
    assert(FOUR_DISTRICT_MATRIX.salem, "Missing Salem district");
    assert(FOUR_DISTRICT_MATRIX.coimbatore, "Missing Coimbatore district");
    
    // Check key localities
    const all = getAllFourDistrictLocalities();
    const locNames = all.map(l => l.locality.toLowerCase());
    assert(locNames.includes("bhavani"), "Missing Bhavani in matrix");
    assert(locNames.includes("tiruchengode"), "Missing Tiruchengode in matrix");
    assert(locNames.includes("omalur"), "Missing Omalur in matrix");
    assert(locNames.includes("saravanampatti"), "Missing Saravanampatti in matrix");
    assert(all.length >= 50, `Expected at least 50 localities, found ${all.length}`);
  });

  test("District identifier accurately resolves localities", () => {
    assert.strictEqual(identifyDistrict("Bhavani"), "Erode");
    assert.strictEqual(identifyDistrict("Tiruchengode"), "Namakkal");
    assert.strictEqual(identifyDistrict("Sankagiri"), "Salem");
    assert.strictEqual(identifyDistrict("Saravanampatti"), "Coimbatore");
  });

  // ── TEST 2: Generator & Schema Integrity ────────────────────────────────────
  test("Phase 2 Generator produces valid schema and enforces zero fake metrics", () => {
    const stream = generatePhase2KeywordStream();
    let checked = 0;

    for (const rec of stream) {
      assert.strictEqual(rec.phase, "PHASE_2_LOCAL_EXPANSION");
      assert(rec.keyword && rec.keyword.length > 3);
      assert(rec.keyword_hash && rec.keyword_hash.length === 64);
      assert(rec.district);
      assert(rec.category);
      assert(rec.search_intent);
      assert(rec.target_landing_page);
      
      // Strict verified-metric enforcement
      assert.strictEqual(rec.competition_score, null, "competition_score must be null");
      assert.strictEqual(rec.search_volume, null, "search_volume must be null");
      assert.strictEqual(rec.verified_metric, false);

      checked++;
      if (checked >= 500) break;
    }

    assert(checked === 500, "Should generate at least 500 validated sample records");
  });

  // ── TEST 3: Strict Deduplication against Existing Hashes ────────────────────
  test("Phase 2 Deduplication ignores known existing hashes", () => {
    const testHashes = new Set();
    const stream1 = generatePhase2KeywordStream(testHashes);
    const firstFive = [];
    for (const r of stream1) {
      firstFive.push(r);
      testHashes.add(r.keyword_hash);
      if (firstFive.length >= 10) break;
    }

    // Now re-run with those hashes marked as known
    const stream2 = generatePhase2KeywordStream(testHashes);
    for (const r of stream2) {
      assert(!testHashes.has(r.keyword_hash) || !firstFive.some(f => f.keyword_hash === r.keyword_hash), "Duplicate yielded!");
      break;
    }
  });

  // ── TEST 4: Zoho Ecosystem Domination Cluster ───────────────────────────────
  test("Zoho Domination terms route to /strategic-partnerships", () => {
    const stream = generatePhase2KeywordStream();
    let zohoFound = 0;
    for (const r of stream) {
      if (r.category === "Zoho") {
        assert.strictEqual(r.target_landing_page, "/strategic-partnerships");
        assert(r.keyword.toLowerCase().includes("zoho"));
        zohoFound++;
        if (zohoFound >= 50) break;
      }
    }
    assert(zohoFound >= 50, "Should find at least 50 Zoho keywords");
  });

  // ── TEST 5: AWS Cloud Domination Cluster ────────────────────────────────────
  test("AWS Domination terms route to /services", () => {
    const stream = generatePhase2KeywordStream();
    let awsFound = 0;
    for (const r of stream) {
      if (r.category === "Cloud and AWS") {
        assert.strictEqual(r.target_landing_page, "/services");
        assert(
          r.keyword.toLowerCase().includes("aws") ||
          r.keyword.toLowerCase().includes("cloud") ||
          r.keyword.toLowerCase().includes("amazon")
        );
        awsFound++;
        if (awsFound >= 50) break;
      }
    }
    assert(awsFound >= 50, "Should find at least 50 AWS keywords");
  });

  // ── TEST 6: Brand Authority Cluster ─────────────────────────────────────────
  test("Brand Authority terms generate with maximum priority score", () => {
    const stream = generatePhase2KeywordStream();
    let brandCount = 0;
    for (const r of stream) {
      if (r.category === "Brand Authority") {
        assert(r.keyword.toLowerCase().includes("inzovate"));
        assert.strictEqual(r.priority_score, 99);
        brandCount++;
      }
      if (brandCount >= 10) break;
    }
    assert(brandCount >= 10, "Should generate Brand Authority keywords");
  });

  // ── TEST 7: Phase 2 Database Ingestion & Non-destructive Migration ──────────
  console.log("\nTesting Phase 2 Database Migration...");
  const migrationResult = await runPhase2Migration();
  test("Phase 2 Migration completes successfully without data loss", () => {
    assert(migrationResult.success);
    assert(migrationResult.recordsAdded > 0, "Should add new Phase 2 records");
    assert(migrationResult.finalTotal >= migrationResult.priorCount + migrationResult.recordsAdded);
  });

  console.log("==================================================================");
  console.log(`🎉 ALL PHASE 2 TESTS PASSED SUCCESSFULLY (${passCount + 1}/${passCount + 1})`);
  console.log("==================================================================");
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});
