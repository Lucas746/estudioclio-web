import type { Metadata } from "next";
import { Pagina } from "@/components/Secciones";

// Página para quien tiene o está por comprar un lote en Pueblos del Plata.
export const metadata: Metadata = {
  title: "Arquitecto en Pueblos del Plata, Hudson | Estudio Clio",
  description:
    "Proyecto ejecutivo y dirección de obra para tu casa en Pueblos del Plata, Hudson: Elcano, Magallanes, Villalobos y Sebastián Gaboto. Honorario fijo.",
  alternates: { canonical: "/pueblos-del-plata" },
  openGraph: { url: "/pueblos-del-plata" },
};

export default function PueblosDelPlata() {
  return (
    <Pagina
      titulo="Tu casa en Pueblos del Plata, definida antes de construir."
      conPueblos
    />
  );
}
