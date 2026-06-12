import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { MetaPixel } from "@/components/MetaPixel";
import { baseMetadata, createOrganizationSchema, createWebsiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = createOrganizationSchema();
  const websiteSchema = createWebsiteSchema();

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}>
        <Providers>{children}</Providers>
        <MetaPixel />
        <Script
          src="https://widget.hubbot.io/widget.js"
          data-organization-id="mh71q8d4qwe4tc9q6nz9zqckn587t6m1"
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId="G-CE8J43433W" />
    </html>
  );
}
