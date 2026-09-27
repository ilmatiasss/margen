"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { articles, categories, getCategory } from "@/data/content";
import { CloseIcon, SearchIcon } from "./icons";

export function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [wasOpen, setWasOpen] = useState(open);
  const inputRef = useRef<HTMLInputElement>(null);

  if (open !== wasOpen) {
    setWasOpen(open);
    if (!open) setQuery("");
  }

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return articles
      .filter((article) => {
        const category = getCategory(article.category);
        return (
          article.title.toLowerCase().includes(q) ||
          article.dek.toLowerCase().includes(q) ||
          category?.label.toLowerCase().includes(q) ||
          article.category.toLowerCase().includes(q)
        );
      })
      .slice(0, 6);
  }, [query]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-background/98 backdrop-blur transition-opacity duration-300 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      inert={!open}
    >
      <div className="container-page flex h-full flex-col pt-24 md:pt-32">
        <div className="flex items-start justify-between gap-6 border-b border-border pb-6">
          <div className="flex flex-1 items-center gap-4">
            <SearchIcon className="h-6 w-6 shrink-0 text-muted" />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar artículos, temas…"
              className="w-full bg-transparent font-serif text-2xl font-light text-foreground placeholder:text-subtle focus:outline-none md:text-4xl"
            />
          </div>
          <button
            type="button"
            aria-label="Cerrar búsqueda"
            onClick={onClose}
            className="mt-1 shrink-0 text-foreground/90 transition-colors hover:text-foreground"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8">
          {query.trim() === "" ? (
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  onClick={onClose}
                  className="kicker rounded-full border border-border px-4 py-2 text-xs text-muted transition-colors hover:border-foreground hover:text-foreground"
                >
                  {category.label}
                </Link>
              ))}
            </div>
          ) : results.length > 0 ? (
            <ul className="flex flex-col divide-y divide-border">
              {results.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/articulo/${article.slug}`}
                    onClick={onClose}
                    className="group flex flex-col gap-1 py-5"
                  >
                    <span className="kicker text-xs text-subtle">
                      {categories.find((c) => c.slug === article.category)?.label} /{" "}
                      {article.index}
                    </span>
                    <span className="font-serif text-xl text-foreground transition-colors group-hover:text-muted md:text-2xl">
                      {article.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">
              No encontramos resultados para &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
