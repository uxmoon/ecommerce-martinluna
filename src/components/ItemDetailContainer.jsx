import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
// import ItemDetail from "./ItemDetail";
// import { data } from "../products";

// const API_URL =
//   "https://api.mercadolibre.com/sites/MLA/search?q=TV 4k&limit=10";

const ItemDetailContainer = (props) => {
  console.log(props);
  // const [producto, setProducto] = useState({});

  // const getItem = () => {
  //   fetch(API_URL)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((response) => {
  //       /**
  //        * Busco el producto en la respuesta con el id MLA919662733
  //        * y configuro el estado con 1 producto
  //        */
  //       setProducto(response.results.find(({ id }) => id === "MLA919662733"));
  //     });
  // };

  // const promesaProducto = new Promise((response, reject) => {
  //   setTimeout(() => {
  //     response(data);
  //     // reject("Se produjo un error");
  //   }, 2000);
  // });

  // useEffect(() => {
  //   promesaProducto().then((res) =>
  //     setProducto(res.find(({ id }) => id === producto.id))
  //   );
  // }, []);

  return (
    <div className="ItemDetailContainer">
      <div className="ItemDetailContainer-container">
        {/* <ItemDetail
          key={producto.id}
          title={producto.title}
          price={producto.price}
          thumbnail={producto.thumbnail}
        /> */}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
