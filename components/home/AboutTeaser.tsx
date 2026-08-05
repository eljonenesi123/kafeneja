"use client";

import Link from "next/link";
import Photo from "../Photo";
import Reveal from "../Reveal";
import { useLanguage } from "@/lib/i18n";

export default function AboutTeaser() {
  const { t } = useLanguage();
  return (
    <section className="bg-cream-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <Photo
            src="/kafeneja/images/barista-pour.jpg"
            objectPosition="center"
            ratio="aspect-[4/3]"
            className="rounded-2xl"
            label="Pulling a shot behind the bar at Kafeneja"
            parallax
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            {t("aboutTeaser.eyebrow")}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso text-balance mb-6">
            {t("aboutTeaser.title")}
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            {t("aboutTeaser.p1")}
          </p>
          <p className="text-ink-soft leading-relaxed mb-8">
            {t("aboutTeaser.p2")}
          </p>
          <Link
            href="/about"
            className="link-underline text-sm tracking-wide text-espresso"
          >
            {t("aboutTeaser.readMore")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
