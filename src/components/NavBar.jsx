import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
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
      <CartWidget />
    </nav>
  );
}

export default NavBar;
