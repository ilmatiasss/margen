import { getLatestGrid } from "@/data/content";
import { ArticleCard } from "./article-card";
import { SectionHeading } from "./section-heading";

export function LatestGrid() {
  const articles = getLatestGrid();

  return (
    <section className="border-t border-border">
      <div className="container-page py-14 md:py-16">
        <SectionHeading label="Lo último" href="/archivo" linkText="Ver todo" />
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
