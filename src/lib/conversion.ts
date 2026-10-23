// Registra conversiones para Google Analytics / Google Ads.
// Si la etiqueta de Google no cargó (bloqueador, sin conexión), no hace nada y sigue de largo.

type Evento = "clic_whatsapp" | "envio_formulario";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// `alTerminar` se ejecuta cuando Google confirma el evento, o a los 800 ms como máximo.
// Sirve para no abrir WhatsApp antes de que el evento salga del celular.
export function registrar(evento: Evento, detalle: Record<string, string> = {}, alTerminar?: () => void) {
  let listo = false;
  const terminar = () => {
    if (listo) return;
    listo = true;
    alTerminar?.();
  };

  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    terminar();
    return;
  }

  window.gtag("event", evento, {
    ...detalle,
    transport_type: "beacon",
    event_callback: terminar,
  });
  if (alTerminar) setTimeout(terminar, 800);
}
