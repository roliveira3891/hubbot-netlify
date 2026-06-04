"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wifi, MessageCircle, ArrowRight } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";

const CTA = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-glow" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 shadow-glow">
            <Wifi className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Quantos planos de internet{" "}
            <span className="text-gradient">você perdeu hoje</span>
            <br />
            por demora no WhatsApp?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Comece a responder em segundos, qualificar leads automaticamente e vender mais 
            — sem contratar mais vendedores.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => setIsContactDialogOpen(true)}
            >
              Quero vender mais planos agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => setIsContactDialogOpen(true)}
            >
              <MessageCircle className="w-5 h-5" />
              Testar IA no meu WhatsApp
            </Button>
          </div>

          {/* Trust badges */}
          <p className="text-sm text-muted-foreground">
            ✓ Setup em 24h &nbsp;&nbsp; ✓ Sem fidelidade &nbsp;&nbsp; ✓ Suporte dedicado para telecom
          </p>
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
