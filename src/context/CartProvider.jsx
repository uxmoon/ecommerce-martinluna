import React, { useState, createContext } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart([...cart, { item: item, quantity: quantity }]);
  };
  return (
    <>
      <cartContext.Provider value={{ cart, addItem }}>
        {children}
      </cartContext.Provider>
    </>
  );
}
