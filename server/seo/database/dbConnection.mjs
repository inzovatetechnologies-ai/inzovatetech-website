/**
 * INZOVATE TECHNOLOGIES - DATABASE CONNECTION & STORAGE ADAPTER
 * 
 * Supports MongoDB with resilient pooling, plus an embedded high-performance 
 * fallback store if MongoDB is not currently running locally or in CI/CD.
 */

import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SEO_CONFIG } from "../config/seoConfig.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fallbackDir = path.resolve(__dirname, "../data_store");

class DatabaseManager {
  constructor() {
    this.client = null;
    this.db = null;
    this.isConnected = false;
    this.useFallback = false;
    this.fallbackData = new Map(); // collectionName -> Array of documents or index
    this.fallbackIndices = new Map(); // collectionName -> Map of hash -> doc
  }

  async connect() {
    if (this.isConnected && this.db) {
      return { client: this.client, db: this.db, mode: this.useFallback ? "fallback" : "mongodb" };
    }

    const uri = SEO_CONFIG.database.uri;
    const dbName = SEO_CONFIG.database.dbName;

    try {
      this.client = new MongoClient(uri, {
        serverSelectionTimeoutMS: 2000,
        connectTimeoutMS: 2500,
        maxPoolSize: 50,
      });

      await this.client.connect();
      this.db = this.client.db(dbName);
      this.isConnected = true;
      this.useFallback = false;
      console.log(`[SEO Engine] Connected successfully to MongoDB: ${dbName}`);
      return { client: this.client, db: this.db, mode: "mongodb" };
    } catch (err) {
      console.warn(`[SEO Engine] MongoDB not reachable at ${uri}. Engaging high-speed local data store adapter. (${err.message})`);
      this.useFallback = true;
      this.isConnected = true;
      this.initFallbackStore();
      return { client: null, db: this.getFallbackDb(), mode: "fallback" };
    }
  }

  initFallbackStore() {
    if (!fs.existsSync(fallbackDir)) {
      fs.mkdirSync(fallbackDir, { recursive: true });
    }
    for (const key of Object.values(SEO_CONFIG.collections)) {
      if (!this.fallbackData.has(key)) {
        this.fallbackData.set(key, []);
        this.fallbackIndices.set(key, new Map());
      }
    }
  }

  getFallbackDb() {
    const manager = this;

    return {
      collection(collectionName) {
        if (!manager.fallbackData.has(collectionName)) {
          manager.fallbackData.set(collectionName, []);
          manager.fallbackIndices.set(collectionName, new Map());
        }

        const items = manager.fallbackData.get(collectionName);
        const indexMap = manager.fallbackIndices.get(collectionName);

        return {
          async countDocuments(query = {}) {
            if (!query || Object.keys(query).length === 0) return items.length;
            return items.filter(doc => matchesQuery(doc, query)).length;
          },

          find(query = {}) {
            let filtered = items.filter(doc => matchesQuery(doc, query));
            let _skip = 0;
            let _limit = 50;
            let _sort = null;

            const cursor = {
              sort(sortObj) {
                _sort = sortObj;
                return cursor;
              },
              skip(n) {
                _skip = Math.max(0, n || 0);
                return cursor;
              },
              limit(n) {
                _limit = Math.max(1, n || 50);
                return cursor;
              },
              async toArray() {
                let res = [...filtered];
                if (_sort) {
                  const [field, dir] = Object.entries(_sort)[0];
                  res.sort((a, b) => {
                    if (a[field] < b[field]) return dir === -1 ? 1 : -1;
                    if (a[field] > b[field]) return dir === -1 ? -1 : 1;
                    return 0;
                  });
                }
                return res.slice(_skip, _skip + _limit);
              },
            };
            return cursor;
          },

          async findOne(query = {}) {
            return items.find(doc => matchesQuery(doc, query)) || null;
          },

          async insertOne(doc) {
            const copy = { ...doc, _id: doc._id || `id_${Date.now()}_${Math.random().toString(36).substring(2, 7)}` };
            items.push(copy);
            if (copy.keyword_hash) indexMap.set(copy.keyword_hash, copy);
            return { acknowledged: true, insertedId: copy._id };
          },

          async insertMany(docs, options = {}) {
            let insertedCount = 0;
            for (const doc of docs) {
              const hash = doc.keyword_hash || doc.keyword;
              if (indexMap.has(hash)) {
                if (options.ordered) break;
                continue;
              }
              const copy = { ...doc, _id: doc._id || `id_${items.length + 1}` };
              items.push(copy);
              indexMap.set(hash, copy);
              insertedCount++;
            }
            return { acknowledged: true, insertedCount };
          },

          async bulkWrite(ops, options = {}) {
            let insertedCount = 0;
            let modifiedCount = 0;
            for (const op of ops) {
              if (op.insertOne) {
                const doc = op.insertOne.document;
                const hash = doc.keyword_hash || doc.keyword;
                if (!indexMap.has(hash)) {
                  items.push({ ...doc, _id: doc._id || `id_${items.length + 1}` });
                  indexMap.set(hash, doc);
                  insertedCount++;
                }
              } else if (op.updateOne) {
                const filter = op.updateOne.filter;
                const update = op.updateOne.update;
                const existing = items.find(doc => matchesQuery(doc, filter));
                if (existing && update.$set) {
                  Object.assign(existing, update.$set);
                  modifiedCount++;
                }
              }
            }
            return { acknowledged: true, insertedCount, modifiedCount };
          },

          async createIndex(keys, options) {
            return "index_created_fallback";
          },

          async createIndexes(indexSpecs) {
            return indexSpecs.map(i => i.name || "idx");
          },

          async aggregate(pipeline = []) {
            // Basic aggregator mock for metrics
            return {
              async toArray() {
                return [];
              }
            };
          },

          async deleteMany(query = {}) {
            const before = items.length;
            if (Object.keys(query).length === 0) {
              items.length = 0;
              indexMap.clear();
              return { acknowledged: true, deletedCount: before };
            }
            const keep = items.filter(doc => !matchesQuery(doc, query));
            items.length = 0;
            items.push(...keep);
            indexMap.clear();
            items.forEach(d => indexMap.set(d.keyword_hash || d.keyword, d));
            return { acknowledged: true, deletedCount: before - items.length };
          }
        };
      }
    };
  }

  async close() {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
      this.isConnected = false;
    }
  }
}

function matchesQuery(doc, query) {
  for (const [key, val] of Object.entries(query)) {
    if (val && typeof val === "object" && !Array.isArray(val)) {
      if (val.$regex) {
        const regex = new RegExp(val.$regex, val.$options || "");
        if (!regex.test(doc[key] || "")) return false;
      }
      if (val.$in && Array.isArray(val.$in)) {
        if (!val.$in.includes(doc[key])) return false;
      }
      if (val.$gte !== undefined && (doc[key] === undefined || doc[key] < val.$gte)) return false;
      if (val.$lte !== undefined && (doc[key] === undefined || doc[key] > val.$lte)) return false;
    } else {
      if (doc[key] !== val) return false;
    }
  }
  return true;
}

export const dbManager = new DatabaseManager();
