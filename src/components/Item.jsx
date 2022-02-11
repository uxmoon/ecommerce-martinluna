import { Link } from "react-router-dom";
import { formatPrice } from "../helpers";
// import "./Item.css";

function Item({ producto }) {
  const { id, imageUrl, title, price } = producto;

  return (
    <div className="Item">
      <Link to={`/item/${id}`}>
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
      </Link>
      <p>$ {formatPrice(price)}</p>
    </div>
  );
}

export default Item;
