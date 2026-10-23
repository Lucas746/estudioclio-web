import type { MetadataRoute } from "next";
import { estudio } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/arquitecto-hudson/", "/pueblos-del-plata/"].map((ruta, i) => ({
    url: `${estudio.url}${ruta}`,
    changeFrequency: "monthly",
    priority: i === 0 ? 1 : 0.8,
  }));
}
