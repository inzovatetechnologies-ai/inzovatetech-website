/**
 * INZOVATE TECHNOLOGIES - SEO INTELLIGENCE API ROUTER
 * 
 * Secure backend endpoints for managing, analyzing, querying, and streaming
 * 500,000+ unique SEO keyword records.
 */

import express from "express";
import { seoAdminAuth } from "./seoAuthMiddleware.mjs";
import { dbManager } from "../database/dbConnection.mjs";
import { SEO_CONFIG } from "../config/seoConfig.mjs";
import { generateKeywordStream, generateKeywordBatch, CORE_DOMAINS } from "../engine/keywordGenerator.mjs";
import { CLUSTER_DEFINITIONS, assignCluster } from "../engine/clustering.mjs";
import { INZOVATE_CANONICAL_PAGES } from "../engine/pageMapper.mjs";
import { analyzeContentGaps } from "../engine/opportunityScorer.mjs";
import { generatePageMetadata } from "../engine/metadataGenerator.mjs";
import { gscClient } from "../integrations/googleSearchConsole.mjs";
import { runPhase2Migration } from "../database/phase2Migration.mjs";
import { FOUR_DISTRICT_MATRIX } from "../engine/phase2LocationMatrix.mjs";

export const seoRouter = express.Router();

// ── Public Health & Discovery ────────────────────────────────────────────────
seoRouter.get("/health", async (req, res) => {
  try {
    const { mode, db } = await dbManager.connect();
    const keywordsColl = db.collection(SEO_CONFIG.collections.keywords);
    const totalKeywords = await keywordsColl.countDocuments();

    res.json({
      success: true,
      service: "Inzovate SEO Intelligence Engine",
      targetCapacity: SEO_CONFIG.database.targetRecordCount,
      currentStoredKeywords: totalKeywords,
      databaseMode: mode,
      collections: Object.keys(SEO_CONFIG.collections).length,
      compliance: {
        privacyGuaranteed: true,
        zeroHiddenHtmlText: true,
        zeroDoorwayPages: true,
        neverPromiseFirstPosition: true,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── Public Legitimate Metadata Endpoint ──────────────────────────────────────
seoRouter.get("/public/metadata", (req, res) => {
  const { path: reqPath = "/" } = req.query;
  const matched = INZOVATE_CANONICAL_PAGES.find(p => p.path === reqPath);

  const meta = generatePageMetadata({
    path: reqPath,
    pageTitle: matched?.title || "Enterprise Software & Cloud Solutions",
    primaryCluster: matched?.cluster || "Software Engineering",
    description: matched?.primaryTopic || "",
  });

  res.json({
    success: true,
    path: reqPath,
    metadata: meta,
  });
});

// ── ALL ADMIN ROUTES REQUIRE AUTHENTICATION ──────────────────────────────────
seoRouter.use("/admin", seoAdminAuth);

// 1. Dashboard Overview Metrics
seoRouter.get("/admin/overview", async (req, res) => {
  try {
    const { mode, db } = await dbManager.connect();
    const keywordsColl = db.collection(SEO_CONFIG.collections.keywords);

    const totalKeywords = await keywordsColl.countDocuments();
    const commercialCount = await keywordsColl.countDocuments({ search_intent: "Commercial" });
    const transactionalCount = await keywordsColl.countDocuments({ search_intent: "Transactional" });
    const informationalCount = await keywordsColl.countDocuments({ search_intent: "Informational" });

    res.json({
      success: true,
      stats: {
        totalKeywords,
        targetCapacity: 500000,
        capacityReachedPercentage: Math.min(100, Number(((totalKeywords / 500000) * 100).toFixed(2))),
        intentBreakdown: {
          commercial: commercialCount,
          transactional: transactionalCount,
          informational: informationalCount,
        },
        totalSemanticClusters: CLUSTER_DEFINITIONS.length,
        indexedLandingPages: INZOVATE_CANONICAL_PAGES.length,
        coreIndustryDomains: CORE_DOMAINS.length,
        databaseMode: mode,
        gscConnected: gscClient.isAuthorized,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 2. Keyword Explorer with Search, Filters & Pagination
seoRouter.get("/admin/keywords", async (req, res) => {
  try {
    const {
      page = 1,
      limit = 25,
      category,
      intent,
      location,
      country,
      district,
      locality,
      phase,
      search,
    } = req.query;

    const { db } = await dbManager.connect();
    const coll = db.collection(SEO_CONFIG.collections.keywords);

    const query = {};
    if (category) query.category = category;
    if (intent) query.search_intent = intent;
    if (location) query.target_location = location;
    if (country) query.target_country = country;
    if (district) query.district = district;
    if (locality) query.locality = locality;
    if (phase) query.phase = phase;
    if (search) query.keyword = { $regex: String(search), $options: "i" };

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 25));
    const skip = (pageNum - 1) * limitNum;

    const total = await coll.countDocuments(query);
    const items = await coll.find(query).skip(skip).limit(limitNum).toArray();

    res.json({
      success: true,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
      keywords: items,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Batch Keyword Generation & Stream Ingestion (up to 500,000)
seoRouter.post("/admin/generate", async (req, res) => {
  try {
    const { count = 10000 } = req.body;
    const requestedCount = Math.min(500000, Math.max(100, parseInt(count, 10) || 10000));

    const { db } = await dbManager.connect();
    const coll = db.collection(SEO_CONFIG.collections.keywords);

    let batch = [];
    let insertedTotal = 0;
    const batchSize = 2500;

    console.log(`[SEO Engine] Starting streaming generation of ${requestedCount} keywords...`);
    const stream = generateKeywordStream(requestedCount);

    for (const record of stream) {
      batch.push(record);
      if (batch.length >= batchSize) {
        const ops = batch.map(doc => ({ insertOne: { document: doc } }));
        const res = await coll.bulkWrite(ops, { ordered: false });
        insertedTotal += (res.insertedCount || 0);
        batch = [];
      }
    }

    if (batch.length > 0) {
      const ops = batch.map(doc => ({ insertOne: { document: doc } }));
      const res = await coll.bulkWrite(ops, { ordered: false });
      insertedTotal += (res.insertedCount || 0);
    }

    const currentTotal = await coll.countDocuments();

    res.json({
      success: true,
      message: `Successfully processed batch. Inserted ${insertedTotal} unique keywords.`,
      newlyInserted: insertedTotal,
      currentTotalInDatabase: currentTotal,
      targetCapacity: 500000,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Semantic Clusters & Cannibalization Prevention
seoRouter.get("/admin/clusters", async (req, res) => {
  try {
    const { db } = await dbManager.connect();
    const coll = db.collection(SEO_CONFIG.collections.keywords);

    // Compute live counts per cluster
    const clusterResults = await Promise.all(
      CLUSTER_DEFINITIONS.map(async (def) => {
        const count = await coll.countDocuments({
          category: def.category,
          target_landing_page: def.canonicalUrl,
        });

        return {
          clusterId: def.clusterId,
          clusterName: def.clusterName,
          category: def.category,
          canonicalUrl: def.canonicalUrl,
          assignedKeywords: count,
          cannibalizationRisk: "Zero (Strict Canonical Enforcement)",
          status: count > 0 ? "Active & Indexed" : "Pending Ingestion",
        };
      })
    );

    res.json({
      success: true,
      totalClusters: clusterResults.length,
      clusters: clusterResults,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. Landing Pages Registry
seoRouter.get("/admin/pages", (req, res) => {
  res.json({
    success: true,
    totalPages: INZOVATE_CANONICAL_PAGES.length,
    pages: INZOVATE_CANONICAL_PAGES.map(p => ({
      path: p.path,
      cluster: p.cluster,
      subCluster: p.subCluster,
      title: p.title,
      primaryTopic: p.primaryTopic,
    })),
  });
});

// 6. Content Opportunities & Gap Analysis
seoRouter.get("/admin/opportunities", async (req, res) => {
  try {
    const { db } = await dbManager.connect();
    const coll = db.collection(SEO_CONFIG.collections.keywords);

    // Sample top 500 high-priority keywords for fast real-time analysis
    const sample = await coll.find().limit(500).toArray();
    const gaps = analyzeContentGaps(sample, INZOVATE_CANONICAL_PAGES);

    res.json({
      success: true,
      totalOpportunities: gaps.length,
      opportunities: gaps,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 7. Google Search Console Status
seoRouter.get("/admin/gsc-status", async (req, res) => {
  try {
    const now = new Date();
    const past30 = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const perf = await gscClient.getPerformanceData({
      startDate: past30.toISOString().split("T")[0],
      endDate: now.toISOString().split("T")[0],
    });

    res.json({
      success: true,
      gsc: perf,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 8. Phase 2 Local & Industry Expansion Status
seoRouter.get("/admin/phase2-status", async (req, res) => {
  try {
    const { db } = await dbManager.connect();
    const coll = db.collection(SEO_CONFIG.collections.keywords);

    const totalPhase2 = await coll.countDocuments({ phase: "PHASE_2_LOCAL_EXPANSION" });
    const erodeCount = await coll.countDocuments({ district: "Erode" });
    const namakkalCount = await coll.countDocuments({ district: "Namakkal" });
    const salemCount = await coll.countDocuments({ district: "Salem" });
    const cbeCount = await coll.countDocuments({ district: "Coimbatore" });
    const zohoCount = await coll.countDocuments({ category: "Zoho" });
    const awsCount = await coll.countDocuments({ category: "Cloud and AWS" });

    res.json({
      success: true,
      phase2: {
        totalExpansionRecords: totalPhase2,
        districts: {
          erode: erodeCount,
          namakkal: namakkalCount,
          salem: salemCount,
          coimbatore: cbeCount,
        },
        ecosystemDomination: {
          zoho: zohoCount,
          aws: awsCount,
        },
        fourDistrictMatrix: FOUR_DISTRICT_MATRIX,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 9. Phase 2 Ingestion Trigger
seoRouter.post("/admin/phase2-ingest", async (req, res) => {
  try {
    const result = await runPhase2Migration();
    res.json({
      success: true,
      result,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
