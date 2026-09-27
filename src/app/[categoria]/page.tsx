import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { PageHeader } from "@/components/page-header";
import { categories, getArticlesByCategory, getCategory } from "@/data/content";

export function generateStaticParams() {
  return categories.map((category) => ({ categoria: category.slug }));
}

type Props = {
  params: Promise<{ categoria: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategory(categoria);
  if (!category) return {};
  return {
    title: category.label,
    description: `Todo lo que publicamos en MARGEN sobre ${category.label.toLowerCase()}.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categoria } = await params;
  const category = getCategory(categoria);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);

  return (
    <>
      <PageHeader
        kicker={`Categoría / ${String(articles.length).padStart(2, "0")}`}
        title={category.label}
        description={`Todo lo que publicamos sobre ${category.label.toLowerCase()}.`}
      />
      <div className="container-page py-14 md:py-16">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted">
            Todavía no hay artículos publicados en esta categoría.
          </p>
        )}
      </div>
    </>
  );
}
