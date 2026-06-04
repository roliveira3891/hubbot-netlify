import {
  Layers,
  EyeOff,
  UserX,
  Timer,
  ArrowRight,
  Inbox,
  Bot,
  Users,
  BarChart3,
  MessageSquareOff,
  TrendingDown,
  BellOff,
  GitFork,
} from "lucide-react";

const painPoints = [
  {
    icon: Layers,
    title: "Ferramentas que não conversam entre si",
    text: "WhatsApp pessoal, grupos de vendedores, CRM separado, planilhas no Drive. Cada ferramenta cria um silo — ninguém tem visão completa do cliente.",
  },
  {
    icon: EyeOff,
    title: "Zero visibilidade de funil",
    text: "Quantos leads abertos agora? Qual é o tempo médio de resposta? Taxa de conversão real por canal? Sem plataforma, essas perguntas ficam sem resposta.",
  },
  {
    icon: UserX,
    title: "Crescimento que depende de headcount",
    text: "Mais volume de atendimento significa contratar mais. Sem automação, não há ganho de eficiência — só custo operacional crescendo junto com a receita.",
  },
  {
    icon: Timer,
    title: "Atendimento sem padrão nem SLA",
    text: "Cada atendente responde do jeito que acha certo, quando tem tempo. Sem monitoramento, sem melhora contínua, sem base para cobrar resultado.",
  },
  {
    icon: MessageSquareOff,
    title: "Leads que somem sem follow-up",
    text: "O cliente perguntou, o vendedor não respondeu a tempo, o cliente foi embora. Sem automação de follow-up, cada lead esquecido é receita que não entrou.",
  },
  {
    icon: BellOff,
    title: "Suporte que não dorme, equipe que sim",
    text: "Chamados chegam às 22h, aos domingos, em feriados. Sem IA, ou você paga plantão ou o cliente fica sem resposta — e vai para o concorrente.",
  },
  {
    icon: TrendingDown,
    title: "Churn silencioso que ninguém monitora",
    text: "Clientes insatisfeitos saem sem aviso. Sem NPS, sem pesquisa pós-atendimento, você só descobre quando o cancelamento já chegou.",
  },
  {
    icon: GitFork,
    title: "Histórico do cliente que fica no celular do vendedor",
    text: "Quando o funcionário sai, o histórico vai junto. Sem plataforma centralizada, cada atendente carrega o relacionamento consigo — e o cliente volta à estaca zero.",
  },
];

const howItWorks = [
  {
    step: "01",
    icon: Inbox,
    title: "Todos os canais, uma inbox",
    text: "WhatsApp, Telegram, Instagram, chat web e voz chegam em uma única fila com histórico completo de cada cliente.",
  },
  {
    step: "02",
    icon: Bot,
    title: "IA processa o volume",
    text: "Agentes de IA atendem, classificam e resolvem automaticamente. Escalando para humano apenas quando necessário.",
  },
  {
    step: "03",
    icon: Users,
    title: "Equipe organizada e produtiva",
    text: "Cada atendente foca nas conversas que realmente precisam de atenção. Nada cai no limbo, nenhum lead esquecido.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Visibilidade e decisão em tempo real",
    text: "Funil de conversão, SLA por canal, performance por agente — tudo visível no dashboard sem extrações manuais.",
  },
];

const WhyHubBot = () => {
  return (
    <section id="problema" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Problema */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              O Problema
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Por que o atendimento de provedores
              <br />
              ainda não{" "}
              <span className="text-gradient">escala com eficiência</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              A maioria dos provedores cresce o atendimento da mesma forma que
              crescia há 10 anos — contratando mais pessoas, gerenciando mais
              grupos. O resultado é previsível: custo alto, qualidade
              inconsistente e dados inexistentes.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-3 p-5 rounded-xl glass border border-border text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      {point.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solução */}
          <div id="solucao" className="glass rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                A Solução
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4">
                HubBot: o sistema operacional de atendimento
                <br />
                <span className="text-gradient">para provedores de internet</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Uma plataforma única que conecta todos os seus canais, automatiza
                com IA e entrega a visibilidade que você nunca teve sobre o seu
                atendimento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {howItWorks.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-xl bg-primary/5 border border-primary/20"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-primary font-bold">
                        {item.step}
                      </span>
                      <p className="font-semibold text-foreground">{item.title}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span>
                Tudo isso{" "}
                <strong className="text-foreground">
                  24h por dia, 7 dias por semana
                </strong>{" "}
                — feriados incluídos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHubBot;
