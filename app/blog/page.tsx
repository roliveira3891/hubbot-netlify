import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PostCard } from "@/components/PostCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { createMetadata, createBreadcrumbSchema } from "@/lib/seo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery, categoriesQuery } from "@/sanity/lib/queries";
import type { PostListItem, PostCategory } from "@/sanity/lib/types";

export const metadata = createMetadata({
  title: "Blog HubBot — Conteúdo para provedores e telecom",
  description:
    "Automação de atendimento, IA e gestão para provedores de internet e revendas de telecom. Análises, boas práticas e novidades do HubBot.",
  keywords: [
    "blog hubbot",
    "novidades hubbot",
    "automação de atendimento telecom",
    "IA para provedores de internet",
  ],
  path: "/blog",
});

// Revalida a listagem a cada 60s (novos posts aparecem sem novo deploy).
export const revalidate = 60;

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    sanityFetch<PostListItem[]>({ query: postsQuery, fallback: [] }),
    sanityFetch<PostCategory[]>({ query: categoriesQuery, fallback: [] }),
  ]);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* Cabeçalho editorial — alinhado à esquerda, sobre a mesma coluna da grade */}
      <section className="pt-32 pb-10 border-b border-border/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              <span className="h-px w-6 bg-primary/60" />
              Blog
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight max-w-3xl">
              Conteúdo para provedores e telecom
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              Automação de atendimento, inteligência artificial e gestão — boas
              práticas e novidades para quem opera no setor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <CategoryFilter categories={categories} />
            {posts.length === 0 ? (
              <div className="text-center max-w-md mx-auto py-20">
                <p className="text-lg text-muted-foreground">
                  Em breve, os primeiros conteúdos por aqui. 🚀
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
