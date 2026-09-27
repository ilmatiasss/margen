import { featuredArticleSlug, getArticleBySlug } from "@/data/content";
import { ArrowLink } from "./arrow-link";
import { MediaFrame } from "./media-frame";

export function FeaturedArticle() {
  const article = getArticleBySlug(featuredArticleSlug);
  if (!article) return null;

  return (
    <section className="container-page grid grid-cols-1 gap-10 pb-16 pt-10 md:pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24">
      <div className="flex flex-col gap-6">
        <span className="kicker text-xs font-bold text-accent">
          Destacado / {article.index}
        </span>
        <h1 className="font-serif text-5xl font-light leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
          {article.title}
        </h1>
        <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
          {article.dek}
        </p>
        <ArrowLink href={`/articulo/${article.slug}`}>Leer más</ArrowLink>
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
        <MediaFrame
          image={article.image}
          seed={article.slug}
          category={article.category}
          scale="hero"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
          className="h-full w-full"
        />
        <span className="kicker absolute bottom-4 right-4 text-[11px] text-foreground/70">
          01 / 05
        </span>
      </div>
    </section>
  );
}
