import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { formatPrice } from "../helpers";

export default function Checkout() {
  const { order } = useContext(cartContext);
  console.log("checkout", order);
  console.log("buyer", order.buyer);
  console.log("items", order.items);
  return (
    <main className="max-w-7xl mx-auto px-4 pt-8 pb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        Orden completada
      </h1>
      <p className="mb-4">Gracias por su compra.</p>
      <div className="md:grid grid-cols-3">
        <div className="bg-slate-100 p-4 rounded-md mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Datos del comprador</h2>
          <ul>
            <li>{order.buyer.name}</li>
            <li>{order.buyer.email}</li>
            <li>{order.buyer.phone}</li>
            <li>{order.buyer.address}</li>
            <li>
              {order.buyer.city}, {order.buyer.state}
            </li>
          </ul>
        </div>
        <div className="md:px-4 col-span-2">
          <div className="hidden md:grid grid-cols-2 bg-slate-100 py-2 rounded mb-4">
            <p className="px-4">Productos</p>
            <p className="text-right px-4">Total</p>
          </div>
          <ul>
            {order.items.map((i) => (
              <li
                key={i.item.id}
                className="md:grid grid-cols-3 mb-4 border-b border-b-gray-300 pb-4"
              >
                <div className="col-span-2">
                  <div className="md:grid grid-cols-2">
                    <div className="pr-4 mb-2 md:mb-0">
                      <img src={i.item.imageUrl} alt={i.item.title} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{i.item.title}</h3>
                      <p className="mb-2">$ {formatPrice(i.item.price)}</p>
                      <p className="text-gray-500 text-sm">
                        {i.quantity} {i.quantity === 1 ? "unidad" : "unidades"}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="hidden md:block text-right pr-4">
                  Total: $ {formatPrice(i.item.price * i.quantity)}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-center md:text-right text-xl font-bold">
            Total ${formatPrice(order.total)}
          </p>
        </div>
      </div>
    </main>
  );
}
