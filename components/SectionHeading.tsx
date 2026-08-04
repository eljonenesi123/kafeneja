import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-2xl ${className}`}
    >
      <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-3">
        {eyebrow}
      </p>
      <SplitHeading
        as="h2"
        className="font-display text-3xl sm:text-4xl md:text-5xl text-espresso text-balance"
      >
        {title}
      </SplitHeading>
    </Reveal>
  );
}
