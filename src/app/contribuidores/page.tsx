import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contribuidores",
  description: "El equipo editorial y la red de colaboradores de MARGEN.",
};

export default function ContributorsPage() {
  return (
    <PageHeader
      kicker="Contribuidores"
      title="Un equipo pequeño, una red grande."
      description="MARGEN lo hace un equipo editorial reducido junto a una red de periodistas, críticos, fotógrafos e ilustradores independientes que colaboran edición a edición. Si quieres proponer un texto o una idea, escríbenos."
    />
  );
}
