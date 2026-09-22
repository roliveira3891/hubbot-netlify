"use client";

import {
  Inbox,
  Bot,
  Database,
  Megaphone,
  Star,
  Contact2,
  BarChart3,
  ShieldCheck,
  CalendarCheck,
  GitBranch,
  PhoneCall,
  Lightbulb,
} from "lucide-react";
import { ProductCarousel } from "@/components/ProductCarousel";

const features = [
  {
    icon: Inbox,
    title: "Inbox omnicanal",
    description:
      "WhatsApp, Instagram, Telegram, Facebook e chat do site numa fila só, com status, atribuição por time e histórico completo do cliente.",
    tag: "Multicanal",
  },
  {
    icon: GitBranch,
    title: "Workflows visuais",
    description:
      "Gatilho, condição e passo num canvas de arrastar. Define quem atende, o que a IA resolve, quando escalar e para qual time — sem programar.",
    tag: "Automação",
  },
  {
    icon: Bot,
    title: "Time de agentes de IA",
    description:
      "Roteador + especialistas de Financeiro, Suporte, Vendas, Retenção e Recepção. Cada um com escopo, tom e ferramentas próprias, versionados.",
    tag: "IA generativa",
  },
  {
    icon: Database,
    title: "Base de conhecimento (RAG)",
    description:
      "Suba planos, cobertura, políticas e documentos internos. A IA responde a partir do seu conteúdo, não de dado genérico inventado.",
    tag: "Treinamento próprio",
  },
  {
    icon: Megaphone,
    title: "Campanhas de WhatsApp",
    description:
      "Disparo por template aprovado, Flows, mensagens interativas, QR Code e link de entrada, com opt-out automático de quem pede para sair.",
    tag: "Broadcast",
  },
  {
    icon: Lightbulb,
    title: "Insights de conversa",
    description:
      "A IA lê os atendimentos encerrados e classifica interesse, motivo e resultado. Você descobre o que sua base procura sem ler conversa por conversa.",
    tag: "Análise",
  },
  {
    icon: Star,
    title: "NPS automático",
    description:
      "Pesquisa enviada ao encerrar o atendimento, com nota amarrada a quem conduziu o caso. Promotores, passivos e detratores no relatório.",
    tag: "Satisfação",
  },
  {
    icon: Contact2,
    title: "CRM de contatos",
    description:
      "Ciclo de vida e tags atualizados pela própria IA durante a conversa, campos personalizados e histórico de toda interação por canal.",
    tag: "CRM",
  },
  {
    icon: CalendarCheck,
    title: "Agenda",
    description:
      "Retirada de equipamento, instalação e visita técnica agendadas pela IA no grupo certo — ou integradas ao seu Google Agenda.",
    tag: "Agendamento",
  },
  {
    icon: PhoneCall,
    title: "Chamada por WhatsApp",
    description:
      "Ligue para o cliente pelo próprio WhatsApp, com pedido de permissão e fila de chamadas prontas para o atendente.",
    tag: "Voz",
  },
  {
    icon: BarChart3,
    title: "Relatórios de operação",
    description:
      "Qualidade, produtividade, quanto a IA encerrou sozinha, escalonamentos, desempenho por atendente e resultado das campanhas e anúncios.",
    tag: "Métricas",
  },
  {
    icon: ShieldCheck,
    title: "Times e encaminhamento",
    description:
      "Membros, times e regras de handoff da IA para o humano. Gerente enxerga a operação inteira, atendente enxerga a fila dele.",
    tag: "Gestão de equipe",
  },
];

const Features = () => {
  return (
    <section id="recursos" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Uma plataforma completa,{" "}
            <span className="text-gradient">não mais uma ferramenta</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Do primeiro &ldquo;oi&rdquo; no anúncio até o cliente fidelizado — e
            tudo construído para o contexto real de quem opera um provedor.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl p-6 glass hover:bg-card/70 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-4">
                {feature.tag}
              </span>

              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-primary opacity-20" />
              </div>
            </div>
          ))}
        </div>

        {/* Product Tour Carousel */}
        <div className="mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Por dentro do HubBot
            </span>
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Veja a plataforma <span className="text-gradient">em ação</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Do inbox unificado aos workflows, agentes, campanhas e relatórios —
              as telas reais que sua equipe usa todo dia.
            </p>
          </div>

          <ProductCarousel />
        </div>
      </div>
    </section>
  );
};

export default Features;
