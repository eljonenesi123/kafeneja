import Photo from "../Photo";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const shots: {
  src: string;
  objectPosition?: string;
  label: string;
  span?: string;
}[] = [
  {
    src: "/kafeneja/images/coffee-on-table.jpg",
    label: "Moccacino and cappuccino, table service",
    span: "row-span-2",
  },
  {
    src: "/kafeneja/images/pastry.jpg",
    objectPosition: "center 65%",
    label: "Fresh croissant, straight from the oven",
  },
  {
    src: "/kafeneja/images/croissant.jpg",
    label: "Handing off a fresh croissant",
  },
  {
    src: "/kafeneja/images/interior.jpg",
    objectPosition: "center 35%",
    label: "Pulling shots behind the bar",
    span: "row-span-2",
  },
  {
    src: "/kafeneja/images/espresso-cup.jpg",
    objectPosition: "center",
    label: "Double espresso, house cup",
  },
  {
    src: "/kafeneja/images/coffeeholic-sign.jpg",
    label: "Our sign, Rruga Ismail Qemali",
  },
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
                src={s.src}
                objectPosition={s.objectPosition}
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
