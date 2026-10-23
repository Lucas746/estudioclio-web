"use client";

import { useEffect, useRef, useState } from "react";
import { enObra } from "@/content";
import { Avance } from "./Partidas";

const archivo = (n: number) => `/obra/obra-hudson-${String(n + 1).padStart(2, "0")}.webp`;

export function EnObra() {
  const caja = useRef<HTMLDivElement>(null);
  const ul = useRef<HTMLUListElement>(null);
  const [cargar, setCargar] = useState(false);
  const [k, setK] = useState(1);
  const [fraccion, setFraccion] = useState(0);
  const [accion, setAccion] = useState("Deslizá");
  const N = enObra.fotos.length;

  // Carga anticipada: cuando la sección se acerca, se piden todas las fotos
  useEffect(() => {
    const el = caja.current;
    if (!el || !("IntersectionObserver" in window)) return setCargar(true);
    const io = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting) {
          setCargar(true);
          io.disconnect();
        }
      },
      { rootMargin: "1200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Con mouse: arrastrar con inercia. Con el dedo: deslizamiento nativo.
  useEffect(() => {
    const lista = ul.current;
    if (!lista) return;
    if (window.matchMedia("(pointer:fine)").matches) setAccion("Arrastrá");

    let abajo = false,
      movio = false,
      x0 = 0,
      s0 = 0,
      vel = 0,
      tPrev = 0,
      xPrev = 0,
      raf = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      abajo = true;
      movio = false;
      x0 = xPrev = e.clientX;
      s0 = lista.scrollLeft;
      tPrev = performance.now();
      vel = 0;
      cancelAnimationFrame(raf);
      lista.style.scrollSnapType = "none";
      lista.style.scrollBehavior = "auto";
      lista.style.cursor = "grabbing";
    };
    const move = (e: PointerEvent) => {
      if (!abajo) return;
      const dx = e.clientX - x0;
      if (Math.abs(dx) > 4) movio = true;
      lista.scrollLeft = s0 - dx;
      const t = performance.now();
      vel = (e.clientX - xPrev) / Math.max(1, t - tPrev);
      xPrev = e.clientX;
      tPrev = t;
    };
    const up = () => {
      if (!abajo) return;
      abajo = false;
      lista.style.cursor = "grab";
      let v = -vel * 16;
      const inercia = () => {
        if (Math.abs(v) > 0.5) {
          lista.scrollLeft += v;
          v *= 0.92;
          raf = requestAnimationFrame(inercia);
        } else {
          lista.style.scrollBehavior = "smooth";
          const w = (lista.firstElementChild as HTMLElement).offsetWidth + 12;
          lista.scrollTo({ left: Math.round(lista.scrollLeft / w) * w });
          setTimeout(() => (lista.style.scrollSnapType = ""), 350);
        }
      };
      inercia();
    };
    const click = (e: MouseEvent) => {
      if (movio) {
        e.preventDefault();
        e.stopPropagation();
        movio = false;
      }
    };

    lista.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    lista.addEventListener("click", click, true);
    return () => {
      cancelAnimationFrame(raf);
      lista.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      lista.removeEventListener("click", click, true);
    };
  }, []);

  const alDeslizar = () => {
    const lista = ul.current;
    if (!lista?.firstElementChild) return;
    const max = lista.scrollWidth - lista.clientWidth;
    const f = max > 0 ? lista.scrollLeft / max : 1;
    const w = (lista.firstElementChild as HTMLElement).offsetWidth + 12;
    setK(lista.scrollLeft >= max - 2 ? N : Math.min(N, Math.round(lista.scrollLeft / w) + 1));
    setFraccion(Math.max(f, 1 / N));
  };

  useEffect(alDeslizar, [N]);

  return (
    <section id="en-obra" className="overflow-hidden px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">{enObra.etiqueta}</p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-graphite">{enObra.titulo}</p>
        <div ref={caja} className="mt-6">
          <ul
            ref={ul}
            onScroll={alDeslizar}
            className="sin-barra -mx-5 flex cursor-grab snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-5 pb-2 select-none [scroll-padding-inline:1.25rem] md:mx-0 md:px-0 md:[scroll-padding-inline:0]"
          >
            {enObra.fotos.map((f, n) => (
              <li key={n} className="shrink-0 snap-start">
                <figure>
                  <div className="aspect-[3/4] h-[360px] overflow-hidden bg-paper md:h-[440px]">
                    <img
                      src={archivo(n)}
                      alt={`Obra en curso en Hudson: ${f.detalle}, dirección de obra de Estudio Clio`}
                      width={768}
                      height={1024}
                      loading={cargar ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-stone">{f.etapa}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <Avance texto={`${String(k).padStart(2, "0")} / ${N}`} fraccion={fraccion} accion={accion} />
        </div>
      </div>
    </section>
  );
}
