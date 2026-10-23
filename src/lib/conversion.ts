// Registra conversiones para Google Analytics / Google Ads.
// Mientras la etiqueta de Google no esté instalada, no hace nada.

type Evento = "clic_whatsapp" | "envio_formulario";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function registrar(evento: Evento, detalle: Record<string, string> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", evento, detalle);
}
