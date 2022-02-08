import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { data } from "../products";
import Item from "./Item";
import { getFirestore } from "../firebase";
import "./ItemList.css";

function ItemList() {
  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const db = getFirestore();
    const itemCollection = db.collection("items");

    itemCollection
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          console.log("no hay documentos con en ese query");
          return;
        }
        console.log("hay documentos");
        // console.log(querySnapShot.docs.map((d) => d.data()));

        if (categoryId) {
          setProductos(
            querySnapShot.docs
              .filter((doc) => doc.categoryId === categoryId)
              .map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        } else {
          setProductos(
            querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
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

  // const promesaProductos = new Promise((response, reject) => {
  //   setTimeout(() => {
  //     response(data);
  //   }, 2000);
  // });

  // useEffect(() => {
  //   setIsLoading(true);

  //   promesaProductos
  //     .then((res) => {
  //       if (categoryId) {
  //         setProductos(data.filter((item) => item.categoryId === categoryId));
  //       } else {
  //         setProductos(res);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setMessage(true);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [categoryId]);

  const listadoProductos = productos.map((producto) => (
    <Item key={producto.id} producto={producto} />
  ));

  console.log(productos);

  return (
    <div>
      {JSON.stringify(productos)}
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
