import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../products";
import Item from "./Item";
import "./ItemList.css";

function ItemList() {
  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const promesaProductos = new Promise((response, reject) => {
    setTimeout(() => {
      response(data);
    }, 2000);
  });

  useEffect(() => {
    setIsLoading(true);

    promesaProductos
      .then((res) => {
        if (categoryId) {
          setProductos(data.filter((item) => item.categoryId === categoryId));
        } else {
          setProductos(res);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

  const listadoProductos = productos.map((producto) => (
    <Item key={producto.id} producto={producto} />
  ));

  return (
    <div>
      <h1>Productos</h1>
      {isLoading ? (
        <div className="loader">
          <p>Cargando productos...</p>
        </div>
      ) : (
        <div className="ItemList">{listadoProductos}</div>
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
