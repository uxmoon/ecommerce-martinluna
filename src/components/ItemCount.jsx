import React, { useState } from "react";

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
    <div>
      {/* Muestro el stock disponible */}
      <p>Stock disponible: {stockDisponible}</p>

      {/* Botones para agrega o quitar productos */}
      <button onClick={restar}>restar</button>
      {contador}
      <button onClick={sumar}>sumar</button>

      <button onClick={agregarProducto}>Agregar al carrito</button>
    </div>
  );
};
