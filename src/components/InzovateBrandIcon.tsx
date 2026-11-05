import React from "react";

interface InzovateBrandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Inzovate 3D Isometric Blue Triangle Brand Icon Component
 * Vector-rendered
 */
export default function InzovateBrandIcon({
  size = 20,
  className = "",
  style,
  ...props
}: InzovateBrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      style={{ verticalAlign: "middle", ...style }}
      {...props}
    >
      <defs>
        <linearGradient id="inzovate-top-face" x1="256" y1="92" x2="432" y2="384" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0075FF" />
          <stop offset="50%" stopColor="#0052D4" />
          <stop offset="100%" stopColor="#00227B" />
        </linearGradient>

        <linearGradient id="inzovate-left-face" x1="256" y1="92" x2="80" y2="384" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="40%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#0077B6" />
        </linearGradient>

        <linearGradient id="inzovate-bottom-face" x1="80" y1="384" x2="432" y2="384" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00B4D8" />
          <stop offset="60%" stopColor="#0077B6" />
          <stop offset="100%" stopColor="#023E8A" />
        </linearGradient>

        <linearGradient id="inzovate-inner-bevel" x1="256" y1="218" x2="256" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#003566" />
          <stop offset="100%" stopColor="#001D3D" />
        </linearGradient>
      </defs>

      <path
        d="M256 92L80 384H198L256 284L256 92Z"
        fill="url(#inzovate-left-face)"
      />
      <path
        d="M256 92L432 384L386 384L256 218L256 92Z"
        fill="url(#inzovate-top-face)"
      />
      <path
        d="M80 384L186 320L386 320L432 384H80Z"
        fill="url(#inzovate-bottom-face)"
      />
      <path
        d="M256 218L186 320H344L256 218Z"
        fill="url(#inzovate-inner-bevel)"
        opacity="0.9"
      />
      <polygon
        points="256,92 256,160 286,210"
        fill="#60A5FA"
        opacity="0.6"
      />
    </svg>
  );
}

/**
 * Transparent background Official Inzovate 3D Isometric Blue Triangle Pricing Icon
 */
export function InzovateFaviconIcon({
  size = 20,
  className = "",
  style,
}: {
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const pixelSize = typeof size === "number" ? `${size}px` : size;
  return (
    <img
      src="/pricing-icon.png"
      alt="Inzovate Pricing Icon"
      width={typeof size === "number" ? size : undefined}
      height={typeof size === "number" ? size : undefined}
      className={`inline-block shrink-0 object-contain select-none bg-transparent ${className}`}
      style={{
        width: pixelSize,
        height: pixelSize,
        verticalAlign: "middle",
        backgroundColor: "transparent",
        filter: "drop-shadow(0 0 5px rgba(0, 140, 255, 0.4))",
        ...style,
      }}
      loading="eager"
    />
  );
}

export const InzovatePricingIcon = InzovateFaviconIcon;
