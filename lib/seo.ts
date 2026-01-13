import { Metadata } from "next";

// Configurações SEO centralizadas
export const siteConfig = {
  name: "HubBot",
  title: "HubBot - Agentes de IA para Telecomunicações",
  description: "Transforme seu atendimento com agentes de IA especializados em telecomunicações. Atendimento 24/7, redução de custos e aumento da satisfação do cliente.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hubbot.com.br",
  ogImage: "/og-image.jpg",
  author: {
    name: "HubBot",
    twitter: "@hubbot",
  },
  keywords: [
    "IA",
    "inteligência artificial",
    "telecomunicações",
    "chatbot",
    "atendimento automático",
    "agentes virtuais",
    "atendimento ao cliente",
    "automação",
    "WhatsApp Business",
    "CRM",
    "SAC automatizado",
  ],
};

// Metadata base que será usada em todas as páginas
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.author.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

// Helper para criar metadata de páginas específicas
export function createMetadata({
  title,
  description,
  keywords,
  image,
  path = "",
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title,
    description,
    keywords: keywords || siteConfig.keywords,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: siteConfig.author.twitter,
    },
    alternates: {
      canonical: url,
    },
  };
}

// Structured Data (JSON-LD) helpers
export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/hubbot-logo-light.svg`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["Portuguese", "English"],
    },
    sameAs: [
      // Adicione suas redes sociais aqui
      // "https://www.facebook.com/hubbot",
      // "https://www.linkedin.com/company/hubbot",
      // "https://twitter.com/hubbot",
    ],
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/busca?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function createSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "150",
    },
    description: siteConfig.description,
  };
}
