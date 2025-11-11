import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faDatabase,
  faMicrochip,
  faProjectDiagram,
  faNetworkWired,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Full Stack Development",
      desc: "Criação de aplicações completas com front-end moderno e back-end robusto.",
      icon: faLaptopCode,
    },
    {
      title: "Banco de Dados",
      desc: "Modelagem e integração de bancos de dados relacionais e NoSQL.",
      icon: faDatabase,
    },
    {
      title: "Eletrônica Embarcada",
      desc: "Soluções com sensores, Arduino e automação inteligente.",
      icon: faMicrochip,
    },
    {
      title: "Algoritmos e Lógica",
      desc: "Desenvolvimento de algoritmos otimizados e fluxogramas inteligentes.",
      icon: faProjectDiagram,
    },
    {
      title: "Redes e Infraestrutura",
      desc: "Planejamento e configuração de redes e servidores web.",
      icon: faNetworkWired,
    },
    {
      title: "Soluções em TI",
      desc: "Consultoria e manutenção de sistemas tecnológicos personalizados.",
      icon: faCogs,
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* Cabeçalho */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Nossos Serviços</h1>
        <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          A <span className="font-semibold text-indigo-600">Carvalho Software</span> oferece soluções completas em
          tecnologia, desenvolvimento e inovação. Trabalhamos em diversas áreas
          da computação e eletrônica para transformar ideias em projetos reais.
        </p>
      </section>

      {/* Grid de serviços */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white p-6 rounded-xl border shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
          >
            <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
              <FontAwesomeIcon icon={s.icon} />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 text-center">
              {s.title}
            </h3>
            <p className="text-sm text-slate-600 mt-3 text-center">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* Seção institucional */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          Comprometimento e Qualidade
        </h2>
        <p className="text-slate-600 mb-6">
          Nossa equipe é formada por profissionais técnicos capacitados,
          dedicados a oferecer soluções tecnológicas que unem eficiência e
          inovação. Cada projeto é desenvolvido com foco em resultados
          práticos, qualidade de código e excelente desempenho.
        </p>

        <Link
          to="/contact"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
        >
          Fale Conosco
        </Link>
      </section>
    </main>
  );
}
