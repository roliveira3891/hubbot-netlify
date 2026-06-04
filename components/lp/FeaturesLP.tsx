"use client";

import { MessageSquare, Bot, BarChart3, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Inbox Unificada",
    description: "Todas as conversas de WhatsApp em um só lugar. Sem perder mensagem, sem confusão.",
  },
  {
    icon: Bot,
    title: "IA Vendedora 24/7",
    description: "Responde instantaneamente, pergunta endereço, velocidade desejada e qualifica automaticamente.",
  },
  {
    icon: Users,
    title: "CRM de Telecom",
    description: "Pipeline visual: veja quantos leads estão em cada etapa — novo, qualificado, negociando, fechado.",
  },
  {
    icon: BarChart3,
    title: "Métricas em Tempo Real",
    description: "Acompanhe tempo de resposta, taxa de conversão e performance de cada vendedor.",
  },
  {
    icon: Zap,
    title: "Automações Inteligentes",
    description: "Follow-up automático, lembretes de vencimento e campanhas de upgrade de plano.",
  },
  {
    icon: Shield,
    title: "Multi-usuário Seguro",
    description: "Cada vendedor acessa apenas suas conversas. Gerente vê tudo. Dados protegidos.",
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
            Tudo que seu provedor precisa{" "}
            <span className="text-gradient">em uma plataforma</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Do primeiro contato ao contrato assinado — sem planilhas, sem bagunça, sem cliente perdido.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl p-8 glass hover:bg-card/70 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-primary opacity-20" />
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Preview Image */}
        <div className="mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              <img 
                src={'/assets/analytics-mockup.png'} 
                alt="HubBot - Dashboard de métricas para provedores"
                className="w-full h-auto"
              />
              {/* Overlay Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
