import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../products";
import Item from "./Item";
import "./ItemList.css";

function ItemList() {
  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState(false);

  const promesaProductos = new Promise((response, reject) => {
    setTimeout(() => {
      response(data);
      // reject("Se produjo un error");
    }, 2000);
  });

  useEffect(() => {
    promesaProductos
      .then((res) => {
        setProductos(res);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setMessage(true);
      });
  }, []);

  useEffect(() => {
    setProductos(data.filter((item) => item.categoryId === categoryId));
  }, [categoryId]);

  const listadoProductos = productos.map((producto) => (
    <Item key={producto.id} producto={producto} />
  ));

  return (
    <div>
      <h1>Productos</h1>
      {isLoaded ? (
        <div className="ItemList">{listadoProductos}</div>
      ) : (
        <div className="loader">
          <p>Cargando productos...</p>
        </div>
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
