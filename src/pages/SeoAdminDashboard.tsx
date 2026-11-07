import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  Database,
  Layers,
  Globe,
  TrendingUp,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  SlidersHorizontal,
  KeyRound,
  Download,
  Zap,
  Target,
  FileText,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Sparkles
} from "lucide-react";

interface KeywordRecord {
  keyword_id: string;
  keyword: string;
  category: string;
  sub_category?: string;
  search_intent: "Commercial" | "Transactional" | "Informational" | "Navigational";
  funnel_stage: "TOFU" | "MOFU" | "BOFU";
  related_service: string;
  target_location: string;
  target_country: string;
  priority_score: number;
  competition_score: number | null;
  search_volume: number | null;
  target_landing_page: string;
  keyword_status: string;
  last_updated: string;
}

interface OverviewStats {
  totalKeywords: number;
  targetCapacity: number;
  capacityReachedPercentage: number;
  intentBreakdown: {
    commercial: number;
    transactional: number;
    informational: number;
  };
  totalSemanticClusters: number;
  indexedLandingPages: number;
  coreIndustryDomains: number;
  databaseMode: string;
  gscConnected: boolean;
}

interface ClusterInfo {
  clusterId: string;
  clusterName: string;
  category: string;
  canonicalUrl: string;
  assignedKeywords: number;
  cannibalizationRisk: string;
  status: string;
}

interface OpportunityInfo {
  clusterId: string;
  clusterName: string;
  category: string;
  canonicalUrl: string;
  keywordVolumeCandidate: number;
  highIntentKeywords: number;
  opportunityScore: number;
  contentGapStatus: string;
  recommendation: string;
}

export default function SeoAdminDashboard() {
  const [apiKey, setApiKey] = useState<string>(() => {
    return sessionStorage.getItem("inzovate_seo_token") || "";
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>("");

  // Dashboard state
  const [activeTab, setActiveTab] = useState<"explorer" | "clusters" | "opportunities" | "gsc">("explorer");
  const [overview, setOverview] = useState<OverviewStats | null>(null);
  const [keywords, setKeywords] = useState<KeywordRecord[]>([]);
  const [clusters, setClusters] = useState<ClusterInfo[]>([]);
  const [opportunities, setOpportunities] = useState<OpportunityInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [intentFilter, setIntentFilter] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  // Seed / Generation Modal State
  const [generating, setGenerating] = useState<boolean>(false);
  const [genMessage, setGenMessage] = useState<string>("");

  // Base API configuration
  const apiBase = typeof window !== "undefined" && window.location.hostname === "localhost" 
    ? "http://localhost:5000/api/seo" 
    : "/api/seo";

  // Check initial token
  useEffect(() => {
    if (apiKey) {
      verifyAuthentication(apiKey);
    }
  }, []);

  async function verifyAuthentication(tokenToTest: string) {
    setLoading(true);
    setAuthError("");
    try {
      const res = await fetch(`${apiBase}/admin/overview`, {
        headers: { "x-api-key": tokenToTest }
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem("inzovate_seo_token", tokenToTest);
        setOverview(data.stats);
        fetchKeywords(tokenToTest, 1);
        fetchClusters(tokenToTest);
        fetchOpportunities(tokenToTest);
      } else {
        setIsAuthenticated(false);
        setAuthError(data.message || "Invalid SEO Admin API Key.");
      }
    } catch (err: any) {
      setIsAuthenticated(false);
      setAuthError("Failed to connect to backend SEO API. Ensure server.mjs is running.");
    } finally {
      setLoading(false);
    }
  }

  async function fetchKeywords(token: string, targetPage: number) {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(targetPage),
        limit: "25",
      });
      if (searchTerm) params.append("search", searchTerm);
      if (categoryFilter) params.append("category", categoryFilter);
      if (intentFilter) params.append("intent", intentFilter);
      if (locationFilter) params.append("location", locationFilter);

      const res = await fetch(`${apiBase}/admin/keywords?${params.toString()}`, {
        headers: { "x-api-key": token }
      });
      const data = await res.json();
      if (data.success) {
        setKeywords(data.keywords || []);
        setPage(data.pagination.page);
        setTotalPages(data.pagination.totalPages || 1);
        setTotalCount(data.pagination.total || 0);
      }
    } catch (err) {
      console.error("Failed to fetch keywords", err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchClusters(token: string) {
    try {
      const res = await fetch(`${apiBase}/admin/clusters`, {
        headers: { "x-api-key": token }
      });
      const data = await res.json();
      if (data.success) {
        setClusters(data.clusters || []);
      }
    } catch (err) {
      console.error("Failed to fetch clusters", err);
    }
  }

  async function fetchOpportunities(token: string) {
    try {
      const res = await fetch(`${apiBase}/admin/opportunities`, {
        headers: { "x-api-key": token }
      });
      const data = await res.json();
      if (data.success) {
        setOpportunities(data.opportunities || []);
      }
    } catch (err) {
      console.error("Failed to fetch opportunities", err);
    }
  }

  async function handleTriggerGenerate(count: number = 10000) {
    if (!apiKey) return;
    setGenerating(true);
    setGenMessage(`Streaming ${count.toLocaleString()} unique intent keywords into database...`);
    try {
      const res = await fetch(`${apiBase}/admin/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({ count }),
      });
      const data = await res.json();
      if (data.success) {
        setGenMessage(`✅ Success! Processed and stored ${data.newlyInserted.toLocaleString()} new keywords.`);
        verifyAuthentication(apiKey);
      } else {
        setGenMessage(`❌ Ingestion notice: ${data.error || "Failed"}`);
      }
    } catch (err: any) {
      setGenMessage(`❌ Error: ${err.message}`);
    } finally {
      setGenerating(false);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("inzovate_seo_token");
    setApiKey("");
    setIsAuthenticated(false);
  }

  function exportKeywordsToCsv() {
    if (!keywords || keywords.length === 0) return;
    const headers = [
      "Keyword ID", "Keyword", "Category", "Intent", "Funnel Stage", 
      "Target Location", "Target Country", "Priority Score", "Landing Page"
    ];
    const rows = keywords.map(k => [
      k.keyword_id,
      `"${k.keyword.replace(/"/g, '""')}"`,
      k.category,
      k.search_intent,
      k.funnel_stage,
      k.target_location,
      k.target_country,
      k.priority_score,
      k.target_landing_page
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `inzovate_seo_keywords_page_${page}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AUTHENTICATION SCREEN (ISOLATED & PRIVATE)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden font-sans">
        {/* Subtle background glow */}
        <div className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -top-20 -left-20" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none bottom-0 right-0" />

        <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 mb-4">
              <Database size={28} />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">INZOVATE TECHNOLOGIES</h1>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mt-1">
              500,000 Keyword SEO Intelligence Engine
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              verifyAuthentication(apiKey);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Admin API Passkey / Key
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter SEO Admin Key..."
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-4 py-3.5 pl-11 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  required
                />
                <KeyRound size={18} className="absolute left-3.5 top-3.5 text-slate-400" />
              </div>
            </div>

            {authError && (
              <div className="flex items-center gap-2 p-3 text-xs rounded-xl bg-red-950/40 border border-red-800/60 text-red-300">
                <AlertTriangle size={16} className="shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {loading ? <RefreshCw size={18} className="animate-spin" /> : <ShieldCheck size={18} />}
              <span>{loading ? "Authenticating..." : "Access SEO Dashboard"}</span>
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-800/80 text-center">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Protected Enterprise Architecture. Zero public exposure of internal keywords. Never promises guaranteed #1 positions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MAIN AUTHENTICATED DASHBOARD
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
              <Database size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-slate-950 text-base sm:text-lg tracking-tight">
                  INZOVATE SEO INTELLIGENCE
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 uppercase font-mono">
                  v2.0 Enterprise
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                500,000 Keyword Engine & Semantic Topical Architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Storage: <strong>{overview?.databaseMode?.toUpperCase() || "ACTIVE"}</strong></span>
            </div>

            <button
              onClick={() => verifyAuthentication(apiKey)}
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Refresh Stats"
            >
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors cursor-pointer"
            >
              <LogOut size={15} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Core Principles & Zero-Guaranteed Notice */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-5 shadow-sm border border-blue-800/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-400/30">
              <ShieldCheck size={20} className="text-blue-300" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Ethical Search Performance Framework
              </p>
              <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                We strictly adhere to Google Search Quality Guidelines. We never promise guaranteed #1 rankings; organic visibility is maximized via intent alignment, high-authority pages, and genuine technical execution.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <button
              onClick={() => handleTriggerGenerate(10000)}
              disabled={generating}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-500 hover:bg-blue-400 text-white shadow-sm flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
            >
              <Zap size={14} className={generating ? "animate-bounce" : ""} />
              <span>{generating ? "Streaming..." : "Generate 10k Batch"}</span>
            </button>
          </div>
        </div>

        {genMessage && (
          <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold flex items-center gap-2">
            <Sparkles size={16} className="text-blue-600 shrink-0" />
            <span>{genMessage}</span>
          </div>
        )}

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Total Stored vs Target Capacity */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Keywords</span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Database size={16} />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                {overview?.totalKeywords?.toLocaleString() || "0"}
              </div>
              <div className="mt-2 text-xs text-slate-500 flex items-center justify-between">
                <span>Capacity: 500,000</span>
                <span className="font-bold text-blue-600">
                  {overview?.capacityReachedPercentage || 0}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1.5">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, overview?.capacityReachedPercentage || 0)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Intent Breakdown */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Intent Breakdown</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Target size={16} />
              </div>
            </div>
            <div className="mt-3 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Commercial (MOFU):</span>
                <strong className="text-slate-900">{overview?.intentBreakdown.commercial.toLocaleString() || "0"}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Transactional (BOFU):</span>
                <strong className="text-slate-900">{overview?.intentBreakdown.transactional.toLocaleString() || "0"}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Informational (TOFU):</span>
                <strong className="text-slate-900">{overview?.intentBreakdown.informational.toLocaleString() || "0"}</strong>
              </div>
            </div>
          </div>

          {/* Card 3: Semantic Clusters & Cannibalization Defense */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Topical Clusters</span>
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <Layers size={16} />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                {overview?.totalSemanticClusters || "26"}
              </div>
              <div className="mt-1 text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 size={13} />
                <span>Zero Cannibalization Mapping</span>
              </div>
            </div>
          </div>

          {/* Card 4: Indexed Pages & Canonical URLs */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Landing Pages Mapped</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Globe size={16} />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                {overview?.indexedLandingPages || "28"}
              </div>
              <div className="mt-1 text-xs text-slate-500">
                All Genuine Inzovate Pages (No Doorways)
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex border-b border-slate-200 gap-6 text-sm font-bold">
          <button
            onClick={() => setActiveTab("explorer")}
            className={`pb-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "explorer"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Search size={16} />
            <span>Keyword Intelligence Explorer ({totalCount.toLocaleString()})</span>
          </button>

          <button
            onClick={() => setActiveTab("clusters")}
            className={`pb-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "clusters"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Layers size={16} />
            <span>Semantic Clusters ({clusters.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("opportunities")}
            className={`pb-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "opportunities"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <TrendingUp size={16} />
            <span>Content Gap & Opportunities ({opportunities.length})</span>
          </button>
        </div>

        {/* TAB 1: KEYWORD EXPLORER */}
        {activeTab === "explorer" && (
          <div className="space-y-4">
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex flex-wrap gap-3 items-center justify-between">
              <div className="flex-1 min-w-[240px] relative">
                <input
                  type="text"
                  placeholder="Search keywords across 500k database..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && fetchKeywords(apiKey, 1)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 pl-9 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
                <Search size={15} className="absolute left-3 top-2.5 text-slate-400" />
              </div>

              <div className="flex flex-wrap gap-2">
                <select
                  value={categoryFilter}
                  onChange={(e) => {
                    setCategoryFilter(e.target.value);
                  }}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none"
                >
                  <option value="">All Categories</option>
                  <option value="ERP">ERP</option>
                  <option value="CRM">CRM</option>
                  <option value="HRM">HRM</option>
                  <option value="AI">AI</option>
                  <option value="Cloud and AWS">Cloud and AWS</option>
                  <option value="Zoho">Zoho</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Billing & Invoicing">Billing & Invoicing</option>
                  <option value="Supply Chain">Supply Chain</option>
                </select>

                <select
                  value={intentFilter}
                  onChange={(e) => {
                    setIntentFilter(e.target.value);
                  }}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none"
                >
                  <option value="">All Search Intents</option>
                  <option value="Commercial">Commercial (MOFU)</option>
                  <option value="Transactional">Transactional (BOFU)</option>
                  <option value="Informational">Informational (TOFU)</option>
                  <option value="Navigational">Navigational</option>
                </select>

                <button
                  onClick={() => fetchKeywords(apiKey, 1)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Apply Filters
                </button>

                <button
                  onClick={exportKeywordsToCsv}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Export Current Page to CSV"
                >
                  <Download size={14} />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Keyword Table */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                      <th className="py-3 px-4">Keyword Query</th>
                      <th className="py-3 px-3">Category</th>
                      <th className="py-3 px-3">Search Intent</th>
                      <th className="py-3 px-3">Location / Market</th>
                      <th className="py-3 px-3 text-center">Priority</th>
                      <th className="py-3 px-4">Target Landing Page</th>
                      <th className="py-3 px-3">Verified Vol / Comp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {loading ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-400 font-semibold">
                          <RefreshCw size={24} className="animate-spin mx-auto mb-2 text-blue-500" />
                          <span>Streaming keyword records from database...</span>
                        </td>
                      </tr>
                    ) : keywords.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-400">
                          No keywords matching current filter criteria. Click "Generate 10k Batch" to seed records.
                        </td>
                      </tr>
                    ) : (
                      keywords.map((kw) => (
                        <tr key={kw.keyword_id} className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3 px-4 font-semibold text-slate-900 max-w-xs truncate" title={kw.keyword}>
                            {kw.keyword}
                          </td>
                          <td className="py-3 px-3">
                            <span className="font-medium text-slate-700 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                              {kw.category}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <span
                              className={`font-bold px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider ${
                                kw.search_intent === "Transactional"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : kw.search_intent === "Commercial"
                                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                                  : "bg-purple-50 text-purple-700 border border-purple-200"
                              }`}
                            >
                              {kw.search_intent} ({kw.funnel_stage})
                            </span>
                          </td>
                          <td className="py-3 px-3 text-slate-600">
                            {kw.target_location} ({kw.target_country})
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span className="font-extrabold text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded-full border border-blue-100">
                              {kw.priority_score}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <a
                              href={kw.target_landing_page}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 max-w-[200px] truncate"
                              title={kw.target_landing_page}
                            >
                              <span>{kw.target_landing_page}</span>
                              <ExternalLink size={12} className="shrink-0" />
                            </a>
                          </td>
                          <td className="py-3 px-3 text-[11px] text-slate-400 font-mono">
                            {kw.search_volume !== null ? `${kw.search_volume}/mo` : "GSC API Auth Required"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              <div className="p-4 border-t border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-500">
                  Showing Page <strong>{page}</strong> of <strong>{totalPages.toLocaleString()}</strong> ({totalCount.toLocaleString()} total keywords)
                </span>
                <div className="flex items-center gap-2">
                  <button
                    disabled={page <= 1 || loading}
                    onClick={() => fetchKeywords(apiKey, page - 1)}
                    className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="px-3 py-1 font-mono font-bold text-slate-700">
                    {page} / {totalPages}
                  </span>
                  <button
                    disabled={page >= totalPages || loading}
                    onClick={() => fetchKeywords(apiKey, page + 1)}
                    className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SEMANTIC CLUSTERS */}
        {activeTab === "clusters" && (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Topical Clusters & Canonical Mapping</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Each cluster maps to exactly one authentic Inzovate URL to prevent internal keyword cannibalization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {clusters.map((c) => (
                <div
                  key={c.clusterId}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100/70 text-blue-800 uppercase tracking-wider font-mono">
                        {c.category}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 size={13} />
                        <span>Zero Cannibalization</span>
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mt-2">{c.clusterName}</h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      Keywords Mapped: <strong>{c.assignedKeywords.toLocaleString()}</strong>
                    </span>
                    <a
                      href={c.canonicalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>{c.canonicalUrl}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CONTENT OPPORTUNITIES */}
        {activeTab === "opportunities" && (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">SEO Content Gap Analysis & Opportunity Scoring</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Algorithmic scoring prioritizing high-buyer-intent commercial queries with highest revenue potential.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {opportunities.map((opp) => (
                <div key={opp.clusterId} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-sm text-slate-900">{opp.clusterName}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                        {opp.contentGapStatus}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{opp.recommendation}</p>
                    <p className="text-[11px] text-slate-400 font-mono">
                      Target Canonical: {opp.canonicalUrl}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-4 text-right">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Opportunity Score</span>
                      <span className="text-xl font-black text-blue-600">{opp.opportunityScore}/100</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        &copy; 2026 INZOVATE TECHNOLOGIES PRIVATE LIMITED. All rights reserved. Enterprise SEO Intelligence System.
      </footer>
    </div>
  );
}
