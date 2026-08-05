"use client";

import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { StarIcon } from "../icons/DoodleIcons";
import { useLanguage } from "@/lib/i18n";

const REVIEWS = [
  {
    quote: "Best flat white in Blloku, hands down.",
    quoteSq: "Flat white më i mirë në Bllok, pa dyshim.",
    name: "Elira K.",
    since: 2021,
    rating: 5,
  },
  {
    quote:
      "Kafe turke made properly, the way my gjyshe used to. I come for that alone and stay for the byrek.",
    quoteSq:
      "Kafe turke e bërë siç duhet, ashtu si e bënte gjyshja ime. Vij vetëm për këtë dhe qëndroj për byrekun.",
    name: "Andi M.",
    since: 2020,
    rating: 5,
  },
  {
    quote:
      "Quiet in the mornings, buzzing by noon. My go-to for working with a laptop and a very good espresso.",
    quoteSq:
      "E qetë në mëngjes, e gjallë deri në mesditë. Vendi im për të punuar me laptop dhe një espresso shumë të mirë.",
    name: "Sara T.",
    since: 2023,
    rating: 5,
  },
  {
    quote:
      "Supposedly Blloku's best-kept secret, except everyone already knows.",
    quoteSq:
      "Gjoja sekreti më i mirëmbajtur i Bllokut, veç se të gjithë e dinë tashmë.",
    name: "Marko D.",
    since: 2022,
    rating: 4,
  },
];

export default function Testimonials() {
  const { t, pick } = useLanguage();
  return (
    <section className="bg-cream-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          align="center"
          className="mb-14"
        />
        <Reveal
          childSelector="[data-card]"
          stagger={0.1}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              data-card
              className={`rounded-2xl border border-line p-6 ${
                i % 2 === 0 ? "bg-paper" : "bg-cream"
              }`}
            >
              <div className="flex gap-0.5 text-clay mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon
                    key={s}
                    className={`w-4 h-4 ${s >= r.rating ? "opacity-20" : ""}`}
                  />
                ))}
              </div>
              <blockquote className="font-display text-lg leading-snug text-espresso text-balance">
                “{pick(r.quote, r.quoteSq)}”
              </blockquote>
              <figcaption className="mt-5 text-sm text-ink-soft">
                {r.name}, {t("testimonials.since")} {r.since}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
