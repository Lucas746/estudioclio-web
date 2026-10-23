"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { espacios } from "@/content";

const D = 5500; // milisegundos por imagen

export function Espacios() {
  const [i, setI] = useState(0);
  const [pausa, setPausa] = useState(false);
  const [quieto, setQuieto] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);
  const N = espacios.length;

  useEffect(() => {
    setQuieto(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const ir = useCallback((n: number) => setI(((n % N) + N) % N), [N]);

  useEffect(() => {
    if (t.current) clearTimeout(t.current);
    if (!pausa && !quieto) t.current = setTimeout(() => ir(i + 1), D);
    return () => {
      if (t.current) clearTimeout(t.current);
    };
  }, [i, pausa, quieto, ir]);

  return (
    <section
      id="espacios"
      aria-roledescription="carrusel"
      aria-label="Espacios"
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      onTouchStart={() => setPausa((p) => !p)}
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      {espacios.map((e, j) => (
        <div
          key={e.nombre}
          aria-hidden={j !== i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${j === i ? "opacity-100" : "opacity-0"}`}
        >
          {e.imagen ? (
            <picture>
              <source media="(max-width: 767px)" srcSet={e.imagen.vertical} />
              <img
                src={e.imagen.horizontal}
                alt={e.alt}
                loading={j === 0 ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full object-cover"
              />
            </picture>
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ background: `linear-gradient(to bottom right, ${e.fondo[0]}, ${e.fondo[1]})` }}
            >
              <span className="text-center text-xs tracking-[0.18em] text-white/35 uppercase">
                Render {e.nombre}
                <br />
                <span className="hidden md:inline">horizontal 16:9</span>
                <span className="md:hidden">vertical 9:16</span>
              </span>
            </div>
          )}
        </div>
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-5 pt-24 pb-8 md:px-10 md:pb-10">
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-6">
          <p className="text-sm tracking-[0.18em] text-white uppercase">{espacios[i].nombre}</p>
          <div className="pointer-events-auto mr-16 flex gap-2 md:mr-0">
            {espacios.map((e, j) => (
              <button
                key={e.nombre}
                type="button"
                aria-label={`Ver ${e.nombre}`}
                aria-current={j === i}
                onClick={(ev) => {
                  ev.stopPropagation();
                  ir(j);
                }}
                className="relative h-6 w-8 md:w-12"
              >
                <span className="absolute inset-x-0 top-1/2 h-px bg-white/35" />
                <span
                  key={j === i ? `activa-${i}` : `j-${j}`}
                  className="absolute top-1/2 left-0 h-px bg-white"
                  style={
                    j < i
                      ? { width: "100%" }
                      : j > i
                        ? { width: "0%" }
                        : quieto
                          ? { width: "100%" }
                          : {
                              animation: `llenar ${D}ms linear forwards`,
                              animationPlayState: pausa ? "paused" : "running",
                            }
                  }
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
