/**
 * INZOVATE TECHNOLOGIES - LOCATION-BASED SEO INTELLIGENCE ENGINE
 * 
 * Supports Hyperlocal Tamil Nadu cities, Indian tech metros, and Global tier-1 markets.
 * Principle: Location landing pages are only published where genuine local relevance exists.
 */

export const LOCATION_MATRIX = [
  // ── Hyperlocal Tier (Western & Central Tamil Nadu Hubs) ──────────────────────
  { name: "Bhavani", state: "Tamil Nadu", country: "India", tier: "hyperlocal", weight: 0.98, hasDedicatedHub: true, slug: "bhavani" },
  { name: "Erode", state: "Tamil Nadu", country: "India", tier: "hyperlocal", weight: 0.98, hasDedicatedHub: true, slug: "erode" },
  { name: "Coimbatore", state: "Tamil Nadu", country: "India", tier: "hyperlocal", weight: 0.97, hasDedicatedHub: true, slug: "coimbatore" },
  { name: "Salem", state: "Tamil Nadu", country: "India", tier: "hyperlocal", weight: 0.96, hasDedicatedHub: true, slug: "salem" },
  { name: "Tiruchengode", state: "Tamil Nadu", country: "India", tier: "hyperlocal", weight: 0.95, hasDedicatedHub: true, slug: "tiruchengode" },
  { name: "Namakkal", state: "Tamil Nadu", country: "India", tier: "hyperlocal", weight: 0.94, hasDedicatedHub: true, slug: "namakkal" },
  { name: "Tirupur", state: "Tamil Nadu", country: "India", tier: "hyperlocal", weight: 0.95, hasDedicatedHub: true, slug: "tirupur" },
  { name: "Karur", state: "Tamil Nadu", country: "India", tier: "hyperlocal", weight: 0.93, hasDedicatedHub: true, slug: "karur" },

  // ── Regional Tier (State & South India) ──────────────────────────────────────
  { name: "Tamil Nadu", state: "Tamil Nadu", country: "India", tier: "state", weight: 0.88, hasDedicatedHub: true, slug: "tamil-nadu" },
  { name: "South India", state: "South India", country: "India", tier: "regional", weight: 0.85, hasDedicatedHub: false, slug: "south-india" },

  // ── Metro Tier (Indian Major Tech Hubs) ──────────────────────────────────────
  { name: "Chennai", state: "Tamil Nadu", country: "India", tier: "metro", weight: 0.92, hasDedicatedHub: true, slug: "chennai" },
  { name: "Bengaluru", state: "Karnataka", country: "India", tier: "metro", weight: 0.92, hasDedicatedHub: true, slug: "bengaluru" },
  { name: "Hyderabad", state: "Telangana", country: "India", tier: "metro", weight: 0.90, hasDedicatedHub: true, slug: "hyderabad" },
  { name: "Mumbai", state: "Maharashtra", country: "India", tier: "metro", weight: 0.89, hasDedicatedHub: false, slug: "mumbai" },
  { name: "Pune", state: "Maharashtra", country: "India", tier: "metro", weight: 0.89, hasDedicatedHub: false, slug: "pune" },
  { name: "Delhi NCR", state: "Delhi", country: "India", tier: "metro", weight: 0.88, hasDedicatedHub: false, slug: "delhi-ncr" },
  { name: "Ahmedabad", state: "Gujarat", country: "India", tier: "metro", weight: 0.86, hasDedicatedHub: false, slug: "ahmedabad" },
  { name: "Kolkata", state: "West Bengal", country: "India", tier: "metro", weight: 0.85, hasDedicatedHub: false, slug: "kolkata" },

  // ── National Tier ───────────────────────────────────────────────────────────
  { name: "India", state: "National", country: "India", tier: "national", weight: 0.85, hasDedicatedHub: true, slug: "india" },

  // ── Global Markets Tier ─────────────────────────────────────────────────────
  { name: "USA", state: "International", country: "USA", tier: "global", weight: 0.90, hasDedicatedHub: false, slug: "usa" },
  { name: "UK", state: "International", country: "UK", tier: "global", weight: 0.88, hasDedicatedHub: false, slug: "uk" },
  { name: "UAE", state: "International", country: "UAE", tier: "global", weight: 0.90, hasDedicatedHub: false, slug: "uae" },
  { name: "Dubai", state: "International", country: "UAE", tier: "global", weight: 0.91, hasDedicatedHub: false, slug: "dubai" },
  { name: "Singapore", state: "International", country: "Singapore", tier: "global", weight: 0.89, hasDedicatedHub: false, slug: "singapore" },
  { name: "Australia", state: "International", country: "Australia", tier: "global", weight: 0.87, hasDedicatedHub: false, slug: "australia" },
  { name: "Canada", state: "International", country: "Canada", tier: "global", weight: 0.87, hasDedicatedHub: false, slug: "canada" },
  { name: "Germany", state: "International", country: "Germany", tier: "global", weight: 0.85, hasDedicatedHub: false, slug: "germany" },
];

export function findLocation(locationName = "") {
  const norm = locationName.toLowerCase().trim();
  return LOCATION_MATRIX.find(loc => loc.name.toLowerCase() === norm || loc.slug === norm) || null;
}
