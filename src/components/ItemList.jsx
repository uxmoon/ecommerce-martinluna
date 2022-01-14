import React, { useState, useEffect } from "react";
import { data } from "../products";
import Item from "./Item";
import "./ItemList.css";

function ItemList() {
  const [productos, setProductos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const promesaProductos = new Promise((response, reject) => {
      setTimeout(() => {
        response(data);
        // reject("Se produjo un error");
      }, 2000);
    });

    promesaProductos
      .then((res) => {
        setProductos(res);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setMessage(true);
      });
  });

  return (
    <div>
      <p>Listado de productos</p>
      {isLoaded ? (
        <div className="ItemList">
          {productos.map((producto) => (
            <Item key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <p>Cargando productos...</p>
      )}
      {message && (
        <div className="message alert">
          <h2 className="title">Dificultades técnicas</h2>
          <p className="description">
            No se pueden mostrar los productos en este momento.
          </p>
        </div>
      )}
    </div>
  );
}

export default ItemList;
