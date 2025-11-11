export default function Footer(){
  return (
    <footer className="bg-slate-50 border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
        <div>© {new Date().getFullYear()} Carvalho Software — Marca registrada</div>
        <div className="mt-3 md:mt-0">Desenvolvido por Ueslei Carvalho</div>
      </div>
    </footer>
  );
}