import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getFirestore } from "../firebase";
import { IconLoader } from "./Icons";

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
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        Productos
      </h1>
      {isLoading ? (
        <div className="bg-slate-50 text-center p-8 mt-8 rounded">
          <p className="text-2xl">
            {IconLoader}
            Cargando detalles de producto...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {listadoProductos}
        </div>
      )}
      {message && (
        <div>
          <h2>Dificultades técnicas</h2>
          <p>No se pueden mostrar los productos en este momento.</p>
        </div>
      )}
    </div>
  );
}

export default ItemList;
