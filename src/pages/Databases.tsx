import { useEffect, useState } from "react";

export default function Databases() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [records, setRecords] = useState<{ name: string; email: string }[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("db_records");
    if (raw) setRecords(JSON.parse(raw));
  }, []);

  const save = () => {
    if (!name || !email) return alert("Preencha nome e email");
    const next = [...records, { name, email }];
    setRecords(next);
    localStorage.setItem("db_records", JSON.stringify(next));
    setName("");
    setEmail("");
  };

  const removeAll = () => {
    if (!confirm("Remover todos os registros?")) return;
    localStorage.removeItem("db_records");
    setRecords([]);
  };

  const removeOne = (index: number) => {
    const next = records.filter((_, i) => i !== index);
    setRecords(next);
    localStorage.setItem("db_records", JSON.stringify(next));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Fundamentos de Banco de Dados
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          SGBD — sistema que guarda, organiza e recupera dados.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Form */}
        <section className="md:col-span-1 bg-white p-4 rounded-lg border">
          <h2 className="font-semibold mb-3">
            Formulário de Cadastro (simulado)
          </h2>
          <input
            className="w-full p-2 border rounded mb-2"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full p-2 border rounded mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              onClick={save}
              className="px-4 py-2 bg-indigo-600 text-white rounded"
            >
              Salvar
            </button>
            <button onClick={removeAll} className="px-4 py-2 border rounded">
              Limpar tudo
            </button>
          </div>

          <hr className="my-4" />

          <h3 className="font-semibold mb-2">Registros salvos</h3>
          <div className="space-y-2">
            {records.length === 0 ? (
              <div className="text-sm text-slate-500">Nenhum registro</div>
            ) : (
              records.map((r, i) => (
                <div
                  key={i}
                  className="bg-slate-50 p-3 rounded border flex justify-between items-center"
                >
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-xs text-slate-600">{r.email}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeOne(i)}
                      className="text-sm px-2 py-1 border rounded"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="md:col-span-2 space-y-6">
          <section className="mb-6 bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              1. O que é um SGBD? Tipos e Aplicações
            </h2>
            <p className="text-slate-600 mb-4">
              Um SGBD (Sistema de Gerenciamento de Banco de Dados) é um software
              que permite armazenar, organizar, consultar e proteger dados.
              Existem dois grandes paradigmas:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Relacional (SQL):</strong> usa tabelas com colunas e
                linhas; segue a linguagem SQL. Aplicações: sistemas bancários,
                ERPs, sites com dados estruturados. Exemplos: MySQL, PostgreSQL,
                SQL Server, SQLite.
              </li>
              <li>
                <strong>NoSQL:</strong> engloba bancos de documentos,
                chave-valor, colunar e grafos. Aplicações: dados sem esquema
                fixo, alta escalabilidade, caches e aplicações em tempo real.
                Exemplos: MongoDB (documentos), Redis (chave-valor), Cassandra
                (colunar), Neo4j (grafos).
              </li>
            </ul>
          </section>

          <section className="mb-6 bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              2. Quais os principais bancos de dados?
            </h2>
            <p className="text-slate-600 mb-4">
              Principais SGBDs usados na prática:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>MySQL/MariaDB:</strong> muito usado em aplicações web e
                hospedagem compartilhada.
              </li>
              <li>
                <strong>PostgreSQL:</strong> robusto, com recursos avançados e
                conformidade com padrões SQL.
              </li>
              <li>
                <strong>SQLite:</strong> embutido, leve, ótimo para protótipos e
                apps móveis.
              </li>
              <li>
                <strong>MongoDB:</strong> NoSQL orientado a documentos, flexível
                para dados sem esquema.
              </li>
              <li>
                <strong>Redis:</strong> armazenagem em memória para cache e
                filas rápidas.
              </li>
              <li>
                <strong>Cassandra / DynamoDB:</strong> bancos colunar para alta
                disponibilidade e escala.
              </li>
            </ul>
          </section>

          <section className="mb-6 bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              3. O que é um dicionário de dados? Tipos de dados
            </h2>
            <p className="text-slate-600 mb-4">
              O dicionário de dados é um repositório que descreve os elementos
              de dados usados no banco — nomes, tipos, restrições e descrições.
              Serve como documentação para desenvolvedores e analistas.
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Tipos numéricos:</strong> INTEGER, SMALLINT, BIGINT,
                DECIMAL, NUMERIC, FLOAT.
              </li>
              <li>
                <strong>Tipos de texto:</strong> CHAR, VARCHAR, TEXT.
              </li>
              <li>
                <strong>Datas e horas:</strong> DATE, TIME, TIMESTAMP.
              </li>
              <li>
                <strong>Lógicos/booleanos:</strong> BOOLEAN.
              </li>
              <li>
                <strong>Binários:</strong> BLOB, BYTEA — para arquivos e
                imagens.
              </li>
              <li>
                <strong>Tipos especiais:</strong> JSON/JSONB (Postgres), UUID,
                ENUM.
              </li>
            </ul>
          </section>

          <section className="mb-6 bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              4. O que é modelagem de banco de dados? Modelo DER / MER
            </h2>
            <p className="text-slate-600 mb-4">
              Modelagem é o processo de representar entidades do mundo real e
              seus relacionamentos para construir um banco de dados eficiente e
              compreensível.
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>DER (Diagrama Entidade-Relacionamento):</strong>{" "}
                representação conceitual com entidades (tabelas), atributos
                (colunas) e relacionamentos (1:1, 1:N, N:M). Usado para entender
                domínio antes de implementar.
              </li>
              <li>
                <strong>
                  MER (Modelo Entidade-Relacionamento) / Modelo Relacional:
                </strong>{" "}
                às vezes MER é usado como sinônimo de DER; em contextos
                escolares MER refere-se ao modelo lógico já adaptado a tabelas e
                chaves. Em outras fontes MER = Modelo Entidade-Relacionamento e
                DER = Diagrama dessa modelagem — nomenclaturas podem variar,
                então explique ao professor qual você usou.
              </li>
            </ul>
          </section>

          <section className="mb-6 bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              5. Exemplo de Diagrama DER
            </h2>
            <p className="text-slate-600 mb-4">
              Exemplo simples: sistema de biblioteca.
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Entidades:</strong> Livro (id_livro, título, ano), Aluno
                (id_aluno, nome, email), Empréstimo (id_emprestimo,
                data_emprestimo, data_devolucao).
              </li>
              <li>
                <strong>Relacionamentos:</strong> Aluno 1 — N Empréstimo (um
                aluno pode ter vários empréstimos). Livro 1 — N Empréstimo (um
                livro pode ser emprestado várias vezes ao longo do tempo).
              </li>
            </ul>
            <div className="mt-3">
              <img
                src="/images/der-biblioteca.png"
                alt="Exemplo DER - Biblioteca"
                className="w-full rounded border"
              />
            </div>
          </section>

          <section className="mb-6 bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              6. Exemplo de Diagrama MER
            </h2>
            <p className="text-slate-600 mb-4">
              MER — versão lógica do DER onde já definimos chaves primárias e
              estrangeiras para implementação em tabelas.
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>
                <strong>Tabelas:</strong>
                <pre className="bg-slate-50 p-2 rounded text-sm">
                  <code>
                    Livro(id_livro PK, titulo, ano) Aluno(id_aluno PK, nome,
                    email)<br></br> Emprestimo(id_emprestimo PK, id_aluno FK, id_livro
                    FK, data_emprestimo, data_devolucao)
                  </code>
                </pre>
              </li>
              <li>
                <strong>Chaves:</strong> PK = chave primária, FK = chave
                estrangeira que referencia outra tabela; garante integridade
                referencial.
              </li>
            </ul>
            <div className="mt-3">
              <img
                src="/images/mer-biblioteca.png"
                alt="Exemplo MER - Biblioteca"
                className="w-full rounded border"
              />
            </div>
          </section>

          
        </section>
      </div>
    </main>
  );
}
