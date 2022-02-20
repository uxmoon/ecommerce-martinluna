import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartProvider";
import { IconCart } from "./Icons";

export default function CartWidget() {
  const { cart } = useContext(cartContext);

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return cart.length ? (
    <Link
      to="/cart"
      className="hidden md:flex items-center space-x-2 bg-white text-indigo-600 rounded px-2 py-1"
    >
      {IconCart}
      <span>{totalItems}</span>
    </Link>
  ) : (
    ""
  );
}
