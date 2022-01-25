import ItemList from "./ItemList";
import "./ItemListContainer.css";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { data } from "../products";

const ItemListContainer = () => {
  // const { categoryId } = useParams();
  // const [arrayProductos, setArrayProductos] = useState([]);
  // useEffect(() => {
  //   setArrayProductos(data.filter((item) => item.categoryId === categoryId));
  // }, [categoryId]);

  return (
    <div className="ItemListContainer">
      <div className="ItemListContainer-container">
        {/* {arrayProductos.map((item) => (
          <p>{item.title}</p>
        ))} */}
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
