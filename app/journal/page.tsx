import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Roasting notes, events, and stories from Kafeneja in Blloku, Tirana.",
};

export default function JournalIndex() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 text-center">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-clay mb-4">
            Journal
          </p>
          <h1 className="font-display text-4xl sm:text-6xl text-espresso text-balance">
            Notes, events & roasting stories.
          </h1>
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
                variant={post.photo}
                ratio="aspect-[4/3]"
                className="rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                label={post.title}
              />
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-clay mb-3">
                  <span>{post.category}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-espresso leading-snug group-hover:text-caramel transition-colors">
                  {post.title}
                </h2>
                <p className="text-ink-soft mt-3 leading-relaxed max-w-xl">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-sm link-underline text-espresso">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
