"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function SplitHeading({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0,
  by = "words",
}: {
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  by?: "words" | "chars";
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    let split: SplitText | undefined;
    const ctx = gsap.context(() => {
      split = new SplitText(el, {
        type: by,
        mask: by,
      });
      const targets = by === "words" ? split.words : split.chars;

      gsap.fromTo(
        targets,
        { opacity: 0, yPercent: 110 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          stagger: by === "words" ? 0.06 : 0.02,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, [delay, by]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
