import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Encuentros, lanzamientos y actividades organizadas por MARGEN.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        kicker="Eventos"
        title="Todavía no hay eventos programados."
        description="Estamos preparando los próximos encuentros de MARGEN. Suscríbete al newsletter para enterarte apenas se abran los cupos."
      />
      <div className="container-page py-14 md:py-16">
        <ArrowLink href="/#newsletter" className="text-foreground">
          Suscribirme al newsletter
        </ArrowLink>
      </div>
    </>
  );
}
