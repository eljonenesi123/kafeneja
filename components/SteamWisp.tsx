"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SteamWisp({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const paths = el.querySelectorAll("path");

    const ctx = gsap.context(() => {
      paths.forEach((p, i) => {
        gsap.fromTo(
          p,
          { y: 6, opacity: 0 },
          {
            y: -14,
            opacity: 0.5,
            duration: 2.4,
            delay: i * 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      viewBox="0 0 40 60"
      className={className}
      fill="none"
    >
      <path
        d="M14 54C14 54 8 46 14 38C20 30 14 22 14 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M26 54C26 54 20 44 26 34C32 24 26 16 26 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
}
