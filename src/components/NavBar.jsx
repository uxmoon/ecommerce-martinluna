import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-container">
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
