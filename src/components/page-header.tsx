import type { ReactNode } from "react";

export function PageHeader({
  kicker,
  title,
  description,
  children,
}: {
  kicker?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="container-page flex flex-col gap-5 border-b border-border pb-10 pt-12 md:pt-16">
      {kicker ? <span className="kicker text-xs text-muted">{kicker}</span> : null}
      <h1 className="font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
