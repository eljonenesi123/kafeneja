"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const NAV = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-18 py-4">
        <Link
          href="/"
          className="font-display text-xl sm:text-2xl tracking-tight text-espresso"
          aria-label="Kafeneja home"
        >
          Kafeneja
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link-underline text-sm tracking-wide uppercase ${
                pathname === item.href
                  ? "text-clay"
                  : "text-ink-soft hover:text-espresso"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <MagneticButton strength={0.4}>
            <Link
              href="/contact#reserve"
              className="rounded-full bg-espresso text-cream text-sm px-5 py-2.5 tracking-wide hover:bg-espresso-dark transition-colors duration-200"
            >
              Reserve a Table
            </Link>
          </MagneticButton>
        </nav>

        <button
          type="button"
          className="md:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-[1.5px] w-6 bg-espresso transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-6 bg-espresso transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-6 bg-espresso transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 pb-6 gap-1 bg-paper border-b border-line">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-lg font-display text-espresso border-b border-line/60 last:border-none"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact#reserve"
            className="mt-4 rounded-full bg-espresso text-cream text-center text-sm px-5 py-3 tracking-wide"
          >
            Reserve a Table
          </Link>
        </nav>
      </div>
    </header>
  );
}
