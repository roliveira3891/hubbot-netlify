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
    src: "/assets/app-workflow-editor.png",
    title: "Editor de workflows",
    desc: "Gatilho, condições e passos num canvas de arrastar. Você desenha o atendimento e publica com um clique.",
  },
  {
    src: "/assets/app-agentes-time.png",
    title: "Time de agentes de IA",
    desc: "Um roteador entende a intenção e entrega para o especialista certo: Financeiro, Suporte, Vendas, Retenção ou Recepção.",
  },
  {
    src: "/assets/app-conversas.png",
    title: "Inbox de conversas",
    desc: "WhatsApp, Instagram, Telegram e chat do site numa fila única, com status, atribuições e tags.",
  },
  {
    src: "/assets/app-workflow-modelos.png",
    title: "Modelos prontos",
    desc: "Fluxos já testados em operação de provedor — atendimento com IXC, NPS, inatividade, boas-vindas e anúncios.",
  },
  {
    src: "/assets/app-integracoes-erp.png",
    title: "Integrações",
    desc: "IXC, SGP, Hubsoft, MK Solutions, Zabbix, Ligue Talk e Google Agenda conectados ao atendimento.",
  },
  {
    src: "/assets/app-agente-ferramentas.png",
    title: "Ferramentas do agente",
    desc: "Você liga e desliga o que cada agente pode fazer: escalar, encerrar, atualizar cadastro, agendar, consultar o ERP.",
  },
  {
    src: "/assets/app-dashboard-produtividade.png",
    title: "Produtividade do atendimento",
    desc: "Tempo médio de atendimento e de espera, quanto a IA encerrou sozinha e o que precisa de atenção.",
  },
  {
    src: "/assets/app-nps.png",
    title: "NPS e satisfação",
    desc: "Promotores, passivos e detratores, com a nota amarrada a quem conduziu cada atendimento.",
  },
  {
    src: "/assets/app-campanhas.png",
    title: "Campanhas em massa",
    desc: "Dispare templates de WhatsApp para a sua base com controle de status e qualidade do número.",
  },
  {
    src: "/assets/app-dashboard-campanhas.png",
    title: "Resultado das campanhas",
    desc: "Enviadas, entregues, lidas e respondidas — o desempenho de cada disparo em tempo real.",
  },
  {
    src: "/assets/app-ciclo-de-vida.png",
    title: "Ciclo de vida do contato",
    desc: "Estágios atualizados pela própria IA durante a conversa, de lead capturado a cliente ativo.",
  },
  {
    src: "/assets/app-numeros-restritos.png",
    title: "Números restritos",
    desc: "Opt-out automático: quem pede para não receber mais sai das campanhas na hora.",
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
              {/* Altura fixa pelo aspecto: evita o carrossel "pular" entre
                  telas capturadas em tamanhos ligeiramente diferentes. */}
              <div className="relative aspect-[1408/708] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                <Image
                  src={slide.src}
                  alt={`${slide.title} — ${slide.desc}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1024px"
                  quality={90}
                  priority={i === 0}
                  loading={i === 0 ? undefined : "lazy"}
                  className="object-cover object-top"
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
