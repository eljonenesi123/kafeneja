import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Kafeneja, a specialty coffee house in Blloku, Tirana, roasting small batches since 2019.",
};

const VALUES = [
  {
    title: "Directly Sourced",
    text: "We work with importers who pay above Fairtrade minimums and visit origin whenever we can.",
  },
  {
    title: "Roasted in Tirana",
    text: "Small batches, roasted weekly on our drum roaster just outside the city.",
  },
  {
    title: "Tradition, Kept",
    text: "Kafe turke is treated with the same care as our espresso, no shortcuts taken.",
  },
];

const TEAM = [
  { name: "Griselda Hoxha", role: "Founder & Roaster" },
  { name: "Ard Berisha", role: "Head Barista" },
  { name: "Elsa Krasniqi", role: "Pastry Lead" },
];

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 text-center">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            Our Story
          </p>
          <h1 className="font-display text-4xl sm:text-6xl text-espresso text-balance">
            Three friends, one espresso machine, no exit strategy.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 sm:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Photo
            variant="beans"
            ratio="aspect-[5/4]"
            className="rounded-2xl"
            label="Roasting beans at Kafeneja"
          />
        </Reveal>
        <Reveal delay={0.1} className="space-y-4 text-ink-soft leading-relaxed">
          <p>
            Kafeneja began in 2019 when Griselda, back in Tirana after
            years pulling shots in Bologna, couldn&apos;t find the coffee
            she missed. So she, her brother Ard, and their friend Elsa
            gutted a ground-floor apartment on Rruga Ismail Qemali and
            built the bar themselves.
          </p>
          <p>
            The name Kafeneja, an old Albanian word for a neighborhood
            coffee house, was a deliberate choice. We wanted a space that
            felt like it had always been there, even on day one.
          </p>
          <p>
            Six years on, we roast our own beans, bake everything on-site
            before 7am, and still argue about ratios more than any small
            business should. Some things haven&apos;t changed.
          </p>
        </Reveal>
      </section>

      <section className="bg-cream-warm py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-3">
              What We Believe
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-espresso text-balance">
              A few things we won&apos;t compromise on.
            </h2>
          </Reveal>

          <Reveal
            childSelector="[data-value]"
            stagger={0.1}
            className="grid sm:grid-cols-3 gap-6"
          >
            {VALUES.map((v) => (
              <div
                key={v.title}
                data-value
                className="rounded-2xl bg-paper border border-line p-7"
              >
                <h3 className="font-display text-xl text-espresso mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-3">
              The Team
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-espresso text-balance">
              The people behind the bar.
            </h2>
          </Reveal>

          <Reveal
            childSelector="[data-person]"
            stagger={0.1}
            className="grid sm:grid-cols-3 gap-8"
          >
            {TEAM.map((t) => (
              <div key={t.name} data-person className="text-center">
                <Photo
                  variant="latte"
                  ratio="aspect-square"
                  className="rounded-full mx-auto mb-5 max-w-[180px]"
                  label={t.name}
                />
                <h3 className="font-display text-lg text-espresso">
                  {t.name}
                </h3>
                <p className="text-sm text-ink-soft">{t.role}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </div>
  );
}
