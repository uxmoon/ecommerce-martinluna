import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { formatPrice } from "../helpers";

export default function ItemDetail({ product, onAdd, addedToCart }) {
  const { imageUrl, title, price, description, stock } = product;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain h-96 w-96 mb-4"
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-xl mb-4">$ {price && formatPrice(price)}</p>
        <p className="mb-4">{description}</p>
        {addedToCart ? (
          <>
            <Link
              to="/cart"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-indigo-600 text-white font-semibold px-4 py-3 rounded shadow transition-colors duration-150 hover:bg-indigo-700 mb-4 sm:mr-4 border border-indigo-600"
            >
              Terminar mi compra
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-indigo-600 border border-indigo-600 transition-colors duration-150 px-4 py-3 font-semibold text-indigo-600 hover:text-white rounded"
            >
              Seguir comprando
            </Link>
          </>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}
