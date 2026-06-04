import Header from "@/components/Header";
import HeroLP from "@/components/lp/HeroLP";
import WhyHubBotLP from "@/components/lp/WhyHubBotLP";
import FeaturesLP from "@/components/lp/FeaturesLP";
import AIAgentsLP from "@/components/lp/AIAgentsLP";
import TestimonialsLP from "@/components/lp/TestimonialsLP";
import CTALPX from "@/components/lp/CTALPX";
import Footer from "@/components/Footer";

export const metadata = {
  title: "HubBot — IA que vende 24h para provedores de internet",
  description:
    "Chega de perder cliente por demora no WhatsApp. Com HubBot, cada mensagem é respondida em segundos, leads são qualificados automaticamente e seu time só entra quando é hora de fechar.",
  robots: { index: false, follow: false },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroLP />
        <WhyHubBotLP />
        <FeaturesLP />
        <AIAgentsLP />
        <TestimonialsLP />
        <CTALPX />
      </main>
      <Footer />
    </div>
  );
}
