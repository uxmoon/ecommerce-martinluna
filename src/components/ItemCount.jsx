import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(initial);

  const add = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const subtract = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <p>Stock disponible: {stock}</p>

      <div>
        <button onClick={subtract} aria-label="Quitar">
          <span aria-hidden="true">&#8722;</span>
        </button>
        <div>{contador}</div>
        <button onClick={add} aria-label="Agregar">
          <span aria-hidden="true">&#43;</span>
        </button>
      </div>

      <button onClick={() => onAdd(contador)}>Agregar al carro</button>
    </div>
  );
}

export default ItemCount;
