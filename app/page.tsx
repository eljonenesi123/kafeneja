import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import AboutTeaser from "@/components/home/AboutTeaser";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import JournalTeaser from "@/components/home/JournalTeaser";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedMenu />
      <AboutTeaser />
      <Gallery />
      <Testimonials />
      <JournalTeaser />
      <CTA />
    </>
  );
}
