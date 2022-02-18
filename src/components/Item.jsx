import { Link } from "react-router-dom";
import { formatPrice } from "../helpers";

function Item({ producto }) {
  const { id, imageUrl, title, price } = producto;

  return (
    <div className="mx-auto">
      <Link to={`/item/${id}`}>
        <img src={imageUrl} alt={title} className="object-contain h-48 w-96" />
        <h2>{title}</h2>
      </Link>
      <p>$ {formatPrice(price)}</p>
    </div>
  );
}

export default Item;
