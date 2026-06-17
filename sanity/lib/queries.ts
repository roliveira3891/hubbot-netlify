import { groq } from "next-sanity";

// Campos comuns de listagem (sem o corpo do post, para ser leve).
const postListFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "categories": categories[]->{ _id, title, "slug": slug.current },
  "author": author->{ name, image }
`;

// Lista de posts publicados, mais recentes primeiro.
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current) && publishedAt <= now()]
    | order(publishedAt desc) {
    ${postListFields}
  }
`;

// Slugs publicados — para generateStaticParams e sitemap.
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current) && publishedAt <= now()]{
    "slug": slug.current,
    publishedAt
  }
`;

// Um post completo pelo slug.
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    ${postListFields},
    body,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    seoTitle,
    seoDescription
  }
`;

// Posts relacionados (mesma categoria, exclui o atual).
export const relatedPostsQuery = groq`
  *[_type == "post" && slug.current != $slug && defined(slug.current)
    && count(categories[@._ref in $categoryIds]) > 0]
    | order(publishedAt desc)[0...3]{
    ${postListFields}
  }
`;

// Categorias que têm ao menos um post publicado (para os filtros).
export const categoriesQuery = groq`
  *[_type == "category" && defined(slug.current)
    && count(*[_type == "post" && references(^._id)
      && defined(slug.current) && publishedAt <= now()]) > 0]
    | order(title asc){
    _id,
    title,
    "slug": slug.current
  }
`;

// Uma categoria pelo slug (cabeçalho da página de categoria).
export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    description
  }
`;

// Slugs de categoria — para generateStaticParams e sitemap.
export const categorySlugsQuery = groq`
  *[_type == "category" && defined(slug.current)
    && count(*[_type == "post" && references(^._id)
      && defined(slug.current) && publishedAt <= now()]) > 0]{
    "slug": slug.current
  }
`;

// Posts de uma categoria específica.
export const postsByCategoryQuery = groq`
  *[_type == "post" && defined(slug.current) && publishedAt <= now()
    && $categorySlug in categories[]->slug.current]
    | order(publishedAt desc){
    ${postListFields}
  }
`;
