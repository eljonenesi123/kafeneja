import type { Metadata } from "next";
import MenuPageContent from "@/components/menu/MenuPageContent";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Espresso, filter coffee, house pastries, and seasonal drinks at Kafeneja, Tirana.",
};

export default function MenuPage() {
  return <MenuPageContent />;
}
