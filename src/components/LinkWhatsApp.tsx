"use client";

import type { ReactNode } from "react";
import { waLink } from "@/content";
import { registrar } from "@/lib/conversion";

// Todo enlace a WhatsApp pasa por acá, para que cada clic cuente como conversión.
export function LinkWhatsApp({
  children,
  className,
  ubicacion,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  ubicacion: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      className={className}
      onClick={(e) => {
        if (window.matchMedia("(pointer:coarse)").matches) {
          // Celular: se espera a que salga el evento antes de abrir WhatsApp.
          e.preventDefault();
          const url = e.currentTarget.href;
          registrar("clic_whatsapp", { ubicacion }, () => {
            window.location.href = url;
          });
        } else {
          registrar("clic_whatsapp", { ubicacion });
        }
      }}
    >
      {children}
    </a>
  );
}
