import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import SplitHeading from "@/components/SplitHeading";
import CTA from "@/components/home/CTA";
import {
  LeafIcon,
  FlameIcon,
  CupIcon,
  StarIcon,
} from "@/components/icons/DoodleIcons";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Kafeneja, a specialty coffee house in Blloku, Tirana, roasting small batches since 2019.",
};

const VALUES = [
  {
    title: "Directly Sourced",
    text: "We work with importers who pay above Fairtrade minimums and visit origin whenever we can.",
    Icon: LeafIcon,
  },
  {
    title: "Roasted in Tirana",
    text: "Small batches, roasted weekly on our drum roaster just outside the city.",
    Icon: FlameIcon,
  },
  {
    title: "Tradition, Kept",
    text: "Kafe turke is treated with the same care as our espresso, no shortcuts taken.",
    Icon: CupIcon,
  },
];

const TEAM = [
  {
    name: "Griselda Hoxha",
    role: "Founder & Roaster",
    detail: "Dials in every new bag before it hits the menu",
    src: "/kafeneja/images/staff-griselda.jpg",
  },
  {
    name: "Ard Berisha",
    role: "Head Barista",
    detail: "Makes the best cortado in Blloku",
    src: "/kafeneja/images/staff-ard.jpg",
  },
  {
    name: "Redi Krasniqi",
    role: "Bar Lead",
    detail: "10 years behind the bar, still learning",
    src: "/kafeneja/images/staff-redi.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 text-center">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            Our Story
          </p>
          <SplitHeading
            as="h1"
            className="font-display text-4xl sm:text-6xl text-espresso text-balance"
          >
            Three friends, one espresso machine, no exit strategy.
          </SplitHeading>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 sm:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Photo
            src="/kafeneja/images/coffee-on-table.jpg"
            ratio="aspect-[5/4]"
            className="rounded-2xl"
            label="Moccacino and cappuccino at the table"
          />
        </Reveal>
        <Reveal delay={0.1} className="space-y-4 text-ink-soft leading-relaxed">
          <p>
            Kafeneja began in 2019 when Griselda, back in Tirana after
            years pulling shots in Bologna, couldn&apos;t find the coffee
            she missed. So she, her brother Ard, and their friend Redi
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

      <section className="bg-gradient-to-br from-gold via-clay to-espresso-dark text-cream py-14 sm:py-16 grain">
        <Reveal
          childSelector="[data-stat]"
          stagger={0.08}
          className="mx-auto max-w-5xl px-5 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "2019", label: "Founded" },
            { value: "3", label: "Friends who started it" },
            { value: "6", label: "Years roasting" },
            { value: "7am", label: "Pastries out daily" },
          ].map((s) => (
            <div key={s.label} data-stat>
              <p className="font-display text-3xl sm:text-4xl mb-1">{s.value}</p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-cream/70">
                {s.label}
              </p>
            </div>
          ))}
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
                <v.Icon className="w-9 h-9 text-clay mb-4" />
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

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="text-center max-w-xl mx-auto mb-6">
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-3">
              The Team
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-espresso text-balance">
              The people behind the bar.
            </h2>
          </Reveal>

          <Reveal delay={0.05} className="max-w-xl mx-auto mb-14 text-center">
            <p className="text-ink-soft leading-relaxed">
              Three people, one bar, and a running disagreement about the
              right water temperature. We hire slowly, train each other
              constantly, and mean it when we say the person who made your
              coffee is probably still in the room.
            </p>
          </Reveal>

          <Reveal
            childSelector="[data-person]"
            stagger={0.1}
            className="grid sm:grid-cols-3 gap-6"
          >
            {TEAM.map((t) => (
              <div
                key={t.name}
                data-person
                className="rounded-2xl bg-cream-warm/40 border border-line p-8 text-center"
              >
                <Photo
                  src={t.src}
                  ratio="aspect-square"
                  className="rounded-full mx-auto mb-5 max-w-[200px] ring-4 ring-clay/25"
                  label={t.name}
                />
                <h3 className="font-display text-lg text-espresso">
                  {t.name}
                </h3>
                <p className="text-sm text-clay mb-2">{t.role}</p>
                <p className="text-sm text-ink-soft">{t.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-warm/60 border-y border-line py-8">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
          <p className="font-display text-lg text-espresso">Est. 2019</p>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-clay/40" />
          <p className="font-display text-lg text-espresso">
            3-person team
          </p>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-clay/40" />
          <p className="font-display text-lg text-espresso flex items-center gap-2">
            <StarIcon className="w-4 h-4 text-clay" />
            320+ Google reviews
          </p>
        </div>
      </section>

      <CTA />
    </div>
  );
}
