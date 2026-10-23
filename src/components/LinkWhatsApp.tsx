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
      onClick={() => registrar("clic_whatsapp", { ubicacion })}
    >
      {children}
    </a>
  );
}
