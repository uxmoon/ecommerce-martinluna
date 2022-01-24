import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";

const API_URL =
  "https://api.mercadolibre.com/sites/MLA/search?q=TV 4k&limit=10";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const getItem = () => {
    setTimeout(() => {
      fetch(API_URL)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          /**
           * Busco el producto en la respuesta con el id MLA919662733 y actualizo el estado
           * title: Smart Tv Tcl P-series 55p715 Dled 4k 55  100v/240v
           */
          setProducto(response.results.find(({ id }) => id === "MLA919662733"));
        });
    }, 2000);
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
