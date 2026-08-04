import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import LoadingSplash from "@/components/LoadingSplash";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kafeneja-tirana.al"),
  title: {
    default: "Kafeneja | Specialty Coffee in Tirana",
    template: "%s | Kafeneja",
  },
  description:
    "A slow-roasted corner of Blloku. Kafeneja is a specialty coffee house in Tirana, Albania, serving single-origin espresso, house pastries, and honest hospitality.",
  openGraph: {
    title: "Kafeneja | Specialty Coffee in Tirana",
    description:
      "A slow-roasted corner of Blloku. Single-origin espresso, house pastries, honest hospitality.",
    url: "https://kafeneja-tirana.al",
    siteName: "Kafeneja",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-espresso focus:text-cream focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <LoadingSplash />
        <Header />
        <main id="main" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
