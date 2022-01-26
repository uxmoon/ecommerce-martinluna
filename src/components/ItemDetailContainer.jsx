import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { data } from "../products";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [producto, setProducto] = useState({});

  const promesaProducto = new Promise((response, reject) => {
    setTimeout(() => {
      response(data);
    }, 2000);
  });

  useEffect(() => {
    promesaProducto
      .then((res) => {
        setProducto(res.find((item) => item.id === parseInt(id)));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="ItemDetailContainer">
      <div className="ItemDetailContainer-container">
        {isLoading ? (
          <div className="loader">
            <p>Cargando detalles de producto...</p>
          </div>
        ) : (
          <ItemDetail
            key={producto.id}
            thumbnail={producto.pictureUrl}
            title={producto.title}
            price={producto.price}
            description={producto.description}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
