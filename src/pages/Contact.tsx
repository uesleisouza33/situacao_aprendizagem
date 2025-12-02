import { useState } from "react";

export default function Contact() {
  // coloque seus dados reais depois
  const EMAIL = "ueslei_carvalho-f@estudante.sesisenai.org.br";
  const GITHUB = "https://github.com/uesleisouza33";
  const PHONE = "+5548991736379";
  const ADDRESS = "Av. José Manoel Reis, S/N - Centro, Tijucas - SC, 88200-000";
  const WHATSAPP_NUMBER = "5548991736379";

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback simples
      alert("Não foi possível copiar automaticamente. Email: " + EMAIL);
    }
  };

  const openMail = () => {
    const subject = encodeURIComponent("Contato pelo site");
    const body = encodeURIComponent("Olá,\n\nEscreva sua mensagem aqui...\n");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Olá! Vi seu contato no site e gostaria de conversar.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Contato - Carvalho Software</h1>

      <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="text-sm text-slate-700">Use para assuntos formais, envio de arquivos ou comunicação oficial.</p>

          <div className="mt-3 flex items-center gap-3">
            <div className="text-sm text-slate-800">{EMAIL}</div>

            <button
              onClick={copyEmail}
              className="px-3 py-1 border rounded text-sm hover:bg-slate-50"
              aria-label="Copiar e-mail"
            >
              {copied ? "Copiado ✓" : "Copiar e-mail"}
            </button>

            <button
              onClick={openMail}
              className="px-3 py-1 bg-indigo-600 text-white rounded text-sm"
            >
              Abrir e-mail
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold">WhatsApp</h2>
          <p className="text-sm text-slate-700">Atendimento rápido (use para mensagens curtas).</p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 border rounded text-sm"
            >
              Abrir chat
            </a>

            <button onClick={openWhatsApp} className="px-3 py-1 bg-green-600 text-white rounded text-sm">
              Mensagem padrão
            </button>

            <div className="text-sm text-slate-700 ml-auto">Tel: <a href={`tel:${PHONE}`} className="text-indigo-600">{PHONE}</a></div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Outros links</h2>
          <ul className="mt-2 text-sm space-y-1">
            <li>
              <strong>GitHub:</strong>{" "}
              <a href={GITHUB} target="_blank" rel="noreferrer" className="text-indigo-600">{GITHUB.replace(/^https?:\/\//, "")}</a>
            </li>
            <li><strong>Endereço:</strong> <span className="text-slate-700">{ADDRESS}</span></li>
          </ul>
        </div>
      </div>
    </main>
  );
}