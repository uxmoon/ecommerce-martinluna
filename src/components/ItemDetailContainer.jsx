import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";

const API_URL =
  "https://api.mercadolibre.com/sites/MLA/search?q=TV 4k&limit=10";

const ItemDetailContainer = (props) => {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const getItem = () => {
    setTimeout(() => {
      fetch(API_URL)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          /**
           * Configuro el array de productos con 10 items
           */
          setArrayDeProductos(response.results);
        });
    }, 2000);
  };

  useEffect(() => {
    getItem();
  }, []);

  /**
   * Busco el producto: Smart Tv Tcl P-series 55p715 Dled 4k 55  100v/240v
   */
  const producto = arrayDeProductos.find(({ id }) => id === "MLA919662733");

  return (
    <div className="ItemDetailContainer">
      <div className="ItemDetailContainer-container">
        <ItemDetail
          key={producto.id}
          price={producto.price}
          title={producto.title}
          thumbnail={producto.thumbnail}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
