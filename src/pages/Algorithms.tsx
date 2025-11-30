import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faCode,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import fluxogram from '../assets/fluxogram.jpg'

export default function Algorithms() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* Cabeçalho */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Algoritmos e Lógica Computacional
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A{" "}
          <span className="font-semibold text-indigo-600">
            Carvalho Software
          </span>{" "}
          explora os conceitos de lógica computacional com exemplos práticos em
          Portugol Studio.
        </p>
      </section>

      {/* O que é um Algoritmo */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <FontAwesomeIcon icon={faBrain} className="text-indigo-600" />O que é
          um Algoritmo?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Um <strong>algoritmo</strong> é uma sequência finita e bem definida de
          passos para resolver um problema. Podemos representá-lo em texto,
          fluxograma ou em pseudocódigo (Portugol).
        </p>
      </section>

      {/* Fluxogramas */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <FontAwesomeIcon
            icon={faProjectDiagram}
            className="text-indigo-600"
          />
          Fluxogramas
        </h2>
        <p className="text-slate-600 mb-4">
          Fluxogramas mostram graficamente a sequência de passos. Use o Portugol
          Studio para acompanhar a execução do algoritmo enquanto visualiza o
          fluxograma.
        </p>

        <div className="bg-slate-50 border rounded-lg p-4 text-center">
          <img
            src={fluxogram}
            alt="Exemplo de fluxograma"
            className="mx-auto max-h-64"
          />
          <p className="text-sm text-slate-500 mt-2">
           Fluxograma para um programa onde o usuário digita um número<br /> e o programa processa e mostra se for divisível por 11 ou 13
          </p>
        </div>
      </section>

      {/* Portugol (Portugol Studio style) */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <FontAwesomeIcon icon={faCode} className="text-indigo-600" />
          Portugol (Portugol Studio)
        </h2>

        {/* Exemplo 1: Soma de dois números */}
        <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm shadow mb-6">
          <p className="text-indigo-400">
            // Exemplo: Somar dois números (Portugol Studio)
          </p>
          <pre>{`programa
${"{"}

funcao inicio(){
  inteiro a, b, soma
  
  escreva("Digite o primeiro número: ")
  leia(a)
  escreva("Digite o segundo número: ")
  leia(b)
  
  soma = a + b
}
  escreva("A soma é: ", soma)
${"}"}`}</pre>
        </div>

        {/* Exemplo 2: IMC */}
        <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm shadow mb-6">
          <p className="text-indigo-400">
            // Exemplo: Calcular IMC (Portugol Studio)
          </p>
          <pre>{`programa
${"{"}

funcao inicio(){
  real peso, altura, imc

  escreva("Digite o peso (kg): ")
  leia(peso)
  escreva("Digite a altura (m): ")
  leia(altura)

  imc = peso / (altura * altura)
  escreva("IMC = ", imc)
 }
${"}"}`}</pre>
        </div>

        {/* Exemplo 3: Vetor */}
        <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm shadow">
          <p className="text-indigo-400">
            // Exemplo: Ler 5 números em um vetor e somar (Portugol Studio)
          </p>
          <pre>{`programa
${"{"}

funcao inicio(){
  inteiro i
  inteiro vetor[5]
  inteiro soma = 0

  para (i <- 0; i < 5; i <- i + 1)
  ${"{"}
    escreva("Digite o número ", i+1, ": ")
    leia(vetor[i])
    soma = soma + vetor[i]
  ${"}"}

  escreva("Soma total: ", soma)
 }
  
${"}"}`}</pre>
        </div>
      </section>

      <aside className="space-y-6 mt-4">
      <article className="mb-6 bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Lógica Computacional — Introdução</h2>
        <p className="text-slate-600 mb-3">
          Lógica computacional estuda como representar e manipular informação através de proposições e operadores lógicos.
          É a base para tomar decisões em programas e construir algoritmos corretos.
        </p>

        <h3 className="font-semibold mt-3">Proposição</h3>
        <p className="text-slate-600">
          Uma proposição é uma frase que pode ser verdadeira (V) ou falsa (F). Ex.: <em>"Hoje chove"</em>.
        </p>

        <h3 className="font-semibold mt-3">Operadores lógicos</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li><strong>AND (E):</strong> verdadeiro se ambas proposições forem verdadeiras.</li>
          <li><strong>OR (OU):</strong> verdadeiro se pelo menos uma for verdadeira.</li>
          <li><strong>NOT (NÃO):</strong> inverte o valor lógico.</li>
        </ul>
      </article>

      <article className="mb-6 bg-white border rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-3">Tabelas-verdade (exemplos)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left">
                <th className="border px-2 py-1">A</th>
                <th className="border px-2 py-1">B</th>
                <th className="border px-2 py-1">A AND B</th>
                <th className="border px-2 py-1">A OR B</th>
                <th className="border px-2 py-1">NOT A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">V</td>
                <td className="border px-2 py-1">V</td>
                <td className="border px-2 py-1">V</td>
                <td className="border px-2 py-1">V</td>
                <td className="border px-2 py-1">F</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">V</td>
                <td className="border px-2 py-1">F</td>
                <td className="border px-2 py-1">F</td>
                <td className="border px-2 py-1">V</td>
                <td className="border px-2 py-1">F</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">F</td>
                <td className="border px-2 py-1">V</td>
                <td className="border px-2 py-1">F</td>
                <td className="border px-2 py-1">V</td>
                <td className="border px-2 py-1">V</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">F</td>
                <td className="border px-2 py-1">F</td>
                <td className="border px-2 py-1">F</td>
                <td className="border px-2 py-1">F</td>
                <td className="border px-2 py-1">V</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <article className="mb-6 bg-white border rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-3">Conectando lógica e programação</h3>
        <p className="text-slate-600 mb-3">
          Em Portugol e em linguagens reais usamos operadores lógicos para condicionar execuções. Exemplo:
        </p>
        <div className="bg-slate-50 p-3 rounded text-sm">
          <pre>{`se (idade >= 18) e (temRG) entao
  escreva("Pode votar")
senao
  escreva("Não pode votar")
fimse`}</pre>
        </div>
      </article>
    </aside>
    </main>
  );
}
