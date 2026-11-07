/**
 * INZOVATE TECHNOLOGIES - PHASE 2 FOUR-DISTRICT LOCAL SEO MATRIX
 * 
 * Comprehensive locality coverage across Western & Central Tamil Nadu:
 * 1. Erode District (Bhavani, Perundurai, Gobichettipalayam, Sathyamangalam, etc.)
 * 2. Namakkal District (Namakkal, Tiruchengode, Rasipuram, Komarapalayam, Pallipalayam, etc.)
 * 3. Salem District (Salem, Attur, Mettur, Omalur, Sankagiri, Edappadi, etc.)
 * 4. Coimbatore District (Coimbatore, Pollachi, Mettupalayam, Sulur, Saravanampatti, etc.)
 */

export const FOUR_DISTRICT_MATRIX = {
  erode: {
    district: "Erode",
    state: "Tamil Nadu",
    country: "India",
    primaryHub: "Bhavani / Erode (Headquarters)",
    isHeadquartersDistrict: true,
    localities: [
      { name: "Erode", type: "City", priority: 1.0, slug: "erode" },
      { name: "Bhavani", type: "Headquarters Town", priority: 1.0, slug: "bhavani" },
      { name: "Perundurai", type: "Industrial SIPCOT Hub", priority: 0.95, slug: "perundurai" },
      { name: "Gobichettipalayam", type: "Agriculture & Commercial Hub", priority: 0.92, slug: "gobichettipalayam" },
      { name: "Sathyamangalam", type: "Commercial Town", priority: 0.90, slug: "sathyamangalam" },
      { name: "Anthiyur", type: "Town", priority: 0.88, slug: "anthiyur" },
      { name: "Chennimalai", type: "Textile Handloom Hub", priority: 0.90, slug: "chennimalai" },
      { name: "Modakurichi", type: "Town", priority: 0.85, slug: "modakurichi" },
      { name: "Kodumudi", type: "Town", priority: 0.85, slug: "kodumudi" },
      { name: "Bhavanisagar", type: "Town", priority: 0.84, slug: "bhavanisagar" },
      { name: "Sivagiri", type: "Town", priority: 0.84, slug: "sivagiri" },
      { name: "Nambiyur", type: "Town", priority: 0.83, slug: "nambiyur" },
      { name: "Ammapettai", type: "Town", priority: 0.83, slug: "ammapettai" },
      { name: "Thalavadi", type: "Hill Border Town", priority: 0.80, slug: "thalavadi" },
    ],
  },

  namakkal: {
    district: "Namakkal",
    state: "Tamil Nadu",
    country: "India",
    primaryHub: "Namakkal / Tiruchengode",
    isHeadquartersDistrict: false,
    localities: [
      { name: "Namakkal", type: "District Headquarters / Transport Hub", priority: 0.98, slug: "namakkal" },
      { name: "Tiruchengode", type: "Rig, Textile & Industrial Hub", priority: 0.98, slug: "tiruchengode" },
      { name: "Rasipuram", type: "Textile & Ghee Commerce Hub", priority: 0.92, slug: "rasipuram" },
      { name: "Komarapalayam", type: "Textile & Processing Hub", priority: 0.94, slug: "komarapalayam" },
      { name: "Pallipalayam", type: "Textile & Manufacturing Hub", priority: 0.93, slug: "pallipalayam" },
      { name: "Paramathi Velur", type: "Agriculture & Commercial Town", priority: 0.87, slug: "paramathi-velur" },
      { name: "Sendamangalam", type: "Town", priority: 0.85, slug: "sendamangalam" },
      { name: "Mohanur", type: "Sugar & Agriculture Town", priority: 0.85, slug: "mohanur" },
      { name: "Erumapatti", type: "Town", priority: 0.82, slug: "erumapatti" },
      { name: "Kolli Hills", type: "Hill Eco Region", priority: 0.80, slug: "kolli-hills" },
      { name: "Kumarapalayam", type: "Textile & Dyeing Town", priority: 0.92, slug: "kumarapalayam" },
    ],
  },

  salem: {
    district: "Salem",
    state: "Tamil Nadu",
    country: "India",
    primaryHub: "Salem City",
    isHeadquartersDistrict: false,
    localities: [
      { name: "Salem", type: "Corporation City / Steel & Textile Hub", priority: 0.98, slug: "salem" },
      { name: "Attur", type: "Commercial Agricultural Hub", priority: 0.91, slug: "attur" },
      { name: "Mettur", type: "Chemical & Industrial Power Hub", priority: 0.92, slug: "mettur" },
      { name: "Omalur", type: "Commercial Suburb", priority: 0.88, slug: "omalur" },
      { name: "Sankagiri", type: "Logistics & Transport Hub", priority: 0.90, slug: "sankagiri" },
      { name: "Edappadi", type: "Textile & Powerloom Hub", priority: 0.89, slug: "edappadi" },
      { name: "Yercaud", type: "Hospitality & Tourism Hub", priority: 0.85, slug: "yercaud" },
      { name: "Tharamangalam", type: "Textile & Weaving Town", priority: 0.86, slug: "tharamangalam" },
      { name: "Gangavalli", type: "Town", priority: 0.83, slug: "gangavalli" },
      { name: "Vazhapadi", type: "Town", priority: 0.84, slug: "vazhapadi" },
      { name: "Pethanaickenpalayam", type: "Town", priority: 0.82, slug: "pethanaickenpalayam" },
      { name: "Mecheri", type: "Town", priority: 0.83, slug: "mecheri" },
      { name: "Kolathur", type: "Town", priority: 0.82, slug: "kolathur" },
    ],
  },

  coimbatore: {
    district: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    primaryHub: "Coimbatore Metro",
    isHeadquartersDistrict: false,
    localities: [
      { name: "Coimbatore", type: "Tech Metro / Industrial Capital", priority: 1.0, slug: "coimbatore" },
      { name: "Pollachi", type: "Agro-industrial & Commercial City", priority: 0.93, slug: "pollachi" },
      { name: "Mettupalayam", type: "Industrial & Transport Gateway", priority: 0.90, slug: "mettupalayam" },
      { name: "Sulur", type: "Aviation & Engineering Town", priority: 0.89, slug: "sulur" },
      { name: "Annur", type: "Industrial & Textile Town", priority: 0.88, slug: "annur" },
      { name: "Kinathukadavu", type: "Industrial Suburb", priority: 0.87, slug: "kinathukadavu" },
      { name: "Madukkarai", type: "Cement & Manufacturing Town", priority: 0.87, slug: "madukkarai" },
      { name: "Perur", type: "Commercial Suburb", priority: 0.86, slug: "perur" },
      { name: "Karamadai", type: "Town", priority: 0.86, slug: "karamadai" },
      { name: "Thondamuthur", type: "Agro Town", priority: 0.85, slug: "thondamuthur" },
      { name: "Valparai", type: "Plantation Region", priority: 0.82, slug: "valparai" },
      { name: "Saravanampatti", type: "IT SEZ / Tech Corridor", priority: 0.98, slug: "saravanampatti" },
      { name: "Peelamedu", type: "Commercial / Educational Tech Hub", priority: 0.96, slug: "peelamedu" },
      { name: "Gandhipuram", type: "Central Commercial District", priority: 0.95, slug: "gandhipuram" },
      { name: "RS Puram", type: "Corporate / Retail Hub", priority: 0.94, slug: "rs-puram" },
      { name: "Singanallur", type: "Industrial & Commercial Hub", priority: 0.92, slug: "singanallur" },
    ],
  },
};

/**
 * Returns all localities flattened with district context
 */
export function getAllFourDistrictLocalities() {
  const result = [];
  for (const distKey of Object.keys(FOUR_DISTRICT_MATRIX)) {
    const dist = FOUR_DISTRICT_MATRIX[distKey];
    for (const loc of dist.localities) {
      result.push({
        district: dist.district,
        districtKey: distKey,
        locality: loc.name,
        type: loc.type,
        priority: loc.priority,
        slug: loc.slug,
        isHeadquarters: dist.isHeadquartersDistrict && loc.name === "Bhavani",
      });
    }
  }
  return result;
}

/**
 * Helper to match locality string to district
 */
export function identifyDistrict(localityOrCity = "") {
  const norm = localityOrCity.toLowerCase().trim();
  for (const distKey of Object.keys(FOUR_DISTRICT_MATRIX)) {
    const dist = FOUR_DISTRICT_MATRIX[distKey];
    if (dist.district.toLowerCase() === norm) return dist.district;
    if (dist.localities.some(loc => loc.name.toLowerCase() === norm)) {
      return dist.district;
    }
  }
  return "Tamil Nadu";
}
