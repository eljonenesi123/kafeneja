export type MenuItem = {
  name: string;
  nameSq?: string;
  description: string;
  descriptionSq?: string;
  price: string;
  tag?: string;
  tagSq?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  titleSq?: string;
  intro?: string;
  introSq?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "espresso",
    title: "Espresso Bar",
    titleSq: "Banaku i Espressos",
    intro: "Pulled on our La Marzocco, dialed in every morning.",
    introSq: "Përgatitur në La Marzocco-n tonë, kalibruar çdo mëngjes.",
    items: [
      { name: "Espresso", nameSq: "Espresso", description: "Single-origin, rotating", descriptionSq: "Origjinë e vetme, rrotulluese", price: "200 L" },
      { name: "Macchiato", nameSq: "Macchiato", description: "Espresso, a whisper of foam", descriptionSq: "Espresso, pak shkumë", price: "220 L" },
      { name: "Cortado", nameSq: "Cortado", description: "Equal parts espresso & steamed milk", descriptionSq: "Pjesë të barabarta espresso & qumësht i avulluar", price: "260 L" },
      { name: "Cappuccino", nameSq: "Cappuccino", description: "Classic ratio, dry or wet foam", descriptionSq: "Proporcion klasik, shkumë e thatë ose e lagësht", price: "280 L" },
      { name: "Flat White", nameSq: "Flat White", description: "Double ristretto, microfoam", descriptionSq: "Ristretto dopio, mikroshkumë", price: "300 L", tag: "Favorite", tagSq: "Favorit" },
      { name: "Latte", nameSq: "Latte", description: "Silky, lightly sweet", descriptionSq: "Kadife, lehtësisht e ëmbël", price: "300 L" },
      { name: "Kafe Turke", nameSq: "Kafe Turke", description: "Slow-boiled Albanian tradition", descriptionSq: "Traditë shqiptare, e ziuar ngadalë", price: "220 L" },
    ],
  },
  {
    id: "filter",
    title: "Filter & Batch",
    titleSq: "Filtër & Batch",
    intro: "Brewed to order, made for tasting.",
    introSq: "Përgatitur me porosi, bërë për shijim.",
    items: [
      { name: "V60 Pour-Over", nameSq: "V60 Pour-Over", description: "Single cup, chosen from our board", descriptionSq: "Filxhan i vetëm, zgjedhur nga tabela jonë", price: "350 L" },
      { name: "Aeropress", nameSq: "Aeropress", description: "Clean, bright, low acidity", descriptionSq: "E pastër, e ndritshme, aciditet i ulët", price: "320 L" },
      { name: "Cold Brew", nameSq: "Cold Brew", description: "Steeped 18 hours, over ice", descriptionSq: "E infuzuar 18 orë, me akull", price: "320 L", tag: "Summer", tagSq: "Verë" },
      { name: "Batch Drip", nameSq: "Batch Drip", description: "Our daily house blend", descriptionSq: "Përzierja jonë ditore e shtëpisë", price: "220 L" },
    ],
  },
  {
    id: "pastries",
    title: "From the Oven",
    titleSq: "Nga Furra",
    intro: "Baked fresh each morning by our in-house pastry team.",
    introSq: "Pjekur fresk çdo mëngjes nga ekipi ynë i ëmbëlsirave.",
    items: [
      { name: "Byrek me Spinaq", nameSq: "Byrek me Spinaq", description: "Spinach & feta, flaky pastry", descriptionSq: "Spinaq & djathë, brumë i thekshëm", price: "250 L" },
      { name: "Croissant", nameSq: "Kroasan", description: "72-hour laminated butter dough", descriptionSq: "Brumë gjalpi i laminuar 72 orë", price: "220 L" },
      { name: "Pistachio Croissant", nameSq: "Kroasan me Fëstuk", description: "House pistachio cream", descriptionSq: "Krem fëstuku i shtëpisë", price: "320 L", tag: "Favorite", tagSq: "Favorit" },
      { name: "Basque Cheesecake", nameSq: "Cheesecake Bask", description: "Slow-burnt, jammy centre", descriptionSq: "E djegur ngadalë, qendër si reçel", price: "380 L" },
      { name: "Olive Oil Cake", nameSq: "Kek me Vaj Ulliri", description: "Orange zest, almond crumb", descriptionSq: "Lëkurë portokalli, thërrime bajamesh", price: "300 L" },
    ],
  },
  {
    id: "cold",
    title: "Cold & Seasonal",
    titleSq: "Të Ftohta & Sezonale",
    items: [
      { name: "Iced Latte", nameSq: "Latte me Akull", description: "Double espresso, whole milk", descriptionSq: "Espresso dopio, qumësht i plotë", price: "320 L" },
      { name: "Orange Espresso Tonic", nameSq: "Espresso Tonic me Portokall", description: "Espresso, tonic, citrus", descriptionSq: "Espresso, tonik, agrume", price: "360 L", tag: "New", tagSq: "E Re" },
      { name: "Matcha Latte", nameSq: "Matcha Latte", description: "Ceremonial grade, oat milk", descriptionSq: "Cilësi ceremoniale, qumësht tërshëre", price: "340 L" },
      { name: "Fresh Lemonade", nameSq: "Limonadë e Freskët", description: "Mint, soda, honey", descriptionSq: "Mendër, sodë, mjaltë", price: "280 L" },
    ],
  },
];
