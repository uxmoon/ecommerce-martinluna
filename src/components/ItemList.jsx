import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getFirestore } from "../firebase";
import { IconLoader } from "./Icons";

export default function ItemList() {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
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
        setProducts(
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

  const listadoProductos = products.map((product) => (
    <Item key={product.id} product={product} />
  ));

  return (
    <>
      {isLoading ? (
        <div className="bg-indigo-100 text-center p-8 mt-8 rounded">
          <p className="text-2xl">
            {IconLoader}
            Cargando productos...
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Productos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listadoProductos}
          </div>
        </>
      )}
      {message && (
        <div>
          <h2>Dificultades técnicas</h2>
          <p>No se pueden mostrar los productos en este momento.</p>
        </div>
      )}
    </>
  );
}
