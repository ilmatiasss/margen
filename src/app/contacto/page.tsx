import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos para propuestas, colaboraciones o prensa.",
};

export default function ContactPage() {
  return (
    <PageHeader
      kicker="Contacto"
      title="Hablemos."
      description="Para propuestas editoriales, colaboraciones o consultas de prensa, escríbenos directamente."
    >
      <div className="mt-4 flex flex-col gap-8">
        <a
          href="mailto:hola@margen.cl"
          className="font-serif text-3xl font-light text-foreground transition-colors hover:text-muted md:text-4xl"
        >
          hola@margen.cl
        </a>
        <SocialLinks />
      </div>
    </PageHeader>
  );
}
