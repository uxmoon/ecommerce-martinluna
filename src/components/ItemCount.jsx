import React, { useState } from "react";
import { IconMinus, IconPlus } from "./Icons";

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
    <>
      <div className="flex items-center mb-8">
        <div className="flex items-center">
          <button
            type="button"
            onClick={subtract}
            aria-label="Quitar"
            className="bg-white hover:bg-indigo-600 border border-indigo-600 transition-colors duration-150 p-3 font-semibold text-indigo-600 hover:text-white inline-flex items-center rounded"
          >
            {IconMinus}
          </button>
          <div className="w-12 text-center font-semibold">{contador}</div>
          <button
            type="button"
            onClick={add}
            aria-label="Agregar"
            className="bg-white hover:bg-indigo-600 border border-indigo-600 transition-colors duration-150 p-3 font-semibold text-indigo-600 hover:text-white inline-flex items-center rounded"
          >
            {IconPlus}
          </button>
        </div>
        <p className="ml-4 text-gray-600">Stock disponible: {stock}</p>
      </div>

      <button
        onClick={() => onAdd(contador)}
        className="bg-indigo-600 text-white font-semibold px-4 py-3 rounded shadow transition-colors duration-150 hover:bg-indigo-700 outline outline-offset-2 focus:bg-indigo-700 w-full md:w-auto"
      >
        Agregar al carro
      </button>
    </>
  );
}

export default ItemCount;
