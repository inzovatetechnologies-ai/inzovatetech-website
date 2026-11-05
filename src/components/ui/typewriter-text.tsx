"use client";

import * as React from "react";
import { useEffect, useState } from "react";

export interface TypewriterProps {
  text: string | string[];
  speed?: number;
  cursor?: string;
  loop?: boolean;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  // Validate and process input text
  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textArrayIndex] || "";

  useEffect(() => {
    if (!currentText) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < currentText.length) {
            setDisplayText((prev) => prev + currentText[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          } else if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex(0);
            setTextArrayIndex((prev) => (prev + 1) % textArray.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    currentText,
    loop,
    speed,
    deleteSpeed,
    delay,
    displayText,
    text,
  ]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">{cursor}</span>
    </span>
  );
}

export interface DualTypewriterProps {
  line1: string;
  line2: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  loop?: boolean;
  className1?: string;
  className2?: string;
  cursor?: string;
  mode?: "sequential" | "simultaneous";
}

export function DualTypewriter({
  line1 = "Technology With Purpose.",
  line2 = "Intelligent Cloud Architecture.",
  speed = 65,
  deleteSpeed = 35,
  delay = 2500,
  loop = true,
  className1 = "block min-h-[1.15em]",
  className2 = "about-gradient-text block min-h-[1.15em]",
  cursor = "|",
  mode = "sequential",
}: DualTypewriterProps) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [phase, setPhase] = useState<"type1" | "type2" | "pause" | "del2" | "del1" | "sim_type" | "sim_del">(
    mode === "sequential" ? "type1" : "sim_type"
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (mode === "sequential") {
      if (phase === "type1") {
        if (text1.length < line1.length) {
          timer = setTimeout(() => {
            setText1(line1.slice(0, text1.length + 1));
          }, speed);
        } else {
          timer = setTimeout(() => {
            setPhase("type2");
          }, 150);
        }
      } else if (phase === "type2") {
        if (text2.length < line2.length) {
          timer = setTimeout(() => {
            setText2(line2.slice(0, text2.length + 1));
          }, speed);
        } else {
          if (loop) {
            timer = setTimeout(() => {
              setPhase("pause");
            }, delay);
          }
        }
      } else if (phase === "pause") {
        setPhase("del2");
      } else if (phase === "del2") {
        if (text2.length > 0) {
          timer = setTimeout(() => {
            setText2((prev) => prev.slice(0, -1));
          }, deleteSpeed);
        } else {
          timer = setTimeout(() => {
            setPhase("del1");
          }, 100);
        }
      } else if (phase === "del1") {
        if (text1.length > 0) {
          timer = setTimeout(() => {
            setText1((prev) => prev.slice(0, -1));
          }, deleteSpeed);
        } else {
          timer = setTimeout(() => {
            setPhase("type1");
          }, 300);
        }
      }
    } else {
      // simultaneous mode
      if (phase === "sim_type") {
        const canType1 = text1.length < line1.length;
        const canType2 = text2.length < line2.length;

        if (canType1 || canType2) {
          timer = setTimeout(() => {
            if (canType1) setText1(line1.slice(0, text1.length + 1));
            if (canType2) setText2(line2.slice(0, text2.length + 1));
          }, speed);
        } else {
          if (loop) {
            timer = setTimeout(() => {
              setPhase("pause");
            }, delay);
          }
        }
      } else if (phase === "pause") {
        setPhase("sim_del");
      } else if (phase === "sim_del") {
        const canDel1 = text1.length > 0;
        const canDel2 = text2.length > 0;

        if (canDel1 || canDel2) {
          timer = setTimeout(() => {
            if (canDel1) setText1((prev) => prev.slice(0, -1));
            if (canDel2) setText2((prev) => prev.slice(0, -1));
          }, deleteSpeed);
        } else {
          timer = setTimeout(() => {
            setPhase("sim_type");
          }, 300);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [phase, text1, text2, line1, line2, speed, deleteSpeed, delay, loop, mode]);

  const showCursor1 =
    mode === "sequential"
      ? phase === "type1" || phase === "del1"
      : (phase === "sim_type" || phase === "sim_del") && text1.length < line1.length;

  const showCursor2 =
    mode === "sequential"
      ? phase === "type2" || phase === "pause" || phase === "del2"
      : true;

  return (
    <>
      <span className={className1}>
        {text1}
        {showCursor1 && <span className="animate-pulse ml-0.5 text-blue-600 font-light">{cursor}</span>}
      </span>
      <span className={className2}>
        {text2}
        {showCursor2 && <span className="animate-pulse ml-0.5 font-light">{cursor}</span>}
      </span>
    </>
  );
}
