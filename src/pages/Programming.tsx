import { useState, type JSX, } from "react";

type Matrix3x3 = number[][];

export default function LearningPage(): JSX.Element {
  const [rand10, setRand10] = useState<number[]>([]);
  const [sortedCres, setSortedCres] = useState<number[]>([]);
  const [sortedDec, setSortedDec] = useState<number[]>([]);
  const [bubbleResult, setBubbleResult] = useState<number[]>([]);
  const [sum220, setSum220] = useState<{ array: number[]; soma: number } | null>(null);
  const [matrix3, setMatrix3] = useState<Matrix3x3>([]);
  const [imcResult, setImcResult] = useState<{ imc: number; categoria: string } | null>(null);
  const [tempConv, setTempConv] = useState<number | null>(null);
  const [searchResult, setSearchResult] = useState<{ arr: number[]; idx: number } | null>(null);

  // UTILITÁRIOS
  const cloneArr = <T,>(a: T[]): T[] => JSON.parse(JSON.stringify(a)) as T[];

  // 5) Ordenar 1 a 20 sem sort -> selection-like
  function ordenarCrescenteCopy(input: number[]): number[] {
    const arr = cloneArr(input);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          const tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr;
  }

  function ordenarDecrescenteCopy(input: number[]): number[] {
    const arr = cloneArr(input);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          const tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr;
  }

  // 6) Bubble Sort
  function bubbleSort(a: number[]): number[] {
    const arr = cloneArr(a);
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const t = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = t;
        }
      }
    }
    return arr;
  }

  // gerar 10 aleatórios 1..20
  function gerar10Aleatorios(): void {
    const out: number[] = [];
    for (let i = 0; i < 10; i++) out.push(Math.floor(Math.random() * 20) + 1);
    setRand10(out);
    setBubbleResult([]);
    setSortedCres([]);
    setSortedDec([]);
  }

  // ações para item 5: ordenar 1..20 (cria, embaralha e ordena)
  function executarOrdenacoes1a20(): void {
    const arr: number[] = [];
    for (let i = 1; i <= 20; i++) arr.push(i);
    // embaralha (só para demonstrar)
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setSortedCres(ordenarCrescenteCopy(arr));
    setSortedDec(ordenarDecrescenteCopy(arr));
  }

  // executar bubble da lista rand10
  function executarBubble(): void {
    if (!rand10 || rand10.length === 0) return;
    setBubbleResult(bubbleSort(rand10));
  }

  // 7) somar 10 números aleatórios 1..220
  function somar10Aleatorios220(): void {
    const a: number[] = [];
    for (let i = 0; i < 10; i++) a.push(Math.floor(Math.random() * 220) + 1);
    const s = a.reduce((acc, v) => acc + v, 0);
    setSum220({ array: a, soma: s });
  }

  // 8) matriz 3x3 1..20
  function gerarMatriz3x3(): void {
    const m: Matrix3x3 = [];
    for (let i = 0; i < 3; i++) {
      const row: number[] = [];
      for (let j = 0; j < 3; j++) row.push(Math.floor(Math.random() * 20) + 1);
      m.push(row);
    }
    setMatrix3(m);
  }

  // 9 e 12) IMC (kg / m^2)
  function calcularIMC(peso: number, altura: number): { imc: number; categoria: string } | null {
    const h = Number(altura);
    const p = Number(peso);
    if (!h || !p) return null;
    const imc = p / (h * h);
    let cat = "";
    if (imc < 18.5) cat = "Magreza";
    else if (imc < 25) cat = "Normal";
    else if (imc < 30) cat = "Sobrepeso";
    else cat = "Obesidade";
    return { imc: Number(imc.toFixed(2)), categoria: cat };
  }

  // 10) Converter temperatura
  function converterTemp(valor: number, de: "C" | "F", para: "C" | "F"): number | null {
    const v = Number(valor);
    if (isNaN(v)) return null;
    if (de === "C" && para === "F") return (v * 9) / 5 + 32;
    if (de === "F" && para === "C") return ((v - 32) * 5) / 9;
    return v;
  }

  // 11) Busca linear
  function buscaLinear(arr: number[], alvo: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === alvo) return i; // retorna índice
    }
    return -1;
  }

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-center">Lógica de Programação</h1>
      </header>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">1. O que são Linguagens de Programação?</h2>
        <p className="mt-2 text-sm">Linguagens de programação são conjuntos de regras e símbolos que permitem ao programador escrever instruções que o computador consegue entender e executar. Cada linguagem possui sintaxe, propósito e características próprias.</p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
          <li><b>C++</b> — Linguagem compilada, extremamente rápida e usada em jogos, sistemas embarcados, programas de alto desempenho e engines modernas. Foca em controle de memória e performance.</li>
          <li><b>JavaScript</b> — Linguagem da web, interpretada. Executa em navegadores e servidores (Node.js). Usada para interfaces, DOM, eventos e aplicações single-page.</li>
          <li><b>Java</b> — Linguagem compilada para bytecode e executada na JVM. Muito usada em sistemas corporativos, aplicações Android e servidores por sua portabilidade e robustez.</li>
          <li><b>Python</b> — Linguagem interpretada, muito legível e produtiva. Ampla em ciência de dados, automação, scripts e prototipagem. Tem grande ecossistema de bibliotecas.</li>
          <li><b>PHP</b> — Linguagem interpretada para backend web. Comum em sites dinâmicos e CMSs como WordPress; fácil de hospedar e integrar com bancos de dados.</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">2. Interpretada vs Compilada</h2>
        <p className="mt-2 text-sm"><b>Linguagem Compilada:</b> o código-fonte é transformado em código de máquina (ou em um formato intermediário) antes de ser executado. Vantagens: maior desempenho e detecção de erros em tempo de compilação. Exemplos: C, C++, Rust.</p>
        <p className="mt-2 text-sm"><b>Linguagem Interpretada:</b> um interpretador lê e executa o código linha a linha em tempo de execução. É ótima para desenvolvimento rápido e testes, porém costuma ser mais lenta. Exemplos: JavaScript, Python, PHP.</p>
        <p className="mt-2 text-sm"><b>Híbridas / JIT:</b> Algumas linguagens usam compilação para um formato intermediário e depois interpretação ou compilação Just-In-Time (JIT) em tempo de execução — exemplo: Java (bytecode + JVM) e JavaScript em engines modernas, que aplicam otimizações JIT.</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">3. HTML e CSS</h2>
        <p className="mt-2 text-sm"><b>HTML (HyperText Markup Language)</b> é uma linguagem de marcação que define a estrutura do conteúdo em páginas web — títulos, parágrafos, listas, imagens e links.</p>
        <p className="mt-2 text-sm"><b>CSS (Cascading Style Sheets)</b> controla a aparência visual: cores, fontes, margens, layout e responsividade (como o site se adapta a diferentes telas).</p>
        <p className="mt-2 text-sm">Juntos, formam a base do frontend: HTML dá o conteúdo; CSS estiliza; e JavaScript adiciona comportamento e interatividade.</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">4. IDE</h2>
        <p className="mt-2 text-sm">Uma <b>IDE (Integrated Development Environment)</b> é uma aplicação que reúne ferramentas para escrever, testar e depurar código de forma mais eficiente.</p>
        <ul className="list-disc list-inside mt-3 text-sm space-y-1">
          <li><b>Editor inteligente:</b> autocompletar, snippets e destaque de sintaxe.</li>
          <li><b>Depuração:</b> executar passo a passo, pontos de interrupção (breakpoints) e inspeção de variáveis.</li>
          <li><b>Integração:</b> terminal integrado, controle de versão (git) e plugins.</li>
          <li><b>Gerenciamento de projetos:</b> organização de arquivos, templates e tarefas de build.</li>
        </ul>
        <p className="mt-3 text-sm"><b>Exemplos:</b> VSCode (leve e extensível), IntelliJ IDEA (Java), WebStorm (JS/TS), PyCharm (Python).</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">5. Ordenar 1 a 20 (sem sort)</h2>
        <p className="text-sm">Cria 1..20, embaralha e ordena com funções próprias (sem usar Array.prototype.sort).</p>
        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 rounded-xl border" onClick={executarOrdenacoes1a20}>Embaralhar e ordenar</button>
        </div>
        <div className="mt-4 text-sm space-y-2">
          <div><b>Crescente:</b> {sortedCres.length ? sortedCres.join(", ") : "---"}</div>
          <div><b>Decrescente:</b> {sortedDec.length ? sortedDec.join(", ") : "---"}</div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">6. Bubble Sort — 10 aleatórios</h2>
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 rounded-xl border" onClick={gerar10Aleatorios}>Gerar 10 aleatórios</button>
          <button className="px-4 py-2 rounded-xl border" onClick={executarBubble}>Ordenar com BubbleSort</button>
        </div>
        <div className="mt-3 text-sm">
          <div><b>Aleatórios:</b> {rand10.length ? rand10.join(", ") : "---"}</div>
          <div><b>Ordenado (Bubble):</b> {bubbleResult.length ? bubbleResult.join(", ") : "---"}</div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">7. Somar 10 números aleatórios (1..220)</h2>
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 rounded-xl border" onClick={somar10Aleatorios220}>Gerar e somar</button>
        </div>
        <div className="mt-3 text-sm">{sum220 ? (<><div><b>Array:</b> {sum220.array.join(", ")}</div><div><b>Soma:</b> {sum220.soma}</div></>) : "---"}</div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">8. Matriz 3 x 3</h2>
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 rounded-xl border" onClick={gerarMatriz3x3}>Gerar Matriz</button>
        </div>
        <div className="mt-3 text-sm">{matrix3.length ? (
          <table className="table-auto border-collapse">
            <tbody>
              {matrix3.map((row, i) => (
                <tr key={i} className="text-center">
                  {row.map((c, j) => <td key={j} className="px-3 py-2 border">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        ) : "---"}</div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">9. Calcular IMC</h2>
        <p className="text-sm">Formulário: peso (kg) e altura (m)</p>
        <ImcFormTS onCalc={(r) => setImcResult(r)} compute={calcularIMC} />
        <div className="mt-3 text-sm">{imcResult ? (<div>IMC: <b>{imcResult.imc}</b> — {imcResult.categoria}</div>) : "---"}</div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">10. Conversão de Temperatura (°C ↔ °F)</h2>
        <ConvertTempTS onResult={(r) => setTempConv(r)} convert={converterTemp} />
        <div className="mt-3 text-sm">{tempConv !== null ? <div>Resultado: <b>{tempConv}</b></div> : "---"}</div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">11. Busca Linear</h2>
        <p className="text-sm">A busca linear percorre cada elemento até encontrar o alvo. É simples, funciona em listas pequenas, mas é O(n) no pior caso.</p>
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 rounded-xl border" onClick={() => { const arr = [5, 3, 8, 1, 9]; const idx = buscaLinear(arr, 8); setSearchResult({ arr, idx }); }}>Testar busca por 8 em [5,3,8,1,9]</button>
        </div>
        <div className="mt-3 text-sm">{searchResult ? (<div>Array: {searchResult.arr.join(", ")} — Índice encontrado: {searchResult.idx}</div>) : "---"}</div>
      </section>
    </main>
  );
}

// Componentes TypeScript
function ImcFormTS({ onCalc, compute }: { onCalc: (r: { imc: number; categoria: string } | null) => void; compute: (peso: number, altura: number) => { imc: number; categoria: string } | null; }) {
  const [peso, setPeso] = useState<number>(70);
  const [altura, setAltura] = useState<number>(1.75);
  return (
    <div className="flex gap-2 items-end">
      <div>
        <label className="text-xs">Peso (kg)</label>
        <input className="block border rounded px-2 py-1" type="number" value={peso} onChange={e => setPeso(Number(e.target.value))} />
      </div>
      <div>
        <label className="text-xs">Altura (m)</label>
        <input className="block border rounded px-2 py-1" type="number" step="0.01" value={altura} onChange={e => setAltura(Number(e.target.value))} />
      </div>
      <button onClick={() => { const r = compute(peso, altura); onCalc(r); }} className="px-3 py-2 rounded-xl border">Calcular</button>
    </div>
  );
}

function ConvertTempTS({ onResult, convert }: { onResult: (r: number | null) => void; convert: (valor: number, de: "C" | "F", para: "C" | "F") => number | null; }) {
  const [valor, setValor] = useState<number>(0);
  const [de, setDe] = useState<"C" | "F">("C");
  const [para, setPara] = useState<"C" | "F">("F");
  return (
    <div className="flex gap-2 items-end">
      <div>
        <label className="text-xs">Valor</label>
        <input className="block border rounded px-2 py-1" type="number" value={valor} onChange={e => setValor(Number(e.target.value))} />
      </div>
      <div>
        <label className="text-xs">De</label>
        <select className="block border rounded px-2 py-1" value={de} onChange={e => setDe(e.target.value as "C" | "F")}>
          <option value="C">°C</option>
          <option value="F">°F</option>
        </select>
      </div>
      <div>
        <label className="text-xs">Para</label>
        <select className="block border rounded px-2 py-1" value={para} onChange={e => setPara(e.target.value as "C" | "F")}>
          <option value="C">°C</option>
          <option value="F">°F</option>
        </select>
      </div>
      <button onClick={() => { const r = convert(valor, de, para); onResult(r); }} className="px-3 py-2 rounded-xl border">Converter</button>
    </div>
  );
}
