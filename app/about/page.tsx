import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Kafeneja, a specialty coffee house in Blloku, Tirana, roasting small batches since 2019.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
