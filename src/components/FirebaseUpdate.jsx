import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { getFirestore } from "../firebase";

export default function FirebaseUpdate() {
  useEffect(() => {
    const db = getFirestore();
    const docRef = db.collection("items").doc("JaRZqjXb90QYtsIKdd6o");

    docRef
      .update({ stock: 100 })
      .then(() => {
        console.log("stock actualizado!");
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
