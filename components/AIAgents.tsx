"use client";

import Image from "next/image";
import { CheckCircle, ChevronRight, Cpu, History, Sparkles } from "lucide-react";

// O time que o HubBot monta sozinho quando você escolhe o ramo
// "Provedor de internet / telecom" em Agentes de IA.
const agentTypes = [
  {
    emoji: "🧭",
    name: "Roteador",
    description:
      "Lê cada mensagem, entende a intenção e entrega a conversa para o especialista certo. É ele que faz o atendimento parecer um só.",
    useCases: ["Classificação de intenção", "Direcionamento automático"],
  },
  {
    emoji: "👋",
    name: "Recepção",
    description:
      "Recebe o cliente, identifica quem é pelo CPF/CNPJ e encaminha para o setor certo. Só triagem — não inventa resposta de especialista.",
    useCases: ["Identificação do cliente", "Triagem do primeiro contato"],
  },
  {
    emoji: "💳",
    name: "Financeiro",
    description:
      "Fatura, 2ª via, PIX, boleto, comprovante de pagamento, conexão bloqueada por inadimplência e pedido de prazo.",
    useCases: ["2ª via com PIX", "Desbloqueio de confiança", "Negociação de prazo"],
  },
  {
    emoji: "🛠️",
    name: "Suporte Técnico",
    description:
      "Sem conexão, lentidão, oscilação, Wi-Fi e equipamento. Faz o diagnóstico guiado antes de abrir chamado para o time.",
    useCases: ["Diagnóstico guiado", "Sinal da ONU", "Abertura de chamado"],
  },
  {
    emoji: "🎯",
    name: "Vendas",
    description:
      "Planos, preços, cobertura no endereço, upgrade de velocidade e mudança de endereço. Qualifica e passa o lead pronto.",
    useCases: ["Consulta de cobertura", "Upgrade de plano", "Qualificação"],
  },
  {
    emoji: "🔄",
    name: "Retenção",
    description:
      "Cancelamento, reativação de contrato e devolução ou retirada de equipamento. Entra antes de o cliente ir embora.",
    useCases: ["Pedido de cancelamento", "Reativação", "Retirada de equipamento"],
  },
];

const capabilities = [
  "Sobe pronto: escolha o ramo e o time de agentes nasce com prompts que já funcionam",
  "Cada agente tem as próprias instruções, escopo e ferramentas — você edita tudo",
  "Consulta o ERP na hora da conversa e executa de verdade (não só informa)",
  "Responde com base nos seus documentos e planos, não em dado genérico",
  "Atualiza ciclo de vida e tags do contato sozinho, enquanto conversa",
  "Escala para humano com o contexto inteiro, quando o cliente pede ou se frustra",
  "Transcreve o áudio do cliente e responde em áudio quando ele pedir",
];

const AIAgents = () => {
  return (
    <section id="agentes" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Agentes de IA</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Um time de IA inteiro no ar —
            <br />
            <span className="text-gradient">montado em minutos, não em meses</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Você informa o nome da empresa, escolhe &ldquo;Provedor de internet /
            telecom&rdquo; e o HubBot monta o time completo: um roteador e cinco
            especialistas, cada um com as instruções que já funcionam nesse tipo
            de operação. Nada entra no ar antes de você revisar.
          </p>
        </div>

        {/* Organograma real do app */}
        <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden max-w-6xl mx-auto mb-16">
          <Image
            src="/assets/app-agentes-time.png"
            alt="Organograma de agentes de IA do HubBot: um roteador distribuindo para Recepção, Financeiro, Suporte Técnico, Vendas e Retenção"
            width={1408}
            height={708}
            sizes="(max-width: 1024px) 100vw, 1100px"
            quality={90}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        </div>

        {/* Agent Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 max-w-6xl mx-auto">
          {agentTypes.map((agent) => (
            <div
              key={agent.name}
              className="p-6 rounded-2xl glass border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-lg">
                  <span aria-hidden="true">{agent.emoji}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{agent.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              </div>
              <div className="space-y-1.5 mt-4 pl-[52px]">
                {agent.useCases.map((uc) => (
                  <div key={uc} className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
              O que muda em relação a um chatbot
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-sm leading-relaxed">{cap}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Você controla cada ferramenta */}
        <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden max-w-6xl mx-auto mb-20">
          <Image
            src="/assets/app-agente-ferramentas.png"
            alt="Configuração de um agente de IA do HubBot, com as ferramentas e automações que ele pode usar"
            width={1408}
            height={708}
            sizes="(max-width: 1024px) 100vw, 1100px"
            quality={90}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        </div>

        {/* Versionamento */}
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-5">
              <History className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
                Mexer na IA sem medo de quebrar o atendimento
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cada conjunto de agentes é uma versão: as instruções, os
              especialistas e quem responde cada canal. Você testa uma mudança,
              publica e, se não gostar, volta para a versão anterior a qualquer
              momento — nada é apagado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              É a diferença entre ajustar o tom do seu atendimento numa
              terça-feira à tarde e ter medo de encostar no sistema.
            </p>
          </div>

          <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
            <Image
              src="/assets/app-agente-prompt.png"
              alt="Editor de instruções de um agente de IA do HubBot, com o prompt do agente Financeiro"
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

export default AIAgents;
