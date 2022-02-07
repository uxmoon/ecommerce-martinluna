import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import "./Cart.css";

export default function Cart() {
  const { cart, removeItem, clear } = useContext(cartContext);

  const totalPrice = cart.reduce((total, item) => {
    console.log(item.item.price);
    console.log(item.quantity);
    return total + item.item.price * item.quantity;
  }, 0);

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
            <h3>{product.item.title}</h3>
            <p>$ {product.item.price}</p>
            <p>Unidades: {product.quantity}</p>
            <button
              className="Button Button--secondary"
              onClick={() => removeItem(product.item.id)}
            >
              Quitar
            </button>
          </div>
        ))}
        <p>Total: $ {totalPrice}</p>
      </div>
    </div>
  );
}
