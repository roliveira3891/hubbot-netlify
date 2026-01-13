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
  title: "Agentes de IA para Telecomunicações",
  description: "Transforme seu atendimento com agentes de IA especializados em telecomunicações. Atendimento 24/7, redução de custos de 70% e aumento da satisfação do cliente.",
  keywords: [
    "agentes de IA",
    "telecomunicações",
    "chatbot whatsapp",
    "atendimento automático",
    "SAC automatizado",
    "IA conversacional",
    "automação de atendimento",
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
