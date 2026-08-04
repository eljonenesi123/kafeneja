import Link from "next/link";
import Photo from "../Photo";
import Reveal from "../Reveal";

export default function AboutTeaser() {
  return (
    <section className="bg-cream-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <Photo
            src="/kafeneja/images/barista-pour.jpg"
            objectPosition="center"
            ratio="aspect-[4/3]"
            className="rounded-2xl"
            label="Pulling a shot behind the bar at Kafeneja"
            parallax
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            Our Story
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso text-balance mb-6">
            Built by three friends who missed home-brewed coffee.
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            Kafeneja opened its doors in 2019 in a converted apartment on
            Rruga Ismail Qemali, the kind of Blloku building that still
            has its original tile floors. We roast in small batches, source
            directly where we can, and treat kafe turke with the same
            respect as a dialed-in V60.
          </p>
          <p className="text-ink-soft leading-relaxed mb-8">
            Today we're a small team of baristas, bakers, and one very
            particular roaster, still pouring the same espresso we'd want
            to drink ourselves.
          </p>
          <Link
            href="/about"
            className="link-underline text-sm tracking-wide text-espresso"
          >
            Read our full story →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
