import { Metadata } from "next";

// Configurações SEO centralizadas
export const siteConfig = {
  name: "HubBot",
  title: "HubBot — Agentes de IA para Provedores de Internet e Telecom",
  description: "HubBot é a plataforma de agentes de IA para provedores de internet, revendas de telecom e empresas de TV por assinatura. Reduza custos em 70%, atenda 24/7 via WhatsApp e automatize seu SAC.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hubbot.io",
  ogImage: "/og-image.jpg",
  author: {
    name: "HubBot",
    twitter: "@hubbotoficial",
  },
  // Contato e identidade da marca (usado em JSON-LD)
  email: "suporte@hubbot.io",
  legalName: "Fabrica de Soluções",
  sameAs: ["https://www.linkedin.com/company/hubbot-io"],
  keywords: [
    "agentes de IA telecomunicações",
    "chatbot para provedores de internet",
    "automação de atendimento telecom",
    "SAC automatizado WhatsApp",
    "IA para provedor de internet",
    "atendimento 24/7 telecomunicações",
    "redução de custos atendimento",
    "inteligência artificial telecomunicações",
    "chatbot WhatsApp Business",
    "automação SAC",
    "agentes virtuais",
    "CRM telecomunicações",
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
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
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
  alternates: {
    canonical: siteConfig.url,
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
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/assets/hubbot-logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: siteConfig.sameAs,
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    knowsLanguage: "pt-BR",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      availableLanguage: ["Portuguese"],
      areaServed: "BR",
    },
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function createSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Customer Service / AI Chatbot",
    operatingSystem: "Web",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "pt-BR",
    featureList: [
      "Agentes de IA treinados para telecom",
      "Atendimento omnicanal (WhatsApp, Instagram, Telegram, chat web e voz)",
      "Automação de SAC e qualificação de leads",
      "Analytics e relatórios em tempo real",
      "Integrações com CRM e sistemas de provedor",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: siteConfig.url,
    },
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

// FAQPage — formato mais citado por IAs e pelo Google (AI Overviews)
export function createFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// BreadcrumbList — contexto de navegação para resultados e IAs
export function createBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
