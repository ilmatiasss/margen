import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Tienda",
  description: "Ediciones impresas, merchandising y objetos de MARGEN.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        kicker="Tienda"
        title="Estamos preparando la tienda."
        description="Ediciones impresas, afiches y objetos de MARGEN, muy pronto. Suscríbete al newsletter para ser de los primeros en saberlo."
      />
      <div className="container-page py-14 md:py-16">
        <ArrowLink href="/#newsletter" className="text-foreground">
          Suscribirme al newsletter
        </ArrowLink>
      </div>
    </>
  );
}
