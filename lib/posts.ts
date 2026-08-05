export type Post = {
  slug: string;
  title: string;
  titleSq?: string;
  excerpt: string;
  excerptSq?: string;
  date: string;
  category: string;
  categorySq?: string;
  photo: string;
  body: string[];
  bodySq?: string[];
};

export const posts: Post[] = [
  {
    slug: "new-ethiopia-guji-arrival",
    title: "A New Arrival: Ethiopia Guji, Washed",
    titleSq: "Një Ardhje e Re: Etiopi Guji, e Larë",
    excerpt:
      "Our latest single-origin just landed. Bright jasmine and stone fruit, on filter and espresso this week.",
    excerptSq:
      "Origjina jonë më e re sapo mbërriti. Jasemin i ndritshëm dhe fruta guri, në filtër dhe espresso këtë javë.",
    date: "2026-06-02",
    category: "Roasting Notes",
    categorySq: "Shënime Pjekjeje",
    photo: "/kafeneja/images/interior.jpg",
    body: [
      "Every few months a new lot arrives that makes the whole team stop what they're doing. This week, it's the Ethiopia Guji, a washed lot grown at 2,100 meters, carrying notes of jasmine, bergamot, and ripe peach.",
      "We're running it on both filter and espresso this week. On the V60 it opens up florally; pulled as espresso, the fruit compresses into something closer to blood orange and honey.",
      "Ask your barista which roast date is currently in the hopper. We rotate our single-origin offering roughly every three to four weeks depending on how the batch performs as it rests.",
    ],
    bodySq: [
      "Çdo pak muaj mbërrin një lot i ri që bën që gjithë ekipi të ndalojë çfarëdo që po bën. Këtë javë, është Etiopia Guji, një lot i larë i rritur në 2,100 metra, me nota jasemini, bergamot, dhe pjeshkë të pjekur.",
      "Po e përdorim si në filtër ashtu edhe në espresso këtë javë. Në V60 hapet me nota lulesh; e nxjerrë si espresso, fruti kthehet në diçka më afër portokallit të kuq dhe mjaltit.",
      "Pyet baristin tënd cila datë pjekjeje është aktualisht në përdorim. E rrotullojmë ofertën tonë të origjinës së vetme afërsisht çdo tre deri katër javë, në varësi se si performon loti ndërsa pushon.",
    ],
  },
  {
    slug: "sunday-cupping-sessions",
    title: "Sunday Cupping Sessions Are Back",
    titleSq: "Sesionet e Shijimit të Dielën Janë Kthyer",
    excerpt:
      "Free public cuppings return this month. Bring your palate, leave with a new favorite bean.",
    excerptSq:
      "Shijime falas publike kthehen këtë muaj. Sill shijen tënde, largohu me një kokërr të re të preferuar.",
    date: "2026-05-14",
    category: "Events",
    categorySq: "Evente",
    photo: "/kafeneja/images/coffee-on-table.jpg",
    body: [
      "Starting this Sunday, we're reopening our monthly cupping table to the public. No experience necessary, just curiosity and a willingness to slurp loudly.",
      "We'll walk through four coffees side by side: two washed, two natural, sourced from Ethiopia, Colombia, and Kosovo's own emerging specialty scene.",
      "Sessions run from 11:00 to 12:30, capped at twelve seats. Reserve at the counter or via our contact page. It's free, and pastries are on the house.",
    ],
    bodySq: [
      "Duke filluar këtë të diel, po rihapim tavolinën tonë mujore të shijimit për publikun. Nuk kërkohet përvojë, vetëm kuriozitet dhe gatishmëri për të pirë me zë.",
      "Do të kalojmë nëpër katër kafe krah për krah: dy të lara, dy natyrale, të blera nga Etiopia, Kolumbia, dhe skena në zhvillim e specialitetit të vetë Kosovës.",
      "Sesionet zgjasin nga ora 11:00 deri në 12:30, të kufizuara në dymbëdhjetë vende. Rezervo në banak ose përmes faqes sonë të kontaktit. Është falas, dhe ëmbëlsirat janë dhuratë.",
    ],
  },
  {
    slug: "why-we-serve-kafe-turke",
    title: "Why We Still Serve Kafe Turke",
    titleSq: "Pse Ende Shërbejmë Kafe Turke",
    excerpt:
      "In a shop full of V60s and flat whites, our slowest drink remains one of our most ordered.",
    excerptSq:
      "Në një lokal plot me V60 dhe flat white, pija jonë më e ngadaltë mbetet një nga më të porositurat.",
    date: "2026-04-20",
    category: "Culture",
    categorySq: "Kulturë",
    photo: "/kafeneja/images/espresso-cup.jpg",
    body: [
      "It would be easy for a specialty coffee bar to quietly drop the copper xhezve from the back shelf. We haven't, and we won't.",
      "Kafe turke, Albanian-style Turkish coffee, is slow, unfiltered, and deeply social. It's how a coffee break turns into an hour with a neighbor.",
      "We treat it with the same care as our pour-overs: fresh grind, cold water, and patience over the flame. It's not a novelty on our menu. It's the reason a lot of us fell in love with coffee in the first place.",
    ],
    bodySq: [
      "Do të ishte e lehtë për një bar kafeje speciale të heqë qetësisht xhezven prej bakri nga rafti i pasëm. Ne nuk e kemi bërë, dhe nuk do ta bëjmë.",
      "Kafe turke, kafeja shqiptare në stilin turk, është e ngadaltë, e pafiltruar, dhe thellësisht sociale. Kështu një pushim kafeje kthehet në një orë me një fqinj.",
      "E trajtojmë me të njëjtin kujdes si filtrat tanë: bluarje e freskët, ujë i ftohtë, dhe durim mbi flakë. Nuk është një risi në menunë tonë. Është arsyeja pse shumë prej nesh u dashuruan me kafenë që në fillim.",
    ],
  },
];
