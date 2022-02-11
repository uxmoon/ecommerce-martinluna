import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { cartContext } from "../context/CartProvider";
import { getFirestore } from "../firebase";
// import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { addItem } = useContext(cartContext);
  const { itemId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [producto, setProducto] = useState({});
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
        setProducto({ id: doc.id, ...doc.data() });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  const onAddToCart = (contador) => {
    addItem(producto, contador);
    setAddedToCart(true);
  };

  return (
    <div className="ItemDetailContainer">
      <div className="ItemDetailContainer-container">
        {isLoading ? (
          <div className="loader">
            <p>Cargando detalles de producto...</p>
          </div>
        ) : (
          <ItemDetail
            onAdd={onAddToCart}
            producto={producto}
            addedToCart={addedToCart}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
