/**
 * INZOVATE TECHNOLOGIES - SEO DATABASE MIGRATION & PROVISIONING SCRIPT
 * 
 * 1. Initializes all 9 SEO collections
 * 2. Creates compound indexes for unique deduplication & sub-millisecond querying
 * 3. Populates canonical landing page catalog
 * 4. Seeds semantic clusters
 * 5. Streams initial high-priority keywords into the database
 */

import { dbManager } from "./dbConnection.mjs";
import { initializeIndexes } from "./collections.mjs";
import { SEO_CONFIG } from "../config/seoConfig.mjs";
import { INZOVATE_CANONICAL_PAGES } from "../engine/pageMapper.mjs";
import { CLUSTER_DEFINITIONS } from "../engine/clustering.mjs";
import { generateKeywordStream } from "../engine/keywordGenerator.mjs";

export async function runSeoMigrations(seedCount = 10000) {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🚀 STARTING INZOVATE SEO DATABASE MIGRATION & PROVISIONING");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  const { db, mode } = await dbManager.connect();
  console.log(`[Migration] Database operational mode: ${mode.toUpperCase()}`);

  // 1. Provision Indexes across all collections
  console.log("[Migration] Step 1: Provisioning Compound & Unique Indexes...");
  await initializeIndexes(db);

  // 2. Provision Canonical Landing Pages
  console.log("[Migration] Step 2: Registering Inzovate Canonical Pages...");
  const pagesColl = db.collection(SEO_CONFIG.collections.pages);
  for (const page of INZOVATE_CANONICAL_PAGES) {
    await pagesColl.bulkWrite([
      {
        updateOne: {
          filter: { url_path: page.path },
          update: {
            $set: {
              url_path: page.path,
              cluster: page.cluster,
              sub_cluster: page.subCluster,
              title: page.title,
              primary_topic: page.primaryTopic,
              is_indexed: true,
              last_checked: new Date().toISOString(),
            },
          },
          upsert: true,
        },
      },
    ]);
  }

  // 3. Provision Semantic Clusters
  console.log("[Migration] Step 3: Registering Semantic Clusters...");
  const clustersColl = db.collection(SEO_CONFIG.collections.clusters);
  for (const cluster of CLUSTER_DEFINITIONS) {
    await clustersColl.bulkWrite([
      {
        updateOne: {
          filter: { cluster_id: cluster.clusterId },
          update: {
            $set: {
              cluster_id: cluster.clusterId,
              cluster_name: cluster.clusterName,
              primary_category: cluster.category,
              canonical_landing_page: cluster.canonicalUrl,
              match_patterns: cluster.matchPatterns,
              updated_at: new Date().toISOString(),
            },
          },
          upsert: true,
        },
      },
    ]);
  }

  // 4. Seed Keywords
  const kwColl = db.collection(SEO_CONFIG.collections.keywords);
  const currentCount = await kwColl.countDocuments();
  console.log(`[Migration] Step 4: Current keyword records in database: ${currentCount}`);

  if (currentCount < seedCount) {
    const needed = seedCount - currentCount;
    console.log(`[Migration] Streaming ${needed} unique intent keyword records...`);
    const stream = generateKeywordStream(seedCount);

    let batch = [];
    let inserted = 0;
    const batchSize = 2500;

    for (const record of stream) {
      batch.push(record);
      if (batch.length >= batchSize) {
        const ops = batch.map(doc => ({ insertOne: { document: doc } }));
        const res = await kwColl.bulkWrite(ops, { ordered: false });
        inserted += (res.insertedCount || 0);
        batch = [];
        console.log(`  -> Processed batch... (${inserted}/${needed})`);
      }
    }

    if (batch.length > 0) {
      const ops = batch.map(doc => ({ insertOne: { document: doc } }));
      const res = await kwColl.bulkWrite(ops, { ordered: false });
      inserted += (res.insertedCount || 0);
    }

    console.log(`[Migration] Successfully seeded ${inserted} unique records!`);
  }

  const finalCount = await kwColl.countDocuments();
  console.log(`[Migration] Total Verified Records: ${finalCount}`);
  console.log("✅ MIGRATION & PROVISIONING COMPLETED SUCCESSFULLY!");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  return { success: true, totalKeywords: finalCount, mode };
}

// Allow direct execution: node migrations.mjs
if (process.argv[1] && process.argv[1].endsWith("migrations.mjs")) {
  const seedArg = parseInt(process.argv[2], 10) || 10000;
  runSeoMigrations(seedArg)
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Migration failed:", err);
      process.exit(1);
    });
}
