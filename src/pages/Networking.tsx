export default function Networking() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">Fundamentos de Redes</h1>
        <p className="text-slate-600">
          Conceitos essenciais sobre redes, Internet, Web, modelos, protocolos e exemplos práticos.
        </p>
      </header>

      {/* 1. O que são Redes de Computadores */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">1. O que são Redes de Computadores?</h2>
        <p className="text-slate-700">
          Uma <strong>rede de computadores</strong> é um conjunto de dispositivos interligados (PCs, servidores,
          roteadores, switches, etc.) que trocam dados e compartilham recursos (arquivos, impressoras, acesso à Internet).
          Redes podem ser locais (LAN), metropolitanas (MAN) ou de longa distância (WAN).
        </p>

        <div className="mt-4">
          <h3 className="font-semibold">Por que são importantes?</h3>
          <ul className="list-disc pl-6 mt-2 text-slate-700 space-y-1">
            <li>Permitem comunicação entre pessoas e sistemas.</li>
            <li>Compartilham recursos (banco de dados, impressoras, backups).</li>
            <li>Base para serviços modernos: Web, e-mail, streaming, nuvem.</li>
          </ul>
        </div>
      </section>

      {/* 2. Rede mínima */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">2. O que é uma Rede mínima?</h2>
        <p className="text-slate-700">
          Uma rede mínima precisa de:
        </p>
        <ul className="list-disc pl-6 mt-2 text-slate-700 space-y-1">
          <li><strong>Dispositivos:</strong> computadores, celulares, impressoras.</li>
          <li><strong>Meio de comunicação:</strong> cabo (Ethernet) ou rádio (Wi-Fi).</li>
          <li><strong>Endereçamento:</strong> endereço IP para identificar cada nó.</li>
          <li><strong>Protocolo:</strong> conjunto de regras que define como os dados são trocados (ex.: TCP/IP).</li>
        </ul>
        <p className="text-slate-600 mt-3">Exemplo prático: 2 PCs + switch + roteador = rede mínima funcional.</p>
      </section>

      {/* 3 & 4 Internet e Web */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">3. O que é a Internet? O que compõe?</h2>
        <p className="text-slate-700">
          A <strong>Internet</strong> é a interconexão global de redes — uma malha de redes que permite que dispositivos
          em diferentes locais troquem dados. Componentes principais:
        </p>
        <ul className="list-disc pl-6 mt-2 text-slate-700 space-y-1">
          <li><strong>Infraestrutura física:</strong> cabos (inclusive submarinos), fibras, rádios, data centers.</li>
          <li><strong>Equipamentos:</strong> roteadores de backbone, switches, servidores.</li>
          <li><strong>Operadoras/ISPs:</strong> que interligam redes e vendem acesso.</li>
          <li><strong>Protocolos:</strong> IP para endereçamento, BGP para roteamento entre ISPs, TCP/UDP para transporte.</li>
        </ul>

        <h3 className="font-semibold mt-4">4. O que é a Web?</h3>
        <p className="text-slate-700">
          A <strong>Web (World Wide Web)</strong> é um serviço que roda sobre a Internet. São páginas, aplicações e APIs
          acessadas via HTTP/HTTPS. Resumindo: <em>Internet = infraestrutura</em>; <em>Web = serviço/aplicações</em>.
        </p>
      </section>

      {/* 5. Mapa de fibra óptica */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">5. <a href="https://map.kmcd.dev/?year=2025" target="_blank">Mapa de fibra óptica</a></h2>
        <p className="text-slate-700">
          O mapa de fibra óptica mostra os cabos submarinos e as rotas que ligam continentes — é essencial para entender
          por onde passam os dados entre países.
        </p>

        {/* Placeholder de imagem do mapa */}
        <div className="mt-4">
          <iframe src="https://map.kmcd.dev/?year=2025" className="w-full h-[500px]"></iframe>
        </div>
      </section>

      {/* 6 & 7 - componentes hardware */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">6. Componentes de hardware — Wi-Fi</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li><strong>Ponto de Acesso / Roteador Wi-Fi</strong> (AP) — transmite sinal sem fio.</li>
          <li><strong>Antenas / rádios</strong> — integradas ou externas para alcance direcional.</li>
          <li><strong>Controlador Wi-Fi</strong> — em redes maiores gerencia vários APs.</li>
          <li><strong>Switch</strong> e <strong>PoE</strong> — para alimentar APs empresariais via Ethernet.</li>
          <li><strong>Clientes</strong> — smartphones, notebooks, IoT.</li>
        </ul>

        <h3 className="font-semibold mt-4">7. Componentes de hardware — Rede cabeada (Ethernet)</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li><strong>Placas de rede (NIC)</strong> nos dispositivos.</li>
          <li><strong>Cabos UTP (Cat5e/6/6a)</strong> e conectores RJ-45.</li>
          <li><strong>Switches (camada 2/3)</strong> para conexão e segmentação.</li>
          <li><strong>Roteador / Gateway</strong> para saída à Internet e NAT.</li>
          <li><strong>Patch panels, racks e organizadores</strong> para infraestrutura profissional.</li>
        </ul>
      </section>

      {/* 8 Protocolos */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">8. O que é um protocolo de comunicação?</h2>
        <p className="text-slate-700">
          Um protocolo define regras, formatos e passos para troca de dados entre dispositivos — por exemplo:
          como iniciar uma conexão, como enviar/confirmar pacotes, como detectar erros. Exemplos: IP, TCP, UDP, HTTP.
        </p>
      </section>

      {/* 9 & 10 OSI e TCP/IP */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">9. Modelo OSI</h2>
        <p className="text-slate-700">
          Modelo conceitual com 7 camadas (ajuda a entender funções de cada parte da rede):
        </p>
        <ol className="list-decimal pl-6 mt-2 text-slate-700 space-y-1">
          <li>Aplicação — protocolos de aplicação (HTTP, SMTP).</li>
          <li>Apresentação — formatação/criptografia de dados.</li>
          <li>Sessão — controle de diálogo entre aplicações.</li>
          <li>Transporte — entrega confiável ou rápida (TCP/UDP).</li>
          <li>Rede — endereçamento e roteamento (IP).</li>
          <li>Enlace — frames locais (Ethernet, Wi-Fi).</li>
          <li>Física — sinais, cabos, meios.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-4 mb-3">10. Modelo TCP/IP</h2>
        <p className="text-slate-700">
          Pilha prática usada na Internet: normalmente vista em 4 camadas — Aplicação, Transporte, Internet (IP), Acesso à Rede
          (link + física). É o modelo realmente implementado em redes atuais.
        </p>
      </section>

      {/* 11 IPv4 vs IPv6 */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">11. O que é IPv4 e IPv6?</h2>
        <p className="text-slate-700">
          <strong>IPv4:</strong> endereços de 32 bits (ex.: 192.168.0.1). Limitado (~4,3 bilhões de endereços) — motivo do uso de NAT. <br />
          <strong>IPv6:</strong> endereços de 128 bits (ex.: 2001:0db8::1), criado para suprir escassez de IPv4 e trazer melhorias
          (autoconfiguração, espaço enorme de endereços).
        </p>
      </section>

      {/* 12 Config IP/TCP em Node.js */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">12. Como configurar IP e TCP em Node.js (backend)?</h2>
        <p className="text-slate-700">
          Em Node você geralmente <strong>liga (bind)</strong> um servidor a um <em>host</em> (IP) e <em>porta</em>. A pilha TCP/IP é
          implementada pelo sistema operacional; seu código apenas abre/listen em uma interface.
        </p>

        <div className="mt-3">
          <h3 className="font-semibold">Exemplo HTTP nativo (bind em IP/porta)</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 rounded text-sm overflow-auto">
{`const http = require('http');
const HOST = '0.0.0.0'; // aceita em todas interfaces
const PORT = 3000;
const server = http.createServer((req,res)=> { /* ... */ });
server.listen(PORT, HOST, ()=>console.log(\`rodando em http://\${HOST}:\${PORT}\`));`}
          </pre>

          <h3 className="font-semibold mt-3">Exemplo TCP simples (socket)</h3>
          <pre className="bg-slate-900 text-slate-100 p-3 rounded text-sm overflow-auto">
{`const net = require('net');
const server = net.createServer(socket => {
  socket.on('data', data => {
    socket.write('ACK: ' + data);
  });
});
server.listen(5000, '0.0.0.0');`}
          </pre>
        </div>
      </section>

      {/* 13 & 14 HTTP / HTTPS */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">13. O que é o protocolo HTTP?</h2>
        <p className="text-slate-700">
          HTTP (HyperText Transfer Protocol) é o protocolo de aplicação para a Web. Opera em requisição-resposta
          (métodos: GET, POST, PUT, DELETE, etc.) e define códigos de status e cabeçalhos.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-3">14. O que é HTTPS?</h2>
        <p className="text-slate-700">
          HTTPS = HTTP sobre TLS/SSL. Adiciona criptografia e autenticação (certificados) para proteger confidencialidade
          e integridade dos dados trocados entre cliente e servidor.
        </p>
      </section>

      {/* 15 Framework Node.js */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">15. Exemplo de framework HTTP com Node.js</h2>
        <p className="text-slate-700">
          <strong>Express.js</strong> — framework minimal e popular para criar APIs e servidores HTTP em Node.js.
        </p>
        <pre className="bg-slate-900 text-slate-100 p-3 rounded text-sm overflow-auto">
{`// exemplo rápido
const express = require('express');
const app = express();
app.use(express.json());
app.get('/ping', (_,res)=>res.send('pong'));
app.listen(3000);`}
        </pre>
      </section>

      {/* 16. Exemplos Backend - troca mensagens (3 exemplos) */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">16. 3 exemplos de código Backend (troca de mensagens)</h2>

        <h3 className="font-medium mt-2">A) Express — POST JSON</h3>
        <pre className="bg-slate-900 text-slate-100 p-3 rounded text-sm overflow-auto">
{`// express-messages.js
const express = require('express');
const app = express();
app.use(express.json());
app.post('/api/message', (req,res) => {
  console.log('recebi', req.body);
  res.json({ ok:true, got: req.body });
});
app.listen(3000);`}
        </pre>
        <div className="text-xs text-slate-500 mt-2">
</div>

        <h3 className="font-medium mt-4">B) WebSocket — comunicação em tempo real</h3>
        <pre className="bg-slate-900 text-slate-100 p-3 rounded text-sm overflow-auto">
{`// ws-server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', ws => {
  ws.on('message', msg => {
    // ecoa para todos (broadcast)
    wss.clients.forEach(c => c.readyState===1 && c.send('Echo: '+msg));
  });
});`}
        </pre>

        <h3 className="font-medium mt-4">C) TCP socket — protocolo custom / bytes</h3>
        <pre className="bg-slate-900 text-slate-100 p-3 rounded text-sm overflow-auto">
{`// tcp-server.js
const net = require('net');
net.createServer(sock => {
  sock.on('data', data => {
    console.log('->', data.toString());
    sock.write('ACK\\n');
  });
}).listen(5000);`}
        </pre>
      </section>
    </main>
  );
}
