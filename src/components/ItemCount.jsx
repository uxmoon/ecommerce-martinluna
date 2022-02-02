import React, { useState, useEffect, useContext } from "react";
import "./ItemCount.css";

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
    <div className="ItemCount">
      <p>Stock disponible: {stock}</p>

      <div className="ItemCount-actions">
        <button
          className="Button Button--icon"
          onClick={subtract}
          aria-label="Quitar"
        >
          <span aria-hidden="true">&#8722;</span>
        </button>
        <div className="ItemCount-number">{contador}</div>
        <button
          className="Button Button--icon"
          onClick={add}
          aria-label="Agregar"
        >
          <span aria-hidden="true">&#43;</span>
        </button>
      </div>

      <button onClick={() => onAdd(contador)} className="Button">
        Agregar al carro
      </button>
    </div>
  );
}

export default ItemCount;
