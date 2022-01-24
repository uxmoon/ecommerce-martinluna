import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/products">Productos</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Carrito</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
