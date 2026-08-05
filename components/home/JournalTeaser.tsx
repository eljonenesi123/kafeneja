"use client";

import Link from "next/link";
import Photo from "../Photo";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { posts } from "@/lib/posts";
import { useLanguage } from "@/lib/i18n";

export default function JournalTeaser() {
  const { t, pick } = useLanguage();
  const latest = posts.slice(0, 3);
  return (
    <section className="bg-cream-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading eyebrow={t("journalTeaser.eyebrow")} title={t("journalTeaser.title")} />
          <Reveal delay={0.1}>
            <Link
              href="/journal"
              className="link-underline text-sm tracking-wide text-espresso whitespace-nowrap"
            >
              {t("journalTeaser.all")}
            </Link>
          </Reveal>
        </div>

        <Reveal
          childSelector="[data-post]"
          stagger={0.08}
          className="grid md:grid-cols-3 gap-8"
        >
          {latest.map((post) => (
            <Link
              href={`/journal/${post.slug}`}
              key={post.slug}
              data-post
              className="group block"
            >
              <Photo
                src={post.photo}
                ratio="aspect-[4/3]"
                className="rounded-xl mb-5 transition-transform duration-500 group-hover:scale-[1.02]"
                label={post.title}
              />
              <p className="text-xs uppercase tracking-widest text-clay mb-2">
                {pick(post.category, post.categorySq ?? post.category)}
              </p>
              <h3 className="font-display text-xl text-espresso leading-snug group-hover:text-caramel transition-colors">
                {pick(post.title, post.titleSq ?? post.title)}
              </h3>
              <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                {pick(post.excerpt, post.excerptSq ?? post.excerpt)}
              </p>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
