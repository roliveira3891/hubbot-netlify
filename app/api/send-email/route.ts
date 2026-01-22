import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp } = body;

    // Validação básica
    if (!name || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Envia o email usando Resend
    const data = await resend.emails.send({
      from: "HubBot Contato <suporte@hubbot.io>", // Você vai precisar configurar um domínio verificado
      to: ["suporte@hubbot.io"], // Substitua pelo email que deve receber as mensagens
      subject: `Novo contato via site: ${name}`,
      html: `
        <h2>Novo contato via site HubBot</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 }
    );
  }
}
