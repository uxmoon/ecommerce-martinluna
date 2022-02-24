import { useLocation } from "react-router-dom";
import ButtonLink from "./ButtonLink";

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
      <ButtonLink to="/" variant="secondary">
        Página principal
      </ButtonLink>
    </main>
  );
}
