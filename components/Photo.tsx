"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VARIANTS: Record<string, string> = {
  espresso: "from-[#3a2110] via-[#8a3f10] to-[#d4881f]",
  beans: "from-[#180c07] via-[#3a2110] to-[#a3410a]",
  latte: "from-[#8a5a2e] via-[#d4881f] to-[#f5e9d6]",
  interior: "from-[#2c1710] via-[#6b3a1c] to-[#c2410c]",
  pastry: "from-[#6b3a1c] via-[#a3410a] to-[#e7b675]",
  pour: "from-[#180c07] via-[#6b3a1c] to-[#d4881f]",
};

export default function Photo({
  variant = "espresso",
  className = "",
  ratio = "aspect-[4/5]",
  label,
  parallax = false,
  tilt = false,
  wipe = false,
  src,
  objectPosition = "center",
}: {
  variant?: keyof typeof VARIANTS;
  className?: string;
  ratio?: string;
  label?: string;
  parallax?: boolean;
  tilt?: boolean;
  wipe?: boolean;
  src?: string;
  objectPosition?: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wipe) return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrap,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: wrap,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [wipe]);

  useEffect(() => {
    if (!parallax) return;
    const wrap = wrapRef.current;
    const layer = layerRef.current;
    if (!wrap || !layer) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        layer,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [parallax]);

  useEffect(() => {
    if (!tilt) return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(wrap, {
        rotateX: py * -6,
        rotateY: px * 6,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 600,
      });
    };
    const onLeave = () => {
      gsap.to(wrap, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [tilt]);

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden grain [transform-style:preserve-3d] ${ratio} ${className}`}
      role="img"
      aria-label={label ?? "Kafeneja photograph"}
    >
      {src ? (
        <div
          ref={layerRef}
          className={parallax ? "absolute -top-[10%] -bottom-[10%] h-[120%] w-full" : "absolute inset-0"}
        >
          <Image
            src={src}
            alt={label ?? "Kafeneja photograph"}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "cover", objectPosition }}
            priority={false}
          />
        </div>
      ) : (
        <>
          <div
            ref={layerRef}
            className={`absolute inset-0 bg-gradient-to-br ${VARIANTS[variant]} ${
              parallax ? "-top-[10%] -bottom-[10%] h-[120%]" : ""
            }`}
          />
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id={`grid-${variant}`}
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#grid-${variant})`} />
          </svg>
        </>
      )}
    </div>
  );
}
