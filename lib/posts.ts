export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  photo: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "new-ethiopia-guji-arrival",
    title: "A New Arrival: Ethiopia Guji, Washed",
    excerpt:
      "Our latest single-origin just landed. Bright jasmine and stone fruit, on filter and espresso this week.",
    date: "2026-06-02",
    category: "Roasting Notes",
    photo: "/kafeneja/images/interior.jpg",
    body: [
      "Every few months a new lot arrives that makes the whole team stop what they're doing. This week, it's the Ethiopia Guji, a washed lot grown at 2,100 meters, carrying notes of jasmine, bergamot, and ripe peach.",
      "We're running it on both filter and espresso this week. On the V60 it opens up florally; pulled as espresso, the fruit compresses into something closer to blood orange and honey.",
      "Ask your barista which roast date is currently in the hopper. We rotate our single-origin offering roughly every three to four weeks depending on how the batch performs as it rests.",
    ],
  },
  {
    slug: "sunday-cupping-sessions",
    title: "Sunday Cupping Sessions Are Back",
    excerpt:
      "Free public cuppings return this month. Bring your palate, leave with a new favorite bean.",
    date: "2026-05-14",
    category: "Events",
    photo: "/kafeneja/images/coffee-on-table.jpg",
    body: [
      "Starting this Sunday, we're reopening our monthly cupping table to the public. No experience necessary, just curiosity and a willingness to slurp loudly.",
      "We'll walk through four coffees side by side: two washed, two natural, sourced from Ethiopia, Colombia, and Kosovo's own emerging specialty scene.",
      "Sessions run from 11:00 to 12:30, capped at twelve seats. Reserve at the counter or via our contact page. It's free, and pastries are on the house.",
    ],
  },
  {
    slug: "why-we-serve-kafe-turke",
    title: "Why We Still Serve Kafe Turke",
    excerpt:
      "In a shop full of V60s and flat whites, our slowest drink remains one of our most ordered.",
    date: "2026-04-20",
    category: "Culture",
    photo: "/kafeneja/images/espresso-cup.jpg",
    body: [
      "It would be easy for a specialty coffee bar to quietly drop the copper xhezve from the back shelf. We haven't, and we won't.",
      "Kafe turke, Albanian-style Turkish coffee, is slow, unfiltered, and deeply social. It's how a coffee break turns into an hour with a neighbor.",
      "We treat it with the same care as our pour-overs: fresh grind, cold water, and patience over the flame. It's not a novelty on our menu. It's the reason a lot of us fell in love with coffee in the first place.",
    ],
  },
];
