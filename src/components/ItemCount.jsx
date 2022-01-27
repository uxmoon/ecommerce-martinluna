import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, onAdd, onSubtract }) {
  const [contador, setContador] = useState(0);

  const add = () => {
    /**
     * Resto hasta que no haya stock disponible
     * Agrego 1 al contador interno
     */
    if (stock > 0) {
      setContador((contador) => contador + 1);
      onAdd(1);
    }
  };

  const subtract = () => {
    /**
     * Sumo 1 al stock disponible
     * Resto 1 al contador interno
     */
    if (contador > 0) {
      setContador((contador) => contador - 1);
      onSubtract(1);
    }
  };

  /* Muestro un mensaje con la cantidad de productos */
  const agregarProducto = () => {
    alert(`Se agregaron ${contador} productos al carrito`);
  };

  return (
    <div className="ItemCount">
      {/* Muestro el stock disponible */}
      <p>Stock disponible: {stock}</p>

      <div className="ItemCount-actions">
        {/* Botones para agrega o quitar productos */}
        <button className="ItemCount-button" onClick={subtract}>
          -
        </button>
        <div className="ItemCount-number">{contador}</div>
        <button className="ItemCount-button" onClick={add}>
          +
        </button>
      </div>

      <button onClick={agregarProducto} className="Button">
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
