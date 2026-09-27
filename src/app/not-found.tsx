import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="kicker text-xs text-muted">Error / 404</span>
      <h1 className="font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
        Esta página no existe.
      </h1>
      <Link href="/" className="link-arrow kicker text-xs text-foreground">
        Volver al inicio
      </Link>
    </div>
  );
}
