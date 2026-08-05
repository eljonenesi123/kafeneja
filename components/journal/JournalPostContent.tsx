"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { type Post } from "@/lib/posts";
import { useLanguage } from "@/lib/i18n";

export default function JournalPostContent({
  post,
  more,
}: {
  post: Post;
  more: Post[];
}) {
  const { lang, t, pick } = useLanguage();

  return (
    <article className="bg-paper">
      <section className="mx-auto max-w-3xl px-5 sm:px-8 pt-16 pb-10 sm:pt-24 sm:pb-14">
        <Reveal>
          <Link
            href="/journal"
            className="text-sm link-underline text-ink-soft"
          >
            {t("journalPost.back")}
          </Link>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-clay mt-6 mb-4">
            <span>{pick(post.category, post.categorySq ?? post.category)}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(
                lang === "sq" ? "sq-AL" : "en-GB",
                { day: "numeric", month: "long", year: "numeric" }
              )}
            </time>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl text-espresso text-balance">
            {pick(post.title, post.titleSq ?? post.title)}
          </h1>
        </Reveal>
      </section>

      <Reveal
        as="section"
        className="mx-auto max-w-4xl px-5 sm:px-8 mb-12"
      >
        <Photo
          src={post.photo}
          ratio="aspect-[16/9]"
          className="rounded-2xl"
          label={post.title}
        />
      </Reveal>

      <Reveal
        as="section"
        className="mx-auto max-w-2xl px-5 sm:px-8 pb-24 space-y-6 text-ink-soft leading-relaxed"
      >
        {pick(post.body, post.bodySq ?? post.body).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </Reveal>

      {more.length > 0 && (
        <section className="bg-cream-warm py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <h2 className="font-display text-2xl text-espresso mb-8">
                {t("journalPost.more")}
              </h2>
            </Reveal>
            <Reveal
              childSelector="[data-more]"
              stagger={0.1}
              className="grid sm:grid-cols-2 gap-8"
            >
              {more.map((m) => (
                <Link
                  href={`/journal/${m.slug}`}
                  key={m.slug}
                  data-more
                  className="group block"
                >
                  <Photo
                    src={m.photo}
                    ratio="aspect-[4/3]"
                    className="rounded-xl mb-4 transition-transform duration-500 group-hover:scale-[1.02]"
                    label={m.title}
                  />
                  <h3 className="font-display text-lg text-espresso group-hover:text-caramel transition-colors">
                    {pick(m.title, m.titleSq ?? m.title)}
                  </h3>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}
    </article>
  );
}
