"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import astronautCoffee from "@/lib/lottie/astronaut-coffee.json";
import { BeanIcon } from "./icons/DoodleIcons";
import { useLanguage } from "@/lib/i18n";

type Status = "idle" | "submitting" | "success";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<Status>("idle");
  const { t } = useLanguage();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-cream/[0.04] border border-cream/15 p-6 sm:p-7 flex items-center gap-4">
      <BeanIcon className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-40 h-40 text-cream/[0.05] rotate-12 pointer-events-none" />
      <BeanIcon className="hidden lg:block absolute right-24 -bottom-8 w-24 h-24 text-cream/[0.05] -rotate-12 pointer-events-none" />
      <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0">
        <Lottie animationData={astronautCoffee} loop />
      </div>
      <div className="min-w-0 flex-1 max-w-md">
        <p className="font-display text-lg text-cream mb-1">
          {t("newsletter.title")}
        </p>
        {status === "success" ? (
          <p className="text-sm text-cream/70">
            {t("newsletter.success")}
          </p>
        ) : (
          <>
            <p className="text-sm text-cream/60 mb-3">
              {t("newsletter.sub")}
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col xs:flex-row gap-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {t("newsletter.emailLabel")}
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder={t("newsletter.placeholder")}
                className="min-w-0 flex-1 rounded-full border border-cream/25 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-cream/60 outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full bg-cream text-espresso text-sm px-5 py-2 tracking-wide hover:bg-cream/90 transition-colors duration-200 disabled:opacity-60 cursor-pointer"
              >
                {status === "submitting" ? t("newsletter.joining") : t("newsletter.subscribe")}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
