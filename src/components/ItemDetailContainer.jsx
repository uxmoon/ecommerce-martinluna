import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";

const API_URL = "https://api.mercadolibre.com/sites/MLA/search?q=TV 4k&limit=1";

const ItemDetailContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const getItem = () => {
    setTimeout(() => {
      fetch(API_URL)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response.results);
          setProductos(response.results);
        });
    }, 2000);
  };

  useEffect(() => {
    getItem();
  }, []);

  const listado = productos.map((item) => (
    <ItemDetail
      key={item.id}
      title={item.title}
      price={item.price}
      thumbnail={item.thumbnail}
    />
  ));

  return (
    <div className="ItemDetailContainer">
      <div className="ItemDetailContainer-container">{listado}</div>
    </div>
  );
};

export default ItemDetailContainer;
