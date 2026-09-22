"use client";

import { FileText, Unlock, Gauge, Radio, CalendarCheck, Star } from "lucide-react";

// Prova concreta do que a IA executa sozinha no ERP do provedor.
// Substitui os depoimentos ilustrativos que existiam aqui — só volta a ter
// depoimento quando houver case real, com nome, empresa e consentimento.
const resolved = [
  {
    icon: FileText,
    title: "2ª via da fatura",
    text: "Identifica o cliente pelo CPF/CNPJ e devolve link, linha digitável e PIX na mesma mensagem.",
    erp: "IXC · SGP · Hubsoft",
  },
  {
    icon: Unlock,
    title: "Internet bloqueada",
    text: "Confirma o bloqueio por inadimplência e libera o desbloqueio de confiança pela regra do seu ERP.",
    erp: "IXC · SGP · MK · Hubsoft",
  },
  {
    icon: Gauge,
    title: "Velocidade reduzida",
    text: "Verifica a redução por atraso e retira a limitação sem passar por atendente.",
    erp: "IXC · MK",
  },
  {
    icon: Radio,
    title: "Internet lenta",
    text: "Checa status e sinal da ONU antes de abrir chamado — e poupa visita técnica desnecessária.",
    erp: "Zabbix",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento",
    text: "Marca retirada, instalação ou visita técnica durante a própria conversa.",
    erp: "Agenda · Google Agenda",
  },
  {
    icon: Star,
    title: "Pesquisa de satisfação",
    text: "Pergunta a nota de 0 a 10 ao encerrar e registra no relatório de NPS.",
    erp: "NPS",
  },
];

const Testimonials = () => {
  return (
    <section id="resultados" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Resultados
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            O que sai da fila do seu time{" "}
            <span className="text-gradient">já na primeira semana</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O HubBot é integrado ao ERP do seu provedor. Estas são as
            solicitações que ele resolve de ponta a ponta, sem passar por
            atendente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resolved.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl p-8 glass hover:bg-card/70 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {item.text}
              </p>
              <p className="text-xs text-primary font-medium mt-5 pt-5 border-t border-border">
                {item.erp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
