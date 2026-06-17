import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // CDN para conteúdo publicado (rápido e cacheável). Preview usa o cliente
  // sem CDN, definido em fetch.ts.
  useCdn: true,
  perspective: "published",
});
