"use client";

import { Wifi, Zap, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  "\"Qual o preço da internet de 300 mega?\"",
  "\"Vocês atendem no bairro Jardim das Flores?\"",
  "\"Quero trocar meu plano para um mais rápido\"",
  "\"Minha internet caiu, preciso de suporte\"",
  "\"Quero saber sobre combo TV + Internet\"",
];

const AIAgents = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Wifi className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">IA para Telecom</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sua IA já sabe vender{" "}
              <span className="text-gradient">banda larga</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              O HubBot não é um chatbot genérico. É uma IA treinada especificamente para 
              provedores de internet, revendas de telecom e empresas de TV por assinatura.
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-sm font-medium text-foreground mb-4">Ela responde perguntas como:</p>
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-foreground text-sm">{useCase}</p>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg" className="group">
              Testar IA no meu WhatsApp
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              <img 
                src={'/assets/ai-builder-mockup.png'} 
                alt="HubBot - Construtor de IA para provedores"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl glass">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <p className="font-heading text-3xl font-bold text-gradient">8s</p>
            <p className="text-sm text-muted-foreground mt-1">Tempo de resposta</p>
          </div>
          <div className="text-center p-6 rounded-2xl glass">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <p className="font-heading text-3xl font-bold text-gradient">94%</p>
            <p className="text-sm text-muted-foreground mt-1">Leads qualificados</p>
          </div>
          <div className="text-center p-6 rounded-2xl glass">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <p className="font-heading text-3xl font-bold text-gradient">3x</p>
            <p className="text-sm text-muted-foreground mt-1">Mais conversões</p>
          </div>
          <div className="text-center p-6 rounded-2xl glass">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Wifi className="w-6 h-6 text-primary" />
            </div>
            <p className="font-heading text-3xl font-bold text-gradient">24/7</p>
            <p className="text-sm text-muted-foreground mt-1">Disponibilidade</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
