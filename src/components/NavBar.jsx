import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-container">
        <p>
          <NavLink to="/">Mi Tienda</NavLink>
        </p>
        <nav>
          <ul>
            <li>
              <NavLink to="/category/audio">Audio</NavLink>
            </li>
            <li>
              <NavLink to="/category/computacion">Computación</NavLink>
            </li>
            <li>
              <NavLink to="/category/televisores">Televisores</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
