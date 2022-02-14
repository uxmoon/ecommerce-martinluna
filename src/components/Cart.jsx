import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartProvider";
import { formatPrice } from "../helpers";
import Form from "./Form";

export default function Cart() {
  const { cart, removeItem, clear } = useContext(cartContext);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.item.price * item.quantity;
  }, 0);

  return (
    <main className="max-w-7xl mx-auto px-4">
      <h1>Carro de compras</h1>
      {cart.length === 0 ? (
        <>
          <p>No hay productos en el carro.</p>
          <Link to="/">Ver productos disponibles</Link>
        </>
      ) : (
        <button onClick={() => clear()}>Quitar todos</button>
      )}
      {cart.map((product) => (
        <div key={product.item.id}>
          <div>
            <img src={product.item.imageUrl} alt={product.item.title} />
            <h3>{product.item.title}</h3>
          </div>
          <div>
            <p>$ {formatPrice(product.item.price)}</p>
            <p>
              {product.quantity}{" "}
              {product.quantity === 1 ? "unidad" : "unidades"}
            </p>
            <button onClick={() => removeItem(product.item.id)}>Quitar</button>
          </div>
        </div>
      ))}
      {totalPrice > 0 && (
        <p>
          Total
          <br />
          <strong>$ {formatPrice(totalPrice)}</strong>
        </p>
      )}
      <Form cart={cart} totalPrice={totalPrice} />
    </main>
  );
}
