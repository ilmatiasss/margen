import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad y tratamiento de datos de MARGEN.",
};

const sections = [
  {
    title: "Qué datos recopilamos",
    body: "Recopilamos únicamente los datos que entregas voluntariamente, como tu correo electrónico al suscribirte al newsletter o al escribirnos a través del sitio.",
  },
  {
    title: "Cómo usamos tus datos",
    body: "Usamos tu correo electrónico exclusivamente para enviarte las publicaciones y novedades de MARGEN que solicitaste. Nunca vendemos ni compartimos tus datos con terceros con fines comerciales.",
  },
  {
    title: "Cookies",
    body: "Este sitio puede usar cookies técnicas básicas para su correcto funcionamiento. No utilizamos cookies de seguimiento publicitario de terceros.",
  },
  {
    title: "Tus derechos",
    body: "Puedes solicitar en cualquier momento que eliminemos tus datos de nuestras listas escribiéndonos directamente.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        kicker="Legal"
        title="Política de privacidad"
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
