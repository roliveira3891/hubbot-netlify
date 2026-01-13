import { Clock, Brain, MessageSquareOff, Moon, MessageCircle, LayoutList, UserCheck, Zap, Target, FileX, TrendingUp, Bot, Wifi, Phone, Users } from "lucide-react";

const painPoints = [
  { icon: Clock, text: "Lead pergunta preço da internet e resposta só vem 3h depois" },
  { icon: MessageSquareOff, text: "Vendedor esquece de fazer follow-up e cliente fecha com concorrência" },
  { icon: Moon, text: "Mensagem às 22h? Só será respondida amanhã" },
  { icon: Brain, text: "Planilhas e grupos de WhatsApp viram uma bagunça" },
];

const solutions = [
  { icon: MessageCircle, text: "Responde em segundos — mesmo de madrugada" },
  { icon: Brain, text: "Pergunta endereço, velocidade desejada e já qualifica o lead" },
  { icon: LayoutList, text: "Organiza cada conversa por etapa: novo, qualificado, negociando" },
  { icon: UserCheck, text: "Vendedor recebe só quem está pronto para fechar plano" },
];

const benefits = [
  { icon: Zap, text: "Responder leads de internet em 8 segundos" },
  { icon: Target, text: "Saber exatamente quantos leads estão em cada etapa" },
  { icon: TrendingUp, text: "Aumentar vendas sem contratar mais vendedores" },
  { icon: FileX, text: "Acabar com planilhas e improviso" },
];

const WhyHubBot = () => {
  return (
    <section id="problema" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Pain Points */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
              <Wifi className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">A realidade das revendas</span>
            </div>
            
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Você investe em tráfego, gera leads…
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Mas quantos planos de internet você <span className="text-destructive font-semibold">perdeu esta semana</span> por demora no WhatsApp?
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl glass border border-destructive/20">
                  <point.icon className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-foreground text-left">{point.text}</p>
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold text-foreground">
              👉 No Brasil, quem demora no WhatsApp <span className="text-primary">perde o cliente para o vizinho.</span>
            </p>
          </div>

          {/* Solution */}
          <div id="solucao" className="glass rounded-3xl p-8 md:p-12 mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Phone className="w-6 h-6 text-primary" />
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              HubBot: o <span className="text-gradient">vendedor de IA</span> que nunca dorme
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Enquanto sua equipe descansa, o HubBot atende, qualifica e organiza cada lead de banda larga, telefonia e TV.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {solutions.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-muted-foreground mt-6">
              Tudo isso <span className="text-foreground font-semibold">24h por dia, 7 dias por semana</span> — feriados incluídos.
            </p>
          </div>

          {/* Benefits */}
          <div className="text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Com HubBot, seu provedor passa a:
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center gap-3 p-6 rounded-xl glass">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-foreground text-sm text-center">{benefit.text}</p>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/20">
              <Bot className="w-5 h-5 text-primary" />
              <p className="text-foreground">IA treinada para vender planos de internet — não respostas genéricas.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyHubBot;
