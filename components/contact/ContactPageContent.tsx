"use client";

import Reveal from "@/components/Reveal";
import SplitHeading from "@/components/SplitHeading";
import ContactForm from "@/components/ContactForm";
import ReservationForm from "@/components/ReservationForm";
import { useLanguage } from "@/lib/i18n";

export default function ContactPageContent() {
  const { t } = useLanguage();

  const HOURS = [
    { day: t("contactPage.hours1day"), time: t("contactPage.hours1time") },
    { day: t("contactPage.hours2day"), time: t("contactPage.hours2time") },
  ];

  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-10 sm:pt-24 sm:pb-14 text-center">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            {t("contactPage.eyebrow")}
          </p>
          <SplitHeading
            as="h1"
            className="font-display text-4xl sm:text-6xl text-espresso text-balance"
          >
            {t("contactPage.title")}
          </SplitHeading>
        </Reveal>
      </section>

      <section
        id="reserve"
        className="scroll-mt-24 mx-auto max-w-4xl px-5 sm:px-8 pb-20 sm:pb-24"
      >
        <Reveal
          className="rounded-3xl border-2 border-clay/25 bg-cream-warm/40 p-6 sm:p-10 grain"
        >
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-3">
            {t("contactPage.bookEyebrow")}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-espresso mb-2">
            {t("contactPage.bookTitle")}
          </h2>
          <p className="text-ink-soft leading-relaxed mb-8 max-w-lg">
            {t("contactPage.bookSub")}
          </p>
          <ReservationForm />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 sm:pb-28 grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-clay mb-3">
              {t("contactPage.address")}
            </h2>
            <address className="not-italic font-display text-xl text-espresso leading-relaxed">
              Rruga Ismail Qemali 12
              <br />
              Blloku, Tirana 1001
              <br />
              Albania
            </address>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-clay mb-3">
              {t("contactPage.hours")}
            </h2>
            <ul className="space-y-1">
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between gap-6 text-ink-soft border-b border-line py-2 max-w-xs"
                >
                  <span>{h.day}</span>
                  <span className="text-espresso font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-clay mb-3">
              {t("contactPage.direct")}
            </h2>
            <ul className="space-y-1 text-ink-soft">
              <li>
                <a href="tel:+35569123456" className="link-underline">
                  +355 69 123 456
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@kafeneja-tirana.al"
                  className="link-underline"
                >
                  hello@kafeneja-tirana.al
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-2xl border border-line p-6 sm:p-8 bg-paper">
            <h2 className="font-display text-2xl text-espresso mb-1">
              {t("contactPage.sendTitle")}
            </h2>
            <p className="text-sm text-ink-soft mb-6">
              {t("contactPage.sendSub")}
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <div className="rounded-2xl overflow-hidden border border-line aspect-[16/7] grain relative bg-cream-warm">
          <iframe
            title="Kafeneja location map"
            src="https://www.google.com/maps?q=Rruga+Ismail+Qemali,+Tirana,+Albania&output=embed"
            className="absolute inset-0 w-full h-full grayscale-[15%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </div>
  );
}
