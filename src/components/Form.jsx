import React, { useRef, useState } from "react";
import firebase from "firebase";
import { getFirestore } from "../firebase";

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
    <div>
      {orderId && (
        <>
          <h2 className="text-xl font-bold mb-2">Gracias por su compra</h2>
          <p>Su orden es: {orderId}</p>
        </>
      )}
      {cart.length > 0 && !orderId && (
        <div className="lg:grid grid-cols-3 gap-4 pb-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Datos del comprador</h3>
            <p className="mb-4">
              Para finalizar la compra necesitamos los siguientes datos.
            </p>
          </div>
          <form className="col-span-2" onSubmit={handleSubmit}>
            <div className="sm:grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="userName" className="block mb-2">
                  Nombre y apellido
                </label>
                <input
                  className="border rounded w-full mb-4 p-2 bg-slate-100"
                  required
                  type="text"
                  name="userName"
                  id="userName"
                  ref={userNameRef}
                />
              </div>
              <div>
                <label htmlFor="userEmail" className="block mb-2">
                  Email
                </label>
                <input
                  className="border rounded w-full mb-4 p-2 bg-slate-100"
                  required
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  ref={userEmailRef}
                />
              </div>
              <div>
                <label htmlFor="userAddress" className="block mb-2">
                  Domicilio
                </label>
                <input
                  className="border rounded w-full mb-4 p-2 bg-slate-100"
                  required
                  type="text"
                  name="userAddress"
                  id="userAddress"
                  ref={userAddressRef}
                />
              </div>
              <div>
                <label htmlFor="userCity" className="block mb-2">
                  Ciudad
                </label>
                <input
                  className="border rounded w-full mb-4 p-2 bg-slate-100"
                  required
                  type="text"
                  name="userCity"
                  id="userCity"
                  ref={userCityRef}
                />
              </div>
              <div>
                <label htmlFor="userState" className="block mb-2">
                  Estado o provincia
                </label>
                <input
                  className="border rounded w-full mb-4 p-2 bg-slate-100"
                  required
                  type="text"
                  name="userState"
                  id="userState"
                  ref={userStateRef}
                />
              </div>
              <div>
                <label htmlFor="userPhone" className="block mb-2">
                  Teléfono
                </label>
                <input
                  className="border rounded w-full mb-4 p-2 bg-slate-100"
                  required
                  type="tel"
                  name="userPhone"
                  id="userPhone"
                  ref={userPhoneRef}
                  placeholder="Ej: (011) 2222-3333"
                />
              </div>
            </div>
            <div className="lg:text-right pt-4">
              <button className="bg-blue-600 text-white font-semibold px-4 py-3 rounded shadow transition-colors duration-150 hover:bg-blue-700 outline outline-offset-2 focus:bg-blue-700 w-full sm:w-auto">
                Finalizar compra
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
