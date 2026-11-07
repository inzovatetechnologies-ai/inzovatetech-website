/**
 * INZOVATE TECHNOLOGIES - PHASE 2 SEO DATABASE MIGRATION SCRIPT
 * 
 * Ingests Phase 2 Local & Industry Expansion keywords without touching,
 * overwriting, or deleting any previous records.
 * 
 * Strict Deduplication:
 * Hashes are cross-checked against all existing keywords.
 */

import { dbManager } from "./dbConnection.mjs";
import { SEO_CONFIG } from "../config/seoConfig.mjs";
import { generatePhase2KeywordStream } from "../engine/phase2KeywordGenerator.mjs";

export async function runPhase2Migration() {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🚀 STARTING INZOVATE SEO PHASE 2 LOCAL & INDUSTRY EXPANSION MIGRATION");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  const { db, mode } = await dbManager.connect();
  console.log(`[Phase 2 Migration] Database operational mode: ${mode.toUpperCase()}`);

  const kwColl = db.collection(SEO_CONFIG.collections.keywords);
  const clustersColl = db.collection(SEO_CONFIG.collections.clusters);

  // 1. Inspect existing database records & collect hashes
  const initialTotal = await kwColl.countDocuments();
  console.log(`[Phase 2 Migration] Existing records in database: ${initialTotal}`);

  const existingDocs = await kwColl.find({}).limit(1000000).toArray();
  const knownHashes = new Set(existingDocs.map(d => d.keyword_hash || d.keyword));
  console.log(`[Phase 2 Migration] Loaded ${knownHashes.size} unique hashes for strict deduplication.`);

  // 2. Stream new Phase 2 records
  const stream = generatePhase2KeywordStream(knownHashes);
  let batch = [];
  let inserted = 0;
  const batchSize = 1000;
  const districtCounts = { Erode: 0, Namakkal: 0, Salem: 0, Coimbatore: 0, Other: 0 };
  const categoryCounts = {};

  for (const record of stream) {
    batch.push(record);
    const dist = record.district || "Other";
    districtCounts[dist] = (districtCounts[dist] || 0) + 1;
    categoryCounts[record.category] = (categoryCounts[record.category] || 0) + 1;

    if (batch.length >= batchSize) {
      const ops = batch.map(doc => ({ insertOne: { document: doc } }));
      const res = await kwColl.bulkWrite(ops, { ordered: false });
      inserted += (res.insertedCount || 0);
      batch = [];
      console.log(`  -> Seeded Phase 2 batch... (${inserted} records added)`);
    }
  }

  if (batch.length > 0) {
    const ops = batch.map(doc => ({ insertOne: { document: doc } }));
    const res = await kwColl.bulkWrite(ops, { ordered: false });
    inserted += (res.insertedCount || 0);
  }

  const finalTotal = await kwColl.countDocuments();
  console.log("------------------------------------------------------------------");
  console.log(`✅ Phase 2 Records Added: ${inserted}`);
  console.log(`✅ Total Verified Records in Database: ${finalTotal}`);
  console.log("📍 District Distribution:", districtCounts);
  console.log("📊 Top Categories Added:", categoryCounts);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  // 3. Log audit event
  try {
    const auditColl = db.collection(SEO_CONFIG.collections.auditLogs);
    await auditColl.insertOne({
      action: "PHASE_2_LOCAL_EXPANSION_INGESTED",
      records_added: inserted,
      prior_count: initialTotal,
      final_count: finalTotal,
      districts: districtCounts,
      timestamp: new Date().toISOString(),
      performed_by: "system_phase2_migration",
    });
  } catch (e) {
    // Audit logging is non-blocking
  }

  return {
    success: true,
    priorCount: initialTotal,
    recordsAdded: inserted,
    finalTotal: finalTotal,
    districtCounts,
    mode,
  };
}

// Allow direct CLI execution: node phase2Migration.mjs
if (process.argv[1] && process.argv[1].endsWith("phase2Migration.mjs")) {
  runPhase2Migration()
    .then((result) => {
      console.log("Result:", result);
      process.exit(0);
    })
    .catch((err) => {
      console.error("Phase 2 Migration failed:", err);
      process.exit(1);
    });
}
