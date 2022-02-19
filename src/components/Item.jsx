import { Link } from "react-router-dom";
import { formatPrice } from "../helpers";

function Item({ producto }) {
  const { id, imageUrl, title, price } = producto;

  return (
    <div className="transform -skew-y-3 bg-white p-8 border shadow-md">
      <div className="transform skew-y-3">
        <Link to={`/item/${id}`}>
          <img
            src={imageUrl}
            alt={title}
            className="object-contain h-48 w-96 mb-4"
          />
          <h2 className="text-xl font-semibold">{title}</h2>
        </Link>
        <p className="text-lg text-gray-800">$ {formatPrice(price)}</p>
      </div>
    </div>
  );
}

export default Item;
