"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const integrations = [
  {
    slug: "mk",
    name: "MK Solutions",
    logo: "/assets/integrations/mk.png",
    logoWidth: 130,
    logoHeight: 31,
    logoClassName: "h-7 w-auto object-contain",
    chip: "light",
    description:
      "Consulta faturas, emite 2ª via e verifica status de conexão do cliente em tempo real.",
  },
  {
    slug: "hubsoft",
    name: "Hubsoft",
    logo: "/assets/integrations/hubsoft.png",
    logoWidth: 108,
    logoHeight: 24,
    logoClassName: "h-7 w-auto object-contain",
    chip: "dark",
    description:
      "Gestão completa do provedor conectada ao atendimento — contratos, planos e financeiro.",
  },
  {
    slug: "ixc",
    name: "IXC Soft",
    logo: "/assets/integrations/ixc.png",
    logoWidth: 512,
    logoHeight: 512,
    logoClassName: "h-14 w-auto object-contain rounded-xl",
    chip: "none",
    description:
      "Contratos, boletos e chamados técnicos consultados direto na conversa com o cliente.",
  },
  {
    slug: "sgp",
    name: "SGP",
    logo: "/assets/integrations/sgp.svg",
    logoWidth: 116,
    logoHeight: 32,
    logoClassName: "h-7 w-auto object-contain",
    chip: "light",
    description:
      "Sistema de Gestão para Provedores integrado à IA para cobrança e suporte automatizados.",
  },
] as const;

const chipClass: Record<string, string> = {
  dark: "rounded-lg bg-[#0d1117] px-3 py-2",
  light: "rounded-lg bg-white px-3 py-2",
  none: "",
};

const Integrations = () => {
  return (
    <section id="integracoes" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Integrações
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Conectado ao ERP{" "}
            <span className="text-gradient">que o seu provedor já usa</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sem trocar de sistema. O HubBot conversa direto com o seu ERP para
            consultar faturas, contratos e status de conexão durante o
            próprio atendimento.
          </p>
        </div>

        {/* Integration Cards */}
        <Carousel opts={{ loop: true, align: "start" }} className="px-4 sm:px-0">
          <CarouselContent>
            {integrations.map((item) => (
              <CarouselItem
                key={item.slug}
                className="basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="group relative rounded-2xl p-6 glass hover:bg-card/70 transition-all duration-300 h-full">
                  <div
                    className={`inline-flex items-center h-14 mb-5 ${chipClass[item.chip]}`}
                  >
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={item.logoWidth}
                      height={item.logoHeight}
                      className={item.logoClassName}
                    />
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="absolute inset-[-1px] rounded-2xl bg-gradient-primary opacity-20" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12 h-10 w-10" />
          <CarouselNext className="hidden sm:flex -right-4 lg:-right-12 h-10 w-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default Integrations;
