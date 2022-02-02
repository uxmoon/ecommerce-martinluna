import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto, onAdd, addedToCart }) {
  return (
    <div className="ItemDetail">
      <div className="ItemDetail-thumbnail">
        <img src={producto.pictureUrl} alt={producto.title} />
      </div>
      <div className="ItemDetail-content">
        <h2 className="ItemDetail-title">{producto.title}</h2>
        <p className="ItemDetail-price">{producto.price}</p>
        {/* <ul>
          {producto.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul> */}
      </div>
      {addedToCart ? (
        <Link to="/cart" className="Button">
          Ir al carro
        </Link>
      ) : (
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
}
