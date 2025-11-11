import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-28">
        <Link to="/" className="flex items-center gap-3">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo Carvalho Software"
            className="h-28 w-auto"
          />
          {/* Nome
          <span className="font-semibold text-slate-800 text-lg">
            Carvalho Software
          </span> */}
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex gap-6 text-slate-700">
          <Link to="/services" className="hover:text-slate-900">
            Serviços
          </Link>
          <Link to="/algorithms" className="hover:text-slate-900">
            Algoritmos
          </Link>
          <Link to="/electronics" className="hover:text-slate-900">
            Eletrônica
          </Link>
          <Link to="/databases" className="hover:text-slate-900">
            Banco de Dados
          </Link>
          <Link to="/networking" className="hover:text-slate-900">
            Redes
          </Link>
          <Link to="/contact" className="text-indigo-600 font-medium">
            Contato
          </Link>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-4 flex flex-col gap-2">
            <Link to="/services" onClick={() => setOpen(false)}>
              Serviços
            </Link>
            <Link to="/algorithms" onClick={() => setOpen(false)}>
              Algoritmos
            </Link>
            <Link to="/electronics" onClick={() => setOpen(false)}>
              Eletrônica
            </Link>
            <Link to="/databases" onClick={() => setOpen(false)}>
              BD
            </Link>
            <Link to="/networking" onClick={() => setOpen(false)}>
              Redes
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-indigo-600 font-medium"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
