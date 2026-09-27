import Link from "next/link";
import {
  footerLinks,
  getArticleBySlug,
  getCategory,
  heroSplitArticleSlug,
} from "@/data/content";
import { ArrowLink } from "./arrow-link";
import { EditorialArt } from "./editorial-art";
import { ArrowIcon } from "./icons";
import { SocialLinks } from "./social-links";

export function SplitFeature() {
  const article = getArticleBySlug(heroSplitArticleSlug);
  if (!article) return null;
  const category = getCategory(article.category);

  return (
    <section className="border-t border-border">
      <div className="container-page grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <Link
          href={`/articulo/${article.slug}`}
          className="group flex flex-col gap-5 lg:col-span-6"
        >
          <div className="aspect-[16/10] overflow-hidden bg-surface">
            <EditorialArt
              seed={article.slug}
              category={article.category}
              scale="hero"
              className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="kicker text-[11px] text-subtle">
              {category?.label} / {article.index}
            </span>
            <h3 className="font-serif text-2xl font-light leading-snug text-foreground transition-colors group-hover:text-muted md:text-3xl">
              {article.title}
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {article.dek}
            </p>
            <span className="link-arrow kicker mt-1 text-xs text-foreground">
              Leer más
              <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </div>
        </Link>

        <div className="flex flex-col justify-center gap-6 border-t border-border pt-10 lg:col-span-3 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <span aria-hidden className="h-6 w-6 border-l border-t border-foreground/60" />
          <h2 className="font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
            Cultura para quienes buscan más.
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            MARGEN es una publicación independiente dedicada a la cultura, las
            ideas y todo aquello que vale la pena mirar, escuchar, leer y
            discutir.
          </p>
          <ArrowLink href="/sobre-margen">Conoce más</ArrowLink>
        </div>

        <div className="flex flex-col justify-between gap-8 border-t border-border pt-10 lg:col-span-3 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <ul className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="kicker text-xs text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
