import Link from "next/link";
import { legalLinks } from "@/data/content";
import { NewsletterForm } from "./newsletter-form";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div
        id="newsletter"
        className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <span className="font-sans text-lg font-bold tracking-tight">
            MARGEN/
          </span>
          <p className="kicker mt-1 text-[11px] text-subtle">
            Independent Cultural Label
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
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

        <div className="flex flex-col gap-3">
          <span className="kicker text-xs text-muted">
            Suscríbete a nuestro newsletter
          </span>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
}
