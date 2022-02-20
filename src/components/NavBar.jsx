import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { IconLogo, IconMenu, IconClose } from "./Icons";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex space-x-4">
            <NavLink to="/" className="flex py-2 md:px-2 text-white">
              {IconLogo}
              <span className="ml-1 font-bold">STRIMIN</span>
            </NavLink>

            <div className="hidden md:flex space-x-2">
              <NavLink
                to="/category/camaras"
                className="py-2 px-3 text-white hover:bg-white hover:text-indigo-600 rounded"
              >
                Cámaras
              </NavLink>
              <NavLink
                to="/category/iluminacion"
                className="py-2 px-3 text-white hover:bg-white hover:text-indigo-600 rounded"
              >
                Iluminación
              </NavLink>
              <NavLink
                to="/category/microfonos"
                className="py-2 px-3 text-white hover:bg-white hover:text-indigo-600 rounded"
              >
                Micrófonos
              </NavLink>
            </div>
          </div>
          <CartWidget />

          <div className="md:hidden">
            <button onClick={handleToggle} className="text-white">
              {toggleMenu ? IconClose : IconMenu}
            </button>
          </div>
        </div>
      </div>
      <div className={`${toggleMenu ? "" : "hidden"} md:hidden`}>
        <NavLink
          to="/category/camaras"
          className="text-white block py-2 px-4"
          onClick={handleToggle}
        >
          Cámaras
        </NavLink>
        <NavLink
          to="/category/iluminacion"
          className="text-white block py-2 px-4"
          onClick={handleToggle}
        >
          Iluminación
        </NavLink>
        <NavLink
          to="/category/microfonos"
          className="text-white block py-2 px-4"
          onClick={handleToggle}
        >
          Micrófonos
        </NavLink>
      </div>
    </nav>
  );
}
