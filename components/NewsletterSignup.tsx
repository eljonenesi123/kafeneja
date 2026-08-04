"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import astronautCoffee from "@/lib/lottie/astronaut-coffee.json";

type Status = "idle" | "submitting" | "success";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <div className="rounded-2xl bg-cream/[0.04] border border-cream/15 p-6 sm:p-7 flex items-center gap-4">
      <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0">
        <Lottie animationData={astronautCoffee} loop />
      </div>
      <div className="min-w-0">
        <p className="font-display text-lg text-cream mb-1">
          One email a month, no more.
        </p>
        {status === "success" ? (
          <p className="text-sm text-cream/70">
            You&apos;re on the list. First one lands next roast day.
          </p>
        ) : (
          <>
            <p className="text-sm text-cream/60 mb-3">
              New arrivals and roasting notes from the journal, straight to
              your inbox.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col xs:flex-row gap-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-full border border-cream/25 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-cream/60 outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full bg-cream text-espresso text-sm px-5 py-2 tracking-wide hover:bg-cream/90 transition-colors duration-200 disabled:opacity-60 cursor-pointer"
              >
                {status === "submitting" ? "Joining…" : "Subscribe"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
