import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { formatPrice } from "../helpers";

export default function ItemDetail({ producto, onAdd, addedToCart }) {
  const { imageUrl, title, price, description, stock } = producto;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-xl mb-4">$ {price && formatPrice(price)}</p>
        <p className="mb-4">{description}</p>
        {addedToCart ? (
          <div>
            <Link to="/cart">Terminar mi compra</Link>
          </div>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}
