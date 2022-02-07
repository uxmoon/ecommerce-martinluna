import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartProvider";
import { formatPrice } from "../helpers";
import "./Cart.css";

export default function Cart() {
  const { cart, removeItem, clear } = useContext(cartContext);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.item.price * item.quantity;
  }, 0);

  return (
    <div className="Cart">
      <div className="Cart-container">
        <h1>Carro de compras</h1>
        {cart.length === 0 ? (
          <>
            <p>No hay productos en el carro.</p>
            <Link to="/" className="Button Button--secondary">
              Ver productos disponibles
            </Link>
          </>
        ) : (
          <button className="Button Button--secondary" onClick={() => clear()}>
            Quitar todos
          </button>
        )}
        {cart.map((product) => (
          <div key={product.item.id}>
            <h3>{product.item.title}</h3>
            <p>$ {formatPrice(product.item.price)}</p>
            <p>Unidades: {product.quantity}</p>
            <button
              className="Button Button--secondary"
              onClick={() => removeItem(product.item.id)}
            >
              Quitar
            </button>
          </div>
        ))}
        {totalPrice > 0 && <p>Total: $ {formatPrice(totalPrice)}</p>}
      </div>
    </div>
  );
}
