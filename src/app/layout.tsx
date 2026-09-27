import type { Metadata, Viewport } from "next";
import { fraunces, inter } from "@/lib/fonts";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://margen.cl"),
  title: {
    default: "MARGEN — Cultura para quienes buscan más",
    template: "%s — MARGEN",
  },
  description:
    "MARGEN es una publicación independiente dedicada a la cultura, las ideas y todo aquello que vale la pena mirar, escuchar, leer y discutir.",
  openGraph: {
    title: "MARGEN",
    description:
      "Cultura para quienes buscan más: música, cine, libros, ideas y tecnología.",
    siteName: "MARGEN",
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
