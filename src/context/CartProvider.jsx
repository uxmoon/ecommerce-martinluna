import React, { useState, createContext } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const indexItem = cart.findIndex((el) => el.item.id === item.id);
      // console.log(indexItem);
      cart[indexItem].quantity = cart[indexItem].quantity + quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: item, quantity: quantity }]);
    }
  };

  const isInCart = (itemId) => {
    return cart.some((el) => el.item.id === itemId);
  };

  return (
    <>
      <cartContext.Provider value={{ cart, addItem }}>
        {children}
      </cartContext.Provider>
    </>
  );
}
