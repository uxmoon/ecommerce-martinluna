import { ReactComponent as IconCart } from "../images/cart.svg";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => (
  <Link to="/cart" className="CartWidget">
    <IconCart /> #
  </Link>
);

export default CartWidget;
