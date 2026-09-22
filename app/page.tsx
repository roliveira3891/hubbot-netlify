import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyHubBot from "@/components/WhyHubBot";
import Workflows from "@/components/Workflows";
import AIAgents from "@/components/AIAgents";
import Integrations from "@/components/Integrations";
import Proof from "@/components/Proof";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { createMetadata, createSoftwareApplicationSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HubBot — IA que resolve no ERP do seu provedor de internet",
  description:
    "Plataforma de atendimento com IA para provedores de internet. Integrada ao IXC, SGP, MK Solutions, Hubsoft e Zabbix: emite 2ª via com PIX, libera desbloqueio de confiança e testa o sinal da ONU. WhatsApp, Instagram, Telegram e chat do site numa fila só, com workflows visuais.",
  keywords: [
    "plataforma de atendimento para provedores de internet",
    "IA integrada ao IXC",
    "chatbot com SGP e MK Solutions",
    "automação de atendimento WhatsApp telecom",
    "2ª via de fatura automática WhatsApp",
    "desbloqueio de confiança automático",
    "workflows de atendimento para ISP",
    "agentes de IA para provedor de internet",
    "inbox omnicanal telecom",
    "CRM para provedor de internet",
  ],
  path: "/",
});

export default function Home() {
  const softwareSchema = createSoftwareApplicationSchema();

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <WhyHubBot />
        <Workflows />
        <AIAgents />
        <Integrations />
        <Proof />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
