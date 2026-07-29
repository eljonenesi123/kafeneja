const ITEMS = [
  "Single-Origin Espresso",
  "House-Baked Pastries",
  "Blloku, Tirana",
  "Slow Bar & Cupping",
  "Since 2019",
];

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden bg-espresso py-3 border-y border-cream/10">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-6 text-sm tracking-wide text-cream/70 whitespace-nowrap"
          >
            {item}
            <span aria-hidden className="text-gold">
              ✻
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
