import { BeanIcon } from "./icons/DoodleIcons";

export default function SectionDivider() {
  return (
    <div className="relative h-px bg-line" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-clay text-cream shadow-md shadow-clay/20">
        <BeanIcon className="w-5 h-5" />
      </div>
    </div>
  );
}
