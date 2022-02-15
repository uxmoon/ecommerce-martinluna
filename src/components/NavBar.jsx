import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { IconLogo, IconMenu, IconClose } from "./Icons";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex space-x-4">
            <NavLink to="/" className="flex py-2 md:px-2">
              {IconLogo}
              <span className="font-bold">Mi Tienda</span>
            </NavLink>

            <div className="hidden md:flex space-x-2">
              <NavLink
                to="/category/audio"
                className="py-2 px-3 hover:bg-gray-600 hover:text-white rounded"
              >
                Audio
              </NavLink>
              <NavLink
                to="/category/computacion"
                className="py-2 px-3 hover:bg-gray-600 hover:text-white rounded"
              >
                Computación
              </NavLink>
              <NavLink
                to="/category/televisores"
                className="py-2 px-3 hover:bg-gray-600 hover:text-white rounded"
              >
                Televisores
              </NavLink>
            </div>
          </div>
          <CartWidget />

          <div className="md:hidden">
            <button onClick={handleToggle}>
              {toggleMenu ? IconClose : IconMenu}
            </button>
          </div>
        </div>
      </div>
      <div className={`${toggleMenu ? "" : "hidden"} md:hidden`}>
        <NavLink
          to="/category/audio"
          className="block py-2 px-4"
          onClick={handleToggle}
        >
          Audio
        </NavLink>
        <NavLink
          to="/category/computacion"
          className="block py-2 px-4"
          onClick={handleToggle}
        >
          Computación
        </NavLink>
        <NavLink
          to="/category/televisores"
          className="block py-2 px-4"
          onClick={handleToggle}
        >
          Televisores
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
