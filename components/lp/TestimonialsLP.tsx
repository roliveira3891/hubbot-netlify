"use client";

import { Wifi, TrendingUp, Clock } from "lucide-react";

const testimonials = [
  {
    quote: "Antes perdíamos 40% dos leads por demora. Com o HubBot, respondemos em 8 segundos — nossas vendas triplicaram em 3 meses.",
    author: "Ricardo Mendes",
    role: "Diretor Comercial, NetVia Telecom",
    image: '/assets/testimonial-ricardo.jpg',
    metric: { icon: TrendingUp, value: "+200%", label: "vendas" },
  },
  {
    quote: "O vendedor de IA qualifica sozinho. Meu time só entra quando o cliente já quer assinar. Produtividade foi pro teto.",
    author: "Patrícia Santos",
    role: "CEO, Conecta Fibra",
    image: '/assets/testimonial-patricia.jpg',
    metric: { icon: Clock, value: "-80%", label: "tempo" },
  },
  {
    quote: "Feriado, final de semana, madrugada — o HubBot não para. É como ter um vendedor que nunca dorme e nunca reclama.",
    author: "Fernando Costa",
    role: "Sócio, SpeedNet Revendas",
    image: '/assets/testimonial-fernando.jpg',
    metric: { icon: Wifi, value: "24/7", label: "ativo" },
  },
];

const Testimonials = () => {
  return (
    <section id="resultados" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Resultados Reais
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Provedores que{" "}
            <span className="text-gradient">pararam de perder vendas</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja como empresas de telecom estão vendendo mais com HubBot.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="rounded-2xl p-8 glass hover:bg-card/70 transition-all duration-300"
            >
              {/* Metric Badge */}
              <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-primary/10 w-fit">
                <testimonial.metric.icon className="w-5 h-5 text-primary" />
                <span className="font-bold text-foreground">{testimonial.metric.value}</span>
                <span className="text-sm text-muted-foreground">{testimonial.metric.label}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
