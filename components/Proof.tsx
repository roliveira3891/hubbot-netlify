import {
  FileText,
  Unlock,
  Gauge,
  Radio,
  CalendarCheck,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Prova concreta: o que a IA executa de ponta a ponta, sem passar por humano.
// Cada item abaixo corresponde a uma ação real disponível na plataforma.
const resolved = [
  {
    icon: FileText,
    title: "2ª via da fatura",
    text: "Identifica o cliente pelo CPF/CNPJ, busca a fatura no ERP e devolve link, linha digitável e PIX na mesma mensagem.",
    erp: "IXC · SGP · Hubsoft",
  },
  {
    icon: Unlock,
    title: "Internet bloqueada",
    text: "Confirma o bloqueio por inadimplência, oferece o desbloqueio de confiança pela regra do seu ERP e libera na hora.",
    erp: "IXC · SGP · MK · Hubsoft",
  },
  {
    icon: Gauge,
    title: "Velocidade reduzida",
    text: "Verifica se o contrato está com redução por atraso e retira a limitação sem precisar de atendente.",
    erp: "IXC · MK",
  },
  {
    icon: Radio,
    title: "Internet lenta ou sem sinal",
    text: "Consulta o status e o sinal da ONU antes de abrir chamado. Resolve o que era só fibra suja e poupa visita técnica.",
    erp: "Zabbix",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento",
    text: "Marca retirada de equipamento, instalação ou visita técnica no grupo certo da Agenda durante a conversa.",
    erp: "Agenda · Google Agenda",
  },
  {
    icon: Star,
    title: "Pesquisa de satisfação",
    text: "Ao encerrar, pergunta a nota de 0 a 10 e registra no relatório de NPS amarrada a quem conduziu o atendimento.",
    erp: "NPS",
  },
];

const guarantees = [
  {
    title: "A IA responde pelo seu conteúdo",
    text: "Planos, cobertura, políticas e documentos que você sobe. Quando não sabe, ela passa para o humano em vez de inventar.",
  },
  {
    title: "Você controla o que ela pode fazer",
    text: "Cada ferramenta do agente é um botão que liga e desliga. Desbloqueio, agendamento, encerramento — nada roda sem você liberar.",
  },
  {
    title: "Dá para voltar atrás",
    text: "Agentes são versionados e workflows são publicados ou pausados com um clique. Mudança errada não vira crise.",
  },
];

const Proof = () => {
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
            Não é promessa de percentual. É a lista do que o HubBot resolve de
            ponta a ponta, sozinho, no seu próprio ERP — e que hoje ocupa a maior
            parte do dia da sua equipe.
          </p>
        </div>

        {/* Resolvido pela IA */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-20">
          {resolved.map((item) => (
            <div
              key={item.title}
              className="flex flex-col p-6 rounded-2xl glass border border-border"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {item.text}
              </p>
              <p className="text-xs text-primary font-medium mt-4 pt-4 border-t border-border">
                {item.erp}
              </p>
            </div>
          ))}
        </div>

        {/* Garantias / objeções */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            &ldquo;E se a IA falar besteira com o meu cliente?&rdquo;
          </h3>
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="p-6 rounded-2xl bg-primary/5 border border-primary/20"
              >
                <p className="font-semibold text-foreground mb-2">{g.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {g.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link href="#integracoes">
                Ver as integrações disponíveis
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
