import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { ArrowLink } from "@/components/arrow-link";
import { MediaFrame } from "@/components/media-frame";
import {
  articles,
  getArticleBySlug,
  getArticlesByCategory,
  getCategory,
} from "@/data/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const related = getArticlesByCategory(article.category)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <article>
      <div className="container-page flex flex-col gap-6 pb-10 pt-12 md:pt-16">
        {category ? (
          <Link
            href={`/${category.slug}`}
            className="kicker text-xs text-muted transition-colors hover:text-foreground"
          >
            ← {category.label}
          </Link>
        ) : null}
        <span className="kicker text-xs font-bold text-accent">
          {category?.label} / {article.index}
        </span>
        <h1 className="max-w-3xl font-serif text-4xl font-light leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
          {article.title}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {article.dek}
        </p>
      </div>

      <div className="container-page relative aspect-[16/9] overflow-hidden bg-surface md:aspect-[21/9]">
        <MediaFrame
          image={article.image}
          seed={article.slug}
          category={article.category}
          scale="hero"
          sizes="100vw"
          priority
          className="h-full w-full"
        />
      </div>
      {article.image?.credit ? (
        <div className="container-page pt-2">
          <span className="text-xs text-subtle">{article.image.credit}</span>
        </div>
      ) : null}

      <div className="container-page py-12 md:py-16">
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          {article.body.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-foreground/90 md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {related.length > 0 ? (
        <div className="border-t border-border">
          <div className="container-page py-14 md:py-16">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="kicker text-xs text-muted">Seguir leyendo</h2>
              {category ? (
                <ArrowLink href={`/${category.slug}`}>
                  Ver {category.label.toLowerCase()}
                </ArrowLink>
              ) : null}
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}
