import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import "./Cart.css";

export default function Cart() {
  const { cart, removeItem, clear } = useContext(cartContext);
  console.log(cart);
  return (
    <div className="Cart">
      <div className="Cart-container">
        <h1>Carro de compras</h1>
        {cart.length === 0 ? (
          <p>No hay productos en el carro.</p>
        ) : (
          <button className="Button Button--secondary" onClick={() => clear()}>
            Quitar todos
          </button>
        )}
        {cart.map((product) => (
          <div key={product.item.id}>
            <p>{product.item.title}</p>
            <p>cantidad: {product.quantity}</p>
            <button
              className="Button Button--secondary"
              onClick={() => removeItem(product.item.id)}
            >
              Quitar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
