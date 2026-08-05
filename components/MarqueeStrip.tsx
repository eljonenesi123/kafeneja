"use client";

import { useLanguage } from "@/lib/i18n";

const ITEMS_EN = [
  "Single-Origin Espresso",
  "House-Baked Pastries",
  "Blloku, Tirana",
  "Slow Bar & Cupping",
  "Since 2019",
];

const ITEMS_SQ = [
  "Espresso me Origjinë të Vetme",
  "Ëmbëlsira Shtëpiake",
  "Blloku, Tiranë",
  "Bar i Ngadaltë & Shijim",
  "Që nga 2019",
];

export default function MarqueeStrip() {
  const { pick } = useLanguage();
  const ITEMS = pick(ITEMS_EN, ITEMS_SQ);
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden bg-espresso py-3 border-y border-cream/10">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-6 text-sm tracking-wide text-cream/70 whitespace-nowrap"
          >
            {item}
            <span aria-hidden className="text-gold">
              ✻
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
