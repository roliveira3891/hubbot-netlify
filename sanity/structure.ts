import type { StructureResolver } from "sanity/structure";

// Organização do painel: Posts em destaque, depois Categorias e Autores.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog HubBot")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categorias"),
      S.documentTypeListItem("author").title("Autores"),
    ]);
