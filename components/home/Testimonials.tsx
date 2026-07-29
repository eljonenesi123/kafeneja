import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const REVIEWS = [
  {
    quote:
      "The flat white here rivals anything I had in Melbourne. Blloku's best-kept secret — except everyone already knows.",
    name: "Elira K.",
    context: "Google Review",
  },
  {
    quote:
      "Kafe turke made properly, the way my gjyshe used to. I come for that alone and stay for the byrek.",
    name: "Andi M.",
    context: "Google Review",
  },
  {
    quote:
      "Quiet in the mornings, buzzing by noon. My go-to for working with a laptop and a very good espresso.",
    name: "Sara T.",
    context: "TripAdvisor",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-espresso text-cream py-20 sm:py-28 grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Word on the Street"
          title="What Tirana is saying."
          align="center"
          className="mb-14 [&_h2]:text-cream [&_p]:text-gold"
        />
        <Reveal
          childSelector="[data-card]"
          stagger={0.1}
          className="grid md:grid-cols-3 gap-6"
        >
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              data-card
              className="rounded-2xl border border-cream/15 p-7 bg-cream/[0.03]"
            >
              <blockquote className="font-display text-lg leading-snug text-cream/90 text-balance">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm text-cream/50">
                {r.name} · {r.context}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
