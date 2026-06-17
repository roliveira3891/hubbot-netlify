import Link from "next/link";

import type { PostCategory } from "@/sanity/lib/types";

// Chips de filtro: "Todos" + uma por categoria. A ativa fica destacada.
export function CategoryFilter({
  categories,
  activeSlug,
}: {
  categories: PostCategory[];
  activeSlug?: string;
}) {
  if (categories.length === 0) return null;

  const base =
    "px-4 py-2 rounded-full text-sm font-medium border transition-colors";
  const active = "bg-primary text-primary-foreground border-primary";
  const idle =
    "text-muted-foreground border-border/60 hover:text-foreground hover:border-primary/40";

  return (
    <nav className="flex flex-wrap gap-2 mb-10" aria-label="Filtrar por categoria">
      <Link
        href="/blog"
        className={`${base} ${!activeSlug ? active : idle}`}
      >
        Todos
      </Link>
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/blog/categoria/${category.slug}`}
          className={`${base} ${
            activeSlug === category.slug ? active : idle
          }`}
        >
          {category.title}
        </Link>
      ))}
    </nav>
  );
}
