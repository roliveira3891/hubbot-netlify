"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const slides = [
  {
    src: "/assets/app-conversas.png",
    w: 1910,
    h: 925,
    title: "Inbox de conversas",
    desc: "WhatsApp, Instagram, Telegram e chat web numa fila única, com status, atribuições e tags.",
  },
  {
    src: "/assets/app-agentes-ia.png",
    w: 1888,
    h: 916,
    title: "Agentes de IA",
    desc: "Um roteador que entende a intenção do cliente e direciona para o agente especializado certo.",
  },
  {
    src: "/assets/app-dashboard-campanhas.png",
    w: 1888,
    h: 916,
    title: "Dashboard de campanhas",
    desc: "Enviadas, entregues, lidas e respondidas — o desempenho das suas campanhas em tempo real.",
  },
  {
    src: "/assets/app-dashboard-produtividade.png",
    w: 1888,
    h: 916,
    title: "Produtividade do atendimento",
    desc: "Tempo médio de atendimento e de espera, NPS e indicadores que precisam de atenção.",
  },
  {
    src: "/assets/app-nps.png",
    w: 1888,
    h: 916,
    title: "NPS e satisfação",
    desc: "Acompanhe promotores, passivos e detratores e a distribuição de notas por período.",
  },
  {
    src: "/assets/app-campanhas.png",
    w: 1888,
    h: 916,
    title: "Campanhas em massa",
    desc: "Dispare templates de WhatsApp para sua base com controle de status e qualidade do número.",
  },
  {
    src: "/assets/app-templates.png",
    w: 1888,
    h: 916,
    title: "Templates de mensagem",
    desc: "Crie e gerencie os templates aprovados de WhatsApp usados em cobranças e ofertas.",
  },
  {
    src: "/assets/app-ciclo-de-vida.png",
    w: 1888,
    h: 916,
    title: "Ciclo de vida do contato",
    desc: "Estágios automáticos — de lead capturado a cliente ativo — definidos pela própria IA.",
  },
  {
    src: "/assets/app-integracoes.png",
    w: 1888,
    h: 916,
    title: "Integrações",
    desc: "Conecte CRM e monitoramento (MK Solutions, Zabbix) para consultas e ações automáticas.",
  },
  {
    src: "/assets/app-numeros-restritos.png",
    w: 1888,
    h: 916,
    title: "Números restritos",
    desc: "Opt-out automático: quem pede para não receber mais é removido das campanhas na hora.",
  },
];

export function ProductCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="max-w-5xl mx-auto">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center" }}
        className="px-4 sm:px-0"
      >
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={slide.src}>
              <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                <Image
                  src={slide.src}
                  alt={`${slide.title} — ${slide.desc}`}
                  width={slide.w}
                  height={slide.h}
                  sizes="(max-width: 768px) 100vw, 1024px"
                  quality={90}
                  priority={i === 0}
                  loading={i === 0 ? undefined : "lazy"}
                  className="w-full h-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Setas — escondidas no mobile (usa swipe) */}
        <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12 h-10 w-10" />
        <CarouselNext className="hidden sm:flex -right-4 lg:-right-12 h-10 w-10" />
      </Carousel>

      {/* Legenda do slide atual */}
      <div className="text-center max-w-xl mx-auto mt-6 min-h-[64px]">
        <h4 className="font-heading text-lg font-semibold text-foreground">
          {slides[current].title}
        </h4>
        <p className="text-sm text-muted-foreground mt-1">
          {slides[current].desc}
        </p>
      </div>

      {/* Indicadores */}
      <div className="flex items-center justify-center flex-wrap gap-2 mt-4">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Ir para ${slide.title}`}
            aria-current={i === current}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === current ? 28 : 8,
              background:
                i === current
                  ? "linear-gradient(90deg,#0EA5E9,#2DD4BF)"
                  : "hsl(var(--border))",
            }}
          />
        ))}
      </div>
    </div>
  );
}
