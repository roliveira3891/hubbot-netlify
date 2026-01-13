"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Wifi, Phone, Tv, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <Wifi className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Feito para Provedores e Revendas de Telecom
            </span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Chega de perder cliente</span>
            <br />
            <span className="text-foreground">por demora no WhatsApp.</span>
            <br />
            <span className="text-gradient">IA que vende 24h por você.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Seu cliente quer <strong className="text-foreground">banda larga, telefonia ou TV</strong> agora — não amanhã. 
            Com HubBot, cada mensagem é respondida em segundos, leads são qualificados automaticamente 
            e seu time só entra quando é hora de fechar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Quero vender mais planos agora
            </Button>
            {/* <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Ver demonstração
            </Button> */}
          </div>

          {/* Telecom Icons */}
          <div className="flex items-center justify-center gap-8 mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Wifi className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Banda Larga</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Telefonia</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Tv className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">TV por Assinatura</span>
            </div>
          </div>

          {/* Hero Product Image */}
          <div className="relative mt-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            
            <div className="relative mx-auto max-w-5xl">
              {/* Main Product Screenshot */}
              <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                <img 
                  src={'/assets/dashboard-inbox-mockup.jpg'} 
                  alt="HubBot - Gestão de atendimento para provedores de internet"
                  className="w-full h-auto"
                />
                
                {/* Overlay Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-4 lg:-left-8 top-1/4 glass rounded-xl p-4 animate-float hidden md:block shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Leads qualificados hoje</p>
                    <p className="text-lg font-bold text-foreground">127</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 lg:-right-8 top-1/3 glass rounded-xl p-4 animate-float hidden md:block shadow-xl" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tempo médio resposta</p>
                    <p className="text-lg font-bold text-foreground">8 seg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
