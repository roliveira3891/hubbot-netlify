// Configuração de contato comercial (WhatsApp)
//
// TODO: substituir WHATSAPP_NUMBER pelo número comercial real assim que
// estiver disponível. Use apenas dígitos, com DDI + DDD. Ex: "5511999999999".
// Enquanto estiver vazio, o link abre o WhatsApp sem destinatário definido.
export const WHATSAPP_NUMBER = "";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da HubBot e quero conhecer a plataforma.";

// Monta o link wa.me com mensagem pré-preenchida.
export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
