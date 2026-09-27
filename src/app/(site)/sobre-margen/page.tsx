import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { categories } from "@/data/content";

export const metadata: Metadata = {
  title: "Sobre Margen",
  description:
    "MARGEN es una publicación independiente dedicada a la cultura, las ideas y todo aquello que vale la pena mirar, escuchar, leer y discutir.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="Sobre Margen"
        title="Cultura para quienes buscan más."
      />
      <div className="container-page py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
              MARGEN nace de una idea simple: la cultura no necesita ser
              masiva para ser importante. Cubrimos música, cine, libros,
              ideas, cultura, juegos y tecnología desde un lugar honesto,
              curioso y sin miedo a quedarnos en el margen de la
              conversación cuando ahí es donde está lo interesante.
            </p>
            <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
              No respondemos a ninguna agenda comercial ni a ningún grupo
              editorial grande. Eso nos permite escribir sobre lo que
              realmente nos parece que vale la pena, aunque todavía nadie
              más le esté prestando atención.
            </p>
            <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
              Creemos en el trabajo bien hecho, en el criterio por sobre el
              algoritmo, y en que todavía hay espacio para publicaciones que
              tratan a quien lee como alguien inteligente.
            </p>
          </div>
          <div className="flex flex-col gap-3 border-t border-border pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <span className="kicker text-xs text-muted">Cubrimos</span>
            <ul className="flex flex-col gap-2">
              {categories.map((category) => (
                <li
                  key={category.slug}
                  className="font-serif text-xl font-light text-foreground"
                >
                  {category.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
