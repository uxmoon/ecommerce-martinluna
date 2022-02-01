import React, { useState, createContext } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <>
      <cartContext.Provider value={{ cart }}>{children}</cartContext.Provider>
    </>
  );
}
