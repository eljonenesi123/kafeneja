export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "espresso",
    title: "Espresso Bar",
    intro: "Pulled on our La Marzocco, dialed in every morning.",
    items: [
      { name: "Espresso", description: "Single-origin, rotating", price: "200 L" },
      { name: "Macchiato", description: "Espresso, a whisper of foam", price: "220 L" },
      { name: "Cortado", description: "Equal parts espresso & steamed milk", price: "260 L" },
      { name: "Cappuccino", description: "Classic ratio, dry or wet foam", price: "280 L" },
      { name: "Flat White", description: "Double ristretto, microfoam", price: "300 L", tag: "Favorite" },
      { name: "Latte", description: "Silky, lightly sweet", price: "300 L" },
      { name: "Kafe Turke", description: "Slow-boiled Albanian tradition", price: "220 L" },
    ],
  },
  {
    id: "filter",
    title: "Filter & Batch",
    intro: "Brewed to order, made for tasting.",
    items: [
      { name: "V60 Pour-Over", description: "Single cup, chosen from our board", price: "350 L" },
      { name: "Aeropress", description: "Clean, bright, low acidity", price: "320 L" },
      { name: "Cold Brew", description: "Steeped 18 hours, over ice", price: "320 L", tag: "Summer" },
      { name: "Batch Drip", description: "Our daily house blend", price: "220 L" },
    ],
  },
  {
    id: "pastries",
    title: "From the Oven",
    intro: "Baked fresh each morning by our in-house pastry team.",
    items: [
      { name: "Byrek me Spinaq", description: "Spinach & feta, flaky pastry", price: "250 L" },
      { name: "Croissant", description: "72-hour laminated butter dough", price: "220 L" },
      { name: "Pistachio Croissant", description: "House pistachio cream", price: "320 L", tag: "Favorite" },
      { name: "Basque Cheesecake", description: "Slow-burnt, jammy centre", price: "380 L" },
      { name: "Olive Oil Cake", description: "Orange zest, almond crumb", price: "300 L" },
    ],
  },
  {
    id: "cold",
    title: "Cold & Seasonal",
    items: [
      { name: "Iced Latte", description: "Double espresso, whole milk", price: "320 L" },
      { name: "Orange Espresso Tonic", description: "Espresso, tonic, citrus", price: "360 L", tag: "New" },
      { name: "Matcha Latte", description: "Ceremonial grade, oat milk", price: "340 L" },
      { name: "Fresh Lemonade", description: "Mint, soda, honey", price: "280 L" },
    ],
  },
];
