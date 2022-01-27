import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";

export default function ItemDetail({ title, price, thumbnail, description }) {
  const [stock, setStock] = useState(10);
  const [addToCart, setAddToCart] = useState(false);

  const onAdd = (quantityToAdd) => {
    setStock((stock) => stock - quantityToAdd);
  };

  const onSubtract = (quantityToSubtract) => {
    setStock((stock) => stock + quantityToSubtract);
  };

  const onAddToCart = () => {
    setAddToCart(true);
  };

  return (
    <div className="ItemDetail">
      <div className="ItemDetail-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="ItemDetail-content">
        <h2 className="ItemDetail-title">{title}</h2>
        <p className="ItemDetail-price">{price}</p>
        <ul>
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {addToCart ? (
        <div>
          <Link to="/cart" className="Button">
            Ir al carro
          </Link>
        </div>
      ) : (
        <ItemCount
          stock={stock}
          onAdd={onAdd}
          onSubtract={onSubtract}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
}
