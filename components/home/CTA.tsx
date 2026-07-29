import Link from "next/link";
import Reveal from "../Reveal";

export default function CTA() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal
          className="rounded-3xl bg-gradient-to-br from-clay to-espresso text-cream px-8 py-16 sm:py-20 text-center grain"
        >
          <h2 className="font-display text-3xl sm:text-5xl text-balance max-w-2xl mx-auto">
            Come sit with us — the coffee&apos;s ready.
          </h2>
          <p className="mt-4 text-cream/75 max-w-md mx-auto">
            Rruga Ismail Qemali 12, Blloku, Tirana. Open daily from 07:30.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#reserve"
              className="rounded-full bg-cream text-espresso px-7 py-3.5 text-sm tracking-wide hover:bg-paper transition-colors duration-200"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm tracking-wide hover:bg-cream/10 transition-colors duration-200"
            >
              See the Menu
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
