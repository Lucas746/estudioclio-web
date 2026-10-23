import type { Metadata } from "next";
import { Pagina } from "@/components/Secciones";

// Página de aterrizaje para Google Ads y la búsqueda "arquitecto Hudson". No aparece en el menú.
export const metadata: Metadata = {
  title: "Arquitecto en Hudson · Barrio cerrado | Estudio Clio",
  description:
    "Proyecto ejecutivo y dirección de obra para tu casa en barrio cerrado de Hudson. Documentación completa, plan de obra cerrado y costos reales.",
  alternates: { canonical: "/arquitecto-hudson" },
  openGraph: { url: "/arquitecto-hudson" },
};

export default function ArquitectoHudson() {
  return (
    <Pagina
      titulo="Arquitecto en Hudson: proyecto ejecutivo y dirección de obra para tu casa en barrio cerrado."
    />
  );
}
