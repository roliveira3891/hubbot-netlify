import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CloudOff,
  DollarSign,
  Headset,
  MessageSquare,
  PhoneCall,
  Plug,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  createMetadata,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo";
import { whatsappUrl } from "@/lib/contact";

export const metadata = createMetadata({
  title: "IA para Provedores de Internet | Atendimento e Vendas 24/7",
  description:
    "Chatbot com IA para provedores de internet: automatize o SAC, venda planos 24/7 no WhatsApp, reduza custos em até 70% e libere sua equipe do atendimento repetitivo.",
  keywords: [
    "chatbot para provedor de internet",
    "IA para provedor de internet",
    "atendimento automatizado ISP",
    "SAC automatizado provedor",
    "automação de atendimento para ISP",
    "chatbot WhatsApp provedor",
    "reduzir custos de atendimento provedor",
    "vender planos de internet pelo WhatsApp",
  ],
  path: "/segmentos/provedores-de-internet",
});

const dores = [
  {
    icon: PhoneCall,
    title: "SAC afogado em chamados repetitivos",
    description:
      "Segunda via, \"minha internet caiu\", consulta de planos: a mesma pergunta centenas de vezes por dia ocupando uma equipe inteira.",
  },
  {
    icon: DollarSign,
    title: "Custo de atendimento cresce com a base",
    description:
      "Cada mil novos assinantes exigem mais atendentes. O custo do SAC sobe junto com a receita e corrói a margem do provedor.",
  },
  {
    icon: CloudOff,
    title: "Massivas que explodem a fila",
    description:
      "Um rompimento de fibra e o telefone não para. A equipe gasta o dia repetindo a mesma informação em vez de resolver o problema.",
  },
  {
    icon: Users,
    title: "Cliente sem resposta fora do horário",
    description:
      "Quem pesquisa plano à noite ou perde a conexão no fim de semana encontra silêncio — e o concorrente a um clique de distância.",
  },
];

const recursos = [
  "Suporte nível 1 resolvido pela IA, sem fila",
  "Venda de planos com consulta de cobertura",
  "Segunda via de boleto e Pix na conversa",
  "Avisos proativos de massiva e manutenção",
  "Integração com o sistema de gestão do provedor",
  "Transbordo com contexto para a equipe humana",
];

const comoFunciona = [
  {
    icon: Plug,
    title: "Conecte seus canais",
    description:
      "WhatsApp, Instagram, Telegram e chat do site entram numa única caixa de entrada. Setup em 24 horas, sem trocar de sistema.",
  },
  {
    icon: Wifi,
    title: "Treine a IA com a sua operação",
    description:
      "Planos, cobertura, políticas e procedimentos do seu provedor viram a base de conhecimento do agente — ele responde com seus dados reais.",
  },
  {
    icon: Zap,
    title: "A IA resolve o repetitivo",
    description:
      "Suporte básico, segunda via, dúvidas de planos e avisos de massiva são resolvidos na hora, 24 horas por dia, sem fila.",
  },
  {
    icon: Headset,
    title: "Sua equipe cuida do que importa",
    description:
      "Casos complexos chegam à equipe com todo o histórico. Menos volume, mais qualidade em cada atendimento.",
  },
];

const stats = [
  { value: "70%", label: "Menos custo de atendimento" },
  { value: "24/7", label: "SAC e vendas sem pausa" },
  { value: "3s", label: "Tempo da primeira resposta" },
];

const faqItems = [
  {
    question: "O que a IA do HubBot resolve no SAC de um provedor de internet?",
    answer:
      "A IA resolve sozinha o atendimento de nível 1: dúvidas sobre planos e cobertura, segunda via de boleto, suporte básico de conexão, avisos de massiva e manutenção, e qualificação de novos assinantes. Os casos que exigem atenção humana são transferidos para a equipe com todo o contexto da conversa.",
  },
  {
    question: "Quanto um provedor economiza automatizando o atendimento?",
    answer:
      "Provedores que usam o HubBot reduzem em até 70% os custos de atendimento, porque a IA absorve o volume repetitivo que antes ocupava a maior parte da equipe — sem precisar contratar mais atendentes conforme a base de assinantes cresce.",
  },
  {
    question: "A IA funciona durante uma massiva (queda em massa)?",
    answer:
      "Sim, e é quando ela mais ajuda. Durante uma massiva, a IA informa automaticamente os clientes da região afetada sobre o problema e a previsão de retorno, segurando a explosão de chamados enquanto a equipe técnica foca em resolver a falha.",
  },
  {
    question: "O HubBot integra com o sistema de gestão do meu provedor?",
    answer:
      "Sim. O HubBot oferece integrações com sistemas de gestão e CRMs usados por provedores, permitindo que a IA consulte dados reais — como faturas, planos e status de conexão — durante o atendimento.",
  },
  {
    question: "A IA consegue vender planos de internet sozinha?",
    answer:
      "Sim. A IA atende o interessado em segundos, consulta a cobertura do endereço, apresenta os planos disponíveis e conduz a contratação — transferindo para um vendedor humano quando a negociação precisa de atenção pessoal.",
  },
  {
    question: "Quanto tempo leva para colocar o HubBot no ar?",
    answer:
      "O setup leva cerca de 24 horas. A IA é treinada com os planos, a cobertura e os procedimentos do seu provedor e já começa a atender nos seus canais sem que você precise trocar nenhum sistema.",
  },
];

export default function ProvedoresDeInternetPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Início", path: "/" },
    {
      name: "Provedores de Internet",
      path: "/segmentos/provedores-de-internet",
    },
  ]);
  const faqSchema = createFAQSchema(faqItems);

  const ctaWhatsApp = whatsappUrl(
    "Olá! Tenho um provedor de internet e quero conhecer o HubBot."
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
              Para provedores de internet
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Seu provedor atendendo e vendendo{" "}
              <span className="text-gradient">sem fila e sem pausa</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agentes de IA treinados para a realidade do ISP resolvem o
              suporte repetitivo, vendem planos e avisam massivas — enquanto
              sua equipe foca no que precisa de gente.
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
                src="/assets/tecnico-instalacao-provedor.jpg"
                alt="Técnico de provedor de internet realizando instalação de equipamento"
                width={1600}
                height={1068}
                priority
                className="w-full aspect-[21/9] object-cover saturate-[0.8] brightness-[0.92]"
              />
              {/* esfria a foto com as cores da marca */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/10 pointer-events-none" />
            </div>
            {/* badge de disponibilidade */}
            <div className="absolute top-6 right-4 sm:top-10 sm:right-12 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-foreground">
                SAC operando 24/7
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
                  responde em 3s
                </span>
              </div>
              <div className="space-y-2">
                <div className="bg-muted/80 rounded-2xl rounded-bl-sm px-3 py-2 text-xs text-foreground w-fit max-w-[85%]">
                  Minha internet caiu 😩
                </div>
                <div className="bg-gradient-to-r from-sky-500 to-teal-400 rounded-2xl rounded-br-sm px-3 py-2 text-xs text-white w-fit max-w-[90%] ml-auto">
                  Há uma manutenção na sua região com retorno previsto em 40
                  min. Te aviso quando normalizar! ⚡
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
              O atendimento que cresce mais rápido{" "}
              <span className="text-gradient">que a receita</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo provedor conhece o ciclo: a base cresce, os chamados
              dobram, a equipe não dá conta e a experiência do assinante cai.
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
                IA treinada para a operação de um ISP
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                O HubBot aprende seus planos, sua cobertura e seus
                procedimentos. O assinante é atendido na hora, em qualquer
                canal — e sua equipe só entra quando faz diferença.
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
                  Quero automatizar meu SAC
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
                    O que a IA resolve sozinha:
                  </p>
                  {[
                    "“Minha internet está lenta, podem verificar?”",
                    "“Me manda a segunda via do boleto?”",
                    "“Qual plano tem cobertura na minha rua?”",
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
              Do setup ao SAC rodando{" "}
              <span className="text-gradient">em 24 horas</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Sem trocar de sistema, sem projeto de meses. A IA entra em
              operação com a cara do seu provedor.
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
              Dúvidas comuns de{" "}
              <span className="text-gradient">provedores de internet</span>
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
              Quantos atendentes você precisaria contratar{" "}
              <span className="text-gradient">para atender 24/7?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Veja o HubBot respondendo com os planos e a cobertura do seu
              provedor em uma demonstração rápida, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={ctaWhatsApp} target="_blank" rel="noopener noreferrer">
                  Falar com a HubBot no WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/solucoes/suporte-tecnico-automatizado">
                  Ver suporte técnico com IA
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
