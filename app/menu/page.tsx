import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import SplitHeading from "@/components/SplitHeading";
import { menu } from "@/lib/menu";
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

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Espresso, filter coffee, house pastries, and seasonal drinks at Kafeneja, Tirana.",
};

export default function MenuPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <Photo
            src="/kafeneja/images/espresso-cup.jpg"
            objectPosition="center"
            ratio="aspect-[4/3]"
            className="rounded-2xl max-w-sm mx-auto lg:mx-0"
            label="Espresso, house cup and saucer"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            The Menu
          </p>
          <SplitHeading
            as="h1"
            className="font-display text-4xl sm:text-6xl text-espresso text-balance"
          >
            Simple, seasonal, well made.
          </SplitHeading>
          <p className="mt-5 max-w-lg mx-auto lg:mx-0 text-ink-soft leading-relaxed">
            Prices in Albanian Lek (L). Ask your barista about today&apos;s
            single-origin rotation on filter and espresso.
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
                  className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest px-4 py-2 rounded-full border border-line text-ink-soft hover:border-clay hover:text-clay transition-colors"
                >
                  {Icon && <Icon className="w-4 h-4 shrink-0" />}
                  {c.title}
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
                {category.title}
              </h2>
              {category.intro && (
                <p className="text-sm text-ink-soft mb-6">{category.intro}</p>
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
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="text-[10px] uppercase tracking-widest text-cream bg-clay px-2 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-ink-soft mt-1">
                      {item.description}
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
