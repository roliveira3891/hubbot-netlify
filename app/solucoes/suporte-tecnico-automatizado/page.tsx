import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  CloudOff,
  MessageSquare,
  Moon,
  Stethoscope,
  Truck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  createMetadata,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo";
import { whatsappUrl } from "@/lib/contact";

export const metadata = createMetadata({
  title: "Suporte Técnico Automatizado com IA para Provedores | N1 24/7",
  description:
    "Automatize o suporte técnico do seu provedor com IA: diagnóstico guiado, avisos de massiva integrados ao monitoramento, abertura de chamados e transbordo com contexto. Suporte N1 resolvido 24/7.",
  keywords: [
    "suporte técnico automatizado",
    "automatizar suporte provedor de internet",
    "suporte N1 com IA",
    "diagnóstico de conexão automático",
    "aviso de massiva automático",
    "integração Zabbix atendimento",
    "reduzir chamados de suporte",
    "suporte 24 horas provedor",
  ],
  path: "/solucoes/suporte-tecnico-automatizado",
});

const dores = [
  {
    icon: CloudOff,
    title: "Massiva = telefone em chamas",
    description:
      "Uma falha regional gera centenas de chamados idênticos em minutos. A equipe vira mural de recados em vez de resolver a causa.",
  },
  {
    icon: Stethoscope,
    title: "Triagem manual do óbvio",
    description:
      "\"Já reiniciou o roteador?\" — sua equipe repete o mesmo roteiro dezenas de vezes por dia para problemas que se resolvem em dois passos.",
  },
  {
    icon: Truck,
    title: "Visita técnica desnecessária",
    description:
      "Sem diagnóstico prévio, o técnico vai até o cliente para descobrir que era um cabo solto. Cada deslocamento evitável é custo puro.",
  },
  {
    icon: Moon,
    title: "Madrugada e fim de semana no escuro",
    description:
      "Conexão não escolhe hora para cair. Sem suporte fora do expediente, o cliente acumula frustração até o horário comercial.",
  },
];

const recursos = [
  "Diagnóstico guiado de conexão pela conversa",
  "Aviso proativo de massiva integrado ao monitoramento",
  "Verificação de status e sinal em tempo real",
  "Abertura e acompanhamento de chamados",
  "Agendamento de visita técnica só quando preciso",
  "Transbordo para o N2 com todo o histórico",
];

const comoFunciona = [
  {
    icon: MessageSquare,
    title: "Cliente relata o problema",
    description:
      "\"Minha internet caiu\" — a IA atende na hora, identifica o cliente e já consulta o status da conexão e da região.",
  },
  {
    icon: Activity,
    title: "A IA diagnostica primeiro",
    description:
      "Se há massiva, ela informa a previsão de retorno. Se é pontual, conduz o passo a passo de verificação com o cliente.",
  },
  {
    icon: Wrench,
    title: "Resolve ou encaminha certo",
    description:
      "A maioria dos casos termina na conversa. Quando precisa de técnico, a IA abre o chamado com o diagnóstico pronto.",
  },
  {
    icon: ClipboardList,
    title: "Equipe recebe contexto, não ruído",
    description:
      "O N2 atende menos chamados e melhores: cada caso chega com histórico, testes já feitos e o problema delimitado.",
  },
];

const stats = [
  { value: "24/7", label: "Suporte N1 sem expediente" },
  { value: "3s", label: "Primeira resposta na queda" },
  { value: "70%", label: "Menos custo de atendimento" },
];

const faqItems = [
  {
    question: "O que o suporte técnico automatizado resolve sozinho?",
    answer:
      "A IA do HubBot resolve o nível 1 do suporte: diagnóstico guiado de conexão, verificação de status e sinal, avisos de massiva e manutenção, reinicialização assistida de equipamentos e abertura de chamados. Os casos que exigem um técnico chegam à equipe já diagnosticados.",
  },
  {
    question: "Como funciona o aviso automático de massiva?",
    answer:
      "Integrada ao sistema de monitoramento do provedor (como o Zabbix), a IA detecta a falha regional e passa a informar automaticamente os clientes da área afetada sobre o problema e a previsão de retorno — segurando a enxurrada de chamados enquanto a equipe técnica trabalha na correção.",
  },
  {
    question: "A IA realmente consegue diagnosticar problema de conexão?",
    answer:
      "Sim, para a grande maioria dos casos de nível 1. Ela consulta o status da conexão no sistema do provedor, verifica se há massiva na região e conduz o cliente em testes guiados (energia, cabos, reinicialização). Só encaminha para visita técnica quando o diagnóstico indica necessidade real.",
  },
  {
    question: "Isso reduz visitas técnicas desnecessárias?",
    answer:
      "Sim. Com o diagnóstico feito na conversa, problemas simples — cabo solto, equipamento desligado, configuração — são resolvidos sem deslocamento. Quando a visita é necessária, o técnico já sai sabendo o que vai encontrar.",
  },
  {
    question: "E quando o cliente precisa falar com um técnico humano?",
    answer:
      "A transferência é imediata e com contexto: o atendente recebe o histórico completo, os testes já realizados e o diagnóstico preliminar. O cliente não repete nada e o caso é resolvido mais rápido.",
  },
  {
    question: "O suporte automatizado funciona de madrugada e fim de semana?",
    answer:
      "Sim, 24 horas por dia, 7 dias por semana. É justamente fora do expediente que a IA mais agrega: o cliente é atendido na hora em que o problema acontece, em vez de acumular frustração até a abertura do escritório.",
  },
];

export default function SuporteTecnicoAutomatizadoPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Início", path: "/" },
    {
      name: "Suporte Técnico Automatizado",
      path: "/solucoes/suporte-tecnico-automatizado",
    },
  ]);
  const faqSchema = createFAQSchema(faqItems);

  const ctaWhatsApp = whatsappUrl(
    "Olá! Quero automatizar o suporte técnico do meu provedor com o HubBot."
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
              Suporte técnico automatizado
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Suporte N1 resolvido{" "}
              <span className="text-gradient">antes de virar fila</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A IA diagnostica a conexão, avisa massivas antes do cliente
              reclamar e abre chamado só quando precisa. Sua equipe técnica
              recebe contexto — não uma fila de &quot;minha internet caiu&quot;.
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
                src="/assets/suporte-tecnico-noc.jpg"
                alt="Analista de suporte técnico monitorando a rede do provedor no datacenter"
                width={1600}
                height={1068}
                priority
                className="w-full aspect-[21/9] object-cover saturate-[0.8] brightness-[0.92]"
              />
              {/* esfria a foto com as cores da marca */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/10 pointer-events-none" />
            </div>
            {/* badge de monitoramento */}
            <div className="absolute top-6 right-4 sm:top-10 sm:right-12 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
              <Activity className="w-4 h-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-foreground">
                Rede monitorada 24/7
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
                  Minha internet tá muito lenta hoje
                </div>
                <div className="bg-gradient-to-r from-sky-500 to-teal-400 rounded-2xl rounded-br-sm px-3 py-2 text-xs text-white w-fit max-w-[90%] ml-auto">
                  Verifiquei seu sinal e está tudo certo por aqui. Vamos
                  testar juntos? Primeiro: o roteador está com as luzes
                  verdes? 🔍
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
              Sua equipe técnica não deveria ser{" "}
              <span className="text-gradient">um call center</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A maior parte dos chamados de suporte é repetitiva e previsível
              — mas continua consumindo as horas de quem deveria estar
              cuidando da rede.
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
                Um N1 que diagnostica antes de escalar
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Integrada ao monitoramento e ao sistema do seu provedor, a IA
                resolve o suporte básico na conversa e entrega ao time técnico
                apenas o que realmente precisa de gente.
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
                  Quero aliviar meu suporte
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
                    "“Minha internet caiu, o que houve?”",
                    "“Tá lento só aqui em casa ou é geral?”",
                    "“Preciso de um técnico ou resolvo sozinho?”",
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
              Da queda ao diagnóstico{" "}
              <span className="text-gradient">em uma conversa</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              O fluxo que transforma o pico de chamados em atendimento
              ordenado — sem fila e sem retrabalho.
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
              Dúvidas comuns sobre{" "}
              <span className="text-gradient">suporte automatizado</span>
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
              Quantos chamados de hoje{" "}
              <span className="text-gradient">
                eram só &quot;reinicia o roteador&quot;?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Veja a IA diagnosticando uma conexão de verdade em uma
              demonstração rápida, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

      <Footer />
    </div>
  );
}
