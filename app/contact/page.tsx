import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Kafeneja in Blloku, Tirana, reserve a table, or send us a message.",
};

const HOURS = [
  { day: "Monday – Friday", time: "07:30 – 20:00" },
  { day: "Saturday – Sunday", time: "08:00 – 21:00" },
];

export default function ContactPage() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-10 sm:pt-24 sm:pb-14 text-center">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl sm:text-6xl text-espresso text-balance">
            Come find us in Blloku.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 sm:pb-28 grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-clay mb-3">
              Address
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
              Hours
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
              Direct
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

          <div id="reserve" className="scroll-mt-24">
            <h2 className="text-xs uppercase tracking-widest text-clay mb-3">
              Reservations
            </h2>
            <p className="text-ink-soft leading-relaxed">
              We hold tables for groups of 4 or more. For same-day
              reservations, calling ahead is fastest — otherwise use the
              form and mention your preferred time.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-2xl border border-line p-6 sm:p-8 bg-cream-warm/40">
            <h2 className="font-display text-2xl text-espresso mb-6">
              Send us a message
            </h2>
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
