import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAmHWEhgy8HFdtX4wNXpszmxRkzrphXBBk",
  authDomain: "luna-ecommerce.firebaseapp.com",
  projectId: "luna-ecommerce",
  storageBucket: "luna-ecommerce.appspot.com",
  messagingSenderId: "1064276677255",
  appId: "1:1064276677255:web:37311710d98ac7b3fd1e22",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore.app();
}
