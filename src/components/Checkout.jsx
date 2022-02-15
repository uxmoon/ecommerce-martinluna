import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { formatPrice } from "../helpers";

export default function Checkout() {
  const { order } = useContext(cartContext);
  console.log("checkout", order);
  console.log("buyer", order.buyer);
  console.log("items", order.items);
  return (
    <div>
      <h2>Orden completada</h2>
      <h3>Datos del comprador</h3>
      <ul>
        <li>{order.buyer.name}</li>
        <li>{order.buyer.email}</li>
        <li>{order.buyer.phone}</li>
        <li>{order.buyer.address}</li>
        <li>
          {order.buyer.city}, {order.buyer.state}
        </li>
      </ul>
      <h3>Productos</h3>
      <ul>
        {order.items.map((i) => (
          <div key={i.item.id}>
            <img src={i.item.imageUrl} alt={i.item.title} />
            Cantidad: {i.quantity}
            Precio: $ {formatPrice(i.item.price)}
          </div>
        ))}
      </ul>
      <p>Total ${formatPrice(order.total)}</p>
    </div>
  );
}
