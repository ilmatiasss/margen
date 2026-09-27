"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories, footerLinks } from "@/data/content";
import { CloseIcon, MailIcon, MenuIcon, SearchIcon } from "./icons";
import { SearchOverlay } from "./search-overlay";
import { SocialLinks } from "./social-links";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            className="font-sans text-lg font-bold tracking-tight md:text-xl"
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(false);
            }}
          >
            MARGEN/
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="kicker text-xs text-foreground/90 transition-colors hover:text-foreground"
              >
                {category.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-5">
            <button
              type="button"
              aria-label="Buscar"
              onClick={() => setSearchOpen(true)}
              className="text-foreground/90 transition-colors hover:text-foreground"
            >
              <SearchIcon className="h-[18px] w-[18px]" />
            </button>
            <Link
              href="/contacto"
              aria-label="Contacto"
              className="hidden text-foreground/90 transition-colors hover:text-foreground sm:inline-flex"
            >
              <MailIcon className="h-[18px] w-[18px]" />
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((value) => !value)}
              className="text-foreground/90 transition-colors hover:text-foreground"
            >
              {menuOpen ? (
                <CloseIcon className="h-[18px] w-[18px]" />
              ) : (
                <MenuIcon className="h-[18px] w-[18px]" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-background transition-opacity duration-300 ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="container-page flex h-full flex-col justify-between overflow-y-auto pb-10 pt-28 md:pt-32">
          <nav className="flex flex-col">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-4 border-b border-border py-4 font-serif text-4xl font-light text-foreground transition-colors hover:text-accent md:text-6xl"
              >
                <span className="kicker text-xs font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {category.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
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
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
