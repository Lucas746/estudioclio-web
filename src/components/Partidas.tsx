"use client";

import { useEffect, useRef, useState } from "react";
import { partidas } from "@/content";
import { Encabezado } from "./Encabezado";

const V = "?v=2"; // si se reemplazan las imágenes, subir a ?v=3
const src = (archivo: string) => `/partidas/${archivo}.webp${V}`;

type Partida = (typeof partidas.lista)[number];

function Vista({ p, className = "" }: { p: Partida; className?: string }) {
  return (
    <div className={`aspect-square w-full overflow-hidden bg-paper ${className}`}>
      {p.imagen ? (
        <img
          src={src(p.imagen)}
          alt={`${p.codigo} · ${p.nombre} — modelo BIM de ${partidas.proyecto}`}
          width={1400}
          height={1400}
          decoding="async"
          className="block h-full w-full object-cover"
        />
      ) : (
        <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-px bg-mist">
          {partidas.etapasN1400.map((e, n) => (
            <div key={e.imagen} className="relative overflow-hidden bg-white">
              <img
                src={src(e.imagen)}
                alt={`Etapa ${n + 1}: ${e.nombre}`}
                decoding="async"
                loading="lazy"
                className="block h-full w-full object-cover"
              />
              <span className="absolute top-1.5 left-1.5 bg-white/90 px-1.5 py-0.5 text-[11px] font-semibold tracking-[0.08em] text-ink">
                <span className="tabular-nums">{n + 1}</span>
                <span className="font-normal text-stone"> · {e.nombre}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Partidas() {
  const [activa, setActiva] = useState(0);
  const p = partidas.lista[activa];

  // Precarga de las láminas para que el cambio sea instantáneo
  useEffect(() => {
    partidas.lista.forEach((x) => {
      if (x.imagen) new Image().src = src(x.imagen);
    });
  }, []);

  return (
    <section id="partidas" className="scroll-mt-20 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Encabezado etiqueta={partidas.etiqueta} titulo={partidas.titulo} />
        <div className="mt-14 md:mt-20">
          <p className="-mt-6 mb-14 max-w-2xl text-lg leading-relaxed text-graphite md:-mt-10">
            {partidas.bajada}
          </p>

          {/* Escritorio: lámina fija + lista */}
          <div className="hidden gap-12 md:grid md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="sticky top-8">
                <Vista p={p} />
                <p className="mt-4 text-sm text-stone">
                  <span className="font-semibold text-ink tabular-nums">{p.codigo}</span> · {p.nombre} —{" "}
                  {partidas.proyecto}
                </p>
              </div>
            </div>
            <ol className="border-t border-mist md:col-span-5">
              {partidas.lista.map((x, i) => {
                const sel = i === activa;
                return (
                  <li key={x.codigo} className="border-b border-mist">
                    <button
                      type="button"
                      aria-pressed={sel}
                      onClick={() => setActiva(i)}
                      onMouseEnter={() => setActiva(i)}
                      className="grid w-full grid-cols-[3.75rem_1fr] items-baseline gap-x-3 py-4 text-left"
                    >
                      <span
                        className={`text-xs font-semibold tracking-[0.12em] tabular-nums ${sel ? "text-ink" : "text-stone"}`}
                      >
                        {x.codigo}
                      </span>
                      <span>
                        <span className={`block font-semibold transition ${sel ? "text-ink" : "text-graphite"}`}>
                          {x.nombre}
                        </span>
                        <span
                          className={`mt-1 block text-sm leading-relaxed ${sel ? "text-stone" : "text-stone/80"}`}
                        >
                          {x.texto}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Celular: carrusel horizontal */}
          <CarruselCelular />
        </div>
      </div>
    </section>
  );
}

function CarruselCelular() {
  const ul = useRef<HTMLUListElement>(null);
  const [k, setK] = useState(0);
  const N = partidas.lista.length;

  const alDeslizar = () => {
    const el = ul.current;
    if (!el?.firstElementChild) return;
    const w = (el.firstElementChild as HTMLElement).offsetWidth + 12;
    setK(Math.min(N - 1, Math.max(0, Math.round(el.scrollLeft / w))));
  };

  return (
    <div className="-mx-5 md:hidden">
      <ul
        ref={ul}
        onScroll={alDeslizar}
        className="sin-barra flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 [scroll-padding-inline:1.25rem]"
      >
        {partidas.lista.map((x) => (
          <li key={x.codigo} className="shrink-0 basis-[84%] snap-start">
            <Vista p={x} />
            <p className="mt-4 text-sm">
              <span className="font-semibold text-ink tabular-nums">{x.codigo}</span> ·{" "}
              <span className="font-semibold text-ink">{x.nombre}</span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-stone">{x.texto}</p>
          </li>
        ))}
      </ul>
      <Avance texto={`${String(k + 1).padStart(2, "0")} / ${N}`} fraccion={(k + 1) / N} accion="Deslizá" margen />
    </div>
  );
}

export function Avance({
  texto,
  fraccion,
  accion,
  margen = false,
}: {
  texto: string;
  fraccion: number;
  accion: string;
  margen?: boolean;
}) {
  return (
    <div className={`mt-5 flex items-center gap-3 ${margen ? "mx-5" : ""}`}>
      <span className="min-w-14 text-xs font-semibold tracking-[0.12em] text-ink tabular-nums">{texto}</span>
      <span className="relative h-px flex-1 bg-mist">
        <span
          className="absolute top-0 left-0 h-px bg-ink transition-[width] duration-200"
          style={{ width: `${fraccion * 100}%` }}
        />
      </span>
      <span className="text-xs text-stone">{accion}</span>
    </div>
  );
}
