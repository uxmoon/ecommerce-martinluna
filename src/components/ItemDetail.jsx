import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";

export default function ItemDetail({ title, price, thumbnail, description }) {
  const [stock, setStock] = useState(10);

  const onAdd = (quantityToAdd) => {
    console.log(stock - quantityToAdd);
    setStock((stock) => stock - quantityToAdd);
  };

  const onSubtract = (quantityToSubtract) => {
    console.log(stock + quantityToSubtract);
    setStock((stock) => stock + quantityToSubtract);
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
      <ItemCount stock={stock} onAdd={onAdd} onSubtract={onSubtract} />
    </div>
  );
}
