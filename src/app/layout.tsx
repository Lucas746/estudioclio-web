import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { estudio } from "@/content";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "./fonts/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(estudio.url),
  title: "Arquitecto en Hudson y zona sur | Estudio Clio",
  description:
    "Proyecto ejecutivo con metodología BIM y dirección de obra para tu casa en barrio cerrado de Hudson y el corredor sur. Honorario fijo y alcance cerrado.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: estudio.nombre,
    title: estudio.nombreCompleto,
    description:
      "Proyecto ejecutivo y dirección de obra para casas en barrios cerrados de Hudson y el corredor sur.",
    images: [{ url: "/og-estudio-clio.jpg", width: 1200, height: 630, alt: estudio.nombreCompleto }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

// Datos estructurados para Google (ficha SEO, punto 07)
const datosEstructurados = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: estudio.nombre,
  alternateName: estudio.nombreCompleto,
  url: estudio.url,
  image: `${estudio.url}/og-estudio-clio.jpg`,
  logo: `${estudio.url}/icono-estudio-clio.png`,
  telephone: estudio.telefono,
  email: estudio.email,
  description:
    "Proyecto ejecutivo con metodología BIM y dirección de obra para viviendas unifamiliares en barrios cerrados del corredor sur.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berazategui",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: ["Pueblos del Plata", "Hudson", "Berazategui", "City Bell", "Miralagos"],
  founder: {
    "@type": "Person",
    name: "Lucas Martín Hick",
    jobTitle: "Arquitecto",
    hasCredential: estudio.matricula,
  },
  sameAs: [`https://instagram.com/${estudio.instagram}`],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={satoshi.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
        />
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${estudio.analytics}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${estudio.analytics}');`}
        </Script>
      </body>
    </html>
  );
}
