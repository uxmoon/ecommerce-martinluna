import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";

export default function Cart() {
  const { cart } = useContext(cartContext);
  console.log(cart);
  return (
    <div>
      <h1>Carro de compras</h1>
      <p>No hay productos en el carro.</p>
    </div>
  );
}
