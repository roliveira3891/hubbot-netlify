import type { Image } from "sanity";
import type { PortableTextBlock } from "@portabletext/react";

export interface PostCategory {
  _id: string;
  title: string;
  slug: string;
}

export interface PostAuthor {
  name: string;
  image?: Image;
  role?: string;
  bio?: string;
}

export interface PostListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  mainImage?: Image & { alt?: string };
  categories?: PostCategory[];
  author?: PostAuthor;
}

export interface PostFull extends PostListItem {
  body?: PortableTextBlock[];
  estimatedReadingTime?: number;
  seoTitle?: string;
  seoDescription?: string;
}
