import type { Metadata } from "next";

/**
 * Blog oculto por enquanto: as rotas continuam funcionando (links diretos e
 * o Studio do Sanity seguem acessíveis), mas saem do menu, do sitemap e da
 * indexação. Para reexibir, apague este arquivo, devolva o link no Header e
 * volte as rotas de blog em app/sitemap.ts.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
