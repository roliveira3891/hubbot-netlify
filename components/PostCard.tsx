import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { urlForImage } from "@/sanity/lib/image";
import type { PostListItem } from "@/sanity/lib/types";

export function PostCard({ post }: { post: PostListItem }) {
  const cover = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(800).height(450).quality(80).url()
    : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group glass rounded-2xl border border-border/50 overflow-hidden flex flex-col transition-all hover:border-primary/40 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] bg-muted/40 overflow-hidden">
        {cover ? (
          <Image
            src={cover}
            alt={post.mainImage?.alt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {post.categories?.[0] && (
          <span className="text-primary font-medium text-xs uppercase tracking-wider mb-2">
            {post.categories[0].title}
          </span>
        )}
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        )}
        <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
          {post.author?.name && <span>{post.author.name}</span>}
          {post.author?.name && <span>·</span>}
          <time dateTime={post.publishedAt}>
            {format(new Date(post.publishedAt), "d 'de' MMM, yyyy", {
              locale: ptBR,
            })}
          </time>
        </div>
      </div>
    </Link>
  );
}
