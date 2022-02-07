import { useState, useEffect } from "react";
import { getFirestore } from "../firebase";

const TestCollection = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items").where("stock", ">", 10);

    itemCollection
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size == 0) {
          console.log("no hay documentos con en ese query");
          return;
        }
        console.log("hay documentos");

        setItems(querySnapShot.docs.map((doc) => doc.data()));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <>{JSON.stringify(items)}</>;
};
export default TestCollection;
