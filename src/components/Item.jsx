import { Link } from "react-router-dom";
import { formatPrice } from "../helpers";

export default function Item({ product }) {
  const { id, imageUrl, title, price } = product;

  return (
    <Link to={`/item/${id}`}>
      <div className="transform -skew-y-3 bg-white p-8 border shadow hover:shadow-lg transition-shadow duration-150">
        <div className="transform skew-y-3">
          <img
            src={imageUrl}
            alt={title}
            className="object-contain h-48 w-96 mb-4"
          />
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-lg text-gray-800">$ {formatPrice(price)}</p>
        </div>
      </div>
    </Link>
  );
}
