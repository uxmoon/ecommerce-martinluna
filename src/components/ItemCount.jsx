import React, { useState } from "react";
import { IconMinus, IconPlus } from "./Icons";
import Button from "./Button";

export default function ItemCount({ stock, initial, onAdd }) {
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
          <Button onPress={subtract} variant="secondary" aria-label="Quitar">{IconMinus}</Button>
          <div className="w-12 text-center font-semibold">{contador}</div>
          <Button onPress={add} variant="secondary" aria-label="Agregar">{IconPlus}</Button>
        </div>
        <p className="ml-4 text-gray-600">Stock disponible: {stock}</p>
      </div>

      <Button onPress={() => onAdd(contador)}>Agregar al carro</Button>
    </>
  );
}
