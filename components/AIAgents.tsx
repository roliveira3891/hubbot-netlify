"use client";

import { CheckCircle, ChevronRight, Cpu, Brain, Zap } from "lucide-react";

const agentTypes = [
  {
    name: "Agente de Suporte",
    description:
      "Resolve chamados técnicos, coleta sintomas, abre tickets e escalona para NOC quando necessário.",
    useCases: ["Quedas de sinal", "Lentidão de internet", "Dúvidas de configuração"],
  },
  {
    name: "Agente de Vendas",
    description:
      "Qualifica leads, apresenta planos, verifica cobertura e encaminha para o closer no momento certo.",
    useCases: ["Consulta de planos", "Verificação de endereço", "Upgrade de velocidade"],
  },
  {
    name: "Agente de Cobrança",
    description:
      "Envia boletos, informa vencimentos, negocia débitos e agenda reagendamento de instalação.",
    useCases: ["2ª via de fatura", "Negociação de dívida", "Suspensão por inadimplência"],
  },
  {
    name: "Agente de Recepção",
    description:
      "Triagem inteligente que entende a intenção do cliente e direciona para o agente certo desde o primeiro contato.",
    useCases: ["Direcionamento de canal", "Coleta inicial de dados", "Agendamento de visita técnica"],
  },
];

const capabilities = [
  "Treinado com os planos e coberturas do seu provedor",
  "Responde em português natural, sem parecer robô",
  "Verifica cobertura por endereço em tempo real",
  "Integra com sistemas de gestão via API (MK Solutions, etc.)",
  "Transfere para humano com contexto completo da conversa",
  "Aprende com feedbacks e melhora com o tempo",
];

const AIAgents = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Agentes de IA
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            IA especializada em telecom —
            <br />
            <span className="text-gradient">não um chatbot genérico</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada agente do HubBot é treinado com o contexto do seu provedor:
            planos, coberturas, políticas e processos. Você configura, a IA
            executa com consistência e escala.
          </p>
        </div>

        {/* Agent Types Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16 max-w-4xl mx-auto">
          {agentTypes.map((agent, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{agent.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {agent.description}
                  </p>
                </div>
              </div>
              <div className="space-y-1.5 mt-4 pl-12">
                {agent.useCases.map((uc, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities + Screenshot */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl font-semibold text-foreground">
                O que cada agente é capaz de fazer
              </h3>
            </div>
            <div className="space-y-3">
              {capabilities.map((cap, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm">{cap}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              <img
                src={"/assets/ai-builder-mockup.png"}
                alt="HubBot — Editor de agentes de IA"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { value: "< 15s", label: "Tempo médio de primeira resposta" },
            { value: "94%", label: "Resoluções sem intervenção humana" },
            { value: "4+", label: "Tipos de agente disponíveis" },
            { value: "24/7", label: "Disponibilidade garantida" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl glass">
              <p className="font-heading text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
