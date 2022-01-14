import React, { useState, useEffect } from "react";
import { data } from "../products";
import Item from "./Item";

function ItemList() {
  const [productos, setProductos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
      });
  });

  return (
    <div>
      <p>Listado de productos</p>
      {isLoaded ? (
        <>
          {productos.map((producto) => (
            <Item key={producto.id} producto={producto} />
          ))}
        </>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
}

export default ItemList;
