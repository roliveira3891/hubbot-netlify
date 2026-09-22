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
  PhoneOff,
} from "lucide-react";

const painPoints = [
  {
    icon: BellOff,
    title: "O cliente cai às 22h e ninguém responde",
    text: "Fim de semana, feriado, madrugada. Ou você paga plantão, ou o cliente fica olhando para a mensagem sem resposta — e abre reclamação na Anatel.",
  },
  {
    icon: Timer,
    title: "Fila que só cresce com o repetitivo",
    text: "2ª via, dúvida de vencimento, internet bloqueada, 'está lento aqui'. É a maior parte do volume e é sempre a mesma coisa — consumindo o dia do seu time.",
  },
  {
    icon: UserX,
    title: "Crescer significa contratar mais gente",
    text: "Mais assinantes, mais atendentes. Sem automação não existe ganho de escala: o custo de atendimento sobe na mesma proporção da receita.",
  },
  {
    icon: Layers,
    title: "WhatsApp no celular do vendedor",
    text: "O histórico do cliente mora no aparelho de quem atendeu. Quando a pessoa sai, o relacionamento vai junto e o cliente volta à estaca zero.",
  },
  {
    icon: MessageSquareOff,
    title: "Lead que perguntou e nunca foi respondido",
    text: "O anúncio rodou, o cliente chamou, ninguém viu a tempo. Sem regra de follow-up, cada lead esquecido é dinheiro de mídia jogado fora.",
  },
  {
    icon: PhoneOff,
    title: "Visita técnica que não precisava existir",
    text: "Chamado aberto sem ninguém checar o sinal da ONU antes. Técnico na rua, custo de deslocamento — e o problema era fibra suja.",
  },
  {
    icon: EyeOff,
    title: "Você não sabe o tamanho do próprio SAC",
    text: "Quantos atendimentos hoje? Quanto tempo o cliente espera? Qual atendente resolve mais? Sem dado, não dá para cobrar nem para melhorar.",
  },
  {
    icon: TrendingDown,
    title: "Churn que aparece só no cancelamento",
    text: "O cliente já estava insatisfeito há meses. Sem NPS e sem leitura do que as conversas dizem, você descobre quando não dá mais para reverter.",
  },
];

const useCases = [
  "2ª via com PIX",
  "Faturas em aberto",
  "Desbloqueio de confiança",
  "Liberar redução de velocidade",
  "Diagnóstico de internet lenta",
  "Sinal da ONU",
  "Cobertura no endereço",
  "Agendamento de visita",
];

const howItWorks = [
  {
    step: "01",
    icon: Inbox,
    title: "Tudo cai no mesmo lugar",
    text: "WhatsApp, Instagram, Telegram, Facebook e chat do site entram numa fila só, com o histórico completo do cliente em qualquer canal.",
  },
  {
    step: "02",
    icon: Bot,
    title: "A IA resolve o repetitivo de verdade",
    text: "Ela consulta o seu ERP, emite a 2ª via, libera o desbloqueio e faz o diagnóstico. Não é 'vou verificar' — é resolvido na conversa.",
  },
  {
    step: "03",
    icon: Users,
    title: "A equipe pega só o que importa",
    text: "O que exige humano chega com o contexto inteiro e vai para o time certo, pela regra que você desenhou no workflow.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Você enxerga a operação",
    text: "Tempo de espera, tempo de atendimento, quanto a IA encerrou sozinha, NPS por atendente e o que os clientes mais procuram.",
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
              O seu atendimento não está caro
              <br />
              porque tem muita gente.{" "}
              <span className="text-gradient">
                Está caro porque faz tudo na mão.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              A maior parte do que chega no seu WhatsApp é consulta de fatura,
              desbloqueio e &ldquo;minha internet está lenta&rdquo;. Enquanto um
              humano precisar abrir o ERP para cada uma delas, o custo por
              assinatura só sobe.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {painPoints.map((point) => (
                <div
                  key={point.title}
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
                Não é mais um chatbot.
                <br />
                <span className="text-gradient">
                  É IA com acesso ao seu ERP.
                </span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ferramenta genérica precisa ser adaptada ao seu negócio. O HubBot
                já nasce sabendo como funciona uma operação de provedor — e
                resolve sozinho, do começo ao fim:
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-3xl mx-auto">
                {useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="text-sm text-foreground bg-primary/5 border border-primary/20 rounded-full px-3 py-1"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
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
                      <p className="font-semibold text-foreground">
                        {item.title}
                      </p>
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
