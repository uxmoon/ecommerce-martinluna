import React, { useState, createContext } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const indexItem = cart.findIndex((el) => el.item.id === item.id);
      cart[indexItem].quantity = cart[indexItem].quantity + quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: item, quantity: quantity }]);
    }
  };

  const isInCart = (itemId) => {
    return cart.some((el) => el.item.id === itemId);
  };

  const removeItem = (itemId) => {
    const filteredItem = cart.filter((el) => el.item.id !== itemId);
    setCart(filteredItem);
  };

  const clearCart = () => {
    setCart([]);
  };

  const addOrder = (data) => {
    setOrder(data);
  };

  const totalItems = (arr) => {
    return arr.reduce((sum, val) => sum + val.quantity, 0)
  }

  const totalPrice = (arr) => {
    return arr.reduce((sum, val) => sum + (val.item.price * val.quantity), 0)
  }

  return (
    <>
      <cartContext.Provider
        value={{ cart, order, addItem, addOrder, removeItem, clearCart, totalItems, totalPrice }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}
