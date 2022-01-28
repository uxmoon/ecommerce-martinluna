import React, { useState, useEffect, useContext } from "react";
import "./ItemCount.css";
import { contexto } from "./CartContext";

function ItemCount({ stock, onAdd, onSubtract, onAddToCart }) {
  const { alertaCarro } = useContext(contexto);
  const [contador, setContador] = useState(0);
  const [disableButton, setDisableButton] = useState(true);

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

  useEffect(() => {
    if (contador > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [contador]);

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

      <button
        // onClick={() => onAddToCart()}
        onClick={() => alertaCarro()}
        className="Button"
        disabled={disableButton}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
