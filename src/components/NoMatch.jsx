import { useLocation, Link } from "react-router-dom";
export default function NoMatch() {
  let location = useLocation();

  return (
    <main className="w-full max-w-7xl mx-auto px-4 pt-8 pb-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        Página no encontrada
      </h1>
      <p className="text-lg mb-4">
        No hay coincidencias para <code>{location.pathname}</code>
      </p>
      <Link
        to="/"
        className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-indigo-600 border border-indigo-600 transition-colors duration-150 px-4 py-3 font-semibold text-indigo-600 hover:text-white rounded"
      >
        Página principal
      </Link>
    </main>
  );
}
