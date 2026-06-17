import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PostCard } from "@/components/PostCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { createMetadata, createBreadcrumbSchema } from "@/lib/seo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import {
  categoriesQuery,
  categoryBySlugQuery,
  categorySlugsQuery,
  postsByCategoryQuery,
} from "@/sanity/lib/queries";
import { isSanityConfigured } from "@/sanity/env";
import type { PostCategory, PostListItem } from "@/sanity/lib/types";

export const revalidate = 60;

interface Category extends PostCategory {
  description?: string;
}

export async function generateStaticParams() {
  if (!isSanityConfigured) return [];
  try {
    const slugs = await client.fetch<{ slug: string }[]>(categorySlugsQuery);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

async function getCategory(slug: string) {
  return sanityFetch<Category | null>({
    query: categoryBySlugQuery,
    params: { slug },
    fallback: null,
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    return createMetadata({
      title: "Categoria não encontrada",
      description: "A categoria que você procura não está disponível.",
      path: `/blog/categoria/${slug}`,
    });
  }

  return createMetadata({
    title: `${category.title} — Blog HubBot`,
    description:
      category.description ||
      `Conteúdos sobre ${category.title.toLowerCase()} para provedores de internet e revendas de telecom.`,
    path: `/blog/categoria/${category.slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [category, posts, categories] = await Promise.all([
    getCategory(slug),
    sanityFetch<PostListItem[]>({
      query: postsByCategoryQuery,
      params: { categorySlug: slug },
      fallback: [],
    }),
    sanityFetch<PostCategory[]>({ query: categoriesQuery, fallback: [] }),
  ]);

  if (!category) notFound();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.title, path: `/blog/categoria/${category.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <section className="pt-32 pb-10 border-b border-border/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Todos os posts
            </Link>
            <p className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              <span className="h-px w-6 bg-primary/60" />
              Categoria
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              {category.title}
            </h1>
            {category.description && (
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
                {category.description}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <CategoryFilter categories={categories} activeSlug={category.slug} />
            {posts.length === 0 ? (
              <div className="text-center max-w-md mx-auto py-20">
                <p className="text-lg text-muted-foreground">
                  Ainda não há posts nesta categoria.
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
