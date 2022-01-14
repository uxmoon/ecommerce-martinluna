import React, { useState, useEffect } from "react";
import { data } from "../products";
import Item from "./Item";

function ItemList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesaProductos = new Promise((response, reject) => {
      setTimeout(() => {
        response(data);
        // reject("Se produjo un error")
      }, 2000);
    });

    promesaProductos
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <p>Item List</p>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;
