import { createFAQSchema } from "@/lib/seo";

// Fonte única de verdade das perguntas frequentes.
// Usado tanto na renderização visual quanto no schema FAQPage (JSON-LD).
export const faqItems: { question: string; answer: string }[] = [
  {
    question: "O que é o HubBot?",
    answer:
      "O HubBot é uma plataforma de atendimento com agentes de Inteligência Artificial criada para provedores de internet, revendas de telecom e empresas de TV por assinatura. A IA atende, vende e dá suporte 24 horas por dia em todos os canais, e é integrada ao ERP do provedor — ou seja, ela não apenas informa: emite a 2ª via, libera desbloqueio e consulta o status da conexão durante a própria conversa.",
  },
  {
    question: "Com quais sistemas de provedor o HubBot se integra?",
    answer:
      "O HubBot integra com IXC, SGP/TSMX, MK Solutions e Hubsoft para consulta de cliente, faturas, 2ª via com PIX, verificação de bloqueio, desbloqueio de confiança e liberação de redução de velocidade. Também integra com o Zabbix para checar sinal e status da ONU, com o Ligue Talk para telefonia, com o Google Agenda para agendamentos e com a Meta para rastrear conversões de anúncios Click-to-WhatsApp.",
  },
  {
    question: "O que são os Workflows do HubBot?",
    answer:
      "São fluxos visuais que definem como o atendimento funciona: o gatilho (conversa aberta, resposta de campanha, anúncio, inatividade, encerramento), as condições (canal, horário, status, tag, campo do contato) e os passos (enviar mensagem, fazer pergunta, ramificar, esperar, escalar, atribuir time ou consultar o ERP). Você monta arrastando cartões no canvas, sem programar, e publica ou pausa com um clique. A plataforma já vem com modelos prontos, como o atendimento completo para provedores com IXC e a pesquisa de NPS.",
  },
  {
    question: "Quais canais de atendimento o HubBot integra?",
    answer:
      "O HubBot unifica WhatsApp, Instagram, Telegram, Facebook e o chat do seu site em uma única caixa de entrada, com histórico completo do cliente em qualquer canal. Também permite ligar para o cliente pelo próprio WhatsApp, com pedido de permissão.",
  },
  {
    question: "Quais agentes de IA já vêm prontos?",
    answer:
      "Ao escolher o ramo 'Provedor de internet / telecom', o HubBot monta um time completo: um Roteador, que lê a intenção do cliente e distribui a conversa, e os especialistas de Recepção, Financeiro, Suporte Técnico, Vendas e Retenção. Cada um já vem com instruções que funcionam nesse tipo de operação e pode ser editado por você. Nada entra no ar antes da sua revisão.",
  },
  {
    question: "O HubBot substitui minha equipe de atendimento?",
    answer:
      "Não. O HubBot automatiza o atendimento repetitivo e de alto volume e transfere para a equipe humana apenas as conversas que exigem atenção, já com o contexto completo e direcionadas para o time certo. O objetivo é liberar o time para o que realmente importa, não eliminá-lo.",
  },
  {
    question: "Como a IA do HubBot evita responder informações erradas?",
    answer:
      "A IA responde a partir da base de conhecimento da sua empresa — planos, cobertura, políticas, FAQs e documentos internos (tecnologia RAG) — e dos dados reais consultados no seu ERP. Quando não tem a informação, ela escala para um humano em vez de inventar. Além disso, cada ferramenta do agente é habilitada por você: desbloqueio, agendamento e encerramento só acontecem se estiverem ligados.",
  },
  {
    question: "Consigo desfazer uma mudança na IA?",
    answer:
      "Sim. Os agentes são versionados: cada conjunto guarda as instruções, os especialistas e quem responde cada canal. Você publica uma versão nova e volta para a anterior quando quiser, sem perder nada. Os workflows também podem ser pausados ou despublicados a qualquer momento.",
  },
  {
    question: "Que relatórios o HubBot oferece?",
    answer:
      "Qualidade (NPS, tempo médio de atendimento e de espera por atendente), Produtividade (quantos atendimentos foram encerrados pela IA, por humanos e quantos foram escalados), Insights (a IA classifica interesse, motivo e resultado das conversas encerradas), NPS, resultado das campanhas de WhatsApp e atribuição de anúncios.",
  },
  {
    question: "O HubBot funciona 24 horas por dia?",
    answer:
      "Sim. Os agentes de IA atendem, qualificam leads e dão suporte 24 horas por dia, 7 dias por semana, inclusive fora do horário comercial, finais de semana e feriados. Também é possível montar um workflow em que a equipe atende no horário comercial e a IA assume fora dele.",
  },
  {
    question: "E se o meu ERP não estiver na lista de integrações?",
    answer:
      "A gente desenvolve a integração. As integrações prontas hoje são IXC, SGP/TSMX, MK Solutions, Hubsoft e Zabbix, mas o seu sistema de gestão não é motivo para ficar de fora: nos diga qual você usa e avaliamos junto o que dá para automatizar nele. Você não precisa trocar de ERP para usar o HubBot.",
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
