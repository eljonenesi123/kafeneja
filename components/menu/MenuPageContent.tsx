"use client";

import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import SplitHeading from "@/components/SplitHeading";
import { menu } from "@/lib/menu";
import { useLanguage } from "@/lib/i18n";
import {
  CupIcon,
  DropletIcon,
  FlameIcon,
  SnowflakeIcon,
} from "@/components/icons/DoodleIcons";

const CATEGORY_ICONS: Record<string, typeof CupIcon> = {
  espresso: CupIcon,
  filter: DropletIcon,
  pastries: FlameIcon,
  cold: SnowflakeIcon,
};

export default function MenuPageContent() {
  const { t, pick } = useLanguage();
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          {/*
            TODO: swap in a real Kafeneja photo here once shot — an
            editorial top-down flat lay of the espresso bar, or a
            barista mid-pour, warm/moody lighting to match the Hero.
            Drop the file in public/images/ and point src at
            "/kafeneja/images/<file>.jpg" (see espresso-cup.jpg usage
            elsewhere for the pattern). This Unsplash image is a
            temporary stand-in only.
          */}
          <Photo
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
            objectPosition="center"
            ratio="aspect-[4/3]"
            className="rounded-2xl max-w-sm mx-auto lg:mx-0"
            label="Espresso bar setup (placeholder photo)"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            {t("menuPage.eyebrow")}
          </p>
          <SplitHeading
            as="h1"
            className="font-display text-4xl sm:text-6xl text-espresso text-balance"
          >
            {t("menuPage.title")}
          </SplitHeading>
          <p className="mt-5 max-w-lg mx-auto lg:mx-0 text-ink-soft leading-relaxed">
            {t("menuPage.sub")}
          </p>

          <nav
            aria-label="Menu categories"
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {menu.map((c) => {
              const Icon = CATEGORY_ICONS[c.id];
              return (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="group inline-flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-widest pl-2 pr-4 py-2 rounded-full bg-paper border border-line hover:border-clay/40 hover:shadow-sm transition-all"
                >
                  {Icon && (
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-clay/10 text-clay group-hover:bg-clay group-hover:text-cream transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                  )}
                  <span className="text-ink-soft group-hover:text-espresso transition-colors">
                    {pick(c.title, c.titleSq ?? c.title)}
                  </span>
                </a>
              );
            })}
          </nav>
        </Reveal>
      </section>

      <div className="mx-auto max-w-3xl px-5 sm:px-8 pb-24 sm:pb-32 space-y-16">
        {menu.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl text-espresso mb-1">
                {pick(category.title, category.titleSq ?? category.title)}
              </h2>
              {category.intro && (
                <p className="text-sm text-ink-soft mb-6">
                  {pick(category.intro, category.introSq ?? category.intro)}
                </p>
              )}
            </Reveal>

            <Reveal
              childSelector="[data-item]"
              stagger={0.05}
              className="divide-y divide-line border-y border-line"
            >
              {category.items.map((item) => (
                <div
                  key={item.name}
                  data-item
                  className="flex items-start justify-between gap-4 py-5"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-lg text-espresso">
                        {pick(item.name, item.nameSq ?? item.name)}
                      </h3>
                      {item.tag && (
                        <span className="text-[10px] uppercase tracking-widest text-cream bg-clay px-2 py-0.5 rounded-full">
                          {pick(item.tag, item.tagSq ?? item.tag)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-ink-soft mt-1">
                      {pick(item.description, item.descriptionSq ?? item.description)}
                    </p>
                  </div>
                  <span className="font-display text-espresso shrink-0 pt-1">
                    {item.price}
                  </span>
                </div>
              ))}
            </Reveal>
          </section>
        ))}
      </div>
    </div>
  );
}
