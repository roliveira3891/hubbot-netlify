"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const DURATION = 4000;
const FADE_MS  = 600;

const slides = [
  { src: "/assets/screen-conversas.png",  alt: "Conversas"     },
  { src: "/assets/screen-dashboard.png",  alt: "Dashboard"     },
  { src: "/assets/screen-agentes.png",    alt: "Agentes de IA" },
  { src: "/assets/screen-campanhas.png",  alt: "Campanhas"     },
  { src: "/assets/screen-nps.png",        alt: "NPS"           },
];

export function HeroSlider() {
  const [index, setIndex]       = useState(0);
  const [animKey, setAnimKey]   = useState(0); // changing key re-mounts → restarts animation
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
        setAnimKey(k => k + 1);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [index]);

  return (
    <>
      <style>{`
        @keyframes hb-enter {
          0%   { opacity: 0; transform: scale(0.97) translateY(14px); }
          100% { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        @keyframes hb-ken {
          0%   { transform: scale(1);    }
          100% { transform: scale(1.06); }
        }
      `}</style>

      <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">

        {/* background slides — fade out when not active */}
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
              width={1280}
              height={800}
              unoptimized
              priority={i === 0}
              className="w-full h-auto"
            />
          </div>
        ))}

        {/* active slide — remounted on each change to restart animations cleanly */}
        <div
          key={animKey}
          className="absolute inset-0"
          style={{
            zIndex: 3,
            animation: `hb-enter ${FADE_MS}ms cubic-bezier(.4,0,.2,1) forwards,
                         hb-ken   ${DURATION + FADE_MS}ms ${FADE_MS}ms linear forwards`,
          }}
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            width={1280}
            height={800}
            unoptimized
            priority
            className="w-full h-auto"
          />
        </div>

        {/* invisible anchor — keeps container height */}
        <Image
          src={slides[0].src}
          alt=""
          width={1280}
          height={800}
          unoptimized
          className="w-full h-auto invisible"
          aria-hidden
        />

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
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width:      `${progress * 100}%`,
                    background: "linear-gradient(90deg,#0EA5E9,#2DD4BF)",
                    transition: "none",
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
