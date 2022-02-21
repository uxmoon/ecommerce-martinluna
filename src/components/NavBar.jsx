import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { IconLogo, IconMenu, IconClose } from "./Icons";
import { formatLink } from "../helpers";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuLinks = ["Cámaras", "Iluminación", "Micrófonos"];

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
              {menuLinks.map((menu) => (
                <NavLink
                  key={formatLink(menu)}
                  to={`/category/${formatLink(menu)}`}
                  className="py-2 px-3 text-white hover:bg-white hover:text-indigo-600 rounded"
                >
                  {menu}
                </NavLink>
              ))}
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
        {menuLinks.map((menu) => (
          <NavLink
            key={formatLink(menu)}
            to={`/category/${formatLink(menu)}`}
            className="text-white block py-2 px-4"
            onClick={handleToggle}
          >
            {menu}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
