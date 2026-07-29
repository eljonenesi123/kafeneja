import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { menu } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Espresso, filter coffee, house pastries, and seasonal drinks at Kafeneja, Tirana.",
};

export default function MenuPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-10 sm:pt-24 sm:pb-14 text-center">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            The Menu
          </p>
          <h1 className="font-display text-4xl sm:text-6xl text-espresso text-balance">
            Simple, seasonal, well made.
          </h1>
          <p className="mt-5 max-w-lg mx-auto text-ink-soft leading-relaxed">
            Prices in Albanian Lek (L). Ask your barista about today&apos;s
            single-origin rotation on filter and espresso.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <nav
            aria-label="Menu categories"
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {menu.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="text-xs sm:text-sm uppercase tracking-widest px-4 py-2 rounded-full border border-line text-ink-soft hover:border-clay hover:text-clay transition-colors"
              >
                {c.title}
              </a>
            ))}
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
