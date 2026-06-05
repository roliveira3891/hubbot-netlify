"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useMounted } from "@/hooks/use-mounted";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  // Evita mismatch de hidratação: o tema só é conhecido no cliente.
  // Antes de montar, renderizamos o estado neutro (dark, que é o default).
  const isDark = !mounted || resolvedTheme === "dark";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src={isDark ? '/assets/hubbot-logo-dark.svg' : '/assets/hubbot-logo-light.svg'}
              alt="HubBot"
              width={140}
              height={40}
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("problema")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Problema
            </button>
            <button 
              onClick={() => scrollToSection("solucao")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Solução
            </button>
            <button 
              onClick={() => scrollToSection("recursos")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection("resultados")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Resultados
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Alternar tema"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link href="https://app.hubbot.io" target="_blank" rel="noopener noreferrer">
                Login
              </Link>
            </Button>
            {/* <Button variant="hero" size="sm" onClick={() => setIsContactDialogOpen(true)}>
              Falar com Especialista
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection("problema")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-3 px-4"
              >
                O Problema
              </button>
              <button 
                onClick={() => scrollToSection("solucao")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-3 px-4"
              >
                Solução
              </button>
              <button 
                onClick={() => scrollToSection("recursos")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-3 px-4"
              >
                Recursos
              </button>
              <button 
                onClick={() => scrollToSection("resultados")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-3 px-4"
              >
                Resultados
              </button>
              <div className="pt-4 mt-2 border-t border-border px-4">
                {/* <Button
                  variant="hero"
                  size="sm"
                  className="w-full"
                  onClick={() => setIsContactDialogOpen(true)}
                >
                  Falar com Especialista
                </Button> */}
              </div>
            </nav>
          </div>
        )}
      </div>

      <ContactFormDialog
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />
    </header>
  );
};

export default Header;
