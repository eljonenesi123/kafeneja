"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import CountUp from "./CountUp";

export default function Hero() {
  const scope = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(
          ["[data-hero-eyebrow]", "[data-hero-line]", "[data-hero-sub]", "[data-hero-cta]", "[data-hero-photo]"],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-eyebrow]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          "[data-hero-line]",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          "-=0.3"
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.4"
        )
        .fromTo(
          "[data-hero-photo]",
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: 1.2 },
          "-=1"
        );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scope}
      className="relative overflow-hidden bg-cream"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-20 sm:pt-20 sm:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div>
          <p
            data-hero-eyebrow
            className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-6"
          >
            Blloku, Tirana — Est. 2019
          </p>
          <h1 className="font-display text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl text-espresso text-balance">
            <span data-hero-line className="block overflow-hidden">
              Coffee, slowed
            </span>
            <span data-hero-line className="block overflow-hidden italic text-caramel">
              down on purpose.
            </span>
          </h1>
          <p
            data-hero-sub
            className="mt-6 max-w-md text-base sm:text-lg text-ink-soft leading-relaxed"
          >
            Single-origin beans, roasted in small batches and pulled with
            care — in the heart of Tirana&apos;s Blloku district.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              data-hero-cta
              href="/menu"
              className="rounded-full bg-espresso text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-espresso-dark transition-colors duration-200"
            >
              View the Menu
            </Link>
            <Link
              data-hero-cta
              href="/contact#reserve"
              className="link-underline text-sm tracking-wide text-espresso"
            >
              Reserve a table →
            </Link>
          </div>
        </div>

        <div data-hero-photo className="relative">
          <div className="hero-media-frame relative aspect-[4/5] w-full">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/kafeneja/videos/coffee-pour.webm" type="video/webm" />
              <source src="/kafeneja/videos/coffee-pour.mp4" type="video/mp4" />
            </video>
            <div className="hero-media-fade" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-xl bg-paper/95 backdrop-blur-sm border border-line px-5 py-4 shadow-xl shadow-espresso/15">
            <p className="font-display text-2xl text-espresso">
              4.9<span aria-hidden>★</span>
            </p>
            <p className="text-xs text-ink-soft tracking-wide">
              <CountUp to={320} suffix="+" /> reviews on Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
