import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Building2, GraduationCap, Landmark, HeartPulse, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Soluções por Segmento | E-commerce, Empresas, Educação e Mais",
  description: "Soluções de IA personalizadas para E-commerce, Empresas, Educação, Serviços Financeiros e Saúde. Atendimento inteligente adaptado para cada setor.",
  keywords: [
    "e-commerce chatbot",
    "automação empresarial",
    "educação EAD",
    "fintech atendimento",
    "saúde telemedicina",
    "varejo automação",
    "atendimento por setor",
  ],
  path: "/segmentos",
});

const segmentosSections = [
  {
    id: "e-commerce",
    icon: ShoppingCart,
    title: "E-commerce",
    subtitle: "Aumente suas vendas online com atendimento inteligente",
    description: "Transforme visitantes em compradores com agentes IA que respondem dúvidas sobre produtos, processam pedidos e oferecem suporte pós-venda 24/7.",
    features: [
      "Recomendação inteligente de produtos",
      "Rastreamento de pedidos automático",
      "Recuperação de carrinhos abandonados",
      "Integração com Shopify, WooCommerce e mais",
      "Suporte pós-venda automatizado",
      "Upsell e cross-sell inteligente"
    ],
    stats: [
      { value: "35%", label: "Aumento em vendas" },
      { value: "60%", label: "Menos abandono" },
      { value: "24/7", label: "Disponibilidade" }
    ],
    useCases: [
      "Responder perguntas sobre produtos em tempo real",
      "Processar devoluções e trocas automaticamente",
      "Enviar notificações de promoções personalizadas"
    ],
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "empresas",
    icon: Building2,
    title: "Empresas",
    subtitle: "Escale o suporte ao cliente sem aumentar a equipe",
    description: "Automatize o atendimento corporativo com IA que entende o contexto do seu negócio e resolve problemas complexos de forma autônoma.",
    features: [
      "Integração com sistemas legados",
      "SSO e autenticação enterprise",
      "SLAs personalizados",
      "Relatórios de compliance",
      "Suporte multicanal unificado",
      "Escalação inteligente para humanos"
    ],
    stats: [
      { value: "70%", label: "Redução de custos" },
      { value: "10x", label: "Mais capacidade" },
      { value: "99.9%", label: "Uptime garantido" }
    ],
    useCases: [
      "Atendimento de RH para colaboradores",
      "Suporte técnico de TI automatizado",
      "Gestão de tickets e chamados"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "educacao",
    icon: GraduationCap,
    title: "Educação",
    subtitle: "Engaje estudantes e automatize processos acadêmicos",
    description: "Ofereça suporte 24/7 para alunos, automatize matrículas, responda dúvidas sobre cursos e melhore a experiência educacional.",
    features: [
      "Assistente virtual para alunos",
      "Automação de matrículas",
      "FAQ inteligente sobre cursos",
      "Lembretes de prazos e atividades",
      "Integração com LMS",
      "Suporte multilíngue"
    ],
    stats: [
      { value: "80%", label: "Dúvidas resolvidas" },
      { value: "50%", label: "Menos trabalho manual" },
      { value: "95%", label: "Satisfação" }
    ],
    useCases: [
      "Tirar dúvidas sobre grade curricular",
      "Processo de matrícula guiado",
      "Suporte para plataforma EAD"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "servicos-financeiros",
    icon: Landmark,
    title: "Serviços Financeiros",
    subtitle: "Comunicações seguras e conformidade garantida",
    description: "Atenda clientes de bancos, fintechs e seguradoras com segurança enterprise, conformidade regulatória e experiência personalizada.",
    features: [
      "Criptografia end-to-end",
      "Conformidade LGPD e BACEN",
      "Autenticação biométrica",
      "Detecção de fraudes",
      "Integração com core banking",
      "Auditoria completa de conversas"
    ],
    stats: [
      { value: "99.9%", label: "Segurança" },
      { value: "40%", label: "Menos chamados" },
      { value: "3s", label: "Tempo resposta" }
    ],
    useCases: [
      "Consulta de saldo e extrato",
      "Segunda via de boletos",
      "Negociação de dívidas"
    ],
    gradient: "from-purple-500 to-violet-500"
  },
  {
    id: "saude",
    icon: HeartPulse,
    title: "Saúde",
    subtitle: "Engajamento de pacientes com segurança e empatia",
    description: "Melhore a experiência do paciente com agendamento inteligente, lembretes de consultas, triagem inicial e suporte humanizado.",
    features: [
      "Agendamento de consultas 24/7",
      "Lembretes automáticos",
      "Triagem inicial com IA",
      "Conformidade HIPAA",
      "Integração com prontuário eletrônico",
      "Teleconsulta integrada"
    ],
    stats: [
      { value: "45%", label: "Menos no-shows" },
      { value: "60%", label: "Automação" },
      { value: "4.9", label: "Avaliação" }
    ],
    useCases: [
      "Agendamento e reagendamento de consultas",
      "Envio de resultados de exames",
      "Orientações pré e pós procedimentos"
    ],
    gradient: "from-pink-500 to-rose-500"
  }
];

export default function SegmentosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Soluções para{" "}
              <span className="text-gradient">cada segmento</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Plataforma customizada para as necessidades específicas do seu setor,
              com integrações e fluxos prontos para usar.
            </p>

            {/* Navigation Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {segmentosSections.map((section) => (
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

      {/* Segmentos Sections */}
      {segmentosSections.map((section, index) => (
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
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
                    <section.icon className="w-6 h-6 text-white" />
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
                  Ver solução para {section.title}
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

                    {/* Use Cases */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-foreground mb-3">Casos de uso:</p>
                      {section.useCases.map((useCase, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                          <MessageSquare className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{useCase}</span>
                        </div>
                      ))}
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
              Não encontrou seu segmento?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa plataforma é flexível e pode ser adaptada para qualquer setor.
              Fale com nossos especialistas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Falar com Especialista
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Todos os Recursos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
