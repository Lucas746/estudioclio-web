import {
  comoEmpezamos,
  contacto,
  estudio,
  hero,
  menu,
  metodo,
  pueblosDelPlata,
  servicio,
  sobreEstudio,
} from "@/content";
import { Encabezado } from "./Encabezado";
import { EnObra } from "./EnObra";
import { Espacios } from "./Espacios";
import { Formulario } from "./Formulario";
import { IconoChat, IconoEmail, IconoInstagram, IconoUbicacion, IconoWhatsApp } from "./Iconos";
import { LinkWhatsApp } from "./LinkWhatsApp";
import { Partidas } from "./Partidas";

function Seccion({
  id,
  fondo = "",
  children,
}: {
  id?: string;
  fondo?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-24 md:px-10 md:py-32 ${fondo}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Cabecera() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 md:px-10">
      <div className="relative mx-auto flex max-w-6xl items-center justify-end">
        <a href="#top" aria-label={estudio.nombre} className="absolute -top-5 left-0">
          <img src="/logo-estudio-clio.png" alt={estudio.nombre} width={499} height={1496} className="h-44 w-auto md:h-64" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {menu.map((m) => (
            <a key={m.href} href={m.href} className="transition hover:text-white">
              {m.texto}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Portada({ zona, titulo }: { zona: string; titulo: string }) {
  const largo = titulo.length > 45;
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src="/portada-2000.webp"
          srcSet="/portada-1000.webp 1000w, /portada-2000.webp 2000w"
          sizes="100vw"
          alt={hero.imagenAlt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: "58% 45%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-56 pb-16 md:px-10 md:pt-72 md:pb-24">
        <p className="eyebrow !text-white/60">{zona}</p>
        <h1
          className={`mt-5 max-w-4xl leading-[1.08] font-light tracking-tight ${largo ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl"}`}
        >
          {titulo}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{hero.bajada}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <LinkWhatsApp
            ubicacion="portada"
            className="inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-semibold tracking-wide text-ink transition hover:bg-mist"
          >
            <IconoWhatsApp /> Escribinos por WhatsApp
          </LinkWhatsApp>
          <a
            href="#metodo"
            className="inline-flex items-center justify-center border border-white/40 px-7 py-4 text-sm font-medium tracking-wide transition hover:border-white"
          >
            {hero.botonSecundario}
          </a>
        </div>
      </div>
    </section>
  );
}

function BloquePueblos() {
  return (
    <section className="border-b border-mist px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">{pueblosDelPlata.etiqueta}</p>
        <p className="mt-4 max-w-3xl text-2xl leading-snug font-light md:text-3xl">{pueblosDelPlata.texto}</p>
      </div>
    </section>
  );
}

function Metodo() {
  return (
    <Seccion id="metodo">
      <Encabezado etiqueta={metodo.etiqueta} titulo={metodo.titulo} />
      <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
        {metodo.pilares.map((p) => (
          <div key={p.titulo} className="border-t border-ink pt-6">
            <h3 className="text-xl font-semibold">{p.titulo}</h3>
            <p className="mt-4 leading-relaxed text-stone">{p.texto}</p>
          </div>
        ))}
      </div>
    </Seccion>
  );
}

function Servicio() {
  return (
    <Seccion id="servicio" fondo="bg-paper">
      <Encabezado etiqueta={servicio.etiqueta} titulo={servicio.titulo} />
      <div className="mt-14 md:mt-20">
        <div className="grid gap-px bg-mist md:grid-cols-3">
          {servicio.etapas.map((e) => (
            <article key={e.numero} className="flex flex-col bg-paper py-8 md:p-8 md:first:pl-0">
              <span className="text-sm text-stone">{e.numero}</span>
              <h3 className="mt-3 text-2xl font-light">{e.titulo}</h3>
              <p className="mt-4 leading-relaxed text-stone">{e.texto}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {e.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-[.45rem] h-[5px] w-[5px] shrink-0 bg-ink" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-16 grid gap-4 border-t border-mist pt-10 md:grid-cols-2 md:gap-12">
          <p className="text-2xl leading-snug font-light md:text-3xl">{servicio.plazo.titulo}</p>
          <p className="leading-relaxed text-stone md:pt-1">{servicio.plazo.texto}</p>
        </div>
      </div>
    </Seccion>
  );
}

function ComoEmpezamos() {
  return (
    <Seccion fondo="bg-ink text-white [&_.eyebrow]:!text-white/50">
      <Encabezado etiqueta={comoEmpezamos.etiqueta} titulo={comoEmpezamos.titulo} />
      <ol className="mt-14 grid gap-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
        {comoEmpezamos.pasos.map((p, n) => (
          <li key={p.titulo} className="border-t border-white/25 pt-6">
            <span className="text-sm text-white/50">{String(n + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-semibold">{p.titulo}</h3>
            <p className="mt-3 leading-relaxed text-white/65">{p.texto}</p>
          </li>
        ))}
      </ol>
    </Seccion>
  );
}

function Estudio() {
  return (
    <Seccion id="estudio" fondo="bg-paper">
      <Encabezado etiqueta={sobreEstudio.etiqueta} titulo={sobreEstudio.titulo} />
      <div className="mt-14 grid items-start gap-10 md:mt-20 md:grid-cols-12 md:gap-16">
        <div className="aspect-[4/5] md:col-span-5">
          <img
            src="/arquitecto-lucas-martin-hick.webp"
            alt={sobreEstudio.fotoAlt}
            width={960}
            height={1200}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-7">
          {sobreEstudio.parrafos.map((p) => (
            <p key={p} className="mb-5 text-lg leading-relaxed text-graphite">
              {p}
            </p>
          ))}
          <p className="mt-8 font-semibold">{estudio.arquitecto}</p>
          <p className="text-sm text-stone">{estudio.matricula}</p>
        </div>
      </div>
    </Seccion>
  );
}

function Dato({ icono, titulo, children }: { icono: React.ReactNode; titulo: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="mb-1.5 flex items-center gap-2.5 font-semibold text-white [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:opacity-75">
        {icono}
        {titulo}
      </dt>
      <dd className="pl-[calc(16px+0.65rem)]">{children}</dd>
    </div>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-graphite px-5 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-12 md:grid-cols-[7fr_4fr]">
        <div>
          <p className="eyebrow !text-white/50">{contacto.etiqueta}</p>
          <h2 className="mt-4 text-3xl leading-tight font-light tracking-tight md:text-5xl">{contacto.titulo}</h2>
          <p className="mt-6 max-w-md leading-relaxed text-white/70">{contacto.bajada}</p>
          <Formulario />
        </div>
        <div className="border-t border-white/25 pt-10 md:border-t-0 md:pt-50">
          <p className="eyebrow !text-white/50">{contacto.directo}</p>
          <dl className="mt-6 grid gap-y-7.5 text-sm">
            <Dato icono={<IconoChat />} titulo="WhatsApp">
              <LinkWhatsApp ubicacion="contacto" className="hover:underline">
                {estudio.whatsappVisible}
              </LinkWhatsApp>
            </Dato>
            <Dato icono={<IconoEmail />} titulo="Email">
              <a href={`mailto:${estudio.email}`} className="hover:underline">
                {estudio.email}
              </a>
            </Dato>
            <Dato icono={<IconoInstagram />} titulo="Instagram">
              <a href={`https://instagram.com/${estudio.instagram}`} target="_blank" rel="noopener" className="hover:underline">
                @{estudio.instagram}
              </a>
            </Dato>
            <Dato icono={<IconoUbicacion />} titulo="Zona de trabajo">
              <span className="mb-[.2rem] block text-white/70">{contacto.zona.desarrollo}</span>
              {contacto.zona.barrios}
              <span className="mt-2 block text-white/50 italic">{contacto.zona.resto}</span>
            </Dato>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="bg-ink px-5 py-10 text-sm text-white/50 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:justify-between">
        <p>{estudio.pie}</p>
        <p>{estudio.matricula}</p>
      </div>
    </footer>
  );
}

function BotonFlotante() {
  return (
    <LinkWhatsApp
      ubicacion="boton-flotante"
      ariaLabel="Escribinos por WhatsApp"
      className="fixed right-5 bottom-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:scale-105"
    >
      <IconoWhatsApp className="h-6 w-6" />
    </LinkWhatsApp>
  );
}

// Página completa. Las páginas de aterrizaje cambian la línea de zona, el H1 y pueden sumar el bloque de barrios.
export function Pagina({
  zona = hero.zona,
  titulo = hero.titulo,
  conPueblos = false,
}: {
  zona?: string;
  titulo?: string;
  conPueblos?: boolean;
}) {
  return (
    <>
      <div id="top" />
      <Cabecera />
      <main>
        <Portada zona={zona} titulo={titulo} />
        {conPueblos && <BloquePueblos />}
        <Metodo />
        <Servicio />
        <Partidas />
        <Espacios />
        <EnObra />
        <ComoEmpezamos />
        <Estudio />
        <Contacto />
      </main>
      <Pie />
      <BotonFlotante />
    </>
  );
}

