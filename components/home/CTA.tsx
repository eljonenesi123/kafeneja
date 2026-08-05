"use client";

import Link from "next/link";
import Reveal from "../Reveal";
import SplitHeading from "../SplitHeading";
import MagneticButton from "../MagneticButton";
import SteamWisp from "../SteamWisp";
import { useLanguage } from "@/lib/i18n";

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal
          className="relative rounded-3xl bg-gradient-to-br from-gold via-clay to-espresso-dark text-cream px-8 py-16 sm:py-20 text-center grain overflow-hidden"
        >
          <SteamWisp
            className="absolute top-6 left-1/2 -translate-x-16 w-6 h-12 text-cream/70 pointer-events-none hidden sm:block"
          />
          <SplitHeading
            as="h2"
            className="font-display text-3xl sm:text-5xl text-balance max-w-2xl mx-auto"
          >
            {t("cta.title")}
          </SplitHeading>
          <p className="mt-4 text-cream/75 max-w-md mx-auto">
            {t("cta.sub")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <Link
                href="/contact#reserve"
                className="rounded-full bg-cream text-espresso px-7 py-3.5 text-sm tracking-wide hover:bg-paper transition-colors duration-200"
              >
                {t("cta.reserve")}
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/menu"
                className="rounded-full border border-cream/40 px-7 py-3.5 text-sm tracking-wide hover:bg-cream/10 transition-colors duration-200"
              >
                {t("cta.seeMenu")}
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
