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
          <div className="Cart-row" style={{ marginBottom: "1rem" }}>
            <div></div>
            <div>
              <button
                className="Button Button--secondary"
                onClick={() => clear()}
              >
                Quitar todos
              </button>
            </div>
          </div>
        )}
        {cart.map((product) => (
          <div key={product.item.id} className="Cart-item">
            <div className="Cart-item-content">
              <img src={product.item.pictureUrl} alt={product.item.title} />
              <h3>{product.item.title}</h3>
            </div>
            <div className="Cart-item-actions">
              <p>$ {formatPrice(product.item.price)}</p>
              <p>
                {product.quantity}{" "}
                {product.quantity === 1 ? "unidad" : "unidades"}
              </p>
              <button
                className="Button Button--secondary"
                onClick={() => removeItem(product.item.id)}
              >
                Quitar
              </button>
            </div>
          </div>
        ))}
        {totalPrice > 0 && (
          <div className="Cart-row">
            <div></div>
            <div>
              <p className="Cart-total">
                Total
                <br />
                <strong>$ {formatPrice(totalPrice)}</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
