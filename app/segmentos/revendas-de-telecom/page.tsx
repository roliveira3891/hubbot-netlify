import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Headset,
  MessageSquare,
  Repeat,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
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
  title: "IA para Revendas de Planos de Telecom | Venda e Atenda 24/7",
  description:
    "Automatize a venda de planos de internet, telefonia e TV com agentes de IA. Qualifique leads, faça follow-up automático e feche vendas no WhatsApp 24/7. Feito para revendas de telecom.",
  keywords: [
    "revenda de planos de telecom",
    "chatbot para revenda de telecom",
    "automação de vendas telecom",
    "IA para revenda de internet",
    "vender planos pelo WhatsApp",
    "qualificação de leads telecom",
    "atendimento automatizado revenda",
    "follow-up automático de leads",
  ],
  path: "/segmentos/revendas-de-telecom",
});

const dores = [
  {
    icon: Clock,
    title: "Leads esfriam em minutos",
    description:
      "O cliente pede uma cotação, o vendedor demora a responder e a venda vai para o concorrente. Em telecom, quem responde primeiro fecha.",
  },
  {
    icon: Repeat,
    title: "Follow-up manual não escala",
    description:
      "Planilhas, lembretes e mensagens copiadas e coladas. Com dezenas de leads por dia, o acompanhamento vira a primeira coisa a ser esquecida.",
  },
  {
    icon: TrendingDown,
    title: "Vendas perdidas fora do horário",
    description:
      "Grande parte das pessoas pesquisa planos à noite e no fim de semana — exatamente quando a sua equipe não está atendendo.",
  },
  {
    icon: Users,
    title: "Equipe pequena, volume grande",
    description:
      "Os mesmos vendedores respondem dúvidas repetidas, consultam cobertura e negociam — sobra pouco tempo para o que gera receita.",
  },
];

const recursos = [
  "Qualificação automática de leads por interesse e cobertura",
  "Apresentação de planos e preços direto no WhatsApp",
  "Follow-up automático até o lead responder",
  "Atendimento simultâneo e ilimitado, 24 horas por dia",
  "Transbordo para o vendedor humano na hora de fechar",
  "Histórico completo da conversa em todos os canais",
];

const comoFunciona = [
  {
    icon: MessageSquare,
    title: "O lead chega por qualquer canal",
    description:
      "WhatsApp, Instagram, Telegram ou chat do site: a IA responde na hora, em segundos, com a linguagem da sua marca.",
  },
  {
    icon: UserCheck,
    title: "A IA qualifica e apresenta os planos",
    description:
      "Endereço, perfil de uso e orçamento: o agente entende a necessidade e oferece o plano certo, treinado com o seu portfólio real.",
  },
  {
    icon: Zap,
    title: "Follow-up automático até a decisão",
    description:
      "Lead que não respondeu recebe retomadas inteligentes no momento certo, sem depender da memória do vendedor.",
  },
  {
    icon: Headset,
    title: "Vendedor entra só para fechar",
    description:
      "Quando a venda esquenta, a conversa é transferida para a equipe com todo o contexto — sem o cliente repetir nada.",
  },
];

const stats = [
  { value: "24/7", label: "Atendimento e vendas sem pausa" },
  { value: "70%", label: "Menos custo com atendimento repetitivo" },
  { value: "3s", label: "Tempo médio da primeira resposta" },
];

const faqItems = [
  {
    question: "O que o HubBot faz por uma revenda de planos de telecom?",
    answer:
      "O HubBot coloca agentes de IA para atender os leads da sua revenda 24 horas por dia. A IA responde dúvidas sobre planos de internet, telefonia e TV, qualifica o interesse do cliente, faz follow-up automático e transfere a conversa para o vendedor humano no momento de fechar a venda.",
  },
  {
    question: "A IA consegue vender planos sozinha?",
    answer:
      "A IA conduz toda a etapa de atendimento e qualificação: apresenta planos, preços e condições com base no portfólio real da sua revenda. Você decide até onde ela vai — ela pode concluir a venda em fluxos simples ou transferir para um vendedor humano nas negociações que exigem atenção.",
  },
  {
    question: "Como funciona o follow-up automático de leads?",
    answer:
      "Quando um lead para de responder, o HubBot retoma a conversa automaticamente em intervalos inteligentes, com mensagens contextualizadas sobre o plano que o cliente estava avaliando. Nenhum lead fica esquecido em planilha ou depende da memória do vendedor.",
  },
  {
    question: "Funciona no WhatsApp que minha revenda já usa?",
    answer:
      "Sim. O HubBot funciona com o WhatsApp Business e unifica também Instagram, Telegram e chat do site em uma única caixa de entrada, com histórico completo de cada cliente.",
  },
  {
    question: "E quando o cliente quer falar com um vendedor de verdade?",
    answer:
      "A transferência é imediata. A IA identifica quando a conversa precisa de um humano — ou quando o próprio cliente pede — e passa o atendimento para a equipe com todo o contexto da negociação, sem o cliente precisar repetir nada.",
  },
  {
    question: "Como contratar o HubBot para minha revenda?",
    answer:
      "É só chamar o time do HubBot pelo WhatsApp do site para ver uma demonstração com os planos da sua revenda e receber uma proposta adequada ao tamanho da sua operação.",
  },
];

export default function RevendasDeTelecomPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Revendas de Telecom", path: "/segmentos/revendas-de-telecom" },
  ]);
  const faqSchema = createFAQSchema(faqItems);

  const ctaWhatsApp = whatsappUrl(
    "Olá! Tenho uma revenda de telecom e quero conhecer o HubBot."
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
              Para revendas de planos de telecom
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Sua revenda vendendo planos{" "}
              <span className="text-gradient">24 horas por dia</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agentes de IA que atendem cada lead em segundos, qualificam,
              fazem follow-up automático e entregam a venda quente para o seu
              vendedor — no WhatsApp e em todos os canais.
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
                src="/assets/atendente-headset-telecom.jpg"
                alt="Atendente de revenda de telecom sorrindo com headset durante atendimento ao cliente"
                width={1600}
                height={1067}
                priority
                className="w-full aspect-[4/3] sm:aspect-[21/9] object-cover saturate-[0.8] brightness-[0.92]"
              />
              {/* esfria a foto com as cores da marca */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/10 pointer-events-none" />
            </div>
            {/* badge de disponibilidade */}
            <div className="absolute top-6 right-4 sm:top-10 sm:right-12 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-foreground">
                Atendendo agora, 24/7
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
                  Oi! Tem plano de 500 mega no meu bairro?
                </div>
                <div className="bg-gradient-to-r from-sky-500 to-teal-400 rounded-2xl rounded-br-sm px-3 py-2 text-xs text-white w-fit max-w-[90%] ml-auto">
                  Tem sim! 500 mega com instalação grátis. Quer agendar agora? 🚀
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
              Por que revendas perdem vendas{" "}
              <span className="text-gradient">todos os dias</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Vender plano de internet, telefonia e TV é uma corrida contra o
              tempo — e contra o concorrente que respondeu primeiro.
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
                Um time de vendas com IA que nunca deixa lead esperando
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                O HubBot é treinado com os planos, a cobertura e as condições
                da sua revenda. Ele responde como o seu melhor vendedor — só
                que em segundos, para todos os leads ao mesmo tempo.
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
                  Quero vender mais planos
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
                    "“Qual o plano mais barato com 500 mega?”",
                    "“Vocês atendem no meu bairro?”",
                    "“Pode fazer um combo com TV e telefone?”",
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
              Do primeiro “oi” ao{" "}
              <span className="text-gradient">contrato fechado</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A IA cuida do funil inteiro de atendimento. Sua equipe entra
              apenas onde o toque humano faz diferença.
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
              <span className="text-gradient">revendas de telecom</span>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-teal-400 opacity-20 blur-3xl rounded-full" />
              <div className="relative [mask-image:radial-gradient(ellipse_80%_85%_at_50%_50%,black_40%,transparent_96%)]">
                <Image
                  src="/assets/equipe-comemorando-venda.jpg"
                  alt="Equipe de vendas de telecom comemorando o fechamento de uma venda"
                  width={1600}
                  height={900}
                  className="w-full aspect-[4/3] object-cover saturate-[0.8] brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/10 pointer-events-none" />
              </div>
              {/* notificação de venda sobre a foto */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    Venda realizada pela IA
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Plano 500 mega · agora mesmo
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quantas vendas sua revenda perdeu hoje{" "}
                <span className="text-gradient">por demora na resposta?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Veja o HubBot atendendo com os planos da sua revenda em uma
                demonstração rápida, sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
