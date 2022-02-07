import React, { useState, useEffect } from "react";
import { getFirestore } from "../firebase";

const TestItem = () => {
  const [item, setItem] = useState({});
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const miItem = itemCollection.doc("JaRZqjXb90QYtsIKdd6o");
    miItem
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("no existe ese documento");
          return;
        }
        console.log("item found");
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <>{JSON.stringify(item)}</>;
};
export default TestItem;
