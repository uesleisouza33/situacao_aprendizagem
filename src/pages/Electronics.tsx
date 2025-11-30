// import React, { type JSX } from "react";
import OhmCalculator from "../components/demos/OhmCalculator";

export default function Electronics() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">

      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">Fundamentos de Eletroeletrônica</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Conceitos essenciais de componentes eletrônicos, sensores, Arduino e cálculos fundamentais.</p>
      </section>

      {/* ---------------- COMPONENTES ELETRÔNICOS ---------------- */}
      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">1. Componentes Eletrônicos</h2>
        <p className="text-slate-600 mb-4">Principais dispositivos usados em projetos eletrônicos:</p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li><strong>Resistor:</strong> controla e limita a corrente no circuito. Medido em Ohms (Ω).</li>
          <li><strong>Diodo LED:</strong> emite luz ao ser polarizado. Necessita resistor em série.</li>
          <li><strong>Transistor:</strong> chave ou amplificador, podendo controlar cargas maiores.</li>
          <li><strong>Circuito Integrado (CI):</strong> conjunto miniaturizado de componentes em um único chip.</li>
        </ul>
      </section>

      {/* ---------------- SENSORES ---------------- */}
      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">2. Sensores Empregados em Automação</h2>
        <p className="text-slate-600 mb-4">Sensores convertem sinais físicos em sinais elétricos para leitura por microcontroladores.</p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li><strong>Temperatura:</strong> LM35, DHT11, DHT22.</li>
          <li><strong>Umidade:</strong> DHT11/DHT22.</li>
          <li><strong>Luminosidade:</strong> LDR (resistor dependente de luz).</li>
          <li><strong>Distância:</strong> ultrassônico HC‑SR04.</li>
        </ul>
      </section>

      {/* ---------------- ARDUINO ---------------- */}
      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">3. Arduino — Fundamentos</h2>
        <p className="text-slate-600"><strong>O que é:</strong> plataforma microcontrolada para prototipagem de projetos eletrônicos.</p>
        <p className="text-slate-600"><strong>Para que serve:</strong> ler sensores, acionar LEDs, motores, relés, displays etc.</p>
        <p className="text-slate-600"><strong>Aplicações:</strong> robótica, automação residencial, IoT.</p>
        <p className="text-slate-600"><strong>Vantagens:</strong> fácil uso, vasta comunidade, muitas bibliotecas.</p>
        <p className="text-slate-600"><strong>Desvantagens:</strong> limitado para aplicações mais pesadas, clock baixo.</p>
      </section>

      {/* ---------------- ENTRADAS E SAÍDAS ---------------- */}
      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm space-y-3">
        <h2 className="text-2xl font-semibold">4. Como o Arduino funciona? Eletrônica Embarcada</h2>
        <p className="text-slate-600">Eletrônica embarcada combina hardware (sensores e componentes) com software (código C++ da IDE Arduino).</p>
      </section>

      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">5. Linguagens usadas no Arduino</h2>
        <p className="text-slate-600">Principal: <strong>C/C++</strong> com funções próprias (setup, loop). Algumas placas suportam <strong>Python</strong> (MicroPython).</p>
      </section>

      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">6. Entradas e saídas digitais</h2>
        <p className="text-slate-600">Lógica binária: 0V (LOW) e 5V (HIGH). Usadas para botões, LEDs, relés, buzzers.</p>
      </section>

      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">7. Entradas analógicas</h2>
        <p className="text-slate-600">Lidas pelo conversor A/D (ADC). No Arduino UNO: valores de 0 a 1023, correspondendo a 0–5V.</p>
      </section>

      {/* ---------------- OHM CALCULATOR ---------------- */}
      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">8. Calculadora — Lei de Ohm</h2>
        <OhmCalculator />
      </section>

      {/* ---------------- SCRIPT POTÊNCIA ---------------- */}
      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">9. Cálculo de Potência</h2>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded text-sm font-mono">{`// Potência elétrica
// P = V * I
function potencia(v, i) {
  return v * i;
}`}</pre>
      </section>

      {/* ---------------- SENSOR + SAÍDA DIGITAL (TEÓRICO) ---------------- */}
      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">10. Leitura de Sensor + Acionamento Digital</h2>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded text-sm font-mono">{`// Exemplo Arduino (C++)
int sensor = A0;
int led = 13;
void setup(){
  pinMode(led, OUTPUT);
}
void loop(){
  int valor = analogRead(sensor);
  if(valor > 600) digitalWrite(led, HIGH);
  else digitalWrite(led, LOW);
}`}</pre>
      </section>

      {/* ---------------- DIODO, LED, DISPLAY ---------------- */}
      <section className="mb-10 bg-white border rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-xl font-semibold">11. Diodo, LED e Display 7 Segmentos</h2>
        <p className="text-slate-600"><strong>Diodo:</strong> componente que permite corrente em um único sentido.</p>
        <p className="text-slate-600"><strong>LED:</strong> diodo emissor de luz, usado para indicações.</p>
        <p className="text-slate-600"><strong>Display 7 Segmentos:</strong> formado por 7 LEDs internos, cada um representando um segmento para formar números.</p>
      </section>
    </main>
  );
}