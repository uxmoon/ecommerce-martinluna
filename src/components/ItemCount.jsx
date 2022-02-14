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
      <div className="flex items-center mb-8">
        <div className="flex items-center">
          <button
            onClick={subtract}
            aria-label="Quitar"
            className="bg-blue-600 text-white w-12 h-12 rounded shadow"
          >
            <span aria-hidden="true">&#8722;</span>
          </button>
          <div className="w-12 text-center font-semibold">{contador}</div>
          <button
            onClick={add}
            aria-label="Agregar"
            className="bg-blue-600 text-white w-12 h-12 rounded shadow"
          >
            <span aria-hidden="true">&#43;</span>
          </button>
        </div>
        <p className="ml-4">Stock disponible: {stock}</p>
      </div>

      <button
        onClick={() => onAdd(contador)}
        className="bg-blue-600 text-white font-semibold block p-4 rounded shadow w-full sm:w-auto"
      >
        Agregar al carro
      </button>
    </div>
  );
}

export default ItemCount;
