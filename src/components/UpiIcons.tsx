export function GPayIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center flex-shrink-0 bg-white rounded-lg p-1 shadow-sm`}>
      <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
        <path
          fill="#4285F4"
          d="M45.5 24.5c0-1.56-.14-3.06-.4-4.5H24v8.52h12.08c-.52 2.82-2.12 5.2-4.51 6.81l7.3 5.66c4.27-3.93 6.63-9.73 6.63-16.49z"
        />
        <path
          fill="#34A853"
          d="M24 46.5c6.07 0 11.17-2.02 14.89-5.46l-7.3-5.66c-2.01 1.35-4.59 2.15-7.59 2.15-5.84 0-10.79-3.94-12.56-9.25l-7.55 5.85C7.57 41.51 15.2 46.5 24 46.5z"
        />
        <path
          fill="#FBBC05"
          d="M11.44 28.28c-.45-1.35-.71-2.79-.71-4.28s.26-2.93.71-4.28L3.89 13.87C1.41 18.8 0 24.32 0 30.22c0 1.94.27 3.84.77 5.65l10.67-7.59z"
        />
        <path
          fill="#EA4335"
          d="M24 10.47c3.3 0 6.27 1.14 8.6 3.37l6.45-6.45C35.15 3.73 30.06 1.5 24 1.5 15.2 1.5 7.57 6.49 3.89 13.87l7.55 5.86c1.77-5.31 6.72-9.26 12.56-9.26z"
        />
      </svg>
    </div>
  );
}

export function PhonePeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-full flex items-center justify-center font-bold text-white shadow-sm flex-shrink-0 relative overflow-hidden`}
      style={{ background: "#5f259f", boxShadow: "0 2px 8px rgba(95,37,159,0.4)" }}
    >
      <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none">
        <circle cx="50" cy="50" r="48" fill="#5f259f" />
        <path
          d="M58 24H44c-2.2 0-4 1.8-4 4v44c0 2.2 1.8 4 4 4s4-1.8 4-4V54h10c12.2 0 20-7.8 20-15s-7.8-15-20-15zm-2 22H48V32h8c7.7 0 12 2.7 12 7s-4.3 7-12 7z"
          fill="white"
        />
        <path
          d="M32 36h12v8H32z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export function PaytmIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-lg flex items-center justify-center flex-shrink-0 px-1 bg-white shadow-sm border border-slate-200`}
      style={{ minHeight: "24px" }}
    >
      <div className="flex items-center text-[10px] font-black tracking-tight leading-none">
        <span style={{ color: "#002970" }}>Pay</span>
        <span style={{ color: "#00baf2" }}>tm</span>
      </div>
    </div>
  );
}

export function BhimIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-lg flex items-center justify-center font-black text-[9px] tracking-wider text-white flex-shrink-0 shadow-sm`}
      style={{
        background: "linear-gradient(135deg, #008444 0%, #008444 50%, #f37021 50%, #f37021 100%)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      BHIM
    </div>
  );
}

export function CredIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-lg bg-black border border-white/20 flex items-center justify-center font-black text-[9px] text-white flex-shrink-0 shadow-sm tracking-wider`}
    >
      CRED
    </div>
  );
}

export function UpiLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 font-black text-xs tracking-wider ${className}`}>
      <span className="text-[#3FA66B]">UP</span>
      <span className="text-[#D4AF37]">I</span>
      <span
        className="text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider"
        style={{
          background: "rgba(212,175,55,0.12)",
          color: "#E6C875",
          border: "1px solid rgba(212,175,55,0.3)",
        }}
      >
        AutoPay
      </span>
    </div>
  );
}

export function PayPalIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-lg flex items-center justify-center flex-shrink-0 bg-white p-1 shadow-sm border border-slate-200`}
      style={{ minHeight: "24px" }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <path
          fill="#003087"
          d="M6.5 20.5H3.6a.6.6 0 0 1-.6-.7L5.8 4.2a.8.8 0 0 1 .8-.6h6.2c3.5 0 6 1.8 5.4 5.3-.5 3-2.5 4.7-5.5 4.7H9.2L8 20.5z"
        />
        <path
          fill="#0079C1"
          d="M8.8 13.6h-1l1.1-7.1a.6.6 0 0 1 .6-.5h4.2c2.8 0 4.8 1.4 4.3 4.2-.4 2.4-2.1 3.9-4.7 3.9h-3l-1.5 5.5z"
        />
      </svg>
    </div>
  );
}

