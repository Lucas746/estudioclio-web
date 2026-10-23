export function Encabezado({ etiqueta, titulo }: { etiqueta: string; titulo: string }) {
  return (
    <>
      <p className="eyebrow">{etiqueta}</p>
      <h2 className="mt-4 max-w-3xl text-3xl leading-tight font-light tracking-tight md:text-5xl">{titulo}</h2>
    </>
  );
}
