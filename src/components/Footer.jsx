export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto footer py-4 bg-indigo-600">
      <p className="text-center text-white">
        &copy; {currentYear}{" "}
        <span className="uppercase text-white">Strimin</span>
      </p>
    </footer>
  );
}
