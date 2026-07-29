import Photo from "../Photo";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const shots: {
  variant: "espresso" | "beans" | "latte" | "interior" | "pastry" | "pour";
  label: string;
  span?: string;
}[] = [
  { variant: "latte", label: "Latte art, rosetta pour", span: "row-span-2" },
  { variant: "beans", label: "Freshly roasted beans" },
  { variant: "pastry", label: "Pistachio croissant" },
  { variant: "interior", label: "Morning light on the bar" },
  { variant: "pour", label: "V60 pour-over in progress", span: "row-span-2" },
  { variant: "espresso", label: "Double espresso" },
];

export default function Gallery() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Around the Shop"
          title="A few honest snapshots."
          align="center"
          className="mb-12"
        />
        <Reveal
          childSelector="[data-tile]"
          stagger={0.06}
          className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[140px] sm:auto-rows-[180px] gap-3 sm:gap-4"
        >
          {shots.map((s) => (
            <div key={s.label} data-tile className={s.span}>
              <Photo
                variant={s.variant}
                ratio="h-full"
                className="rounded-xl h-full"
                label={s.label}
                tilt
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
