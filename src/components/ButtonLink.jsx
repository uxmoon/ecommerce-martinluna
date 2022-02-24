import { Link } from "react-router-dom";

export default function ButtonLink(props) {
  const { children, to, variant } = props;

  const primaryStyles =
    "w-full sm:w-auto inline-flex items-center justify-center bg-indigo-600 text-white font-semibold px-4 py-3 rounded shadow transition-colors duration-150 hover:bg-indigo-700 mb-4 sm:mr-4 border border-indigo-600";
  const secondaryStyles =
    "w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-indigo-600 border border-indigo-600 transition-colors duration-150 px-4 py-3 font-semibold text-indigo-600 hover:text-white rounded";

  return (
    <Link
      to={to}
      className={variant === "secondary" ? secondaryStyles : primaryStyles}
    >
      {children}
    </Link>
  );
}
