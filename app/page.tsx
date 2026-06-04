import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyHubBot from "@/components/WhyHubBot";
import Features from "@/components/Features";
import AIAgents from "@/components/AIAgents";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { createMetadata, createSoftwareApplicationSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HubBot — Plataforma de Atendimento com IA para Provedores de Internet",
  description:
    "HubBot é a plataforma omnicanal com IA para provedores de internet e telecom. Unifique WhatsApp, Telegram, Instagram e chat web. Automatize atendimento, qualifique leads e tenha visibilidade completa do seu funil.",
  keywords: [
    "plataforma de atendimento para provedores de internet",
    "omnichannel para telecom",
    "agentes de IA para ISP",
    "automação de atendimento WhatsApp telecom",
    "CRM para provedor de internet",
    "inbox omnicanal telecom",
    "IA para provedor de internet",
    "atendimento automatizado provedor",
  ],
  path: "/",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyHubBot />
        <Features />
        <AIAgents />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
