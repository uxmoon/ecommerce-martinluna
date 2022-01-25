import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { data } from "../products";

/**
 * Dejo de utilizar la API externa
 */
// const API_URL = "https://api.mercadolibre.com/sites/MLA/search?q=TV 4k&limit=10";

const ItemDetailContainer = (props) => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  /**
   * Comento el codigo anterior de la entrega anterior para utilizar mis productos mock
   */

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

  const promesaProducto = new Promise((response, reject) => {
    setTimeout(() => {
      response(data);
      // reject("Se produjo un error");
    }, 2000);
  });

  useEffect(() => {
    promesaProducto
      .then((res) => {
        /**
         * Resuelvo la promesa y configuro el producto utilizando el id de useParams y el id del producto
         */
        console.log(res);
        // setProducto(res.find((item) => item.id === id));
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="ItemDetailContainer">
      <div className="ItemDetailContainer-container">
        <ItemDetail
          key={producto.id}
          thumbnail={producto.thumbnail}
          title={producto.title}
          price={producto.price}
          // description={producto.description}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
