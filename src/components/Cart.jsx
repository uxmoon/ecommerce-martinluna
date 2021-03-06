import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";
import { formatPrice } from "../helpers";
import Form from "./Form";
import ButtonLink from "./ButtonLink";
import Button from "./Button";

export default function Cart() {
  const { cart, removeItem, totalItems, clearCart, totalPrice } =
    useContext(cartContext);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 pt-8 pb-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        Carro de compras
      </h1>
      {cart.length === 0 ? (
        <>
          <p className="mb-4 text-lg">No hay productos en el carro.</p>
          <ButtonLink to="/" variant="secondary">
            Ver productos disponibles
          </ButtonLink>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4 border-b md:border-0 border-b-neutral pb-4 md:pb-0">
            <p className="text-xl">
              {totalItems(cart)}{" "}
              {totalItems(cart) === 1 ? "unidad" : "unidades"}
            </p>
            <Button onClick={() => clearCart()} variant="secondary">
              Quitar todos
            </Button>
          </div>
          <div className="hidden md:grid grid-cols-5 bg-slate-100 py-2 rounded mb-4">
            <p className="px-4 col-span-2">Producto</p>
            <p className="px-4">Precio</p>
            <p className="text-center px-4">Cantidad</p>
            <p className="text-right px-4">Total</p>
          </div>
        </>
      )}
      {cart.map((product) => (
        <article
          key={product.item.id}
          className="md:grid grid-cols-5 border-b border-b-neutral pb-4 mb-4"
        >
          <div className="md:pr-4 flex justify-center">
            <img
              src={product.item.imageUrl}
              alt={product.item.title}
              className="object-contain h-72 w-72 md:h-48 md:w-48 mb-4"
            />
          </div>
          <div className="md:pr-4">
            <h2 className="font-semibold">{product.item.title}</h2>
          </div>
          <div className="md:px-4">
            <p className="text-neutral-500 md:text-black mb-4 md:mb-0">
              $ {formatPrice(product.item.price)}
            </p>
          </div>
          <div className="flex md:block items-center justify-between md:text-center md:px-4">
            <p className="md:mb-2">
              {product.quantity}{" "}
              {product.quantity === 1 ? "unidad" : "unidades"}
            </p>
            <Button
              onClick={() => removeItem(product.item.id)}
              variant="secondary"
            >
              Quitar
            </Button>
          </div>
          <div className="hidden md:block md:text-right md:px-4">
            <p>$ {formatPrice(product.item.price * product.quantity)}</p>
          </div>
        </article>
      ))}
      {totalPrice(cart) > 0 && (
        <p className="text-center md:text-right text-2xl font-bold mb-12 md:mb-8">
          Total $ {formatPrice(totalPrice(cart))}
        </p>
      )}
      {cart.length > 0 && <Form cart={cart} totalPrice={totalPrice(cart)} />}
    </main>
  );
}
