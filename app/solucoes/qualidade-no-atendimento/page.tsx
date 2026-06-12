import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Frown,
  Headset,
  Heart,
  History,
  MessageSquare,
  RefreshCw,
  Smile,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  createMetadata,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo";
import { whatsappUrl } from "@/lib/contact";

export const metadata = createMetadata({
  title: "Como Melhorar a Qualidade do Atendimento ao Cliente em Telecom",
  description:
    "Atendimento de telecom lidera reclamações no Brasil. Veja como resolver o que o cliente mais odeia — fila, repetição e robô que não entende — com IA que atende em segundos, 24/7.",
  keywords: [
    "melhorar atendimento ao cliente",
    "qualidade no atendimento telecom",
    "experiência do cliente provedor",
    "atendimento humanizado com IA",
    "reduzir reclamações de atendimento",
    "satisfação do cliente telecom",
    "NPS provedor de internet",
    "atendimento sem fila",
  ],
  path: "/solucoes/qualidade-no-atendimento",
});

const dores = [
  {
    icon: Clock,
    title: "Esperar para ser atendido",
    description:
      "Fila no telefone, mensagem sem resposta por horas. Cada minuto de espera é o cliente avaliando se vale a pena trocar de empresa.",
  },
  {
    icon: RefreshCw,
    title: "Repetir o problema três vezes",
    description:
      "Cair em outro atendente e ter que contar tudo de novo é a reclamação número um de quem liga para uma empresa de telecom.",
  },
  {
    icon: Frown,
    title: "Robô que não entende nada",
    description:
      "Menus engessados, \"digite 1 para...\", respostas que não têm nada a ver com a pergunta. O cliente desiste — ou desabafa no Reclame Aqui.",
  },
  {
    icon: History,
    title: "Só atende em horário comercial",
    description:
      "O problema do cliente não escolhe hora. Se a internet cai à noite e não há resposta, a frustração amanhece em forma de cancelamento.",
  },
];

const recursos = [
  "Resposta em segundos, a qualquer hora do dia",
  "Histórico completo: o cliente nunca repete nada",
  "IA que entende linguagem natural, não menu de opções",
  "Mesmo atendimento em WhatsApp, Instagram e site",
  "Transferência para humano na hora certa, com contexto",
  "Pesquisa de satisfação e NPS após o atendimento",
];

const comoFunciona = [
  {
    icon: MessageSquare,
    title: "O cliente chama, a IA responde na hora",
    description:
      "Sem fila, sem menu, sem espera. A conversa começa em segundos no canal que o cliente preferir, a qualquer hora.",
  },
  {
    icon: Sparkles,
    title: "A IA entende e resolve de verdade",
    description:
      "Treinada com os dados da sua empresa, ela responde como seu melhor atendente — sem respostas genéricas nem becos sem saída.",
  },
  {
    icon: Headset,
    title: "Humano entra quando faz diferença",
    description:
      "Casos delicados são transferidos para a equipe com todo o histórico. O cliente não repete nada e se sente cuidado.",
  },
  {
    icon: Heart,
    title: "A experiência vira fidelidade",
    description:
      "Cliente bem atendido não procura concorrente. Atendimento rápido e resolutivo derruba reclamações e segura o churn.",
  },
];

const stats = [
  { value: "3s", label: "Primeira resposta, sem fila" },
  { value: "24/7", label: "Disponível quando o cliente precisa" },
  { value: "0", label: "Vezes repetindo o problema" },
];

const faqItems = [
  {
    question: "Por que o atendimento de telecom é tão mal avaliado?",
    answer:
      "O setor de telecomunicações lidera os rankings de reclamações em órgãos como Procon e Anatel há anos, principalmente por demora no atendimento, falta de resolução no primeiro contato e a necessidade de repetir o problema a cada novo atendente. São exatamente esses pontos que a automação inteligente resolve.",
  },
  {
    question: "IA no atendimento não vai piorar a experiência do cliente?",
    answer:
      "Depende da IA. Chatbots antigos de menu engessado frustram porque não entendem o cliente. Agentes de IA modernos, como os do HubBot, entendem linguagem natural, são treinados com os dados reais da empresa e resolvem a maioria dos casos na hora — e transferem para um humano quando é o melhor para o cliente.",
  },
  {
    question: "Como a IA melhora a qualidade do atendimento na prática?",
    answer:
      "Eliminando o que o cliente mais odeia: a espera (resposta em segundos), a repetição (histórico completo da conversa em todos os canais), o horário limitado (atendimento 24/7) e a falta de resolução (a IA resolve o repetitivo e encaminha o complexo para a pessoa certa, com contexto).",
  },
  {
    question: "O cliente percebe que está falando com uma IA?",
    answer:
      "A IA se apresenta como assistente virtual e conversa com naturalidade, na linguagem da sua marca. O que o cliente percebe de verdade é que foi atendido na hora e teve o problema resolvido — que é o que define a qualidade do atendimento.",
  },
  {
    question: "Como medir se a qualidade do atendimento melhorou?",
    answer:
      "O HubBot inclui pesquisa de satisfação e NPS após os atendimentos, além de relatórios de tempo de resposta, taxa de resolução pela IA e volume transferido para humanos. Você acompanha a evolução da experiência do cliente com dados, não com impressão.",
  },
  {
    question: "Atendimento automatizado serve para empresa pequena?",
    answer:
      "Sim — e costuma ter ainda mais impacto, porque em operações enxutas a equipe não dá conta do volume e a qualidade despenca nos horários de pico. A IA absorve o repetitivo e a equipe pequena passa a atender como uma grande.",
  },
];

export default function QualidadeNoAtendimentoPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Início", path: "/" },
    {
      name: "Qualidade no Atendimento",
      path: "/solucoes/qualidade-no-atendimento",
    },
  ]);
  const faqSchema = createFAQSchema(faqItems);

  const ctaWhatsApp = whatsappUrl(
    "Olá! Quero melhorar a qualidade do atendimento da minha empresa com o HubBot."
  );

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Qualidade no atendimento
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              O atendimento que o seu cliente{" "}
              <span className="text-gradient">queria receber</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sem fila, sem repetir o problema, sem &quot;digite 1&quot;.
              Resposta em segundos, no canal que ele preferir, a qualquer hora
              — é assim que reclamação vira elogio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={ctaWhatsApp} target="_blank" rel="noopener noreferrer">
                  Ver demonstração no WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/produto">Conhecer a plataforma</Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-12 max-w-5xl mx-auto">
            {/* a vinheta dissolve todas as bordas da foto no fundo da página */}
            <div className="relative [mask-image:radial-gradient(ellipse_72%_88%_at_50%_45%,black_42%,transparent_96%)]">
              <Image
                src="/assets/cliente-feliz-atendimento.jpg"
                alt="Cliente sorrindo ao receber atendimento rápido pelo celular"
                width={1600}
                height={1067}
                priority
                className="w-full aspect-[21/9] object-cover saturate-[0.8] brightness-[0.92]"
              />
              {/* esfria a foto com as cores da marca */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/10 pointer-events-none" />
            </div>
            {/* badge de avaliação */}
            <div className="absolute top-6 right-4 sm:top-10 sm:right-12 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
              <Smile className="w-4 h-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-foreground">
                Atendimento avaliado: ★★★★★
              </span>
            </div>
            {/* conversa simulada sobre a foto */}
            <div className="absolute -bottom-6 left-2 sm:bottom-8 sm:left-10 glass rounded-2xl p-4 shadow-xl max-w-[270px] sm:max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-foreground">
                  Agente IA · HubBot
                </span>
                <span className="text-[10px] text-muted-foreground ml-auto">
                  sem fila de espera
                </span>
              </div>
              <div className="space-y-2">
                <div className="bg-muted/80 rounded-2xl rounded-bl-sm px-3 py-2 text-xs text-foreground w-fit max-w-[85%]">
                  São 23h, tem alguém aí? Preciso resolver uma coisa urgente
                </div>
                <div className="bg-gradient-to-r from-sky-500 to-teal-400 rounded-2xl rounded-br-sm px-3 py-2 text-xs text-white w-fit max-w-[90%] ml-auto">
                  Tem sim! Estou aqui 24h por dia. Me conta o que houve? 😊
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              O problema
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              O que o cliente <span className="text-gradient">mais odeia</span>{" "}
              no atendimento
            </h2>
            <p className="text-lg text-muted-foreground">
              Telecom lidera os rankings de reclamação no Brasil — e quase
              tudo se resume a estes quatro pontos. Cada um deles empurra o
              cliente para o cancelamento.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {dores.map((dor, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 border border-border/50"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <dor.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {dor.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {dor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                A solução
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                Qualidade, na visão de quem é atendido
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Para o cliente, atendimento bom é simples: rápido, resolutivo
                e sem retrabalho. O HubBot entrega os três — e devolve à sua
                equipe o tempo para tratar bem quem precisa de gente.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {recursos.map((recurso, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{recurso}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" className="group" asChild>
                <a href={ctaWhatsApp} target="_blank" rel="noopener noreferrer">
                  Quero clientes mais satisfeitos
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-teal-400 opacity-20 blur-3xl rounded-full" />
              <div className="relative glass rounded-2xl p-8 border border-border/50">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground mb-3">
                    O que muda para o seu cliente:
                  </p>
                  {[
                    "Resolveu a segunda via em 30 segundos, à meia-noite",
                    "Trocou de canal e a conversa continuou do mesmo ponto",
                    "Falou com um humano sem contar a história de novo",
                  ].map((exemplo, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30"
                    >
                      <MessageSquare className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {exemplo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Como funciona
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Da reclamação ao{" "}
              <span className="text-gradient">elogio espontâneo</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quatro mudanças na experiência do cliente que transformam o
              atendimento no seu diferencial competitivo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comoFunciona.map((etapa, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 border border-border/50 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <etapa.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-heading text-3xl font-bold text-primary/20">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {etapa.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {etapa.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Perguntas frequentes
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Dúvidas comuns sobre{" "}
              <span className="text-gradient">qualidade no atendimento</span>
            </h2>
          </div>

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

      {/* CTA final */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como seus clientes descrevem{" "}
              <span className="text-gradient">o seu atendimento hoje?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experimente a conversa que seu cliente teria com a IA da sua
              empresa — demonstração rápida, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={ctaWhatsApp} target="_blank" rel="noopener noreferrer">
                  Falar com a HubBot no WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/segmentos/provedores-de-internet">
                  Soluções para provedores
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
