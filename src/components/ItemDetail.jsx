import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { formatPrice } from "../helpers";

export default function ItemDetail({ producto, onAdd, addedToCart }) {
  const { imageUrl, title, price, description, stock } = producto;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-8">
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-xl mb-4">$ {price && formatPrice(price)}</p>
        <p className="mb-4">{description}</p>
        {addedToCart ? (
          <Link
            to="/cart"
            className="inline-flex items-center bg-blue-600 text-white font-semibold p-4 rounded shadow transition-colors duration-150 hover:bg-blue-700 outline outline-offset-2 focus:bg-blue-700"
          >
            Terminar mi compra
          </Link>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}
