import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";
import { InstagramDoodle, FacebookDoodle } from "./icons/DoodleIcons";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80 grain">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16">
        <NewsletterSignup />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-cream mb-4">Kafeneja</p>
          <p className="max-w-sm text-sm leading-relaxed text-cream/70">
            A slow-roasted corner of Blloku, pouring single-origin espresso,
            house pastries, and honest hospitality since 2019.
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
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-cream/50 mb-4">
            Visit
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
            Hours
          </p>
          <ul className="text-sm leading-relaxed text-cream/70 space-y-1">
            <li>Mon to Fri, 07:30 to 20:00</li>
            <li>Sat and Sun, 08:00 to 21:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row gap-2 justify-between text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Kafeneja. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
            <Link href="/menu" className="link-underline">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
