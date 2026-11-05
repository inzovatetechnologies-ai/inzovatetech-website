/**
 * Flaticon-Style Vector Icons
 * Highly attractive, simple, authentic enterprise SVG icons
 * designed in the modern Flaticon / UIcons clean aesthetic.
 */

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
  useRawImage?: boolean;
}

/** 1. AWS Cloud Services (Hero Right Card) */
export function FlaticonCloudComputing({ size = 22, className = "", color = "currentColor", useRawImage = false }: IconProps) {
  if (useRawImage) {
    return (
      <img
        src="/icon-cloud.png"
        alt="AWS Cloud Services"
        width={size}
        height={size}
        className={`object-contain shrink-0 ${className}`}
      />
    );
  }
  return (
    <span
      className={`inline-block shrink-0 transition-colors duration-200 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color || "currentColor",
        WebkitMaskImage: "url(/icon-cloud.png)",
        maskImage: "url(/icon-cloud.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      aria-hidden="true"
    />
  );
}

/** 2. Cloud & DevOps Infrastructure (Hero Right Card) */
export function FlaticonDevOps({ size = 22, className = "", color = "currentColor", useRawImage = false }: IconProps) {
  if (useRawImage) {
    return (
      <img
        src="/icon-devops.png"
        alt="Cloud & DevOps Infrastructure"
        width={size}
        height={size}
        className={`object-contain shrink-0 ${className}`}
      />
    );
  }
  return (
    <span
      className={`inline-block shrink-0 transition-colors duration-200 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color || "currentColor",
        WebkitMaskImage: "url(/icon-devops.png)",
        maskImage: "url(/icon-devops.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      aria-hidden="true"
    />
  );
}

/** 3. Intelligent Automation & AI (Hero Right Card) */
export function FlaticonAiBrain({ size = 22, className = "", color = "currentColor", useRawImage = false }: IconProps) {
  if (useRawImage) {
    return (
      <img
        src="/icon-ai-brain.png"
        alt="Intelligent Automation & AI"
        width={size}
        height={size}
        className={`object-contain shrink-0 ${className}`}
      />
    );
  }
  return (
    <span
      className={`inline-block shrink-0 transition-colors duration-200 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color || "currentColor",
        WebkitMaskImage: "url(/icon-ai-brain.png)",
        maskImage: "url(/icon-ai-brain.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      aria-hidden="true"
    />
  );
}

/** 4. Enterprise Digital Applications (Hero Right Card) */
export function FlaticonEnterpriseApp({ size = 22, className = "", color = "currentColor", useRawImage = false }: IconProps) {
  if (useRawImage) {
    return (
      <img
        src="/icon-enterprise.png"
        alt="Enterprise Digital Applications"
        width={size}
        height={size}
        className={`object-contain shrink-0 ${className}`}
      />
    );
  }
  return (
    <span
      className={`inline-block shrink-0 transition-colors duration-200 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color || "currentColor",
        WebkitMaskImage: "url(/icon-enterprise.png)",
        maskImage: "url(/icon-enterprise.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      aria-hidden="true"
    />
  );
}

/** 5. Frontend & Apps (Flipbox Section Box 1) */
export function FlaticonFrontendApps({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Modern desktop web application monitor */}
      <rect x="2" y="3.5" width="15" height="11.5" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M2 7.2H17" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="4.5" cy="5.3" r="0.75" fill="currentColor" />
      <circle cx="7" cy="5.3" r="0.75" fill="currentColor" />
      {/* UI layout skeleton blocks */}
      <rect x="4.5" y="9.2" width="3.5" height="3.8" rx="0.75" fill="currentColor" fillOpacity="0.22" />
      <path d="M10 9.8H14.5M10 12H13.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* Monitor base */}
      <path d="M6 18H12M8.5 15V18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* Responsive mobile smartphone alongside */}
      <rect x="15.5" y="8" width="6.5" height="12.5" rx="1.5" stroke="currentColor" strokeWidth="1.75" fill="white" />
      <circle cx="18.75" cy="18.2" r="0.75" fill="currentColor" />
      <path d="M17.2 10.2H20.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** 6. Cloud & DevOps (Flipbox Section Box 2) */
export function FlaticonCloudDevOps({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Cloud infrastructure silhouette */}
      <path
        d="M6 14.5C3.79086 14.5 2 12.7091 2 10.5C2 8.48638 3.49137 6.82047 5.43329 6.54271C6.01524 3.66857 8.56303 1.5 11.6 1.5C15.008 1.5 17.8106 4.10676 18.1566 7.47151C19.8398 7.94146 21.08 9.48679 21.08 11.3C21.08 13.6196 19.1996 15.5 16.88 15.5H16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Docker container / Server deploy cube */}
      <rect x="7" y="12.5" width="10" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.2" />
      <path d="M7 16.8H17M12 12.5V21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="9.5" cy="14.6" r="0.75" fill="currentColor" />
      <circle cx="14.5" cy="14.6" r="0.75" fill="currentColor" />
    </svg>
  );
}

/** 7. Backend & AI (Flipbox Section Box 3) */
export function FlaticonBackendAi({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Microprocessor CPU Chip with integrated neural circuit */}
      <rect x="5.5" y="5.5" width="13" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.75" fill="currentColor" fillOpacity="0.16" />
      <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      {/* Core computing unit */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      {/* Bus pins */}
      <path d="M9 2V5.5M12 2V5.5M15 2V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 18.5V22M12 18.5V22M15 18.5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 9H5.5M2 12H5.5M2 15H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18.5 9H22M18.5 12H22M18.5 15H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** 8. Enterprise Suites (Flipbox Section Box 4) */
export function FlaticonEnterpriseSuite({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Multi-layered enterprise software stack */}
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.22"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Central enterprise hub node */}
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}
