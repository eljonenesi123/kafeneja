"use client";

import { useLanguage } from "@/lib/i18n";

const PLATFORMS = [
  { name: "Wolt", href: "https://wolt.com/en/alb/tirana" },
  { name: "Glovo", href: "https://www.glovoapp.com" },
];

export default function OrderAhead({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {PLATFORMS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-0.5 rounded-full border border-espresso/25 px-7 py-3 hover:bg-espresso hover:text-cream hover:border-espresso transition-colors duration-200"
          >
            <span className="text-[10px] uppercase tracking-widest text-ink-soft group-hover:text-cream/70 transition-colors">
              {t("order.label")}
            </span>
            <span className="font-display text-base leading-tight text-espresso group-hover:text-cream transition-colors">
              {p.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
