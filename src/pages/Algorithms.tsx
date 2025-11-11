import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram, faCode, faBrain } from "@fortawesome/free-solid-svg-icons";

export default function Algorithms() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* Cabeçalho */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Algoritmos e Lógica Computacional
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A <span className="font-semibold text-indigo-600">Carvalho Software</span> explora os
          conceitos de lógica computacional com exemplos práticos em Portugol Studio.
        </p>
      </section>

      {/* O que é um Algoritmo */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <FontAwesomeIcon icon={faBrain} className="text-indigo-600" />
          O que é um Algoritmo?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Um <strong>algoritmo</strong> é uma sequência finita e bem definida de passos para
          resolver um problema. Podemos representá-lo em texto, fluxograma ou em
          pseudocódigo (Portugol).
        </p>
      </section>

      {/* Fluxogramas */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <FontAwesomeIcon icon={faProjectDiagram} className="text-indigo-600" />
          Fluxogramas
        </h2>
        <p className="text-slate-600 mb-4">
          Fluxogramas mostram graficamente a sequência de passos. Use o Portugol Studio para
          acompanhar a execução do algoritmo enquanto visualiza o fluxograma.
        </p>

        <div className="bg-slate-50 border rounded-lg p-4 text-center">
          <img
            src="/fluxograma-exemplo.png"
            alt="Exemplo de fluxograma"
            className="mx-auto max-h-64"
          />
          <p className="text-sm text-slate-500 mt-2">
            Fluxograma simples (início → leitura → processamento → fim)
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
          <p className="text-indigo-400">// Exemplo: Somar dois números (Portugol Studio)</p>
          <pre>{`programa
${"{"}
  inteiro a, b, soma

  escreva("Digite o primeiro número: ")
  leia(a)
  escreva("Digite o segundo número: ")
  leia(b)

  soma = a + b
  escreva("A soma é: ", soma)
${"}"}`}</pre>
        </div>

        {/* Exemplo 2: IMC */}
        <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm shadow mb-6">
          <p className="text-indigo-400">// Exemplo: Calcular IMC (Portugol Studio)</p>
          <pre>{`programa
${"{"}
  real peso, altura, imc

  escreva("Digite o peso (kg): ")
  leia(peso)
  escreva("Digite a altura (m): ")
  leia(altura)

  imc = peso / (altura * altura)
  escreva("IMC = ", imc)
${"}"}`}</pre>
        </div>

        {/* Exemplo 3: Vetor */}
        <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm shadow">
          <p className="text-indigo-400">// Exemplo: Ler 5 números em um vetor e somar (Portugol Studio)</p>
          <pre>{`programa
${"{"}
  inteiro i
  inteiro vetor[5]
  inteiro soma <- 0

  para (i <- 0; i < 5; i <- i + 1)
  ${"{"}
    escreva("Digite o número ", i+1, ": ")
    leia(vetor[i])
    soma = soma + vetor[i]
  ${"}"}

  escreva("Soma total: ", soma)
${"}"}`}</pre>
        </div>
      </section>
    </main>
  );
}
