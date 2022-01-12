import React, { useState } from "react";
import "./ItemCount.css";

export const ItemCount = () => {
  // Inicio estado con un producto seleccionado por defecto
  const [contador, setContador] = useState(1);

  // Configuro el stock disponible
  const stockDisponible = 10;

  // Funciones para actualizar el estado
  const sumar = () => {
    // No debe superar el stock disponible
    if (contador < stockDisponible) {
      setContador((contador) => contador + 1);
    }
  };
  const restar = () => {
    // No debe ser menor a 1 producto
    if (contador > 1) {
      setContador((contador) => contador - 1);
    }
  };

  /* Muestro un mensaje con la cantidad de productos */
  const agregarProducto = () => {
    alert(`Se agregaron ${contador} productos al carrito`);
  };

  return (
    <div className="ItemCount">
      {/* Muestro el stock disponible */}
      <p>Stock disponible: {stockDisponible}</p>

      <div className="ItemCount-actions">
        {/* Botones para agrega o quitar productos */}
        <button className="ItemCount-button" onClick={restar}>
          -
        </button>
        <div className="ItemCount-number">{contador}</div>
        <button className="ItemCount-button" onClick={sumar}>
          +
        </button>
      </div>

      <button onClick={agregarProducto} className="Button">
        Agregar al carrito
      </button>
    </div>
  );
};
