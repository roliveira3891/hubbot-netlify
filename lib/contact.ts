// Configuração de contato comercial (WhatsApp)
//
// Número comercial em formato somente dígitos, com DDI + DDD.
export const WHATSAPP_NUMBER = "558431051900";

// Número formatado para exibição.
export const WHATSAPP_DISPLAY = "+55 84 3105-1900";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da HubBot e quero conhecer a plataforma.";

// Monta o link wa.me com mensagem pré-preenchida.
export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
