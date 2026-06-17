import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  groups: [
    { name: "content", title: "Conteúdo", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      group: "content",
      description: "Gerado a partir do título. Ex.: /blog/meu-post",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Resumo",
      type: "text",
      rows: 3,
      group: "content",
      description: "Aparece na listagem e nos resultados de busca.",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "mainImage",
      title: "Imagem de capa",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo (acessibilidade/SEO)",
        },
      ],
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: [{ type: "author" }],
      group: "content",
    }),
    defineField({
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      group: "content",
    }),
    defineField({
      name: "publishedAt",
      title: "Data de publicação",
      type: "datetime",
      group: "content",
      description: "O post só aparece no site nesta data/hora ou depois.",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Conteúdo",
      type: "blockContent",
      group: "content",
    }),
    // SEO opcional — sobrescreve título/descrição padrão se preenchido.
    defineField({
      name: "seoTitle",
      title: "Título para SEO",
      type: "string",
      group: "seo",
      description: "Opcional. Se vazio, usa o título do post.",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "Descrição para SEO",
      type: "text",
      rows: 2,
      group: "seo",
      description: "Opcional. Se vazio, usa o resumo.",
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare({ title, author, media, date }) {
      const dateStr = date
        ? new Date(date).toLocaleDateString("pt-BR")
        : "sem data";
      return {
        title,
        subtitle: [dateStr, author].filter(Boolean).join(" · "),
        media,
      };
    },
  },
});
