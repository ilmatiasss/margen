import { ArrowLink } from "@/components/arrow-link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col gap-6 py-24 md:py-32">
      <span className="kicker text-xs text-muted">Error / 404</span>
      <h1 className="font-serif text-5xl font-light leading-tight text-foreground sm:text-6xl md:text-7xl">
        Esta página no existe.
      </h1>
      <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
        Puede que el enlace esté roto o que el artículo haya sido movido.
      </p>
      <ArrowLink href="/" className="text-foreground">
        Volver al inicio
      </ArrowLink>
    </div>
  );
}
