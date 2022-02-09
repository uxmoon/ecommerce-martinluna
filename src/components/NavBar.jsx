import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex space-x-4">
            {/* logo */}
            <NavLink to="/" className="flex py-2 md:px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <span className="font-bold">Mi Tienda</span>
            </NavLink>

            {/* Menu */}
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
