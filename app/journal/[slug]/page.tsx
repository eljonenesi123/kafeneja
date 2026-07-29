import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="bg-paper">
      <section className="mx-auto max-w-3xl px-5 sm:px-8 pt-16 pb-10 sm:pt-24 sm:pb-14">
        <Reveal>
          <Link
            href="/journal"
            className="text-sm link-underline text-ink-soft"
          >
            ← All journal posts
          </Link>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-clay mt-6 mb-4">
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
          <h1 className="font-display text-3xl sm:text-5xl text-espresso text-balance">
            {post.title}
          </h1>
        </Reveal>
      </section>

      <Reveal
        as="section"
        className="mx-auto max-w-4xl px-5 sm:px-8 mb-12"
      >
        <Photo
          variant={post.photo}
          ratio="aspect-[16/9]"
          className="rounded-2xl"
          label={post.title}
        />
      </Reveal>

      <Reveal
        as="section"
        className="mx-auto max-w-2xl px-5 sm:px-8 pb-24 space-y-6 text-ink-soft leading-relaxed"
      >
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </Reveal>

      {more.length > 0 && (
        <section className="bg-cream-warm py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <h2 className="font-display text-2xl text-espresso mb-8">
                More from the journal
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
                    variant={m.photo}
                    ratio="aspect-[4/3]"
                    className="rounded-xl mb-4 transition-transform duration-500 group-hover:scale-[1.02]"
                    label={m.title}
                  />
                  <h3 className="font-display text-lg text-espresso group-hover:text-caramel transition-colors">
                    {m.title}
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
