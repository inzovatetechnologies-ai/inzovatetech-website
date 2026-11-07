/**
 * INZOVATE TECHNOLOGIES - SEO KEYWORD DEDUPLICATION ENGINE
 * 
 * Generates cryptographic and canonical hashes for duplicate prevention.
 */

import crypto from "crypto";

/**
 * Normalizes keyword string for standard comparison
 * Removes trailing/leading spaces, multiple internal spaces, and non-alphanumeric punctuation.
 */
export function normalizeKeyword(str = "") {
  return String(str)
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, " ");
}

/**
 * Computes deterministic SHA-256 hash of normalized keyword string
 */
export function getKeywordHash(str = "") {
  const normalized = normalizeKeyword(str);
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

/**
 * Fast deduplication set for streaming pipelines
 */
export class StreamingDeduplicator {
  constructor() {
    this.seenHashes = new Set();
  }

  has(keyword) {
    const hash = getKeywordHash(keyword);
    return this.seenHashes.has(hash);
  }

  add(keyword) {
    const hash = getKeywordHash(keyword);
    if (this.seenHashes.has(hash)) {
      return false; // Already existed
    }
    this.seenHashes.add(hash);
    return true; // Added successfully
  }

  size() {
    return this.seenHashes.size;
  }

  clear() {
    this.seenHashes.clear();
  }
}
