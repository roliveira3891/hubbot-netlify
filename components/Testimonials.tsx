"use client";

import { TrendingUp, Clock, Wifi, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Provedores ativos" },
  { icon: TrendingUp, value: "1M+", label: "Mensagens processadas/mês" },
  { icon: Clock, value: "< 15s", label: "Tempo médio de resposta" },
  { icon: Wifi, value: "94%", label: "Resoluções automáticas" },
];

const testimonials = [
  {
    quote:
      "Antes do HubBot, perdíamos 40% dos leads por demora no retorno. Hoje temos visibilidade completa do funil e nosso time só entra no momento certo. Em 3 meses, as vendas triplicaram.",
    author: "Ricardo Mendes",
    role: "Diretor Comercial, NetVia Telecom",
    image: "/assets/testimonial-ricardo.jpg",
    metric: { icon: TrendingUp, value: "+200%", label: "crescimento em vendas" },
  },
  {
    quote:
      "O que mais me surpreendeu foi a redução de carga da equipe. O agente de IA resolve 80% do suporte técnico sozinho. Meu time foca agora em casos realmente complexos.",
    author: "Patrícia Santos",
    role: "CEO, Conecta Fibra",
    image: "/assets/testimonial-patricia.jpg",
    metric: { icon: Clock, value: "-80%", label: "volume manual de suporte" },
  },
  {
    quote:
      "Implantamos em 24h. A IA já sabia nossos planos e coberturas desde o primeiro dia. Hoje atendemos feriado, madrugada e final de semana sem custo adicional de equipe.",
    author: "Fernando Costa",
    role: "Sócio, SpeedNet Revendas",
    image: "/assets/testimonial-fernando.jpg",
    metric: { icon: Wifi, value: "24/7", label: "atendimento sem parar" },
  },
];

const Testimonials = () => {
  return (
    <section id="resultados" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Resultados
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            O que provedores alcançam{" "}
            <span className="text-gradient">com a plataforma</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Números reais de provedores que migraram de ferramentas
            improvisadas para uma plataforma estruturada.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-5 rounded-2xl glass text-center"
            >
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-heading text-2xl font-bold text-gradient">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="rounded-2xl p-8 glass hover:bg-card/70 transition-all duration-300 flex flex-col"
            >
              {/* Metric Badge */}
              <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-primary/10 w-fit">
                <testimonial.metric.icon className="w-4 h-4 text-primary" />
                <span className="font-bold text-foreground text-sm">
                  {testimonial.metric.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {testimonial.metric.label}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-base mb-8 leading-relaxed flex-1">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
