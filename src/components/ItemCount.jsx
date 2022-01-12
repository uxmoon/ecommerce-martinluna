import React, { useState } from "react";

export const ItemCount = () => {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador((contador) => contador + 1);
  };
  const restar = () => {
    setContador((contador) => contador - 1);
  };
  return (
    <div>
      <button onClick={restar}>restar</button>
      {contador}
      <button onClick={sumar}>sumar</button>
    </div>
  );
};
