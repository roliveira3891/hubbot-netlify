"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { whatsappUrl } from "@/lib/contact";
import Link from "next/link";

const trustItems = [
  "Setup completo em até 24h",
  "Sem fidelidade ou multa de cancelamento",
  "Suporte dedicado para provedores",
  "Trial gratuito disponível",
];

const CTA = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-glow" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Sua operação está pronta para a
            <br />
            <span className="text-gradient">próxima geração do atendimento?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Veja como provedores estão unificando atendimento, vendas e suporte em
            uma única plataforma com IA — reduzindo custo e respondendo em
            segundos, 24h por dia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="https://app.hubbot.io" target="_blank" rel="noopener noreferrer">
                Acessar Plataforma
              </Link>
            </Button>
          </div>

          {/* Trust items */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
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

export default CTA;
