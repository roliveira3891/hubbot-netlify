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
} from "lucide-react";
import { ProductCarousel } from "@/components/ProductCarousel";

const features = [
  {
    icon: Inbox,
    title: "Inbox Omnicanal",
    description:
      "WhatsApp, Telegram, Instagram e chat web em uma única fila de atendimento. Histórico completo do cliente em qualquer canal, sem alternar de aba.",
    tag: "Multi-canal",
  },
  {
    icon: Bot,
    title: "Agentes de IA Configuráveis",
    description:
      "Crie múltiplos agentes com funções distintas: suporte técnico, vendas, recepção, cobrança. Cada agente tem personalidade, tom e escopo definidos por você.",
    tag: "IA Generativa",
  },
  {
    icon: Database,
    title: "Base de Conhecimento (RAG)",
    description:
      "Carregue planos, coberturas, políticas, FAQs e documentos da sua empresa. A IA responde baseada no seu conteúdo — não em dados genéricos inventados.",
    tag: "Treinamento Próprio",
  },
  {
    icon: Megaphone,
    title: "Campanhas e Disparos",
    description:
      "Envie mensagens segmentadas para toda a base ou segmentos específicos via WhatsApp. Controle de delivery, opt-out automático e métricas por campanha.",
    tag: "Broadcast",
  },
  {
    icon: Star,
    title: "NPS Automatizado",
    description:
      "Pesquisa de satisfação enviada automaticamente após cada atendimento. Identifique detratores, promotores e colete feedback sem esforço manual.",
    tag: "Satisfação",
  },
  {
    icon: Contact2,
    title: "CRM de Contatos",
    description:
      "Gestão completa do ciclo de vida do cliente: prospecção, ativação, retenção e churn. Tags, segmentos e histórico de todas as interações por canal.",
    tag: "CRM",
  },
  {
    icon: BarChart3,
    title: "Analytics em Tempo Real",
    description:
      "Tempo de primeira resposta, taxa de resolução por IA, performance por agente, volume por canal e funil de conversão — sem exportar planilha.",
    tag: "Métricas",
  },
  {
    icon: ShieldCheck,
    title: "Supervisão e Handoff IA→Humano",
    description:
      "Visão gerencial da fila de atendimento, SLA por conversa e transferência configurável da IA para a equipe. Gerente vê tudo, atendente vê o seu.",
    tag: "Controle de Equipe",
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
            Cada recurso foi construído para o contexto real de provedores de
            internet — do primeiro contato ao cliente fidelizado.
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
              {/* Tag */}
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-4">
                {feature.tag}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-primary opacity-20" />
              </div>
            </div>
          ))}
        </div>

        {/* Product Tour Carousel */}
        <div className="mt-28">
          {/* Context header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Por dentro do HubBot
            </span>
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Veja a plataforma{" "}
              <span className="text-gradient">em ação</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Do inbox unificado aos agentes de IA, campanhas e relatórios —
              navegue pelas telas reais que sua equipe usa no dia a dia.
            </p>
          </div>

          <ProductCarousel />
        </div>
      </div>
    </section>
  );
};

export default Features;
