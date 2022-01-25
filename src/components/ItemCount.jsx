import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial }) {
  // Inicio estado con un producto seleccionado por defecto
  const [contador, setContador] = useState(initial);

  // Configuro el stock disponible
  // const stockDisponible = 10;

  // Funciones para actualizar el estado
  const onAdd = () => {
    // No debe superar el stock disponible
    if (contador < stock) {
      setContador((contador) => contador + 1);
    }
  };
  const onSubtract = () => {
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
      <p>Stock disponible: {stock}</p>

      <div className="ItemCount-actions">
        {/* Botones para agrega o quitar productos */}
        <button className="ItemCount-button" onClick={onSubtract}>
          -
        </button>
        <div className="ItemCount-number">{contador}</div>
        <button className="ItemCount-button" onClick={onAdd}>
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
