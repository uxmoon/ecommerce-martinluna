import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { formatPrice } from "../helpers";
import "./ItemDetail.css";

export default function ItemDetail({ producto, onAdd, addedToCart }) {
  const { imageUrl, title, price, description, stock } = producto;

  return (
    <div className="ItemDetail">
      <div className="ItemDetail-thumbnail">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="ItemDetail-content">
        <h2 className="ItemDetail-title">{title}</h2>
        <p className="ItemDetail-price">$ {price && formatPrice(price)}</p>
        <p>{description}</p>
      </div>
      {addedToCart ? (
        <div className="ItemCount ItemCount--added">
          <Link to="/cart" className="Button">
            Terminar mi compra
          </Link>
        </div>
      ) : (
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
}
