"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import CountUp from "./CountUp";
import MagneticButton from "./MagneticButton";
import SteamWisp from "./SteamWisp";
import OrderAhead from "./OrderAhead";
import { useLanguage } from "@/lib/i18n";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export default function Hero() {
  const scope = useRef<HTMLDivElement | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let split: SplitText | undefined;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(
          ["[data-hero-eyebrow]", "[data-hero-line]", "[data-hero-sub]", "[data-hero-cta]", "[data-hero-photo]"],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      split = new SplitText("[data-hero-line]", {
        type: "words",
        mask: "words",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-eyebrow]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          split.words,
          { opacity: 0, yPercent: 120 },
          { opacity: 1, yPercent: 0, duration: 0.8, stagger: 0.05 },
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

    return () => {
      ctx.revert();
      split?.revert();
    };
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
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl text-espresso text-balance">
            <span data-hero-line className="block">
              {t("hero.title1")}
            </span>
            <span data-hero-line className="block italic text-caramel">
              {t("hero.title2")}
            </span>
          </h1>
          <p
            data-hero-sub
            className="mt-6 max-w-md text-base sm:text-lg text-ink-soft leading-relaxed"
          >
            {t("hero.sub")}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Link
                data-hero-cta
                href="/menu"
                className="rounded-full bg-espresso text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-espresso-dark transition-colors duration-200"
              >
                {t("hero.viewMenu")}
              </Link>
            </MagneticButton>
            <Link
              data-hero-cta
              href="/contact#reserve"
              className="link-underline text-sm tracking-wide text-espresso"
            >
              {t("hero.reserveArrow")}
            </Link>
          </div>
          <OrderAhead className="mt-6" />
        </div>

        <div data-hero-photo className="relative">
          <SteamWisp
            className="absolute -top-6 left-10 w-8 h-14 text-caramel/60 pointer-events-none hidden sm:block"
          />
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
              <CountUp to={320} suffix="+" /> {t("hero.reviews")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
