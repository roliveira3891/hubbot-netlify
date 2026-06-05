"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone, Wifi, Tv, Send } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { HeroSlider } from "@/components/HeroSlider";
import { whatsappUrl } from "@/lib/contact";
import Link from "next/link";

const channels = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Send, label: "Telegram" },
  { icon: Phone, label: "Voz (IA)" },
  { icon: Wifi, label: "Chat Web" },
  { icon: Tv, label: "Instagram" },
];

const Hero = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              IA especializada para provedores de internet e telecom
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">IA especializada</span>
            <br />
            <span className="text-foreground">para provedores de internet</span>
            <br />
            <span className="text-gradient">e telecom.</span>
          </h1>

          {/* Sub */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <strong className="text-foreground">Agentes de IA</strong> treinados
            para a realidade do telecom atendem, vendem e dão suporte 24h por dia
            — unificando WhatsApp, Instagram, Telegram, chat e voz em uma única
            plataforma. A IA resolve o repetitivo sozinha e passa para sua equipe
            só o que precisa de atenção humana.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="https://app.hubbot.io" target="_blank" rel="noopener noreferrer">Já tenho conta</Link>
            </Button>
          </div>

          {/* Trust line */}
          <p
            className="text-sm text-muted-foreground mb-10 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            ✓ Atendimento 24/7 com IA &nbsp;·&nbsp; ✓ Setup em 24h
            &nbsp;·&nbsp; ✓ Sem fidelidade
          </p>

          {/* Channels row */}
          <div
            className="flex items-center justify-center flex-wrap gap-6 mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {channels.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* Hero Product Slider */}
          <div
            className="relative mt-8 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="relative mx-auto max-w-5xl">
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>

      <ContactFormDialog
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />
    </section>
  );
};

export default Hero;
