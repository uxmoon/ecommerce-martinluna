import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";

const API_URL =
  "https://api.mercadolibre.com/sites/MLA/search?q=TV 4k&limit=10";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const getItem = () => {
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        /**
         * Busco el producto en la respuesta con el id MLA919662733
         * y configuro el estado con 1 producto
         */
        setProducto(response.results.find(({ id }) => id === "MLA919662733"));
      });
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="ItemDetailContainer">
      <div className="ItemDetailContainer-container">
        <ItemDetail
          key={producto.id}
          title={producto.title}
          price={producto.price}
          thumbnail={producto.thumbnail}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
