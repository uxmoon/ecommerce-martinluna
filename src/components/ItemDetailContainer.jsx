import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { cartContext } from "../context/CartProvider";
import { getFirestore } from "../firebase";
import { IconLoader } from "./Icons";

export default function ItemDetailContainer() {
  const { addItem } = useContext(cartContext);
  const { itemId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const db = getFirestore();
    const itemCollection = db.collection("items");
    const singleItem = itemCollection.doc(itemId);

    singleItem
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("no existe ese documento");
          return;
        }
        console.log("item found");
        setProduct({ id: doc.id, ...doc.data() });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  const onAddToCart = (contador) => {
    addItem(product, contador);
    setAddedToCart(true);
  };

  return (
    <main className="w-full max-w-7xl mx-auto px-4 pt-8 pb-16">
      {isLoading ? (
        <div className="bg-indigo-100 text-center p-8 mt-8 rounded">
          <p className="text-2xl">
            {IconLoader}
            Cargando detalles de producto...
          </p>
        </div>
      ) : (
        <ItemDetail
          onAdd={onAddToCart}
          product={product}
          addedToCart={addedToCart}
        />
      )}
    </main>
  );
}
