export default function Button(props) {
  const { children, onPress, variant, ...rest } = props;

  const secondaryStyles =
    "bg-white hover:bg-indigo-600 border border-indigo-600 transition-colors duration-150 p-3 font-semibold text-indigo-600 hover:text-white inline-flex items-center rounded";
  const primaryStyles =
    "bg-indigo-600 text-white font-semibold px-4 py-3 rounded shadow transition-colors duration-150 hover:bg-indigo-700 w-full md:w-auto";

  return (
    <button
      type="button"
      onClick={onPress}
      className={variant === "secondary" ? secondaryStyles : primaryStyles}
      {...rest}
    >
      {children}
    </button>
  );
}
