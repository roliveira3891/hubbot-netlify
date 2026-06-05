import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da HubBot. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
  path: "/politica-de-privacidade",
});

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Cabeçalho */}
          <div className="mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground text-sm">
              Última atualização: 26 de fevereiro de 2026
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-foreground">
            {/* 1. Identificação */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                1. Identificação do Controlador de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade é aplicável ao serviço{" "}
                <strong className="text-foreground">HubBot</strong>, operado por:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-muted/40 border border-border space-y-2">
                <p className="text-foreground">
                  <strong>Razão Social:</strong> FABRICA DE SOLUCOES LTDA
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
                    href="mailto:privacidade@hubbot.io"
                    className="text-primary hover:underline"
                  >
                    privacidade@hubbot.io
                  </a>
                </p>
              </div>
            </section>

            {/* 2. Introdução */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                2. Introdução
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A HubBot está comprometida em proteger a privacidade e os dados pessoais
                de seus usuários. Esta Política de Privacidade descreve como coletamos,
                usamos, armazenamos e compartilhamos suas informações, em conformidade
                com a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018)
                e demais legislações aplicáveis.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Ao utilizar os serviços da HubBot — incluindo nossa plataforma web,
                aplicativos e integrações com o Facebook/Meta — você concorda com os
                termos desta política.
              </p>
            </section>

            {/* 3. Dados coletados */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                3. Dados Pessoais Coletados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletamos os seguintes dados, conforme necessário para a prestação dos
                nossos serviços:
              </p>

              <h3 className="font-semibold text-foreground text-lg mb-2">
                3.1 Dados fornecidos pelo usuário
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Nome completo e endereço de e-mail;</li>
                <li>Número de telefone (quando fornecido);</li>
                <li>Dados da empresa (nome, CNPJ, segmento);</li>
                <li>Informações de pagamento (processadas por terceiros seguros);</li>
                <li>Mensagens e conteúdo enviados via formulários de contato.</li>
              </ul>

              <h3 className="font-semibold text-foreground text-lg mb-2 mt-6">
                3.2 Dados coletados automaticamente
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Endereço IP e dados de localização aproximada;</li>
                <li>Tipo de navegador, dispositivo e sistema operacional;</li>
                <li>Páginas acessadas e tempo de navegação;</li>
                <li>Cookies e tecnologias de rastreamento similares.</li>
              </ul>

              <h3 className="font-semibold text-foreground text-lg mb-2 mt-6">
                3.3 Dados de integrações com Facebook/Meta
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Quando você conecta sua Página do Facebook ou conta do Instagram à
                  plataforma HubBot, coletamos os dados autorizados via API do
                  Facebook: identificador de página, tokens de acesso e mensagens
                  trocadas pelos canais;
                </li>
                <li>
                  Não acessamos dados além das permissões explicitamente concedidas
                  por você durante o processo de autorização OAuth do Facebook.
                </li>
              </ul>
            </section>

            {/* 4. Finalidade */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                4. Finalidade do Tratamento dos Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tratamos seus dados pessoais para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Prestação e melhoria dos serviços HubBot;</li>
                <li>Criação e gerenciamento de conta de usuário;</li>
                <li>Suporte técnico e atendimento ao cliente;</li>
                <li>Envio de comunicações sobre o serviço (atualizações, alertas de segurança);</li>
                <li>Envio de comunicações de marketing (somente com seu consentimento);</li>
                <li>Cumprimento de obrigações legais e regulatórias;</li>
                <li>Prevenção de fraudes e garantia da segurança da plataforma;</li>
                <li>
                  Integração com plataformas de terceiros (Facebook, WhatsApp, Instagram)
                  conforme autorizado pelo usuário.
                </li>
              </ul>
            </section>

            {/* 5. Base legal */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                5. Base Legal (LGPD)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O tratamento de dados pessoais pela HubBot está fundamentado nas
                seguintes bases legais previstas no Art. 7º da LGPD:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Consentimento</strong> — para
                  envio de comunicações de marketing e uso de cookies não essenciais;
                </li>
                <li>
                  <strong className="text-foreground">Execução de contrato</strong> —
                  para prestação dos serviços contratados;
                </li>
                <li>
                  <strong className="text-foreground">Legítimo interesse</strong> —
                  para melhoria da plataforma, prevenção de fraudes e segurança;
                </li>
                <li>
                  <strong className="text-foreground">Cumprimento de obrigação legal</strong>{" "}
                  — quando exigido por lei.
                </li>
              </ul>
            </section>

            {/* 6. Compartilhamento */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                6. Compartilhamento de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não vendemos seus dados pessoais. Podemos compartilhá-los apenas nas
                seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Prestadores de serviço:</strong>{" "}
                  parceiros que nos auxiliam na operação da plataforma (hospedagem,
                  pagamentos, analytics), sob contratos que garantem a proteção dos dados;
                </li>
                <li>
                  <strong className="text-foreground">Plataformas integradas:</strong>{" "}
                  Meta (Facebook/Instagram/WhatsApp) e demais integrações autorizadas
                  pelo usuário, conforme seus termos de uso;
                </li>
                <li>
                  <strong className="text-foreground">Obrigação legal:</strong>{" "}
                  quando exigido por autoridade competente, decisão judicial ou
                  regulação aplicável.
                </li>
              </ul>
            </section>

            {/* 7. Cookies */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                7. Cookies e Tecnologias de Rastreamento
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias similares para garantir o funcionamento
                da plataforma, analisar o desempenho e personalizar sua experiência.
                Você pode gerenciar suas preferências de cookies nas configurações do
                seu navegador. A recusa de cookies não essenciais não impedirá o acesso
                às funcionalidades principais da plataforma.
              </p>
            </section>

            {/* 8. Retenção */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                8. Retenção e Exclusão de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Seus dados são mantidos pelo tempo necessário à prestação dos serviços
                ou ao cumprimento de obrigações legais. Após o encerramento da conta,
                os dados são eliminados ou anonimizados em até{" "}
                <strong className="text-foreground">90 dias</strong>, salvo quando a
                retenção por prazo maior for exigida por lei (ex.: registros fiscais
                por 5 anos).
              </p>
            </section>

            {/* 9. Segurança */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                9. Segurança dos Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Adotamos medidas técnicas e organizacionais adequadas para proteger
                seus dados contra acesso não autorizado, alteração, divulgação ou
                destruição, incluindo: criptografia em trânsito (TLS/HTTPS),
                controle de acesso por função, monitoramento de segurança e backups
                regulares.
              </p>
            </section>

            {/* 10. Direitos */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                10. Seus Direitos (LGPD)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nos termos da LGPD, você tem os seguintes direitos em relação aos
                seus dados pessoais:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade dos dados;</li>
                <li>Eliminação dos dados tratados com base no consentimento;</li>
                <li>Informação sobre compartilhamento com terceiros;</li>
                <li>Revogação do consentimento a qualquer momento.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para exercer seus direitos, entre em contato pelo e-mail:{" "}
                <a
                  href="mailto:privacidade@hubbot.io"
                  className="text-primary hover:underline"
                >
                  privacidade@hubbot.io
                </a>
              </p>
            </section>

            {/* 11. Transferência internacional */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                11. Transferência Internacional de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Alguns de nossos prestadores de serviço podem estar localizados fora
                do Brasil. Nestes casos, garantimos que a transferência internacional
                ocorre em conformidade com a LGPD, adotando cláusulas contratuais
                padrão ou verificando que o país de destino oferece grau de proteção
                adequado.
              </p>
            </section>

            {/* 12. Alterações */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                12. Alterações nesta Política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política periodicamente. Notificaremos sobre
                alterações relevantes por e-mail ou por aviso na plataforma. O uso
                continuado dos serviços após a publicação das alterações constitui
                aceitação da política atualizada.
              </p>
            </section>

            {/* 13. Contato DPO */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                13. Encarregado de Dados (DPO)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas, solicitações ou reclamações relacionadas ao tratamento
                de dados pessoais, entre em contato com nosso Encarregado de Dados:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-muted/40 border border-border space-y-2">
                <p className="text-foreground">
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:privacidade@hubbot.io"
                    className="text-primary hover:underline"
                  >
                    privacidade@hubbot.io
                  </a>
                </p>
                <p className="text-foreground">
                  <strong>Empresa:</strong> FABRICA DE SOLUCOES LTDA
                </p>
                <p className="text-foreground">
                  <strong>CNPJ:</strong> 64.812.756/0001-18
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Você também tem o direito de apresentar reclamação à Autoridade
                Nacional de Proteção de Dados (ANPD) em{" "}
                <a
                  href="https://www.gov.br/anpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.gov.br/anpd
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
