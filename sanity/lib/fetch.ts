import "server-only";

import { client } from "./client";
import { isSanityConfigured } from "../env";

// Wrapper de leitura para o servidor. Revalida a cada 60s (ISR) e marca a tag
// "post" para permitir revalidação sob demanda futuramente. Se o Sanity não
// estiver configurado, devolve o fallback em vez de quebrar o build.
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  fallback,
  revalidate = 60,
}: {
  query: string;
  params?: Record<string, unknown>;
  fallback: QueryResponse;
  revalidate?: number;
}): Promise<QueryResponse> {
  if (!isSanityConfigured) {
    return fallback;
  }

  try {
    return await client.fetch<QueryResponse>(query, params, {
      next: { revalidate, tags: ["post"] },
    });
  } catch (error) {
    console.error("[sanity] fetch falhou:", error);
    return fallback;
  }
}
