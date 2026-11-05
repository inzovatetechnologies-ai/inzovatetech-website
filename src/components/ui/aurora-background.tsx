"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-white text-slate-950 transition-colors overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Minimal Animated Aurora Ribbon Canvas */}
        <div
          className={cn(
            "aurora-canvas",
            showRadialGradient && "aurora-radial-mask"
          )}
        />
      </div>
      {children}
    </div>
  );
};
