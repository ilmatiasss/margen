import Link from "next/link";
import { getCategory } from "@/data/content";
import type { Article } from "@/types/content";
import { MediaFrame } from "./media-frame";

export function ArticleCard({ article }: { article: Article }) {
  const category = getCategory(article.category);

  return (
    <Link
      href={`/articulo/${article.slug}`}
      className="card-hover group flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <MediaFrame
          image={article.image}
          seed={article.slug}
          category={article.category}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 90vw"
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 pt-4">
        <span className="kicker text-[11px] font-bold text-accent">
          {category?.label} / {article.index}
        </span>
        <h3 className="font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-muted md:text-xl">
          {article.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">
          {article.dek}
        </p>
      </div>
    </Link>
  );
}
