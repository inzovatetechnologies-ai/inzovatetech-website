import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders";
import { ArrowRight, Sparkles } from "lucide-react";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";

export interface LiquidMetalButtonProps {
  label?: string;
  onClick?: () => void;
  viewMode?: "text" | "icon";
  href?: string;
  to?: string;
  className?: string;
  textColor?: string;
  showArrow?: boolean;
  width?: number;
  height?: number;
}

export function LiquidMetalButton({
  label = "Book a meeting",
  onClick,
  viewMode = "text",
  href,
  to,
  className = "",
  textColor = "#ffffff",
  showArrow = true,
  width: customWidth,
  height: customHeight,
}: LiquidMetalButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);
  const shaderRef = useRef<HTMLDivElement>(null);
  // biome-ignore lint/suspicious/noExplicitAny: External library without types
  const shaderMount = useRef<any>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleId = useRef(0);

  const dimensions = useMemo(() => {
    if (viewMode === "icon") {
      const w = customWidth || 46;
      const h = customHeight || 46;
      return {
        width: w,
        height: h,
        innerWidth: w - 4,
        innerHeight: h - 4,
        shaderWidth: w,
        shaderHeight: h,
      };
    } else {
      const w = customWidth || 162;
      const h = customHeight || 44;
      return {
        width: w,
        height: h,
        innerWidth: w - 4,
        innerHeight: h - 4,
        shaderWidth: w,
        shaderHeight: h,
      };
    }
  }, [viewMode, customWidth, customHeight]);

  useEffect(() => {
    const styleId = "shader-canvas-style-exploded";
    if (typeof document !== "undefined" && !document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .shader-container-exploded canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 9999px !important;
        }
        @keyframes ripple-animation {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const loadShader = async () => {
      try {
        if (shaderRef.current && typeof window !== "undefined") {
          if (shaderMount.current?.destroy) {
            shaderMount.current.destroy();
          }

          shaderMount.current = new ShaderMount(
            shaderRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: 4,
              u_softness: 0.5,
              u_shiftRed: 0.45,
              u_shiftBlue: 0.45,
              u_distortion: 0.1,
              u_contour: 0.2,
              u_angle: 45,
              u_scale: 8,
              u_shape: 1,
              u_offsetX: 0.1,
              u_offsetY: -0.1,
            },
            undefined,
            0.6,
          );
        }
      } catch (error) {
        console.error("[ShaderMount] Failed to load shader:", error);
      }
    };

    loadShader();

    return () => {
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy();
        shaderMount.current = null;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    shaderMount.current?.setSpeed?.(1.4);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    shaderMount.current?.setSpeed?.(0.6);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shaderMount.current?.setSpeed) {
      shaderMount.current.setSpeed(2.6);
      setTimeout(() => {
        if (isHovered) {
          shaderMount.current?.setSpeed?.(1.4);
        } else {
          shaderMount.current?.setSpeed?.(0.6);
        }
      }, 350);
    }

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = { x, y, id: rippleId.current++ };

      setRipples((prev) => [...prev, ripple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 600);
    }

    if (onClick) {
      onClick();
    } else {
      const destination = to || href;
      if (destination) {
        if (destination.includes("#")) {
          const parts = destination.split("#");
          const hashId = parts[1];
          if (parts[0] && window.location.pathname !== parts[0]) {
            window.location.href = destination;
          } else {
            const el = document.getElementById(hashId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.location.href = destination;
        }
      }
    }
  };

  return (
    <div
      className={`relative inline-block transition-transform duration-200 ${
        isHovered ? "-translate-y-0.5" : ""
      } ${isPressed ? "translate-y-0 scale-[0.98]" : ""} ${className}`}
    >
      <div
        style={{
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          style={{
            position: "relative",
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            transformStyle: "preserve-3d",
            transition:
              "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease, height 0.3s ease",
            transform: "none",
          }}
        >
          {/* Layer 1: Foreground Content (Label + Icon) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transformStyle: "preserve-3d",
              transition:
                "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease, height 0.3s ease, gap 0.3s ease",
              transform: "translateZ(20px)",
              zIndex: 30,
              pointerEvents: "none",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            {viewMode === "icon" && (
              <Sparkles
                size={16}
                style={{
                  color: textColor || "#ffffff",
                  filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.6))",
                  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: isHovered ? "scale(1.15) rotate(10deg)" : "scale(1)",
                }}
              />
            )}
            {viewMode === "text" && (
              <>
                <span
                  style={{
                    fontSize: "13.5px",
                    color: textColor || "#ffffff",
                    fontWeight: 600,
                    textShadow: "0px 1px 3px rgba(0, 0, 0, 0.8)",
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </span>
                {showArrow && (
                  <ArrowRight
                    size={14}
                    style={{
                      color: textColor || "#ffffff",
                      filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.6))",
                      transition: "transform 0.25s ease",
                      transform: isHovered ? "translateX(3px)" : "translateX(0)",
                    }}
                  />
                )}
              </>
            )}
          </div>

          {/* Layer 2: Inner Pill Layer (Translucent dark gradient with metallic highlight) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              transformStyle: "preserve-3d",
              transition:
                "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease, height 0.3s ease",
              transform: `translateZ(10px) ${isPressed ? "translateY(1px) scale(0.98)" : "translateY(0) scale(1)"}`,
              zIndex: 20,
            }}
          >
            <div
              style={{
                width: `${dimensions.innerWidth}px`,
                height: `${dimensions.innerHeight}px`,
                margin: "2px",
                borderRadius: "9999px",
                background: isHovered
                  ? "linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.98) 100%)"
                  : "linear-gradient(180deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.98) 100%)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: isPressed
                  ? "inset 0px 2px 4px rgba(0, 0, 0, 0.6), inset 0px 1px 2px rgba(0, 0, 0, 0.4)"
                  : "inset 0px 1px 1px rgba(255, 255, 255, 0.25), inset 0px -1px 2px rgba(0, 0, 0, 0.5)",
                transition:
                  "all 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s ease, height 0.3s ease",
              }}
            />
          </div>

          {/* Layer 3: WebGL Liquid Metal Shader + Ambient/Hover Glow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              transformStyle: "preserve-3d",
              transition:
                "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease, height 0.3s ease",
              transform: `translateZ(0px) ${isPressed ? "translateY(1px) scale(0.98)" : "translateY(0) scale(1)"}`,
              zIndex: 10,
            }}
          >
            <div
              style={{
                height: `${dimensions.height}px`,
                width: `${dimensions.width}px`,
                borderRadius: "9999px",
                boxShadow: isPressed
                  ? "0 0 14px rgba(37, 99, 235, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.4)"
                  : isHovered
                    ? "0 4px 20px rgba(37, 99, 235, 0.35), 0 0 25px rgba(59, 130, 246, 0.25), 0 0 8px rgba(255, 255, 255, 0.25), 0px 0px 0px 1px rgba(37, 99, 235, 0.3)"
                    : "0 2px 10px rgba(15, 23, 42, 0.12), 0 0 12px rgba(37, 99, 235, 0.15), 0px 0px 0px 1px rgba(255, 255, 255, 0.15)",
                transition:
                  "box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s ease, height 0.3s ease",
                background:
                  "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.2) 0%, rgba(30, 58, 138, 0.1) 60%, transparent 100%)",
              }}
            >
              <div
                ref={shaderRef}
                className="shader-container-exploded"
                style={{
                  borderRadius: "9999px",
                  overflow: "hidden",
                  position: "relative",
                  width: `${dimensions.shaderWidth}px`,
                  maxWidth: `${dimensions.shaderWidth}px`,
                  height: `${dimensions.shaderHeight}px`,
                  transition: "width 0.3s ease, height 0.3s ease",
                }}
              />
            </div>
          </div>

          {/* Layer 4: Interactive Button Surface (Click + Ripple handlers) */}
          <button
            ref={buttonRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              zIndex: 40,
              transformStyle: "preserve-3d",
              transform: "translateZ(25px)",
              transition:
                "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease, height 0.3s ease",
              overflow: "hidden",
              borderRadius: "9999px",
            }}
            aria-label={label}
          >
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                style={{
                  position: "absolute",
                  left: `${ripple.x}px`,
                  top: `${ripple.y}px`,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)",
                  pointerEvents: "none",
                  animation: "ripple-animation 0.6s ease-out",
                }}
              />
            ))}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LiquidMetalButton;
