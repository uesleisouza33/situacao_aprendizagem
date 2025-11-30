export default function ITBasic() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">

      <h1 className="text-3xl font-bold mb-4">Fundamentos de Tecnologia da Informação</h1>

      {/* 1. Hardware */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">1. O que é Hardware?</h2>

        <p className="text-slate-700 mb-4">
          <strong>Hardware</strong> é a parte física do computador — tudo que você pode tocar,
          como placa-mãe, CPU, memória, HD/SSD, cabos e periféricos.
        </p>

        <h3 className="font-semibold mt-3">Placa-mãe</h3>
        <p className="text-slate-700">
          É a placa principal que conecta todos os componentes. Ela permite que CPU, RAM e
          armazenamento se comuniquem.
        </p>

        <h3 className="font-semibold mt-3">Processador (CPU)</h3>
        <p className="text-slate-700">
          É o “cérebro” do computador. Executa cálculos, instruções e controla o funcionamento dos programas.
        </p>

        <h3 className="font-semibold mt-3">Memória RAM</h3>
        <p className="text-slate-700">
          É a memória principal. Armazena dados temporários para acesso rápido. Quanto mais RAM, mais programas podem
          rodar ao mesmo tempo.
        </p>
      </section>

      {/* 2. Sistema Operacional */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">2. O que é Sistema Operacional?</h2>

        <p className="text-slate-700 mb-4">
          O <strong>Sistema Operacional (SO)</strong> é o software que controla o hardware e permite que
          programas funcionem. Ele gerencia memória, arquivos, processos e dispositivos.
        </p>

        <h3 className="font-semibold mb-2">Exemplos:</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li>Windows</li>
          <li>Linux (Ubuntu, Debian...)</li>
          <li>macOS</li>
          <li>Android</li>
        </ul>
      </section>

      {/* 3. Sistema de Arquivos */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">3. Sistema de Arquivos</h2>

        <p className="text-slate-700">
          O <strong>sistema de arquivos</strong> organiza e controla como arquivos são armazenados em
          discos, SSDs e pendrives. Exemplos: NTFS, FAT32, EXT4.
        </p>

        <h3 className="font-semibold mt-4 mb-2">Modo Texto (CMD / Terminal)</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li><code>dir</code> — lista arquivos</li>
          <li><code>cd pasta</code> — muda de pasta</li>
          <li><code>mkdir nome</code> — cria pasta</li>
          <li><code>del arquivo.txt</code> — exclui arquivo</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Modo Gráfico (Explorer)</h3>
        <p className="text-slate-700">
          Interface visual para administrar arquivos: clicar, arrastar, renomear e organizar pastas.
        </p>
      </section>

      {/* 4. Software de Escritório */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">4. Software de Escritório</h2>

        <p className="text-slate-700 mb-4">
          São programas usados em empresas, escolas e trabalhos administrativos.
        </p>

        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>
            <strong>Microsoft Word:</strong> criação de documentos, textos e relatórios.
          </li>
          <li>
            <strong>Microsoft Excel:</strong> planilhas, cálculos, gráficos e análises.
          </li>
          <li>
            <strong>Microsoft PowerPoint:</strong> apresentações e slides.
          </li>
        </ul>
      </section>
    </main>
  );
}
