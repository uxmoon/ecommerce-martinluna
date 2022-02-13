import { Link } from "react-router-dom";
import { formatPrice } from "../helpers";

function Item({ producto }) {
  const { id, imageUrl, title, price } = producto;

  return (
    <div className="mx-auto">
      <Link to={`/item/${id}`}>
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
      </Link>
      <p>$ {formatPrice(price)}</p>
    </div>
  );
}

export default Item;
