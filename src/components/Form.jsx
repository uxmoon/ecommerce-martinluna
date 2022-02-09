import React, { useRef, useState } from "react";
import firebase from "firebase";
import { getFirestore } from "../firebase";
// import "./Form.css";

export default function Form({ cart, totalPrice }) {
  const [orderId, setOrderId] = useState("");

  const userNameRef = useRef();
  const userAddressRef = useRef();
  const userCityRef = useRef();
  const userStateRef = useRef();
  const userEmailRef = useRef();
  const userPhoneRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const db = getFirestore();
    const orders = db.collection("orders");

    const orderUser = {
      buyer: {
        name: userNameRef.current.value,
        address: userAddressRef.current.value,
        city: userCityRef.current.value,
        state: userStateRef.current.value,
        email: userEmailRef.current.value,
        phone: userPhoneRef.current.value,
      },
      items: cart,
      total: totalPrice,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    orders
      .add(orderUser)
      .then(({ id }) => {
        console.log(`orden ingresada: ${id}`);
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="Form">
      {orderId && (
        <>
          <h2>Gracias por su compra</h2>
          <p>Su orden es: {orderId}</p>
        </>
      )}
      {cart.length > 0 && !orderId && (
        <>
          <h3>Datos del comprador</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userName">Nombre y apellido</label>
              <input
                required
                type="text"
                name="userName"
                id="userName"
                ref={userNameRef}
              />
            </div>
            <div>
              <label htmlFor="userEmail">Email</label>
              <input
                required
                type="email"
                name="userEmail"
                id="userEmail"
                ref={userEmailRef}
              />
            </div>
            <div>
              <label htmlFor="userAddress">Domicilio</label>
              <input
                required
                type="text"
                name="userAddress"
                id="userAddress"
                ref={userAddressRef}
              />
            </div>
            <div>
              <label htmlFor="userCity">Ciudad</label>
              <input
                required
                type="text"
                name="userCity"
                id="userCity"
                ref={userCityRef}
              />
            </div>
            <div>
              <label htmlFor="userState">Estado o provincia</label>
              <input
                required
                type="text"
                name="userState"
                id="userState"
                ref={userStateRef}
              />
            </div>
            <div>
              <label htmlFor="userPhone">Teléfono</label>
              <input
                required
                type="tel"
                name="userPhone"
                id="userPhone"
                ref={userPhoneRef}
                placeholder="Ej: (011) 2222-3333"
              />
            </div>
            <div>
              <button className="Button">Finalizar compra</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
