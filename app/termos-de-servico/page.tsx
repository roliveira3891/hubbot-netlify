import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Termos de Serviço",
  description:
    "Termos de Serviço da HubBot. Conheça as condições de uso da plataforma de agentes de IA para telecomunicações.",
  path: "/termos-de-servico",
});

export default function TermosDeServicoPag() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Cabeçalho */}
          <div className="mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Termos de Serviço
            </h1>
            <p className="text-muted-foreground text-sm">
              Última atualização: 26 de fevereiro de 2026
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-foreground">
            {/* 1. Partes */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                1. Identificação das Partes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Serviço regulam a relação entre:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-muted/40 border border-border space-y-2">
                <p className="text-foreground">
                  <strong>Prestadora:</strong> FABRICA DE SOLUCOES LTDA
                </p>
                <p className="text-foreground">
                  <strong>Nome Fantasia:</strong> Fabrica de Soluções / HubBot
                </p>
                <p className="text-foreground">
                  <strong>CNPJ:</strong> 64.812.756/0001-18
                </p>
                <p className="text-foreground">
                  <strong>Porte:</strong> Empresa de Pequeno Porte (EPP)
                </p>
                <p className="text-foreground">
                  <strong>Contato:</strong>{" "}
                  <a
                    href="mailto:contato@hubbot.com.br"
                    className="text-primary hover:underline"
                  >
                    contato@hubbot.com.br
                  </a>
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                e o <strong className="text-foreground">Usuário</strong> — pessoa física
                ou jurídica que acessa ou utiliza a plataforma HubBot.
              </p>
            </section>

            {/* 2. Aceitação */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                2. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao criar uma conta, acessar ou utilizar qualquer funcionalidade da
                plataforma HubBot, o Usuário declara ter lido, compreendido e aceito
                integralmente estes Termos de Serviço e nossa{" "}
                <a href="/politica-de-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                . Caso não concorde, não utilize os serviços.
              </p>
            </section>

            {/* 3. Descrição do serviço */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                3. Descrição do Serviço
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HubBot é uma plataforma SaaS (Software as a Service) que oferece:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Agentes de inteligência artificial para atendimento ao cliente;</li>
                <li>Caixa de entrada unificada para múltiplos canais de comunicação;</li>
                <li>Automação de workflows e processos de negócio;</li>
                <li>Analytics e relatórios de desempenho;</li>
                <li>
                  Integrações com plataformas de terceiros, incluindo Facebook,
                  Instagram, WhatsApp Business e outros.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                A HubBot reserva o direito de modificar, suspender ou descontinuar
                qualquer funcionalidade do serviço, com aviso prévio sempre que possível.
              </p>
            </section>

            {/* 4. Cadastro e conta */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                4. Cadastro e Conta de Usuário
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para utilizar os serviços, o Usuário deve:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Ter capacidade legal para contratar (18 anos ou mais, ou representante legal de pessoa jurídica);</li>
                <li>Fornecer informações verdadeiras, completas e atualizadas no cadastro;</li>
                <li>Manter a confidencialidade de suas credenciais de acesso;</li>
                <li>Notificar a HubBot imediatamente sobre qualquer uso não autorizado da conta.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                O Usuário é responsável por todas as atividades realizadas em sua conta.
              </p>
            </section>

            {/* 5. Uso aceitável */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                5. Uso Aceitável
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Usuário compromete-se a utilizar a plataforma apenas para fins
                lícitos e em conformidade com estes Termos. É{" "}
                <strong className="text-foreground">expressamente proibido</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violar leis ou regulamentos aplicáveis;</li>
                <li>Enviar spam, mensagens em massa não autorizadas ou conteúdo enganoso;</li>
                <li>Usar a plataforma para fins de fraude, phishing ou atividades ilegais;</li>
                <li>Tentar acessar sistemas, contas ou dados de outros usuários sem autorização;</li>
                <li>Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte;</li>
                <li>Revender, sublicenciar ou transferir o acesso à plataforma a terceiros;</li>
                <li>
                  Violar as políticas de uso das plataformas integradas (ex.: Política
                  de Plataforma do Facebook, Termos do WhatsApp Business API).
                </li>
              </ul>
            </section>

            {/* 6. Integrações com Facebook/Meta */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                6. Integrações com Facebook / Meta
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao utilizar as integrações com plataformas da Meta (Facebook, Instagram,
                WhatsApp), o Usuário reconhece e concorda que:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  O uso dessas integrações está sujeito aos{" "}
                  <a
                    href="https://www.facebook.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Termos de Serviço do Facebook
                  </a>{" "}
                  e à{" "}
                  <a
                    href="https://developers.facebook.com/policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Política de Plataforma do Facebook
                  </a>
                  ;
                </li>
                <li>
                  A HubBot não é afiliada, patrocinada ou endossada pela Meta
                  Platforms, Inc.;
                </li>
                <li>
                  O Usuário é o único responsável pelo conteúdo enviado e por garantir
                  o consentimento de seus próprios usuários finais para o uso dos dados
                  nas integrações;
                </li>
                <li>
                  A HubBot poderá desativar integrações em caso de violação das
                  políticas da Meta ou destes Termos.
                </li>
              </ul>
            </section>

            {/* 7. Pagamento */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                7. Pagamentos e Faturamento
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Os planos pagos são faturados de acordo com o plano contratado (mensal
                ou anual). O Usuário autoriza a cobrança dos valores devidos na forma
                e periodicidade escolhidas. Em caso de inadimplência, o acesso poderá
                ser suspenso após notificação. Os valores pagos não são reembolsáveis,
                salvo nos casos previstos no Código de Defesa do Consumidor (Lei nº
                8.078/1990) ou conforme acordado individualmente.
              </p>
            </section>

            {/* 8. Propriedade intelectual */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                8. Propriedade Intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos os direitos de propriedade intelectual relacionados à plataforma
                HubBot — incluindo marca, software, design, textos e demais elementos
                — pertencem à FABRICA DE SOLUCOES LTDA. O Usuário recebe uma licença
                limitada, não exclusiva, intransferível e revogável para usar a
                plataforma conforme estes Termos.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                O conteúdo inserido pelo Usuário na plataforma permanece de sua
                propriedade. O Usuário concede à HubBot uma licença para processar e
                exibir esse conteúdo exclusivamente para fins de prestação do serviço.
              </p>
            </section>

            {/* 9. Privacidade */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                9. Privacidade e Proteção de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento de dados pessoais é regido pela nossa{" "}
                <a href="/politica-de-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                , em conformidade com a LGPD (Lei nº 13.709/2018). O Usuário é
                responsável por garantir a conformidade legal dos dados de seus próprios
                clientes inseridos na plataforma.
              </p>
            </section>

            {/* 10. Disponibilidade */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                10. Disponibilidade e SLA
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A HubBot envida seus melhores esforços para manter a plataforma
                disponível 24/7, com meta de uptime de 99,5% ao mês. Não nos
                responsabilizamos por indisponibilidades decorrentes de manutenção
                programada (comunicada com antecedência), falhas de terceiros (ex.:
                provedores de cloud, APIs da Meta) ou eventos de força maior.
              </p>
            </section>

            {/* 11. Limitação de responsabilidade */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                11. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Na máxima extensão permitida pela lei, a HubBot não será responsável
                por danos indiretos, incidentais, especiais ou consequenciais,
                incluindo perda de lucros, dados ou oportunidades de negócio, decorrentes
                do uso ou impossibilidade de uso dos serviços. A responsabilidade total
                da HubBot limita-se ao valor pago pelo Usuário nos 3 meses anteriores
                ao evento que originou o dano.
              </p>
            </section>

            {/* 12. Rescisão */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                12. Rescisão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O Usuário pode encerrar sua conta a qualquer momento através das
                configurações da plataforma ou por solicitação ao suporte. A HubBot
                pode suspender ou encerrar o acesso, a qualquer momento, em caso de
                violação destes Termos, com ou sem aviso prévio conforme a gravidade
                da infração.
              </p>
            </section>

            {/* 13. Alterações */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                13. Alterações nos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos podem ser atualizados periodicamente. Notificaremos o
                Usuário sobre alterações relevantes com pelo menos 15 dias de
                antecedência, por e-mail ou aviso na plataforma. O uso continuado
                após a vigência das alterações implica aceitação dos novos termos.
              </p>
            </section>

            {/* 14. Lei aplicável */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                14. Lei Aplicável e Foro
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos são regidos pelas leis da República Federativa do Brasil.
                Fica eleito o foro da comarca do domicílio do Usuário, ou, na hipótese
                de pessoa jurídica, o foro da cidade de São Paulo/SP, para dirimir
                quaisquer controvérsias decorrentes destes Termos.
              </p>
            </section>

            {/* 15. Contato */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                15. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas, sugestões ou suporte relacionados a estes Termos:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-muted/40 border border-border space-y-2">
                <p className="text-foreground">
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:contato@hubbot.com.br"
                    className="text-primary hover:underline"
                  >
                    contato@hubbot.com.br
                  </a>
                </p>
                <p className="text-foreground">
                  <strong>Empresa:</strong> FABRICA DE SOLUCOES LTDA
                </p>
                <p className="text-foreground">
                  <strong>CNPJ:</strong> 64.812.756/0001-18
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
