import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Términos",
  description: "Términos y condiciones de uso de MARGEN.",
};

const sections = [
  {
    title: "Uso del sitio",
    body: "El contenido publicado en MARGEN es para uso personal y no comercial. Puedes leer, compartir y citar nuestros artículos siempre que se mencione la fuente y se enlace al contenido original.",
  },
  {
    title: "Propiedad intelectual",
    body: "Los textos, fotografías, ilustraciones y diseño de este sitio pertenecen a MARGEN o a sus respectivos autores. Su reproducción total o parcial con fines comerciales requiere autorización previa.",
  },
  {
    title: "Contenido de terceros",
    body: "Podemos enlazar a sitios, obras o productos de terceros con fines editoriales. No nos hacemos responsables por el contenido ni las políticas de esos sitios externos.",
  },
  {
    title: "Cambios en estos términos",
    body: "Estos términos pueden actualizarse a medida que el sitio evoluciona. La fecha de la última actualización se indicará al final de esta página.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Términos y condiciones"
        description="Esta es una versión preliminar y debe ser revisada por el equipo legal de MARGEN antes de su publicación definitiva."
      />
      <div className="container-page py-14 md:py-16">
        <div className="mx-auto flex max-w-2xl flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h2 className="font-serif text-2xl font-light text-foreground">
                {section.title}
              </h2>
              <p className="text-base leading-relaxed text-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
