export default function NoEncontrada() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-6 px-5 text-center">
      <p className="eyebrow">Página no encontrada</p>
      <a href="/" className="border border-ink px-7 py-4 text-sm font-medium tracking-wide">
        Ir al inicio
      </a>
    </main>
  );
}
