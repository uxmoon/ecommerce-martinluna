import React, { useContext } from "react";
import { ReactComponent as IconCart } from "../images/cart.svg";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartProvider";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(cartContext);
  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <Link to="/cart" className="CartWidget">
      <IconCart /> {totalItems}
    </Link>
  );
};

export default CartWidget;
