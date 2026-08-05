"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import SplitHeading from "@/components/SplitHeading";
import { posts } from "@/lib/posts";
import { useLanguage } from "@/lib/i18n";

export default function JournalIndexContent() {
  const { lang, t, pick } = useLanguage();
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 text-center">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            {t("journalPage.eyebrow")}
          </p>
          <SplitHeading
            as="h1"
            className="font-display text-4xl sm:text-6xl text-espresso text-balance"
          >
            {t("journalPage.title")}
          </SplitHeading>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-8 pb-24 sm:pb-32">
        <Reveal
          childSelector="[data-post]"
          stagger={0.08}
          className="space-y-10"
        >
          {posts.map((post) => (
            <Link
              href={`/journal/${post.slug}`}
              key={post.slug}
              data-post
              className="group grid sm:grid-cols-[220px_1fr] gap-6 items-center pb-10 border-b border-line last:border-none"
            >
              <Photo
                src={post.photo}
                ratio="aspect-[4/3]"
                className="rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                label={post.title}
              />
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-clay mb-3">
                  <span>{pick(post.category, post.categorySq ?? post.category)}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(
                      lang === "sq" ? "sq-AL" : "en-GB",
                      { day: "numeric", month: "long", year: "numeric" }
                    )}
                  </time>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-espresso leading-snug group-hover:text-caramel transition-colors">
                  {pick(post.title, post.titleSq ?? post.title)}
                </h2>
                <p className="text-ink-soft mt-3 leading-relaxed max-w-xl">
                  {pick(post.excerpt, post.excerptSq ?? post.excerpt)}
                </p>
                <span className="inline-block mt-4 text-sm link-underline text-espresso">
                  {t("journalPage.readMore")}
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
