function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto footer py-4 bg-gray-100">
      <p className="text-center">
        &copy; {currentYear} <span className="uppercase">Strimin</span>
      </p>
    </footer>
  );
}

export default Footer;
