import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { articles } from "@/data/content";

export const metadata: Metadata = {
  title: "Archivo",
  description: "Todo lo publicado en MARGEN, ordenado por edición.",
};

export default function ArchivePage() {
  const sorted = [...articles].sort(
    (a, b) => Number(b.index) - Number(a.index),
  );

  return (
    <>
      <PageHeader
        kicker={`Archivo / ${String(sorted.length).padStart(2, "0")}`}
        title="Todo lo publicado"
        description="El registro completo de MARGEN: música, cine, libros, ideas, cultura, play y tech."
      />
      <div className="container-page py-14 md:py-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((article, index) => (
            <Reveal key={article.slug} delay={(index % 6) * 90}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
