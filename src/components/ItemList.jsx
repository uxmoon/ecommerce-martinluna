import React, { useState, useEffect } from "react";
import Item from "./Item";

function ItemList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesaProductos = new Promise((response, reject) => {
      setTimeout(() => {
        response(["Celular", "Notebook", "Monitor"]);
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
        <Item producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;
