import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // Só a home (e as páginas legais) ficam indexadas. /produto, /segmentos/* e
  // /solucoes/* continuam no ar, mas estão sem manutenção e marcadas como
  // noindex (ver `noIndex` em createMetadata). O blog também está oculto.
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-de-servico`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return routes;
}
