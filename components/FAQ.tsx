import { createFAQSchema } from "@/lib/seo";

// Fonte única de verdade das perguntas frequentes.
// Usado tanto na renderização visual quanto no schema FAQPage (JSON-LD).
export const faqItems: { question: string; answer: string }[] = [
  {
    question: "O que é o HubBot?",
    answer:
      "O HubBot é uma plataforma de atendimento com agentes de Inteligência Artificial criada para provedores de internet, revendas de telecom e empresas de TV por assinatura. A IA atende, vende e dá suporte 24 horas por dia em todos os canais, resolvendo o atendimento repetitivo sozinha e transferindo para a equipe humana apenas o que precisa de atenção.",
  },
  {
    question: "Para quem o HubBot é indicado?",
    answer:
      "O HubBot é feito para provedores de internet (ISPs), revendas de telecom e empresas de TV por assinatura que querem reduzir custos de atendimento, escalar o SAC sem aumentar a equipe e oferecer suporte 24/7 com qualidade.",
  },
  {
    question: "Quais canais de atendimento o HubBot integra?",
    answer:
      "O HubBot unifica WhatsApp, Instagram, Telegram, chat web e atendimento por voz com IA em uma única caixa de entrada omnicanal, com histórico completo do cliente em qualquer canal.",
  },
  {
    question: "O HubBot substitui minha equipe de atendimento?",
    answer:
      "Não. O HubBot automatiza o atendimento repetitivo e de alto volume com IA e transfere para a equipe humana apenas as conversas que exigem atenção. O objetivo é liberar o time para o que realmente importa, não eliminá-lo.",
  },
  {
    question: "Como a IA do HubBot evita responder informações erradas?",
    answer:
      "A IA é treinada com a base de conhecimento da sua empresa — planos, cobertura, políticas, FAQs e documentos internos (tecnologia RAG). Ela responde com base no seu conteúdo real, e não em dados genéricos ou inventados.",
  },
  {
    question: "Quanto o HubBot pode reduzir os custos de atendimento?",
    answer:
      "Provedores que usam o HubBot reduzem em até 70% os custos de atendimento ao automatizar o suporte repetitivo com IA e diminuir o volume que chega à equipe humana.",
  },
  {
    question: "O HubBot funciona 24 horas por dia?",
    answer:
      "Sim. Os agentes de IA do HubBot atendem, qualificam leads e dão suporte 24 horas por dia, 7 dias por semana, inclusive fora do horário comercial e em finais de semana.",
  },
  {
    question: "Preciso trocar meu CRM ou sistema atual para usar o HubBot?",
    answer:
      "Não. O HubBot oferece integrações com CRMs e sistemas de gestão de provedores, funcionando junto com as ferramentas que você já utiliza.",
  },
  {
    question: "Como contratar o HubBot?",
    answer:
      "Você pode falar com o time do HubBot pelo site para conhecer a plataforma, ver uma demonstração e receber uma proposta adequada ao tamanho da sua operação.",
  },
];

const FAQ = () => {
  const faqSchema = createFAQSchema(faqItems);

  return (
    <section id="faq" className="py-24 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Perguntas Frequentes
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Tudo o que você precisa saber{" "}
            <span className="text-gradient">sobre o HubBot</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            As dúvidas mais comuns de provedores de internet e telecom sobre
            atendimento com Inteligência Artificial.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto divide-y divide-border rounded-2xl border border-border bg-card/30">
          {faqItems.map((item, index) => (
            <details key={index} className="group px-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 list-none font-heading text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-45 text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="pb-5 -mt-1 text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
