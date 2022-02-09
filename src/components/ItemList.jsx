import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getFirestore } from "../firebase";
// import "./ItemList.css";

function ItemList() {
  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const db = getFirestore();
    let itemCollection;
    if (categoryId) {
      itemCollection = db
        .collection("items")
        .where("categoryId", "==", categoryId);
    } else {
      itemCollection = db.collection("items");
    }

    itemCollection
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          console.log("no hay documentos con en ese query");
          return;
        }
        console.log("hay documentos");
        setProductos(
          querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
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
      <h1 class="text-3xl font-bold underline">Productos</h1>
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
