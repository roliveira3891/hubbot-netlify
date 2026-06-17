import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PostCard } from "@/components/PostCard";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import { createMetadata, createBreadcrumbSchema, siteConfig } from "@/lib/seo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import {
  postBySlugQuery,
  postSlugsQuery,
  relatedPostsQuery,
} from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { isSanityConfigured } from "@/sanity/env";
import type { PostFull, PostListItem } from "@/sanity/lib/types";

export const revalidate = 60;

// Gera as páginas estáticas dos posts existentes no build.
export async function generateStaticParams() {
  if (!isSanityConfigured) return [];
  try {
    const slugs = await client.fetch<{ slug: string }[]>(postSlugsQuery);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

async function getPost(slug: string) {
  return sanityFetch<PostFull | null>({
    query: postBySlugQuery,
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
  const post = await getPost(slug);

  if (!post) {
    return createMetadata({
      title: "Post não encontrado",
      description: "O conteúdo que você procura não está disponível.",
      path: `/blog/${slug}`,
    });
  }

  const image = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(1200).height(630).quality(80).url()
    : undefined;

  return createMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || siteConfig.description,
    image,
    path: `/blog/${post.slug}`,
  });
}

function ArticleSchema({ post }: { post: PostFull }) {
  const image = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : `${siteConfig.url}${siteConfig.ogImage}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": post.author?.name ? "Person" : "Organization",
      name: post.author?.name || siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/assets/hubbot-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    inLanguage: "pt-BR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const cover = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(1600).height(900).quality(85).url()
    : null;

  const categoryIds = (post.categories || []).map((c) => c._id);
  const related =
    categoryIds.length > 0
      ? await sanityFetch<PostListItem[]>({
          query: relatedPostsQuery,
          params: { slug: post.slug, categoryIds },
          fallback: [],
        })
      : [];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <ArticleSchema post={post} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o blog
            </Link>

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/blog/categoria/${category.slug}`}
                    className="text-primary font-medium text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-primary/30 hover:bg-primary/10 transition-colors"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground mb-8">
              {post.author?.name && (
                <span className="font-medium text-foreground">
                  {post.author.name}
                </span>
              )}
              {post.author?.name && <span>·</span>}
              <time dateTime={post.publishedAt}>
                {format(new Date(post.publishedAt), "d 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
                })}
              </time>
              {post.estimatedReadingTime ? (
                <>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.estimatedReadingTime} min de leitura
                  </span>
                </>
              ) : null}
            </div>
          </div>

          {cover && (
            <div className="max-w-4xl mx-auto mb-12">
              <Image
                src={cover}
                alt={post.mainImage?.alt || post.title}
                width={1600}
                height={900}
                priority
                className="w-full aspect-[16/9] object-cover rounded-3xl border border-border/50"
              />
            </div>
          )}

          <div className="max-w-3xl mx-auto text-lg">
            {post.body && <PortableTextRenderer value={post.body} />}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-20 bg-muted/20 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Continue lendo
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <PostCard key={p._id} post={p} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
