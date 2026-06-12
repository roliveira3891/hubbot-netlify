import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BellRing,
  CalendarClock,
  CheckCircle2,
  FileText,
  Handshake,
  MessageSquare,
  PhoneCall,
  Receipt,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  createMetadata,
  createBreadcrumbSchema,
  createFAQSchema,
} from "@/lib/seo";
import { whatsappUrl } from "@/lib/contact";

export const metadata = createMetadata({
  title: "Cobrança Automática e 2ª Via de Boleto pelo WhatsApp",
  description:
    "Automatize cobrança e segunda via de boleto no WhatsApp com IA: lembretes antes do vencimento, Pix e boleto na conversa e negociação automática. Menos inadimplência, sem constranger o cliente.",
  keywords: [
    "segunda via de boleto WhatsApp",
    "cobrança automática WhatsApp",
    "reduzir inadimplência provedor",
    "automação de cobrança telecom",
    "lembrete de vencimento automático",
    "negociação de dívida chatbot",
    "Pix pelo WhatsApp",
    "régua de cobrança automatizada",
  ],
  path: "/solucoes/cobranca-e-segunda-via",
});

const dores = [
  {
    icon: Receipt,
    title: "2ª via consome a equipe",
    description:
      "É o pedido mais comum do SAC de qualquer provedor. Um atendente parado para reenviar boleto é dinheiro saindo pelo ralo todos os dias.",
  },
  {
    icon: CalendarClock,
    title: "Cliente esquece de pagar",
    description:
      "Boa parte da inadimplência não é má vontade: é boleto perdido no e-mail e vencimento esquecido. Sem lembrete, a fatura atrasa.",
  },
  {
    icon: PhoneCall,
    title: "Cobrar é caro e desgastante",
    description:
      "Ligação de cobrança constrange o cliente, desgasta a equipe e mancha a relação — justamente com quem você quer manter na base.",
  },
  {
    icon: Banknote,
    title: "Pagamento difícil atrasa o caixa",
    description:
      "Quanto mais passos entre o cliente e o pagamento — achar boleto, abrir app do banco, digitar código — mais a fatura fica para depois.",
  },
];

const recursos = [
  "Segunda via de boleto e código Pix na conversa",
  "Lembretes automáticos antes do vencimento",
  "Régua de cobrança educada após o atraso",
  "Negociação e parcelamento conduzidos pela IA",
  "Confirmação de pagamento e baixa automática",
  "Integração com o sistema de gestão e financeiro",
];

const comoFunciona = [
  {
    icon: BellRing,
    title: "Lembrete antes do vencimento",
    description:
      "Dias antes de vencer, o cliente recebe a fatura com o Pix copia-e-cola no WhatsApp. Pagar fica mais fácil que esquecer.",
  },
  {
    icon: FileText,
    title: "2ª via instantânea, sem atendente",
    description:
      "O cliente pede e a IA entrega boleto ou Pix em segundos, a qualquer hora — sem ocupar ninguém da equipe.",
  },
  {
    icon: Handshake,
    title: "Cobrança que preserva a relação",
    description:
      "Atrasou? A IA cobra com educação, oferece negociação e parcelamento, e resolve sem constrangimento — nem para o cliente, nem para você.",
  },
  {
    icon: Wallet,
    title: "Pagamento confirmado, caixa em dia",
    description:
      "Pagou, a IA confirma, agradece e dá baixa. Sua régua de cobrança roda sozinha do lembrete à quitação.",
  },
];

const stats = [
  { value: "24/7", label: "2ª via sem depender de atendente" },
  { value: "3s", label: "Para entregar boleto ou Pix" },
  { value: "100%", label: "Da régua de cobrança automatizada" },
];

const faqItems = [
  {
    question: "Como funciona a segunda via de boleto pelo WhatsApp?",
    answer:
      "O cliente pede a segunda via na conversa e a IA do HubBot, integrada ao sistema do provedor, localiza a fatura e envia o boleto atualizado ou o código Pix copia-e-cola em segundos — a qualquer hora, sem passar por um atendente humano.",
  },
  {
    question: "A cobrança automática reduz mesmo a inadimplência?",
    answer:
      "Sim. Grande parte da inadimplência vem de esquecimento e de dificuldade para pagar. Com lembretes automáticos antes do vencimento e o pagamento a um toque de distância (Pix na conversa), a fatura é paga em dia com muito mais frequência.",
  },
  {
    question: "A IA consegue negociar dívidas com o cliente?",
    answer:
      "Sim. Dentro das regras que você define — descontos, parcelamentos e prazos permitidos — a IA conduz a negociação na conversa, gera o acordo e acompanha o pagamento. Casos fora da política são encaminhados para a equipe.",
  },
  {
    question: "A cobrança pelo WhatsApp não vai irritar meus clientes?",
    answer:
      "É o contrário do telefonema de cobrança: a mensagem chega discreta, no canal que o cliente já usa, com tom educado e o pagamento facilitado. O cliente resolve em segundos, sem constrangimento — e a relação com a sua marca é preservada.",
  },
  {
    question: "Preciso trocar meu sistema financeiro para usar?",
    answer:
      "Não. O HubBot se integra ao sistema de gestão e ao financeiro que o seu provedor já usa, consultando faturas e registrando pagamentos automaticamente.",
  },
  {
    question: "E se o cliente quiser falar sobre uma cobrança indevida?",
    answer:
      "A IA identifica que o caso precisa de análise e transfere a conversa para a equipe com todo o contexto — fatura, histórico e o relato do cliente — para que a contestação seja resolvida rápido e sem retrabalho.",
  },
];

export default function CobrancaESegundaViaPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Início", path: "/" },
    {
      name: "Cobrança e 2ª Via",
      path: "/solucoes/cobranca-e-segunda-via",
    },
  ]);
  const faqSchema = createFAQSchema(faqItems);

  const ctaWhatsApp = whatsappUrl(
    "Olá! Quero automatizar a cobrança e a 2ª via da minha empresa com o HubBot."
  );

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Cobrança e segunda via
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Fatura paga em dia,{" "}
              <span className="text-gradient">sem ninguém precisar cobrar</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lembrete antes do vencimento, 2ª via e Pix na conversa,
              negociação automática depois do atraso. A IA cuida da régua de
              cobrança inteira — com educação e sem ocupar sua equipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={ctaWhatsApp} target="_blank" rel="noopener noreferrer">
                  Ver demonstração no WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/produto">Conhecer a plataforma</Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-12 max-w-5xl mx-auto">
            {/* a vinheta dissolve todas as bordas da foto no fundo da página */}
            <div className="relative [mask-image:radial-gradient(ellipse_72%_88%_at_50%_45%,black_42%,transparent_96%)]">
              <Image
                src="/assets/pagamento-conta-whatsapp.jpg"
                alt="Cliente pagando a fatura da internet pelo celular em casa"
                width={1600}
                height={900}
                priority
                className="w-full aspect-[21/9] object-cover saturate-[0.8] brightness-[0.92]"
              />
              {/* esfria a foto com as cores da marca */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/10 pointer-events-none" />
            </div>
            {/* badge de pagamento */}
            <div className="absolute top-6 right-4 sm:top-10 sm:right-12 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-foreground">
                Pagamento confirmado
              </span>
            </div>
            {/* conversa simulada sobre a foto */}
            <div className="absolute -bottom-6 left-2 sm:bottom-8 sm:left-10 glass rounded-2xl p-4 shadow-xl max-w-[270px] sm:max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-foreground">
                  Agente IA · HubBot
                </span>
                <span className="text-[10px] text-muted-foreground ml-auto">
                  responde em 3s
                </span>
              </div>
              <div className="space-y-2">
                <div className="bg-muted/80 rounded-2xl rounded-bl-sm px-3 py-2 text-xs text-foreground w-fit max-w-[85%]">
                  Perdi o boleto, me manda a 2ª via?
                </div>
                <div className="bg-gradient-to-r from-sky-500 to-teal-400 rounded-2xl rounded-br-sm px-3 py-2 text-xs text-white w-fit max-w-[90%] ml-auto">
                  Claro! Aqui está o boleto atualizado 📄 Se preferir, o Pix
                  copia-e-cola: paga em 10 segundos ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              O problema
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Cobrança manual custa caro{" "}
              <span className="text-gradient">duas vezes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Você paga a equipe para cobrar e ainda paga o preço do atraso.
              Enquanto isso, o pedido mais comum do SAC segue sendo… a segunda
              via.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {dores.map((dor, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 border border-border/50"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <dor.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {dor.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {dor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                A solução
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                A régua de cobrança que roda sozinha
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Do lembrete amigável à negociação do atraso, a IA conduz cada
                etapa no WhatsApp — integrada ao seu sistema, com o tom da sua
                marca e sem constranger ninguém.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {recursos.map((recurso, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{recurso}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" className="group" asChild>
                <a href={ctaWhatsApp} target="_blank" rel="noopener noreferrer">
                  Quero reduzir a inadimplência
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-teal-400 opacity-20 blur-3xl rounded-full" />
              <div className="relative glass rounded-2xl p-8 border border-border/50">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground mb-3">
                    O que a IA resolve sozinha:
                  </p>
                  {[
                    "“Me manda a 2ª via do boleto?”",
                    "“Esqueci de pagar, ainda dá tempo?”",
                    "“Dá pra parcelar o que está atrasado?”",
                  ].map((exemplo, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30"
                    >
                      <MessageSquare className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {exemplo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Como funciona
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Do lembrete à quitação,{" "}
              <span className="text-gradient">sem intervenção humana</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A régua completa de cobrança funcionando 24 horas por dia, com a
              educação que preserva o cliente na sua base.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comoFunciona.map((etapa, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 border border-border/50 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <etapa.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-heading text-3xl font-bold text-primary/20">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {etapa.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {etapa.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Perguntas frequentes
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Dúvidas comuns sobre{" "}
              <span className="text-gradient">cobrança automatizada</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-border rounded-2xl border border-border bg-card/30">
            {faqItems.map((item, index) => (
              <details key={index} className="group px-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 list-none font-heading text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="pb-5 -mt-1 text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quanto custa para a sua operação{" "}
              <span className="text-gradient">cada fatura atrasada?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Veja a régua de cobrança automatizada rodando com as regras da
              sua empresa — demonstração rápida, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={ctaWhatsApp} target="_blank" rel="noopener noreferrer">
                  Falar com a HubBot no WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/solucoes/qualidade-no-atendimento">
                  Ver qualidade no atendimento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
