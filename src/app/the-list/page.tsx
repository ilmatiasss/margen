import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { MediaFrame } from "@/components/media-frame";
import { listItems } from "@/data/content";

export const metadata: Metadata = {
  title: "The Margen List",
  description:
    "10 cosas que estamos escuchando, viendo, leyendo y pensando esta semana.",
};

export default function TheListPage() {
  return (
    <>
      <PageHeader
        kicker="The Margen List / 03"
        title="Lo que nos tiene la cabeza esta semana"
        description="Una selección curada por el equipo de MARGEN: música, cine, libros, juegos y objetos que están dando de qué hablar."
      />
      <div className="container-page py-14 md:py-16">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {listItems.map((item) => (
            <li key={item.order} className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <MediaFrame
                  image={item.image}
                  seed={`list-${item.order}-${item.title}`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="kicker text-[11px] text-subtle">
                  {item.order} · {item.action}
                </span>
                <span className="font-serif text-xl text-foreground">
                  {item.title}
                </span>
                <span className="text-sm text-muted">{item.creator}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
