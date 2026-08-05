"use client";

import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import SplitHeading from "@/components/SplitHeading";
import CTA from "@/components/home/CTA";
import { useLanguage } from "@/lib/i18n";
import {
  LeafIcon,
  FlameIcon,
  CupIcon,
  StarIcon,
} from "@/components/icons/DoodleIcons";

const VALUES = [
  {
    title: "Directly Sourced",
    titleSq: "Blerë Drejtpërdrejt",
    text: "We work with importers who pay above Fairtrade minimums and visit origin whenever we can.",
    textSq:
      "Punojmë me importues që paguajnë mbi minimumet e Fairtrade dhe vizitojnë origjinën sa herë që mundemi.",
    Icon: LeafIcon,
  },
  {
    title: "Roasted in Tirana",
    titleSq: "Pjekur në Tiranë",
    text: "Small batches, roasted weekly on our drum roaster just outside the city.",
    textSq: "Sasi të vogla, pjekur çdo javë në pjekësin tonë me daulle jashtë qytetit.",
    Icon: FlameIcon,
  },
  {
    title: "Tradition, Kept",
    titleSq: "Traditë e Ruajtur",
    text: "Kafe turke is treated with the same care as our espresso, no shortcuts taken.",
    textSq: "Kafe turke trajtohet me të njëjtin kujdes si espresso jonë, pa asnjë shkurtim.",
    Icon: CupIcon,
  },
];

const TEAM = [
  {
    name: "Griselda Hoxha",
    role: "Founder & Roaster",
    roleSq: "Themeluese & Pjekëse",
    detail: "Dials in every new bag before it hits the menu",
    detailSq: "Kalibron çdo qese të re para se të futet në menu",
    src: "/kafeneja/images/staff-griselda.jpg",
  },
  {
    name: "Ard Berisha",
    role: "Head Barista",
    roleSq: "Barist Kryesor",
    detail: "Makes the best cortado in Blloku",
    detailSq: "Bën cortadon më të mirë në Bllok",
    src: "/kafeneja/images/staff-ard.jpg",
  },
  {
    name: "Redi Krasniqi",
    role: "Bar Lead",
    roleSq: "Përgjegjës Banaku",
    detail: "10 years behind the bar, still learning",
    detailSq: "10 vite pas banakut, ende duke mësuar",
    src: "/kafeneja/images/staff-redi.jpg",
  },
];

export default function AboutPageContent() {
  const { t, pick } = useLanguage();
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 text-center">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            {t("aboutPage.eyebrow")}
          </p>
          <SplitHeading
            as="h1"
            className="font-display text-4xl sm:text-6xl text-espresso text-balance"
          >
            {t("aboutPage.title")}
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
          <p>{t("aboutPage.p1")}</p>
          <p>{t("aboutPage.p2")}</p>
          <p>{t("aboutPage.p3")}</p>
        </Reveal>
      </section>

      <section className="bg-gradient-to-br from-gold via-clay to-espresso-dark text-cream py-14 sm:py-16 grain">
        <Reveal
          childSelector="[data-stat]"
          stagger={0.08}
          className="mx-auto max-w-5xl px-5 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "2019", label: t("aboutPage.statFounded") },
            { value: "3", label: t("aboutPage.statFriends") },
            { value: "6", label: t("aboutPage.statYears") },
            { value: "7am", label: t("aboutPage.statPastries") },
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
              {t("aboutPage.beliefEyebrow")}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-espresso text-balance">
              {t("aboutPage.beliefTitle")}
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
                  {pick(v.title, v.titleSq)}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {pick(v.text, v.textSq)}
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
              {t("aboutPage.teamEyebrow")}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-espresso text-balance">
              {t("aboutPage.teamTitle")}
            </h2>
          </Reveal>

          <Reveal delay={0.05} className="max-w-xl mx-auto mb-14 text-center">
            <p className="text-ink-soft leading-relaxed">{t("aboutPage.teamSub")}</p>
          </Reveal>

          <Reveal
            childSelector="[data-person]"
            stagger={0.1}
            className="grid sm:grid-cols-3 gap-6"
          >
            {TEAM.map((p) => (
              <div
                key={p.name}
                data-person
                className="rounded-2xl bg-cream-warm/40 border border-line p-8 text-center"
              >
                <Photo
                  src={p.src}
                  ratio="aspect-square"
                  className="rounded-full mx-auto mb-5 max-w-[200px] ring-4 ring-clay/25"
                  label={p.name}
                />
                <h3 className="font-display text-lg text-espresso">{p.name}</h3>
                <p className="text-sm text-clay mb-2">{pick(p.role, p.roleSq)}</p>
                <p className="text-sm text-ink-soft">{pick(p.detail, p.detailSq)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-warm/60 border-y border-line py-8">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
          <p className="font-display text-lg text-espresso">{t("aboutPage.est")}</p>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-clay/40" />
          <p className="font-display text-lg text-espresso">{t("aboutPage.teamSize")}</p>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-clay/40" />
          <p className="font-display text-lg text-espresso flex items-center gap-2">
            <StarIcon className="w-4 h-4 text-clay" />
            {t("aboutPage.googleReviews")}
          </p>
        </div>
      </section>

      <CTA />
    </div>
  );
}
