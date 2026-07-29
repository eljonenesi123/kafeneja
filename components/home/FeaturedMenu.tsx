import Link from "next/link";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { menu } from "@/lib/menu";

export default function FeaturedMenu() {
  const featured = menu[0].items.slice(0, 5);

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="From the Bar"
            title="A short list, done properly."
          />
          <Reveal delay={0.1}>
            <Link
              href="/menu"
              className="link-underline text-sm tracking-wide text-espresso whitespace-nowrap"
            >
              Full menu →
            </Link>
          </Reveal>
        </div>

        <Reveal
          childSelector="[data-row]"
          stagger={0.08}
          className="divide-y divide-line border-y border-line"
        >
          {featured.map((item) => (
            <div
              key={item.name}
              data-row
              className="flex items-baseline justify-between gap-4 py-5 group"
            >
              <div className="flex items-baseline gap-3 min-w-0">
                <h3 className="font-display text-lg sm:text-xl text-espresso truncate">
                  {item.name}
                </h3>
                {item.tag && (
                  <span className="shrink-0 text-[10px] uppercase tracking-widest text-cream bg-clay px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="flex-1 border-b border-dotted border-line/0 group-hover:border-line translate-y-[-4px] hidden sm:block mx-3" />
              <span className="font-display text-espresso shrink-0">
                {item.price}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
