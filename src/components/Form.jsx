import React, { useRef, useState, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from "../firebase";
import { cartContext } from "../context/CartProvider";
import { useHistory } from "react-router-dom";

export default function Form({ cart, totalPrice }) {
  const { addOrder } = useContext(cartContext);

  const userNameRef = useRef();
  const userAddressRef = useRef();
  const userCityRef = useRef();
  const userStateRef = useRef();
  const userEmailRef = useRef();
  const userPhoneRef = useRef();

  let history = useHistory();

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
        addOrder({ ...orderUser, orderId: id });
        history.push(`/cart/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="md:grid grid-cols-3 gap-4 bg-slate-100 p-4 rounded-md">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold">Datos del comprador</h3>
        <p className="mb-4">
          Para generar la orden necesitamos los siguientes datos.
        </p>
      </div>
      <div className="col-span-2">
        <form onSubmit={handleSubmit}>
          <div className="md:grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-neutral-800" htmlFor="userName">
                Nombre y apellido
              </label>
              <input
                className="w-full mb-4 rounded px-4 py-2 border border-gray-300"
                required
                type="text"
                name="userName"
                id="userName"
                ref={userNameRef}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-neutral-800"
                htmlFor="userEmail"
              >
                Email
              </label>
              <input
                className="w-full mb-4 rounded px-4 py-2 border border-gray-300"
                required
                type="email"
                name="userEmail"
                id="userEmail"
                ref={userEmailRef}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-neutral-800"
                htmlFor="userAddress"
              >
                Domicilio
              </label>
              <input
                className="w-full mb-4 rounded px-4 py-2 border border-gray-300"
                required
                type="text"
                name="userAddress"
                id="userAddress"
                ref={userAddressRef}
              />
            </div>
            <div>
              <label className="block mb-2 text-neutral-800" htmlFor="userCity">
                Ciudad
              </label>
              <input
                className="w-full mb-4 rounded px-4 py-2 border border-gray-300"
                required
                type="text"
                name="userCity"
                id="userCity"
                ref={userCityRef}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-neutral-800"
                htmlFor="userState"
              >
                Estado o provincia
              </label>
              <input
                className="w-full mb-4 rounded px-4 py-2 border border-gray-300"
                required
                type="text"
                name="userState"
                id="userState"
                ref={userStateRef}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-neutral-800"
                htmlFor="userPhone"
              >
                Teléfono
              </label>
              <input
                className="w-full mb-4 rounded px-4 py-2 border border-gray-300"
                required
                type="tel"
                name="userPhone"
                id="userPhone"
                ref={userPhoneRef}
                placeholder="Ej: (011) 2222-3333"
              />
            </div>
            <div className="md:text-right col-span-2">
              <button className="bg-blue-600 text-white font-semibold px-4 py-3 rounded shadow transition-colors duration-150 hover:bg-blue-700 outline outline-offset-2 focus:bg-blue-700 w-full md:w-auto ">
                Finalizar compra
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
