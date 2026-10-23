"use client";

import { useState, type FormEvent } from "react";
import { contacto, waLink } from "@/content";
import { registrar } from "@/lib/conversion";
import { IconoWhatsApp } from "./Iconos";

const campo =
  "w-full border-b border-white/25 bg-transparent py-3 text-white placeholder-white/40 outline-none transition focus:border-white";

// Arma el mensaje con los datos cargados y abre WhatsApp con el texto listo para enviar.
export function Formulario() {
  const c = contacto.campos;
  const [nombre, setNombre] = useState("");
  const [barrio, setBarrio] = useState("");
  const [momento, setMomento] = useState(c.momento.inicial);
  const [cuando, setCuando] = useState(c.cuando.inicial);
  const [mensaje, setMensaje] = useState("");
  const [enlace, setEnlace] = useState<string | null>(null);

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const t = [`Hola, soy ${nombre.trim() || "—"}.`];
    if (barrio.trim()) t.push(`Barrio: ${barrio.trim()}.`);
    t.push(`Momento: ${momento}.`);
    t.push(`Cuándo empezar: ${cuando}.`);
    if (mensaje.trim()) t.push(mensaje.trim());
    const url = waLink(t.join("\n"));
    registrar("envio_formulario", { momento, cuando });
    setEnlace(url);
    window.open(url, "_blank", "noopener");
  };

  return (
    <form onSubmit={enviar} className="mt-10 grid gap-6">
      <input
        className={campo}
        placeholder={c.nombre}
        aria-label={c.nombre}
        autoComplete="name"
        required
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        className={campo}
        placeholder={c.barrio}
        aria-label="Barrio"
        value={barrio}
        onChange={(e) => setBarrio(e.target.value)}
      />
      <label className="grid gap-2">
        <span className="text-xs tracking-[0.18em] text-white/50 uppercase">{c.momento.etiqueta}</span>
        <select className={`${campo} [&>option]:text-ink`} value={momento} onChange={(e) => setMomento(e.target.value)}>
          {c.momento.opciones.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-xs tracking-[0.18em] text-white/50 uppercase">{c.cuando.etiqueta}</span>
        <select className={`${campo} [&>option]:text-ink`} value={cuando} onChange={(e) => setCuando(e.target.value)}>
          {c.cuando.opciones.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <textarea
        className={`${campo} min-h-24 resize-y`}
        placeholder={c.mensaje}
        aria-label="Mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-sm font-semibold tracking-wide text-ink transition hover:bg-mist"
      >
        <IconoWhatsApp />
        {contacto.boton}
      </button>
      {enlace && (
        <p className="text-sm text-white/75">
          Si WhatsApp no se abrió,{" "}
          <a href={enlace} target="_blank" rel="noopener" className="underline">
            tocá acá
          </a>
          .
        </p>
      )}
    </form>
  );
}
