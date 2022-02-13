import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { formatPrice } from "../helpers";

export default function ItemDetail({ producto, onAdd, addedToCart }) {
  const { imageUrl, title, price, description, stock } = producto;

  return (
    <div>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>$ {price && formatPrice(price)}</p>
        <p>{description}</p>
      </div>
      {addedToCart ? (
        <div>
          <Link to="/cart">Terminar mi compra</Link>
        </div>
      ) : (
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
}
