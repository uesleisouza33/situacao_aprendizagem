import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBrain,
  faLaptopCode,
  faDatabase,
  faMicrochip,
  faProjectDiagram,
  faNetworkWired,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const services = [
    {
      title: "Full Stack",
      desc: "Desenvolvimento completo de aplicações web — do front-end ao back-end, integrando banco de dados e APIs.",
      emoji: <FontAwesomeIcon icon={faLaptopCode} />,
    },
    {
      title: "Eletrônica Embarcada",
      desc: "Projetos com Arduino, sensores e automação — integração entre hardware e software.",
      emoji: <FontAwesomeIcon icon={faMicrochip} />,
    },
    {
      title: "Banco de Dados",
      desc: "Modelagem, implementação de bancos relacionais",
      emoji: <FontAwesomeIcon icon={faDatabase} />,
    },
    {
      title: "Algoritmos e Lógica Computacional",
      desc: "Criação e análise de algoritmos eficientes para resolver problemas reais.",
      emoji: <FontAwesomeIcon icon={faProjectDiagram} />,
    },
    {
      title: "Redes e Infraestrutura",
      desc: "Configuração de servidores, endereçamento IP e protocolos de comunicação web.",
      emoji: <FontAwesomeIcon icon={faNetworkWired} />,
    },
    {
        title: "Soluções em TI",
        desc: "Consultoria, manutenção e implementação de sistemas tecnológicos personalizados.",
        emoji: <FontAwesomeIcon icon={faCogs} />,
    },
  ];
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Bem-vindo à <span className="text-indigo-600">Carvalho</span>{" "}
            Software
          </h1>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Somos uma empresa especializada em desenvolvimento de sistemas,
            eletrônica embarcada, banco de dados e soluções em tecnologia da
            informação. Explore nossos serviços e descubra como a tecnologia
            pode transformar sua empresa.
          </p>

          <div className="flex gap-3">
            <Link
              to="/services"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
            >
              Ver Serviços
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 border rounded-md text-slate-700 hover:bg-slate-50 transition"
            >
              Contato
            </Link>
          </div>
        </div>

        <div className="bg-linear-to-br from-indigo-50 to-white p-6 rounded-lg border text-center">
          <p className="font-medium text-slate-700 mb-3">
            Aprendizado e Inovação
          </p>
          <div className="text-6xl">
            <FontAwesomeIcon icon={faBrain} />
          </div>
          <p className="text-slate-500 mt-3 text-sm">
            “Transformando conhecimento em soluções reais.”
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Áreas de Atuação
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((card) => (
            <div
              key={card.title}
              className="bg-white p-5 rounded-lg shadow hover:-translate-y-1 hover:shadow-md transition hover:cursor-pointer"
            >
              <p className="text-indigo-600 text-3xl mb-4">{card.emoji}</p>
              <h3 className="text-lg font-semibold text-slate-800">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm mt-2">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
