import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";

export default function Cart() {
  const { cart } = useContext(cartContext);
  console.log(cart);
  return (
    <div>
      <h1>Carro de compras</h1>
      {cart.length === 0 && <p>No hay productos en el carro.</p>}
      {cart.map((product) => (
        <div key={product.item.id}>
          <p>{product.item.title}</p>
          <p>cantidad: {product.quantity}</p>
        </div>
      ))}
    </div>
  );
}
