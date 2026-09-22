"use client";

import Image from "next/image";
import {
  GitBranch,
  Clock,
  MessageSquare,
  Star,
  Users,
  Megaphone,
  Zap,
  CheckCircle2,
} from "lucide-react";

// Modelos que já vêm prontos no app (galeria de Modelos de workflow).
const templates = [
  {
    icon: Zap,
    name: "Atendimento completo IXC",
    desc: "Menu com 10 opções que resolve 2ª via com PIX, faturas em aberto, desbloqueio, redução de velocidade e suporte — consultando o IXC de verdade.",
    tag: "Provedores",
  },
  {
    icon: MessageSquare,
    name: "Atendimento com IA",
    desc: "Toda conversa nova cai no Roteador, que lê a intenção e entrega para o especialista certo: Financeiro, Suporte, Vendas ou Retenção.",
    tag: "Agentes de IA",
  },
  {
    icon: Clock,
    name: "Encerrar após 3h de inatividade",
    desc: "Avisa e encerra sozinho quando o cliente some no meio da conversa. Sua fila para de inflar com atendimento fantasma.",
    tag: "Processos",
  },
  {
    icon: Star,
    name: "Pesquisa de satisfação (NPS)",
    desc: "Pergunta a nota de 0 a 10 ao encerrar e registra no relatório de NPS, com o atendente que conduziu o caso.",
    tag: "Satisfação",
  },
  {
    icon: Users,
    name: "Equipe no horário, IA fora do horário",
    desc: "No comercial, a conversa vai para o time. Fora dele, o agente de IA assume — sem plantão e sem hora extra.",
    tag: "Distribuição",
  },
  {
    icon: Megaphone,
    name: "Anúncios Click-to-WhatsApp",
    desc: "Quem vem do anúncio entra num fluxo próprio, com qualificação e atribuição da conversão de volta para a Meta.",
    tag: "Marketing",
  },
];

const steps = [
  {
    label: "Gatilho",
    text: "Conversa aberta, campanha respondida, anúncio, inatividade ou encerramento.",
  },
  {
    label: "Condição",
    text: "Canal, horário, status da conversa, tag, campo do contato ou quem mandou a última mensagem.",
  },
  {
    label: "Passo",
    text: "Enviar mensagem, fazer pergunta, ramificar, esperar, escalar ou atribuir a um time.",
  },
  {
    label: "Serviço",
    text: "Consulta e executa no IXC, SGP, MK Solutions, Hubsoft e Zabbix dentro do fluxo.",
  },
];

const Workflows = () => {
  return (
    <section id="workflows" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <GitBranch className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Workflows</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Você desenha o atendimento.{" "}
            <span className="text-gradient">O sistema executa igual, sempre.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Quem atende cada conversa, o que a IA pode resolver sozinha, quando
            escalar e para qual time — tudo isso deixa de morar na cabeça do
            supervisor e vira um fluxo visual que roda 24h por dia.
          </p>
        </div>

        {/* Editor screenshot */}
        <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden max-w-6xl mx-auto mb-10">
          <Image
            src="/assets/app-workflow-editor.png"
            alt="Editor de workflows do HubBot: gatilho, mensagem de boas-vindas e menu de atendimento no canvas"
            width={1408}
            height={708}
            sizes="(max-width: 1024px) 100vw, 1100px"
            quality={90}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        </div>

        {/* Anatomia do workflow */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            Sem programar, sem depender de TI
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {steps.map((step) => (
              <div
                key={step.label}
                className="p-5 rounded-xl glass border border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="font-semibold text-foreground text-sm">
                    {step.label}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cada workflow é publicado ou pausado com um clique, e fica com
              histórico de execuções — dá para ver exatamente por onde cada
              conversa passou e onde parou.
            </p>
          </div>
        </div>

        {/* Templates */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Não comece do zero
            </h3>
            <p className="text-muted-foreground">
              A galeria já traz fluxos testados em operação de provedor. Você
              aplica o modelo, ajusta o texto e publica no mesmo dia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {templates.map((t) => (
              <div
                key={t.name}
                className="group relative rounded-2xl p-6 glass hover:bg-card/70 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-4">
                  {t.tag}
                </span>
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                  <t.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-heading text-base font-semibold text-foreground mb-2">
                  {t.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
            <Image
              src="/assets/app-workflow-modelos.png"
              alt="Galeria de modelos de workflow do HubBot, com categorias para agentes de IA, respostas automáticas e provedores"
              width={1408}
              height={708}
              sizes="(max-width: 1024px) 100vw, 1100px"
              quality={90}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflows;
