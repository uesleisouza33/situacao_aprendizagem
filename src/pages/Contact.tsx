import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!name || !msg) return alert("Preencha tudo");
    const store = JSON.parse(localStorage.getItem("contact_msgs")||"[]");
    store.push({name, msg, at: new Date().toISOString()});
    localStorage.setItem("contact_msgs", JSON.stringify(store));
    setSent(true);
    setName(""); setMsg("");
    setTimeout(()=>setSent(false),3000);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-3">Contato</h1>
      <p className="text-slate-600 mb-6">Envie uma mensagem — este formulário é simulado e salva localmente no navegador.</p>

      <div className="bg-white p-4 rounded-lg border">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nome" className="w-full p-2 border rounded mb-3" />
        <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Mensagem" className="w-full p-2 border rounded mb-3" rows={5} />
        <div className="flex gap-2">
          <button onClick={submit} className="px-4 py-2 bg-indigo-600 text-white rounded">Enviar</button>
        </div>
        {sent && <div className="mt-3 text-green-600">Mensagem salva com sucesso (simulado)</div>}
      </div>
    </main>
  );
}