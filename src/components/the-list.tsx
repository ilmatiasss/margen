import { listItems } from "@/data/content";
import { ArrowLink } from "./arrow-link";
import { MediaFrame } from "./media-frame";

export function TheList() {
  return (
    <section className="border-t border-border">
      <div className="container-page grid grid-cols-1 gap-10 py-16 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16 lg:py-20">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h2 className="font-sans text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl">
              THE
              <br />
              MARGEN
              <br />
              LIST <span className="text-accent">/ 03</span>
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              10 cosas que estamos escuchando, viendo, leyendo y pensando esta
              semana.
            </p>
          </div>
          <ArrowLink href="/the-list">Ver lista</ArrowLink>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {listItems.map((item) => (
            <li key={item.order} className="flex flex-col gap-3">
              <div className="relative aspect-square overflow-hidden bg-surface">
                <MediaFrame
                  image={item.image}
                  seed={`list-${item.order}-${item.title}`}
                  scale="small"
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="kicker text-[11px] font-bold text-accent">
                  {item.order} · {item.action}
                </span>
                <span className="text-sm leading-snug text-foreground">
                  {item.title}
                </span>
                <span className="text-xs text-muted">{item.creator}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
