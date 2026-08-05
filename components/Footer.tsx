"use client";

import Link from "next/link";
import Image from "next/image";
import NewsletterSignup from "./NewsletterSignup";
import { InstagramDoodle, FacebookDoodle } from "./icons/DoodleIcons";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-espresso text-cream/80 grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16">
        <NewsletterSignup />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/kafeneja/images/logo-mark.png"
              alt=""
              width={360}
              height={465}
              className="h-10 w-auto"
            />
            <p className="font-display text-2xl text-cream">Kafeneja</p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/70">
            {t("footer.tagline")}
          </p>
          <div className="flex gap-5 mt-6">
            {[
              { label: "Instagram", href: "https://instagram.com", Icon: InstagramDoodle },
              { label: "Facebook", href: "https://facebook.com", Icon: FacebookDoodle },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group flex items-center gap-2 text-xs uppercase tracking-widest text-cream/70 hover:text-cream transition-colors"
              >
                <s.Icon className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span className="link-underline">{s.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-cream/50 mb-4">
              {t("footer.orderAhead")}
            </p>
            <div className="flex flex-col xs:flex-row gap-3">
              {[
                { name: "Wolt", href: "https://wolt.com/en/alb/tirana" },
                { name: "Glovo", href: "https://www.glovoapp.com" },
              ].map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cream/25 px-5 py-2 text-sm text-cream/80 hover:bg-cream hover:text-espresso hover:border-cream transition-colors duration-200"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-cream/50 mb-4">
            {t("footer.visit")}
          </p>
          <address className="not-italic text-sm leading-relaxed text-cream/70">
            Rruga Ismail Qemali 12
            <br />
            Blloku, Tirana 1001
            <br />
            Albania
          </address>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-cream/50 mb-4">
            {t("footer.hours")}
          </p>
          <ul className="text-sm leading-relaxed text-cream/70 space-y-1">
            <li>{t("footer.hours1")}</li>
            <li>{t("footer.hours2")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row gap-2 justify-between text-xs text-cream/40">
          <p>
            © {new Date().getFullYear()} Kafeneja. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="link-underline">
              {t("footer.contact")}
            </Link>
            <Link href="/menu" className="link-underline">
              {t("footer.menu")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
