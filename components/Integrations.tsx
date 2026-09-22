"use client";

import Image from "next/image";
import {
  Activity,
  ArrowRight,
  CalendarCheck,
  IdCard,
  MapPin,
  MessageCircle,
  PhoneCall,
  Plug,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact";

// ERPs de provedor conectados de verdade — as ações abaixo são as que a IA
// executa durante a própria conversa, não apenas consulta.
const erps = [
  {
    slug: "ixc",
    name: "IXC Soft",
    logo: "/assets/integrations/ixc.png",
    logoWidth: 512,
    logoHeight: 512,
    logoClassName: "h-12 w-auto object-contain rounded-xl",
    chip: "none",
    actions: [
      "2ª via da fatura com link, linha digitável e PIX",
      "Faturas em aberto, com total e quantas venceram",
      "Desbloqueio de confiança",
      "Liberar redução de velocidade",
      "Verificar bloqueio e se a conexão está online",
    ],
  },
  {
    slug: "sgp",
    name: "SGP / TSMX",
    logo: "/assets/integrations/sgp.svg",
    logoWidth: 116,
    logoHeight: 32,
    logoClassName: "h-7 w-auto object-contain",
    chip: "light",
    actions: [
      "Consulta de cliente, plano e situação do contrato",
      "Faturas e PIX direto no atendimento",
      "Liberação em confiança pela regra do SGP",
      "Verificar contrato suspenso e serviço online",
    ],
  },
  {
    slug: "mk",
    name: "MK Solutions",
    logo: "/assets/integrations/mk.png",
    logoWidth: 130,
    logoHeight: 31,
    logoClassName: "h-7 w-auto object-contain",
    chip: "light",
    actions: [
      "Consulta de cliente, situação e contato",
      "Verificar bloqueio da conexão e o motivo",
      "Desbloquear conexão em confiança",
      "Retirar a redução de velocidade por atraso",
    ],
  },
  {
    slug: "hubsoft",
    name: "Hubsoft",
    logo: "/assets/integrations/hubsoft.png",
    logoWidth: 108,
    logoHeight: 24,
    logoClassName: "h-7 w-auto object-contain",
    chip: "dark",
    actions: [
      "Consulta de cliente, plano, endereço e conexão",
      "Faturas e PIX no meio da conversa",
      "Desbloqueio de confiança por 1 dia",
      "Verificar serviço suspenso e conexão online",
    ],
  },
] as const;

const others = [
  {
    icon: Activity,
    name: "Zabbix",
    desc: "A IA checa o sinal e o status da ONU antes de abrir chamado — resolve o que era só fibra suja e poupa visita técnica.",
  },
  {
    icon: PhoneCall,
    name: "Ligue Talk",
    desc: "O cliente aperta 2 na ligação e o atendimento continua no WhatsApp, sem ficar preso na fila da telefonia.",
  },
  {
    icon: Target,
    name: "Rastreamento de anúncios",
    desc: "Atribuição e conversões das campanhas Click-to-WhatsApp da Meta: você passa a saber qual anúncio virou cliente.",
  },
  {
    icon: CalendarCheck,
    name: "Google Agenda",
    desc: "A IA consulta a disponibilidade e marca o compromisso durante o atendimento, com convite por e-mail.",
  },
  {
    icon: IdCard,
    name: "Consulta de CPF",
    desc: "Preenche o cadastro do contato sem precisar de integração com ERP nenhum.",
  },
  {
    icon: MapPin,
    name: "Consulta de CEP",
    desc: "Endereço, bairro, cidade e UF na hora — útil para cobertura e para agendar instalação.",
  },
];

const chipClass: Record<string, string> = {
  dark: "rounded-lg bg-[#0d1117] px-3 py-2",
  light: "rounded-lg bg-white px-3 py-2",
  none: "",
};

const Integrations = () => {
  return (
    <section id="integracoes" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Integrações
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            A IA não só responde.{" "}
            <span className="text-gradient">Ela resolve no seu ERP.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A diferença entre &ldquo;vou verificar e te retorno&rdquo; e o problema
            resolvido na mesma mensagem. O HubBot consulta e executa direto no
            sistema que o seu provedor já usa — sem trocar nada.
          </p>
        </div>

        {/* ERPs com ações reais */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-16">
          {erps.map((item) => (
            <div
              key={item.slug}
              className="group relative rounded-2xl p-6 glass hover:bg-card/70 transition-all duration-300 flex flex-col"
            >
              <div
                className={`inline-flex items-center h-14 mb-5 self-start ${chipClass[item.chip]}`}
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  className={item.logoClassName}
                />
              </div>

              <ul className="space-y-2">
                {item.actions.map((action) => (
                  <li key={action} className="flex items-start gap-2.5">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gradient-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {action}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-primary opacity-20" />
              </div>
            </div>
          ))}
        </div>

        {/* Screenshot do catálogo */}
        <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden max-w-6xl mx-auto mb-16">
          <Image
            src="/assets/app-integracoes-erp.png"
            alt="Catálogo de integrações do HubBot com IXC, SGP, Hubsoft, MK Solutions, Zabbix, Ligue Talk e Google Agenda"
            width={1408}
            height={708}
            sizes="(max-width: 1024px) 100vw, 1100px"
            quality={90}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        </div>

        {/* Outras integrações */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {others.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl p-6 glass border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Usa outro ERP? */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary shadow-glow mb-5">
              <Plug className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Usa outro ERP?{" "}
              <span className="text-gradient">A gente integra.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Se o sistema do seu provedor não está na lista, desenvolvemos a
              integração. Seu ERP não é motivo para ficar de fora — nos conte
              qual você usa e avaliamos o que dá para automatizar nele.
            </p>
            <Button variant="hero" size="lg" className="group" asChild>
              <a
                href={whatsappUrl(
                  "Olá! Uso outro ERP e quero saber se o HubBot integra com ele."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar sobre o meu ERP
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
