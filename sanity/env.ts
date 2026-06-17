// Variáveis de ambiente do Sanity, centralizadas e tipadas.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// Token de servidor para leitura de rascunhos/preview (nunca exposto ao cliente).
export const readToken = process.env.SANITY_API_READ_TOKEN || "";

// Indica se a integração está configurada. Permite que o build/SSR funcione
// mesmo sem credenciais (páginas mostram estado vazio em vez de quebrar).
export const isSanityConfigured = Boolean(projectId);
