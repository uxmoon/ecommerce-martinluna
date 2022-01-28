import React, { useState, createContext } from "react";

export const contexto = createContext();

export default function CartContext({ children }) {
  const [carrito, setCarrito] = useState([]);

  function addItem() {
    console.log("add item");
    // carrito + item
  }
  function removeItem(itemId) {
    // carrito filtro item
    console.log("remove item");
  }
  function clearCart() {
    console.log("clear cart");
  }
  function itemInCart() {
    console.log("item is already in cart");
  }
  function alertaCarro() {
    alert("Agregar al carro!");
  }

  return (
    <>
      <contexto.Provider
        value={{ addItem, removeItem, clearCart, itemInCart, alertaCarro }}
      >
        {children}
      </contexto.Provider>
    </>
  );
}
