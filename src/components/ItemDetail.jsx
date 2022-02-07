import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { formatPrice } from "../helpers";
import "./ItemDetail.css";

export default function ItemDetail({ producto, onAdd, addedToCart }) {
  return (
    <div className="ItemDetail">
      <div className="ItemDetail-thumbnail">
        <img src={producto.pictureUrl} alt={producto.title} />
      </div>
      <div className="ItemDetail-content">
        <h2 className="ItemDetail-title">{producto.title}</h2>
        <p className="ItemDetail-price">
          $ {producto.price && formatPrice(producto.price)}
        </p>
        <ul>
          {producto.description &&
            producto.description.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      {addedToCart ? (
        <div className="ItemCount ItemCount--added">
          <Link to="/cart" className="Button">
            Terminar mi compra
          </Link>
        </div>
      ) : (
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
}
