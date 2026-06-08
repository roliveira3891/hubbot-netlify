"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const DURATION = 4000;
const FADE_MS  = 600;

const slides = [
  { src: "/assets/screen-conversas.png",  alt: "Tela de conversas unificadas do HubBot" },
  { src: "/assets/screen-dashboard.png",  alt: "Dashboard de métricas do HubBot"        },
  { src: "/assets/screen-agentes.png",    alt: "Editor de agentes de IA do HubBot"       },
  { src: "/assets/screen-campanhas.png",  alt: "Gestão de campanhas do HubBot"           },
  { src: "/assets/screen-nps.png",        alt: "Relatório de NPS do HubBot"              },
];

export function HeroSlider() {
  const [index, setIndex]       = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef   = useRef<number | null>(null);
  const startRef = useRef(Date.now());

  useEffect(() => {
    startRef.current = Date.now();

    const tick = () => {
      const p = Math.min((Date.now() - startRef.current) / DURATION, 1);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setIndex(i => (i + 1) % slides.length);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [index]);

  return (
    <>
      <style>{`
        /* zoom (pouco) + float no QUADRO INTEIRO — a imagem inteira escala,
           sem cortar as bordas. Dá a sensação "viva" do respond.io. */
        @keyframes hb-float {
          0%, 100% { transform: translate3d(0, 0, 0)     scale(1);    }
          50%      { transform: translate3d(0, -10px, 0) scale(1.025); }
        }
        .hb-float { animation: hb-float 7s ease-in-out infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .hb-float { animation: none; }
        }
      `}</style>

      {/* aspect-ratio reserva a altura sem precisar de uma imagem "âncora" extra */}
      <div className="hb-float relative aspect-[1888/916] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">

        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity:    i === index ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease`,
              zIndex:     i === index ? 2 : 1,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              className="object-cover"
            />
          </div>
        ))}

        {/* colour overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none z-10" />

        {/* dot + progress indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-full"
              style={{
                width:      i === index ? 28 : 6,
                height:     6,
                background: "rgba(255,255,255,0.2)",
                transition: "width 400ms cubic-bezier(.4,0,.2,1)",
              }}
            >
              {i === index && (
                <div
                  className="absolute inset-0 rounded-full origin-left"
                  style={{
                    // transform é composto (GPU) — evita layout/paint a cada frame
                    transform:  `scaleX(${progress})`,
                    background: "linear-gradient(90deg,#0EA5E9,#2DD4BF)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
