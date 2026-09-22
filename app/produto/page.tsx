import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Bot,
  Inbox,
  Workflow,
  BarChart3,
  Cable,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { createMetadata, createBreadcrumbSchema } from "@/lib/seo";
import { whatsappUrl } from "@/lib/contact";

export const metadata = createMetadata({
  title: "A plataforma por dentro | Produto",
  description:
    "Workflows visuais, time de agentes de IA, inbox omnicanal, campanhas de WhatsApp, relatórios e integração com IXC, SGP, MK Solutions, Hubsoft e Zabbix. Veja como o HubBot funciona por dentro.",
  keywords: [
    "plataforma de atendimento com IA",
    "workflows de atendimento",
    "agentes de IA para provedor",
    "inbox omnicanal",
    "integração IXC SGP MK Hubsoft",
    "relatórios de atendimento",
  ],
  path: "/produto",
});

const productSections = [
  {
    id: "workflows",
    icon: Workflow,
    title: "Workflows",
    subtitle: "Você desenha o atendimento, o sistema executa",
    description:
      "Um canvas de arrastar onde você define o que acontece em cada conversa: quem atende, o que a IA resolve sozinha, quando escalar e para qual time. Publica ou pausa com um clique.",
    features: [
      "Gatilhos: conversa aberta, campanha, anúncio, inatividade, encerramento",
      "Condições por canal, horário, status, tag ou campo do contato",
      "Passos de mensagem, pergunta, ramificação, espera e escalonamento",
      "Passo de serviço que consulta e executa no seu ERP",
      "Modelos prontos e testados em operação de provedor",
      "Histórico de execuções para ver por onde cada conversa passou",
    ],
    image: "/assets/app-workflow-editor.png",
    alt: "Editor de workflows do HubBot com gatilho, boas-vindas e menu de atendimento",
    gradient: "from-primary to-accent",
  },
  {
    id: "agentes-ia",
    icon: Bot,
    title: "Agentes de IA",
    subtitle: "Um time de IA, não um bot só",
    description:
      "Escolha o ramo e o HubBot monta o time completo: um roteador que lê a intenção do cliente e cinco especialistas com escopo próprio. Você revisa tudo antes de entrar no ar.",
    features: [
      "Roteador + Recepção, Financeiro, Suporte, Vendas e Retenção",
      "Instruções, tom e escopo editáveis por agente",
      "Ferramentas ligadas e desligadas por você, uma a uma",
      "Base de conhecimento própria (RAG) com os seus documentos",
      "Versionamento: publique e volte atrás quando quiser",
      "Transcrição de áudio e resposta em áudio sob demanda",
    ],
    image: "/assets/app-agentes-time.png",
    alt: "Organograma de agentes de IA do HubBot com roteador e especialistas",
    gradient: "from-accent to-primary",
  },
  {
    id: "caixa-entrada",
    icon: Inbox,
    title: "Conversas",
    subtitle: "Todos os canais numa fila só",
    description:
      "WhatsApp, Instagram, Telegram, Facebook e o chat do seu site chegam no mesmo lugar, com o histórico completo do cliente independente de por onde ele falou da última vez.",
    features: [
      "Fila única com status, atribuição e tags",
      "Histórico do contato através de todos os canais",
      "Encaminhamento para times por regra de workflow",
      "Escalonamento da IA para humano com o contexto inteiro",
      "Ligação para o cliente pelo próprio WhatsApp",
      "Campos de contato personalizados e ciclo de vida automático",
    ],
    image: "/assets/app-conversas.png",
    alt: "Inbox de conversas do HubBot com fila unificada de canais",
    gradient: "from-primary to-accent",
  },
  {
    id: "integracoes",
    icon: Cable,
    title: "Integrações",
    subtitle: "Conectado ao ERP que o seu provedor já usa",
    description:
      "A IA não só consulta: ela executa. Emite a 2ª via com PIX, libera o desbloqueio de confiança, retira a redução de velocidade e checa o sinal da ONU — tudo dentro da conversa.",
    features: [
      "IXC: faturas, 2ª via com PIX, bloqueio, desbloqueio e redução",
      "SGP / TSMX: cliente, faturas, PIX e liberação em confiança",
      "MK Solutions: conexão, bloqueio, desbloqueio e redução",
      "Hubsoft: cliente, faturas, PIX e desbloqueio de confiança",
      "Zabbix: sinal e status da ONU antes de abrir chamado",
      "Ligue Talk, Google Agenda, consulta de CPF e de CEP",
    ],
    image: "/assets/app-integracoes-erp.png",
    alt: "Catálogo de integrações do HubBot com IXC, SGP, Hubsoft, MK Solutions e Zabbix",
    gradient: "from-accent to-primary",
  },
  {
    id: "campanhas",
    icon: Megaphone,
    title: "Campanhas",
    subtitle: "Falar com a base sem virar spam",
    description:
      "Disparo por template aprovado da Meta, com controle de entrega e saída automática de quem pede para não receber mais. E a resposta cai na mesma fila de atendimento.",
    features: [
      "Templates de WhatsApp aprovados e mensagens interativas",
      "WhatsApp Flows e QR Code / link de entrada",
      "Opt-out automático detectado pela IA",
      "Enviadas, entregues, lidas e respondidas por campanha",
      "Atribuição de conversões de anúncios Click-to-WhatsApp",
      "Entrada de leads e réguas de relacionamento",
    ],
    image: "/assets/app-campanhas.png",
    alt: "Gestão de campanhas de WhatsApp no HubBot",
    gradient: "from-primary to-accent",
  },
  {
    id: "relatorios",
    icon: BarChart3,
    title: "Relatórios",
    subtitle: "A operação que você não enxergava",
    description:
      "Quanto a IA encerrou sozinha, quanto foi escalado, quanto tempo o cliente espera e o que a sua base mais procura — sem exportar planilha nem pedir relatório para ninguém.",
    features: [
      "Qualidade: NPS, tempo médio de atendimento e de espera",
      "Produtividade: encerrados pela IA, por humanos e escalonados",
      "Insights: a IA classifica interesse, motivo e resultado das conversas",
      "NPS com a nota amarrada a quem conduziu o atendimento",
      "Desempenho por atendente e por agente de IA",
      "Resultado das campanhas de WhatsApp e dos anúncios",
    ],
    image: "/assets/app-dashboard-produtividade.png",
    alt: "Relatório de produtividade do atendimento no HubBot",
    gradient: "from-accent to-primary",
  },
];

export default function ProdutoPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Produto", path: "/produto" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              A plataforma{" "}
              <span className="text-gradient">por dentro</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Workflows visuais, um time de agentes de IA e conexão direta com o
              ERP do seu provedor. Estas são as telas reais que a sua equipe usa
              todo dia.
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
          className={`py-20 relative scroll-mt-20 ${index % 2 === 0 ? "bg-muted/20" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-glow`}
                  >
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
                <div className="grid sm:grid-cols-2 gap-3">
                  {section.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 blur-3xl rounded-full`}
                />
                <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    width={1408}
                    height={708}
                    sizes="(max-width: 1024px) 100vw, 600px"
                    quality={90}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
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
              Quer ver isso rodando na sua operação?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Mostramos o que a IA já resolveria sozinha no seu ERP — e o que
              sobraria para o time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com um especialista
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://app.hubbot.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar a plataforma
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
