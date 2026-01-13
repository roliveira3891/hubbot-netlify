import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, Inbox, Workflow, BarChart3, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Plataforma Completa de IA para Atendimento | Produto",
  description: "Agentes IA, Caixa de Entrada unificada, Workflows automatizados, Analytics em tempo real e 100+ Integrações. Tudo em uma única plataforma.",
  keywords: [
    "agentes ia",
    "inbox unificada",
    "workflows automação",
    "analytics atendimento",
    "integrações CRM",
    "omnichannel",
    "plataforma atendimento",
  ],
  path: "/produto",
});

const productSections = [
  {
    id: "agentes-ia",
    icon: Bot,
    title: "Agentes IA",
    subtitle: "Automatize conversas com inteligência artificial",
    description: "Crie agentes de IA que entendem contexto, respondem naturalmente e resolvem problemas complexos dos seus clientes 24/7.",
    features: [
      "Processamento de linguagem natural avançado",
      "Aprendizado contínuo com interações",
      "Integração com base de conhecimento",
      "Escalação inteligente para humanos",
      "Suporte multilíngue automático",
      "Personalização de tom e personalidade"
    ],
    stats: [
      { value: "80%", label: "Resolução automática" },
      { value: "24/7", label: "Disponibilidade" },
      { value: "3s", label: "Tempo de resposta" }
    ],
    gradient: "from-primary to-accent"
  },
  {
    id: "caixa-entrada",
    icon: Inbox,
    title: "Caixa de Entrada",
    subtitle: "Inbox unificada para todos os canais",
    description: "Centralize todas as conversas de WhatsApp, Instagram, Facebook, Email e mais em uma única interface poderosa.",
    features: [
      "Unificação de todos os canais",
      "Atribuição automática de conversas",
      "Filtros e tags inteligentes",
      "Histórico completo do cliente",
      "Respostas rápidas e templates",
      "Colaboração em tempo real"
    ],
    stats: [
      { value: "10+", label: "Canais suportados" },
      { value: "50%", label: "Menos tempo de resposta" },
      { value: "100%", label: "Visibilidade" }
    ],
    gradient: "from-accent to-primary"
  },
  {
    id: "workflows",
    icon: Workflow,
    title: "Workflows",
    subtitle: "Automatize processos de negócio",
    description: "Construa fluxos de automação visuais que conectam suas ferramentas e executam ações automaticamente.",
    features: [
      "Editor visual drag-and-drop",
      "Triggers baseados em eventos",
      "Condições e ramificações",
      "Integração com APIs externas",
      "Agendamento de tarefas",
      "Monitoramento em tempo real"
    ],
    stats: [
      { value: "70%", label: "Tarefas automatizadas" },
      { value: "5min", label: "Para criar um workflow" },
      { value: "∞", label: "Possibilidades" }
    ],
    gradient: "from-primary to-accent"
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    subtitle: "Acompanhe e otimize performance",
    description: "Dashboards completos com métricas de atendimento, performance da equipe e insights de IA para tomar decisões baseadas em dados.",
    features: [
      "Dashboards personalizáveis",
      "Métricas de tempo real",
      "Relatórios de performance",
      "Análise de sentimento",
      "Identificação de tendências",
      "Exportação de dados"
    ],
    stats: [
      { value: "50+", label: "Métricas disponíveis" },
      { value: "Real-time", label: "Atualização" },
      { value: "360°", label: "Visão do cliente" }
    ],
    gradient: "from-accent to-primary"
  },
  {
    id: "integracoes",
    icon: Zap,
    title: "Integrações",
    subtitle: "Conecte suas ferramentas favoritas",
    description: "Integre com CRMs, ERPs, plataformas de e-commerce e mais de 100 ferramentas que você já usa no dia a dia.",
    features: [
      "100+ integrações nativas",
      "API RESTful completa",
      "Webhooks personalizados",
      "Zapier e Make compatível",
      "Sincronização bidirecional",
      "Autenticação segura OAuth"
    ],
    stats: [
      { value: "100+", label: "Integrações" },
      { value: "99.9%", label: "Uptime da API" },
      { value: "5min", label: "Para integrar" }
    ],
    gradient: "from-primary to-accent"
  }
];

export default function ProdutoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Tudo que você precisa para{" "}
              <span className="text-gradient">conversas inteligentes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Uma plataforma completa com IA, automação e analytics para transformar
              a experiência dos seus clientes.
            </p>

            {/* Navigation Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {productSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all group"
                >
                  <section.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {productSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 relative ${index % 2 === 0 ? 'bg-muted/20' : ''}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-glow`}>
                    <section.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    {section.title}
                  </span>
                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {section.subtitle}
                </h2>

                <p className="text-lg text-muted-foreground mb-8">
                  {section.description}
                </p>

                {/* Features List */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {section.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="hero" className="group">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 blur-3xl rounded-full`} />

                  {/* Card */}
                  <div className="relative glass rounded-2xl p-8 border border-border/50">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {section.stats.map((stat, i) => (
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

                    {/* Visual Representation */}
                    <div className="bg-background/50 rounded-xl p-6 border border-border/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <section.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-muted rounded-full w-3/4" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-muted/50 rounded-full w-full" />
                        <div className="h-2 bg-muted/50 rounded-full w-5/6" />
                        <div className="h-2 bg-muted/50 rounded-full w-4/6" />
                      </div>
                      <div className="mt-4 flex gap-2">
                        <div className="h-8 bg-primary/20 rounded-lg flex-1" />
                        <div className="h-8 bg-accent/20 rounded-lg flex-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para transformar seu atendimento?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comece gratuitamente e veja resultados em minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Começar Teste Grátis
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Agendar Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
