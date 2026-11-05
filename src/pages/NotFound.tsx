import { Link } from "react-router-dom";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <main className="bg-[#030712] text-white min-h-screen pt-16 sm:pt-20 pb-24 flex items-center justify-center px-6">
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for does not exist on Inzovate Technologies."
        noIndex={true}
      />

      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-3xl bg-blue-600/20 border border-blue-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
          <FileQuestion size={40} />
        </div>

        <h1
          className="text-5xl font-black text-white tracking-tight mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          404 Page Not Found
        </h1>

        <p className="text-slate-300 text-base leading-relaxed mb-8">
          The page you requested could not be found or has been moved to a new URL.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all"
          >
            <Home size={16} />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/services"
            className="px-7 py-3.5 rounded-full border border-slate-700 text-slate-300 font-bold text-sm bg-slate-900/60 hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
